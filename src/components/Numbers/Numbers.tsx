import { useCount } from '../../hooks/useCount';
import {
    motion,
    MotionValue,
    useAnimate,
    useMotionValue,
    useMotionValueEvent,
    useSpring,
    useTransform,
} from 'framer-motion';
import { WithChildrenProps } from '../../types';
import { IconType } from 'react-icons';
import { FaClock, FaPeopleCarry, FaTrophy } from 'react-icons/fa';

export function Numbers() {
    const [yearsOfExperience, play, reset] = useCount(20, 2);
    const customers = useTransform(yearsOfExperience, (v) =>
        Math.round(350 * (v / 20))
    );
    const awards = useTransform(yearsOfExperience, (v) =>
        Math.round(15 * (v / 20))
    );
    return (
        <motion.section
            className="flex flex-col items-baseline justify-center bg-primary px-48 py-24 font-title text-5xl text-dark-50 md:flex-row"
            onViewportEnter={() => play()}
            onViewportLeave={() => reset()}>
            <NumberCard Icon={FaClock} value={yearsOfExperience}>
                Years of Experience
            </NumberCard>
            <NumberCard Icon={FaPeopleCarry} value={customers}>
                Customers Served
            </NumberCard>
            <NumberCard Icon={FaTrophy} value={awards}>
                Awards Received
            </NumberCard>
        </motion.section>
    );
}

type NumberCardProps = {
    Icon: IconType;
    value: MotionValue<number>;
} & WithChildrenProps;
function NumberCard({ value, Icon, children }: NumberCardProps) {
    return (
        <div className="flex w-full flex-col items-center justify-center gap-2 p-6">
            <div className="my-2 rounded-full bg-primary p-8 text-dark-50">
                <Icon />
            </div>
            <motion.div className="text-7xl font-bold">{value}</motion.div>
            <div className="text-center font-body text-2xl font-bold">
                {children}
            </div>
        </div>
    );
}
