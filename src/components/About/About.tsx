import Image from 'next/image';
import example from '../../assets/man.jpg';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useCount } from '../../hooks/useCount';
export function About() {
    const target = useRef(null);
    const { scrollYProgress } = useScroll({
        target,
        offset: ['start end', 'end start'],
    });
    const parallax = useTransform(scrollYProgress, [0, 1], [-10, 0]);

    return (
        <section className="flex flex-col items-center justify-center gap-6 bg-dark-50 font-title md:gap-24 md:p-24 lg:flex-row">
            <div
                className="relative flex aspect-square w-full items-center justify-center md:h-96 md:w-auto"
                ref={target}>
                <motion.div
                    className="absolute -mb-10 -ml-10 hidden h-full w-full bg-primary md:block"
                    style={{ y: parallax }}
                />
                <Image
                    src={example}
                    alt=""
                    className="absolute h-full w-full object-cover object-center"
                />
            </div>
            <div className="flex flex-col gap-6 bg-dark-50 p-6 md:p-0">
                <h2 className="text-5xl font-bold">
                    <div className="text-2xl text-primary">About Me</div>
                    <div>Gardener</div>
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla vehicula malesuada nisi eu rutrum. Maecenas purus
                    diam, lobortis at velit eget, ultricies posuere augue.
                    Nullam nec lectus a augue dictum euismod ut sed ex. Integer
                    pretium arcu neque, vitae mollis massa consequat eu. In eget
                    dolor luctus, varius dui fringilla, lobortis odio. Cras
                    molestie nunc pretium, dictum lorem vel, vulputate mi. Etiam
                    ac ligula bibendum, luctus diam sit amet, rutrum ipsum.
                </p>
            </div>
        </section>
    );
}
