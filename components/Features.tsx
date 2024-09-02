"use client"

import React from "react";
import { cn } from "@/lib/utils";
import FeatureCard from "./FeatureCard";
import { SkeletonFour } from "./SkeletonFour";
import { SkeletonTwo } from "./SkeletonTwo";
import { SkeletonOne } from "./Skeleton";
import { motion } from "framer-motion";
import { SkeletonThree } from "./SkeletonThree";

export function Features() {
    const features = [
        {
            title: "Pricing Intelligence at Your Fingertips",
            description:
                " Decode cloud costs in seconds! Our interactive graphs turn complex pricing into crystal-clear decisions. Click, compare, and optimize across AWS, Azure, and GCP – your bottom line will thank you.",
            skeleton: < SkeletonOne />,
            className:
                "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
        },
        {
            title: "Seamless Access, Maximum Security",
            description:
                "Your cloud, your rules. Connect via Cognito, IdP, access keys, or Azure AD – Cloudshot plays nice with them all. Enjoy Fort Knox security with Silicon Valley simplicity.",
            skeleton: <SkeletonTwo />,
            className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
        },
        {
            title: " Insights That Drive Action",
            description:
                "Turn data into your secret weapon. From activity logs to CloudWatch metrics, our reports arm you with laser-focused insights. Download, analyze, conquer – all in a few clicks.",
            skeleton: <SkeletonThree />,
            className:
                "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800",
        },
        {
            title: "Control Your Cloud from a Single Canvas",
            description:
                "Your entire cloud empire, managed from one sleek dashboard. Deploy, monitor, scale – it's all drag, drop, and done. Complex operations, simplified. Cloud mastery, amplified.",
            skeleton: <SkeletonFour />,
            className: "col-span-1 lg:col-span-3 border-b lg:border-none",
        },
    ];
    return (
        <div className="relative z-20 py-10 lg:py-40 container mx-auto">
            <div className="px-0 md:px-8">
                <motion.h4
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
                    className="text-3xl lg:text-5xl lg:leading-tight max-w-[320px] md:max-w-5xl lg:max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white"
                >
                    Packed with thousands of features
                </motion.h4>

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
                    className="text-sm lg:text-base max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300"
                >
                    From Image generation to video generation, Everything AI has APIs for
                    literally everything. It can even create this website copy for you.
                </motion.p>
            </div>

            <div className="relative ">
                <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
                    {features.map((feature) => (
                        <FeatureCard key={feature.title} className={feature.className}>
                            <FeatureTitle>{feature.title}</FeatureTitle>
                            <FeatureDescription>{feature.description}</FeatureDescription>
                            <div className=" h-full w-full">{feature.skeleton}</div>
                        </FeatureCard>
                    ))}
                </div>
            </div>
        </div>
    );
}

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
    return (
        <p className=" max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
            {children}
        </p>
    );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
    return (
        <p
            className={cn(
                "text-sm md:text-base  max-w-4xl text-left mx-auto",
                "text-neutral-500 text-center font-normal dark:text-neutral-300",
                "text-left max-w-sm mx-0 md:text-sm my-2"
            )}
        >
            {children}
        </p>
    );
};
