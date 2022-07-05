import { useLayoutEffect, useState } from "react";
import { Tokens } from "../../countdown-provider/types/theme/responsive";

type ChakraBreakpoints = Record<Tokens, number>;

/* Chakra UI default breakpoints, values expressed in EM units */
const DEFAULT_BREAKPOINTS: ChakraBreakpoints = {
  sm: 30,
  md: 48,
  lg: 62,
};

/** Value expressed in PX */
const DEFAULT_FONT_SIZE = 16;

/**
 * Returns the breakpoint token (based on Chakra UI) of the current viewport.
 *
 * @returns {string} - "sm" | "md" | "lg" | "xl" | "2xl"
 */
export default function useChakraBreakpoint(): Tokens {
  const [breakpoint, setBreakpoint] = useState<Tokens>("md");

  function closestBreakpoint(): Tokens {
    const innerWidthEM = Math.round(window.innerWidth / DEFAULT_FONT_SIZE);

    // get the closest breakpoint to the innerWidth compared to the default breakpoints
    return Object.keys(DEFAULT_BREAKPOINTS)
      .map((key: Tokens) => ({
        key,
        value: DEFAULT_BREAKPOINTS[key],
        diff: Math.abs(innerWidthEM - DEFAULT_BREAKPOINTS[key]),
      }))
      .sort((a, b) => a.diff - b.diff)
      .map((item) => item.key)[0];
  }

  useLayoutEffect(() => {
    setBreakpoint(closestBreakpoint());

    const debouncedHandleResize = debounce(() => {
      setBreakpoint(closestBreakpoint());
    }, 100);
    document.addEventListener("resize", debouncedHandleResize);
    return () => {
      document.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  return breakpoint;
}

function debounce(cb: () => void, ms: number) {
  let timer: NodeJS.Timeout | undefined;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      // @ts-ignore
      cb.apply(this, arguments);
    }, ms);
  };
}
