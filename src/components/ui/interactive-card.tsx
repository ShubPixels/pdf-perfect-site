import { useState, useRef, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export const InteractiveCard = ({ 
  children, 
  className = "",
  glowColor = "hsl(var(--cta))"
}: InteractiveCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute -inset-1 rounded-3xl opacity-0 blur-xl transition-opacity duration-500"
        style={{ 
          background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 70%)`,
          opacity: isHovered ? 0.4 : 0 
        }}
      />
      
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none"
        style={{ transform: "translateZ(1px)" }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"
          style={{
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.3s ease"
          }}
        />
      </motion.div>

      <div style={{ transform: "translateZ(50px)" }}>
        {children}
      </div>
    </motion.div>
  );
};

interface FloatingElementProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const FloatingElement = ({ 
  children, 
  delay = 0, 
  duration = 6,
  className = "" 
}: FloatingElementProps) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-10, 10, -10],
        rotate: [-3, 3, -3],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const MagneticButton = ({ children, className = "", onClick }: MagneticButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    x.set(distanceX * 0.2);
    y.set(distanceY * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={className}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  );
};

interface ParallaxTextProps {
  children: string;
  className?: string;
}

export const ParallaxText = ({ children, className = "" }: ParallaxTextProps) => {
  return (
    <motion.span
      className={`inline-block ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.span>
  );
};

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
}

export const AnimatedCounter = ({ 
  value, 
  suffix = "", 
  prefix = "",
  className = "",
  duration = 2
}: AnimatedCounterProps) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => {
        const controls = { value: 0 };
        const animation = () => {
          controls.value += (value - controls.value) * 0.08;
          count.set(controls.value);
          if (Math.abs(value - controls.value) > 0.5) {
            requestAnimationFrame(animation);
          } else {
            count.set(value);
          }
        };
        animation();
      }}
    >
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.span>
  );
};

interface RevealTextProps {
  children: string;
  className?: string;
  delay?: number;
}

export const RevealText = ({ children, className = "", delay = 0 }: RevealTextProps) => {
  const words = children.split(" ");

  return (
    <motion.span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          initial={{ opacity: 0, y: 20, rotateX: 90 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.08,
            ease: [0.215, 0.61, 0.355, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};