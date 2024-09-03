"use client";

import React from 'react'
import { BorderBeamImage } from './BorderBeamDemo';

import { motion } from 'framer-motion'

type Client = {
    src: string;
    alt: string;
}

const Clients: React.FC = () => {
    const clients: Client[] = [
        { src: "/aws.svg", alt: "Amazon Web Services" },
        { src: "/azure.svg", alt: "Microsoft Azure" },
        { src: "/gcp.svg", alt: "Google Cloud Platform" },
        { src: "/datadog.svg", alt: "Datadog" },
        { src: "/segment.svg", alt: "Twilio Segment" },
        { src: "/algolia.svg", alt: "Algolia" }
    ];

    return (
        <section className="text-black body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12 md:mb-20 lg:mb-20">
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
                        className="sm:text-5xl text-4xl font-medium title-font mb-4">Trusted by Cloud Leaders</motion.h1>
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
                        Cloudshot integrates seamlessly with the most powerful cloud platforms and tools in the industry.
                    </motion.p>
                </div>
                <div className="flex flex-wrap text-center justify-center gap-6 md:gap-20 lg:gap-20">
                    {clients.map((client, index) => (
                        <motion.div
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
                            key={index}
                            className=""
                        >
                            <BorderBeamImage
                                src={client.src}
                                alt={client.alt}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Clients