import { useAnimate, stagger, cubicBezier } from "framer-motion";
import { useEffect } from "react";

function useStaggerAnimation() {
  const [scope, animate] = useAnimate();

  const staggerAnim = stagger(0.16, {
    ease: cubicBezier(0.25, 0.1, 0.15, 1),
    startDelay: 0.15,
  });

  useEffect(() => {
    animate(
      "ul",
      {
        y: -900,
      },
      { duration: 4.2, ease: cubicBezier(0.85, 0, 0.15, 1) }
    );

    animate(
      "li",
      {
        y: -100,
        opacity: 1,
        scale: [1.5],
      },
      {
        type: "spring",
        bounce: 0,
        delay: staggerAnim,
      }
    );
  }, [animate, staggerAnim]);

  return scope;
}

export { useStaggerAnimation };
