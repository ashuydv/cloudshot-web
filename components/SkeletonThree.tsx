"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo } from "react";

export const SkeletonThree = () => {
    const images = [
        "/cloudwatch.png",
        "/activity.png",
        "/service-report.png",
    ];

    const imageVariants = {
        whileHover: {
            scale: 1.1,
            rotate: 0,
            zIndex: 100,
        },
        whileTap: {
            scale: 1.1,
            rotate: 0,
            zIndex: 100,
        },
    };

    const rotations = useMemo(() =>
        Array(images.length * 2).fill(0).map(() => Math.floor(Math.random() * 20 - 10)),
        [images.length]);

    return (
        <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
            <div className="flex flex-row -ml-20">
                {images.map((image, idx) => (
                    <motion.div
                        variants={imageVariants}
                        key={"images-first" + idx}
                        style={{
                            rotate: rotations[idx],
                        }}
                        whileHover="whileHover"
                        whileTap="whileTap"
                        className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                    >
                        <Image
                            src={image}
                            alt={image.split('.svg')[0]}
                            width="700"
                            height="500"
                            className="rounded-lg h-32 w-32 md:h-60 md:w-60 object-cover flex-shrink-0"
                        />
                    </motion.div>
                ))}
            </div>

            <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent  h-full pointer-events-none" />
            <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-black  to-transparent h-full pointer-events-none" />
        </div>
    );
};
