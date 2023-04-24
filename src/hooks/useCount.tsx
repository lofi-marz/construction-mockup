import { useEffect, useRef, useState } from 'react';
import {
    useAnimate,
    useAnimationFrame,
    useMotionValue,
    useSpring,
    useTransform,
} from 'framer-motion';
function easeOutCubic(x: number): number {
    return 1 - Math.pow(1 - x, 3);
}
export function useCount(target: number, duration: number) {
    const [scope, animate] = useAnimate();
    const count = useMotionValue(0);

    const spring = useSpring(count);

    const rounded = useTransform(spring, (v) => Math.round(v));

    return [
        rounded,
        () => animate(count, 20, { duration: duration }),
        () => count.set(0),
    ] as const;
}
