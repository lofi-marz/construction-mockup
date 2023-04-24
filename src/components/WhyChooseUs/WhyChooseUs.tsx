import { IconType } from 'react-icons';
import { WithChildrenProps } from '../../types';
import {
    FaGlasses,
    FaHistory,
    FaPaintBrush,
    FaPersonBooth,
} from 'react-icons/fa';

export function WhyChooseUs() {
    return (
        <section className="flex flex-col items-center justify-center gap-10 bg-dark-50 p-6 py-12 font-title md:gap-20 md:py-24">
            <h2 className="text-center text-5xl font-bold">Why Choose Us?</h2>
            <div className="flex max-w-7xl flex-col items-center justify-center gap-10 md:flex-row">
                <IconCard Icon={FaHistory} title="Expertise">
                    With over 20 years of experience, our gardener has developed
                    expertise in horticulture and landscaping.
                </IconCard>
                <IconCard Icon={FaGlasses} title="Attention to Detail">
                    We believe that the little things can make a big difference
                    in the overall appearance and health of your garden.
                </IconCard>
                <IconCard Icon={FaPaintBrush} title="Customized Services">
                    Our gardener will work with you to create a personalized
                    plan that fits your schedule and budget.
                </IconCard>
            </div>
        </section>
    );
}

type IconCardProps = {
    Icon: IconType;
    title: string;
} & WithChildrenProps;
function IconCard({ Icon, title, children }: IconCardProps) {
    return (
        <div className="flex flex-col items-center justify-center gap-3 text-center">
            <Icon className="m-3 text-5xl text-primary" />
            <h3 className="text-3xl font-bold">{title}</h3>
            <p className="text-md px-4 text-center">{children}</p>
        </div>
    );
}
