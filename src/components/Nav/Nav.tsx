import clsx from 'clsx';
import {
    motion,
    useMotionValueEvent,
    useScroll,
    Variants,
} from 'framer-motion';
import { useMediaQuery } from 'hooks/useMediaQuery';
import React, { useState } from 'react';
import { FaLeaf } from 'react-icons/fa';

function Logo() {
    return (
        <div className="flex w-fit items-center justify-center gap-2">
            <FaLeaf className="text-primary" />
            <div className="font-bold">Construct</div>
        </div>
    );
}

function NavLinks({ inverted }: { inverted: boolean }) {
    return (
        <motion.div
            className={clsx(
                'relative flex items-center gap-8 px-8 text-xl font-bold capitalize transition-all',
                inverted ? 'text-primary' : 'text-white'
            )}>
            <a href="#hero">home</a>
            <a>about us</a>
            <a>contact us</a>
            <a
                className={clsx(
                    'h-full px-5 py-2 transition-all ',
                    inverted
                        ? 'button-solid-dark hover:button-border'
                        : 'button-solid-colour hover:button-border'
                )}>
                Free Quote
            </a>
        </motion.div>
    );
}

export function Nav() {
    const lg = useMediaQuery('lg');
    const { scrollYProgress } = useScroll();

    const [atPageStart, setAtPageStart] = useState(true);
    const [scrollingDown, setScrollingDown] = useState(false);
    useMotionValueEvent(scrollYProgress, 'change', (v) => {
        setAtPageStart(v < 0.1);
        setScrollingDown(v > 0.5 && scrollYProgress.getVelocity() <= 0);
    });

    const containerVariants: Variants = {
        transparent: { backgroundColor: '#00000000' },
        solid: { backgroundColor: '#FFFFFF' },
        hidden: { opacity: 0 },
        show: { opacity: 1 },
    };

    return (
        <motion.nav
            className="sticky top-0 z-10 flex h-20 w-full items-center justify-between px-8 font-title text-3xl lg:px-12 lg:text-2xl "
            variants={containerVariants}
            animate={[
                atPageStart ? 'transparent' : 'solid',
                scrollingDown ? 'hidden' : 'show',
            ]}
            layout>
            <Logo />
            {lg && <NavLinks inverted={!atPageStart} />}
        </motion.nav>
    );
}
