import background from 'assets/pexels-thijs-van-der-weide-1094767.jpg';

import Image from 'next/image';
import { Nav } from '@/components/Nav/Nav';

function BackgroundImage() {
    return (
        <Image
            src={background}
            alt=""
            className="top-0 h-full w-full object-cover"
        />
    );
}
export function Hero() {
    return (
        <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-clip text-dark-50">
            <video
                muted
                autoPlay
                loop
                src="/landscaping.mp4"
                className="fixed top-0 -z-10 h-full w-full object-cover"
            />

            <div className="absolute flex h-full w-full flex-col items-start justify-start  bg-[#000000AA] ">
                <Nav />
                <div className="flex h-full grow flex-col items-start justify-center gap-8 px-6 md:px-36">
                    <h2 className="font-title text-7xl font-bold leading-none md:text-8xl">
                        Building a <br /> Greener Future
                    </h2>
                    <p className="font-body text-3xl">
                        Honest, Reliable Gardeners since 1968
                    </p>
                    <div className="flex flex-row gap-4 font-body">
                        <button className=" button-solid-colour hover:button-solid-light p-6 px-8">
                            View Projects
                        </button>
                        <button className="button-border hover:button-solid-colour p-6 px-8">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
