"use client";

import React from 'react'
import { Button } from './ui/button'
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <BackgroundBeamsWithCollision>
            <section className="relative text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <div className="text-center text-black">
                        <motion.h1
                            className="text-2xl md:text-4xl lg:text-8xl font-semibold max-w-6xl mx-auto mt-4 text-center relative z-10"
                            initial={{
                                opacity: 0,
                                y: 50,
                                rotate: 0,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{ duration: 0.2 }}
                        >
                            Experience Lucid CloudOps Modelling
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
                            transition={{ duration: 0.4 }}
                            className="text-center mt-6 mb-8 text-base md:text-xl max-w-3xl mx-auto relative z-10">
                            Optimize your cloud infrastructure with Cloudshot. This SaaS solution integrates with your public cloud account, providing real-time insights and monitoring to enhance your cloud ecosystem performance.
                        </motion.p>
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
                            className="flex justify-center"
                        >
                            <Link href='https://appsumo.com/products/cloudshot?utm_source=partner-link&utm_medium=referral&utm_campaign=partner-217895' target='_blank'>
                                <Button className="py-2 px-6 focus:outline-none text-lg">
                                    Get Started
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
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
                    >
                        <div className="p-4 border border-neutral-200 bg-neutral-100 rounded mt-20 relative">
                            <div className="absolute inset-x-0 bottom-0 h-0 z-40 w-full bg-gradient-to-b from-transparent via-white to-white scale-[1.1] pointer-events-none">
                            </div>
                            <div className="p-2 bg-white border border-neutral-200 rounded">
                                {/* {items} */}
                                <Image
                                    src="/t1.png"
                                    alt=""
                                    width={1200}
                                    height={600}
                                    className="object-cover object-center"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </BackgroundBeamsWithCollision>
    )
}

export default Hero