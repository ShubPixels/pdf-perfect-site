import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { useIsMobile } from "@/hooks/use-mobile";
import { useVisitorCounter } from "@/hooks/use-visitor-counter";

const INCREMENT_BADGE_DURATION_MS = 1800;
const INTRO_OPEN_DELAY_MS = 180;
const INTRO_VISIBLE_DURATION_MS = 1800;
const MOBILE_DISMISS_DELAY_MS = 280;
const COLLAPSED_SIZE = 60;
const EXPANDED_WIDTH = 288;
const SHELL_HEIGHT = 64;
const ICON_SIZE = 40;
const ICON_OFFSET = 10;
const DESKTOP_TOP_OFFSET = 96;
const DESKTOP_BOTTOM_OFFSET = 24;

export const HomeVisitorCapsule = () => {
  const { count, didIncrement, loading } = useVisitorCounter();
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  const [isIntroActive, setIsIntroActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showIncrementBadge, setShowIncrementBadge] = useState(false);
  const [isDismissedOnMobile, setIsDismissedOnMobile] = useState(false);
  const [desktopDockOffsetY, setDesktopDockOffsetY] = useState(0);
  const hasPlayedIntroRef = useRef(false);
  const hasPlayedIncrementRef = useRef(false);
  const introOpenTimerRef = useRef<number | null>(null);
  const introCloseTimerRef = useRef<number | null>(null);
  const incrementTimerRef = useRef<number | null>(null);
  const mobileDismissTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (introOpenTimerRef.current !== null) {
        window.clearTimeout(introOpenTimerRef.current);
      }

      if (introCloseTimerRef.current !== null) {
        window.clearTimeout(introCloseTimerRef.current);
      }

      if (incrementTimerRef.current !== null) {
        window.clearTimeout(incrementTimerRef.current);
      }

      if (mobileDismissTimerRef.current !== null) {
        window.clearTimeout(mobileDismissTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (loading || count === null || hasPlayedIntroRef.current) {
      return;
    }

    hasPlayedIntroRef.current = true;
    setIsDismissedOnMobile(false);

    introOpenTimerRef.current = window.setTimeout(() => {
      setIsIntroActive(true);

      if (!didIncrement || hasPlayedIncrementRef.current) {
        return;
      }

      hasPlayedIncrementRef.current = true;
      setShowIncrementBadge(true);

      if (incrementTimerRef.current !== null) {
        window.clearTimeout(incrementTimerRef.current);
      }

      incrementTimerRef.current = window.setTimeout(() => {
        setShowIncrementBadge(false);
        incrementTimerRef.current = null;
      }, INCREMENT_BADGE_DURATION_MS);
    }, INTRO_OPEN_DELAY_MS);

    introCloseTimerRef.current = window.setTimeout(() => {
      setIsIntroActive(false);
      introCloseTimerRef.current = null;
    }, INTRO_OPEN_DELAY_MS + INTRO_VISIBLE_DURATION_MS);

    return () => {
      if (introOpenTimerRef.current !== null) {
        window.clearTimeout(introOpenTimerRef.current);
        introOpenTimerRef.current = null;
      }

      if (introCloseTimerRef.current !== null) {
        window.clearTimeout(introCloseTimerRef.current);
        introCloseTimerRef.current = null;
      }
    };
  }, [count, didIncrement, loading]);

  useEffect(() => {
    if (isMobile) {
      setDesktopDockOffsetY(0);
      return;
    }

    const updateDesktopDockOffset = () => {
      setDesktopDockOffsetY(
        Math.max(
          0,
          window.innerHeight - DESKTOP_TOP_OFFSET - DESKTOP_BOTTOM_OFFSET - SHELL_HEIGHT,
        ),
      );
    };

    updateDesktopDockOffset();
    window.addEventListener("resize", updateDesktopDockOffset);

    return () => {
      window.removeEventListener("resize", updateDesktopDockOffset);
    };
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) {
      setIsDismissedOnMobile(false);

      if (mobileDismissTimerRef.current !== null) {
        window.clearTimeout(mobileDismissTimerRef.current);
        mobileDismissTimerRef.current = null;
      }

      return;
    }

    if (
      loading ||
      count === null ||
      isIntroActive ||
      !hasPlayedIntroRef.current ||
      isDismissedOnMobile
    ) {
      return;
    }

    mobileDismissTimerRef.current = window.setTimeout(() => {
      setIsDismissedOnMobile(true);
      mobileDismissTimerRef.current = null;
    }, MOBILE_DISMISS_DELAY_MS);

    return () => {
      if (mobileDismissTimerRef.current !== null) {
        window.clearTimeout(mobileDismissTimerRef.current);
        mobileDismissTimerRef.current = null;
      }
    };
  }, [count, isDismissedOnMobile, isIntroActive, isMobile, loading]);

  if (loading || count === null || (isMobile && isDismissedOnMobile)) {
    return null;
  }

  const isExpanded = isIntroActive || isHovered;
  const isDockedDesktop = !isMobile && !isIntroActive;
  const shellTransition = prefersReducedMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 240, damping: 28, mass: 0.88 };
  const contentTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.24, ease: [0.22, 1, 0.36, 1] as const };
  const dockTransition = prefersReducedMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 170, damping: 24, mass: 0.95 };

  const handleExpand = () => {
    setIsHovered(true);

    if (!didIncrement || hasPlayedIncrementRef.current) {
      return;
    }

    hasPlayedIncrementRef.current = true;
    setShowIncrementBadge(true);

    if (incrementTimerRef.current !== null) {
      window.clearTimeout(incrementTimerRef.current);
    }

    incrementTimerRef.current = window.setTimeout(() => {
      setShowIncrementBadge(false);
      incrementTimerRef.current = null;
    }, INCREMENT_BADGE_DURATION_MS);
  };

  const handleCollapse = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      animate={{
        y: isDockedDesktop ? desktopDockOffsetY : 0,
      }}
      transition={dockTransition}
      className="pointer-events-none fixed left-4 top-20 z-40 md:left-6 md:top-24"
    >
      <motion.div
        onHoverStart={handleExpand}
        onHoverEnd={handleCollapse}
        onFocus={handleExpand}
        onBlur={handleCollapse}
        tabIndex={0}
        aria-expanded={isExpanded}
        aria-label={isExpanded ? `Total visitors ${count.toLocaleString()}` : "Show total visitor count"}
        animate={{
          width: isExpanded ? EXPANDED_WIDTH : COLLAPSED_SIZE,
        }}
        transition={shellTransition}
        style={{
          height: SHELL_HEIGHT,
          maxWidth: "calc(100vw - 1.5rem)",
        }}
        className="pointer-events-auto relative cursor-pointer overflow-hidden rounded-full border border-slate-700/80 bg-[radial-gradient(circle_at_14%_50%,rgba(56,189,248,0.18),transparent_18%),linear-gradient(135deg,rgba(15,23,42,0.96),rgba(2,6,23,0.94))] shadow-[0_20px_48px_-24px_rgba(2,6,23,0.78)] outline-none backdrop-blur-md will-change-[width,transform] transition-shadow duration-300 ease-out focus-visible:ring-2 focus-visible:ring-sky-300/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
      >
        <div
          className="absolute top-1/2 -translate-y-1/2"
          style={{ left: ICON_OFFSET, height: ICON_SIZE, width: ICON_SIZE }}
        >
          <div className="relative flex h-full w-full items-center justify-center rounded-full border border-slate-500/75 bg-slate-800/95 shadow-[inset_0_1px_16px_rgba(56,189,248,0.08)]">
            <span className="absolute inset-[7px] rounded-full border border-white/5" />
            <motion.span
              animate={{
                opacity: [0.45, 0.95, 0.45],
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 2.6,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
              }}
              className="relative z-10 h-3.5 w-3.5 rounded-full bg-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.68)]"
            />
          </div>
        </div>

        <motion.div
          animate={{
            opacity: isExpanded ? 1 : 0,
            x: isExpanded ? 0 : -10,
            filter: isExpanded ? "blur(0px)" : "blur(2px)",
          }}
          transition={contentTransition}
          aria-hidden={!isExpanded}
          className="absolute inset-y-0 right-4 flex min-w-0 items-center justify-between gap-3"
          style={{
            left: ICON_OFFSET + ICON_SIZE + 12,
            pointerEvents: isExpanded ? "auto" : "none",
          }}
        >
          <div className="min-w-0">
            <p className="mb-1 whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.26em] text-sky-100/70">
              Total Visitors
            </p>
            <div className="whitespace-nowrap">
              <p className="text-[1.75rem] font-semibold leading-none tabular-nums text-slate-50 drop-shadow-[0_2px_10px_rgba(2,6,23,0.35)]">
                {count.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="relative flex h-8 min-w-[2.75rem] items-center justify-end overflow-hidden">
            <AnimatePresence>
              {showIncrementBadge && isExpanded ? (
                <motion.div
                  key="increment-badge"
                  initial={{ opacity: 0, x: 10, scale: 0.92 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 8, scale: 0.95 }}
                  transition={contentTransition}
                  className="rounded-full bg-sky-400 px-2.5 py-1 text-[10px] font-semibold text-slate-950 shadow-lg shadow-sky-400/30"
                >
                  +1
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
