"use client";

import { cn } from "@/lib/utils";
import {
    IconAdjustmentsBolt,
    IconCloud,
    IconCurrencyDollar,
    IconEaseInOut,
    IconHeart,
    IconHelp,
    IconRouteAltLeft,
    IconTerminal2,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Transition from "./Transition";

export function FeaturesSectionDemo() {
    const features = [
        {
            title: "Built for DevOps Engineers",
            description:
                "Made for those who automate and fix what others can't.",
            icon: <IconTerminal2 />,
        },
        {
            title: "Ease of Use",
            description:
                "Smoother than a zero-downtime deployment. It's that simple.",
            icon: <IconEaseInOut />,
        },
        {
            title: "Pricing Like No Other",
            description:
                "Our pricing is so good, even your budget meetings will be shorter.",
            icon: <IconCurrencyDollar />,
        },
        {
            title: "100% Uptime Guarantee",
            description:
                "We promise uptime so reliable, you'll forget what an alert looks like.",
            icon: <IconCloud />,
        },
        {
            title: "Multi-Tenant Architecture",
            description:
                "Easily switch between AWS, Azure, and GCP without breaking a sweat.",
            icon: <IconRouteAltLeft />,
        },
        {
            title: "24/7 Customer Support",
            description:
                "Whether it's day or night, we're here—ready to help and save the day.",
            icon: <IconHelp />,
        },
        {
            title: "Money Back Guarantee",
            description:
                "Not satisfied? We’ll fix it or send you a bunch of Kubernetes memes.",
            icon: <IconAdjustmentsBolt />,
        },
        {
            title: "And Everything Else",
            description:
                "Because every great tool deserves a little bit of humor and heart.",
            icon: <IconHeart />,
        },
    ];
    return (
        <div className="py-20">
            <div className="flex flex-col text-center w-full mb-10">
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 50,
                        rotate: 0,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl lg:text-5xl font-medium title-font mb-4">
                    Backed by the Best (and Most Sleep-Deprived) Engineers
                </motion.h1>
                <motion.p
                    initial={{
                        opacity: 0,
                        y: 50,
                        rotate: 0,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{ duration: 0.6 }}
                    className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    Cloudshot: Trusted by Fortune 500 companies and the DevOps engineers who keep them running.
                </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
                {features.map((feature, index) => (
                    <Feature2 key={feature.title} {...feature} index={index} />
                ))}
            </div>
        </div>
    );
}

const Feature2 = ({
    title,
    description,
    icon,
    index,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
}) => {
    return (
        <Transition>
            <div
                className={cn(
                    "flex flex-col px-4 md:px-0 lg:px-0 lg:border-r py-10 relative group/feature dark:border-neutral-800",
                    (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
                    index < 4 && "lg:border-b dark:border-neutral-800"
                )}
            >
                {index < 4 && (
                    <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
                )}
                {index >= 4 && (
                    <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
                )}
                <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
                    {icon}
                </div>
                <div className="text-lg font-bold mb-2 relative z-10 px-10">
                    <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
                    <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
                        {title}
                    </span>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
                    {description}
                </p>
            </div>
        </Transition>
    );
};
