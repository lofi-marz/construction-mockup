import Head from 'next/head';
import { Hero } from '@/components/Hero/Hero';
import clsx from 'clsx';
import { body, title } from '@/styles/fonts';
import { Contact } from '@/components/Contact';
import { Nav } from '@/components/Nav/Nav';
import { ScrollingText } from '@/components/ScrollingText';
import { Footer } from '@/components/Footer';
import { WhyChooseUs } from 'components/WhyChooseUs';

export default function Home() {
    return (
        <div
            className={clsx(
                'dark flex min-h-[150vh] w-full flex-col items-center justify-start',
                title.variable,
                body.variable
            )}>
            <Head>
                <title>Hello World!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="z-50 flex h-full w-full flex-col">
                <Hero />
                <ScrollingText />
                <WhyChooseUs />
                <Contact />
                <Footer />
            </div>
        </div>
    );
}
