import { WithChildrenProps } from 'types';
import Image from 'next/image';

// @ts-ignore

import { useMediaQuery } from 'hooks/useMediaQuery';
import { FaAt, FaCheck, FaLeaf, FaMailBulk, FaPhone } from 'react-icons/fa';
import { IconType } from 'react-icons';

export function Footer() {
    //console.log('Socials:', socialContent);
    const socialContent: Social[] = [
        { Icon: FaMailBulk, text: 'othompsonedwards@gmail.com' },
        { Icon: FaPhone, text: '07532 819603' },
    ];
    return (
        <footer className="flex w-full flex-row items-center justify-between bg-dark-950 p-6 py-8 font-title text-xl font-bold text-dark-50 md:text-2xl">
            <Socials socials={socialContent} />
            <div className="hidden aspect-square text-6xl md:block">
                <FaLeaf />
            </div>
        </footer>
    );
}

type Social = {
    Icon: IconType;
    text: string;
};

function Socials({ socials }: { socials: Social[] }) {
    return (
        <div className="flex grow flex-col items-start justify-center gap-5">
            {socials.map((s) => (
                <SocialItem key={s.text} {...s} />
            ))}
        </div>
    );
}
function SocialItem({ Icon, text }: Social) {
    const desktop = useMediaQuery('md');
    return (
        <div className="flex flex-row items-center justify-center gap-4">
            <Icon />
            <div className="flex flex-col md:flex-row">
                <div>{text}</div>
            </div>
        </div>
    );
}
