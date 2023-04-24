import { useEffect, useState } from 'react';
import {
    AnimatePresence,
    motion,
    useAnimationControls,
    useMotionValueEvent,
    useTime,
    useTransform,
    Variants,
} from 'framer-motion';
import clsx from 'clsx';
import { useMediaQuery } from 'hooks/useMediaQuery';

const OptionVariants: Variants = {
    hide: { opacity: 0, y: '1em' },
    show: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: '-1em' },
};
export function ScrollingText() {
    const colours = ['text-primary'];
    const options = [
        'Landscaping',
        'Garden Care',
        'Weed Control',
        'Tree Removal',
    ];
    const [optionIndex, setOptionIndex] = useState(0);
    const text = options[optionIndex];
    const colour = colours[optionIndex % colours.length];

    const desktop = useMediaQuery('md');

    const time = useTime();
    const index = useTransform(time, (v) => {
        const seconds = Math.floor((1.35 * v) / 2000);
        return seconds % options.length;
    });

    useMotionValueEvent(index, 'change', (v) => {
        setOptionIndex(v);

        //setOptionIndex(0);
    });
    return (
        <section className="flex w-full flex-col items-start justify-center bg-dark-950 p-8 font-title text-4xl font-bold text-dark-50 md:p-12 md:text-5xl lg:flex-row lg:items-center lg:justify-start">
            <span className="md:flex md:h-[1em] md:whitespace-pre lg:h-[1.5em] lg:items-center">
                The best company <br className="md:hidden" />
                to offer{' '}
            </span>
            <motion.div className="relative flex h-[1.1em] w-full flex-col items-start justify-start overflow-clip md:h-[1em] lg:h-[1.5em] lg:w-auto lg:grow lg:justify-center">
                <AnimatePresence>
                    <motion.span
                        key={text}
                        className={clsx('absolute', colour)}
                        initial="hide"
                        animate="show"
                        exit="exit"
                        variants={OptionVariants}
                        transition={{ ease: 'easeOut' }}>
                        {text}
                    </motion.span>
                </AnimatePresence>
            </motion.div>
        </section>
    );
}
