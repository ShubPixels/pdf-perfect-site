import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "-10%", right: "-5%" }}
      />
      
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-br from-cta/15 to-transparent blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{ top: "20%", left: "-5%" }}
      />
      
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full bg-gradient-to-br from-highlight/10 to-transparent blur-3xl"
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        style={{ top: "50%", right: "10%" }}
      />
      
      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-br from-accent/10 to-transparent blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{ bottom: "10%", left: "20%" }}
      />

      {/* Floating particles */}
      <FloatingParticles />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]" 
        style={{ 
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `, 
          backgroundSize: '60px 60px' 
        }} 
      />
    </div>
  );
};

const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * 5,
  }));

  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
};

interface MouseFollowerProps {
  color?: string;
}

export const MouseFollower = ({ color = "hsl(var(--cta))" }: MouseFollowerProps) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Dot follows immediately
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    };

    const animate = () => {
      // Smooth following for outer ring
      const dx = mouseX - cursorX;
      const dy = mouseY - cursorY;
      
      cursorX += dx * 0.1;
      cursorY += dy * 0.1;
      
      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;
      
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Outer ring */}
      <div
        ref={cursorRef}
        className="fixed w-10 h-10 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden lg:block"
        style={{
          border: `2px solid ${color}`,
          borderRadius: "50%",
          transition: "transform 0.15s ease",
        }}
      />
      {/* Inner dot */}
      <div
        ref={cursorDotRef}
        className="fixed w-2 h-2 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full hidden lg:block"
        style={{ backgroundColor: color }}
      />
    </>
  );
};

interface SparkleProps {
  color?: string;
  size?: number;
  className?: string;
}

export const Sparkle = ({ color = "hsl(var(--cta))", size = 20, className = "" }: SparkleProps) => {
  return (
    <motion.svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360],
        opacity: [1, 0.8, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <path
        d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"
        fill={color}
      />
    </motion.svg>
  );
};