/* eslint-disable react/no-unescaped-entities */
// "use client";

// import React from 'react'
// import { Button } from './ui/button'
// import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
// import Image from 'next/image';
// import Link from 'next/link';

// import { motion } from 'framer-motion'

// const Hero = () => {
//     return (
//         <BackgroundBeamsWithCollision>
//             <section className="relative text-gray-600 body-font">
//                 <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
//                     <div className="text-center text-black">
//                         <motion.h1
//                             className="text-2xl md:text-4xl lg:text-8xl font-semibold max-w-6xl mx-auto mt-4 text-center relative z-10"
//                             initial={{
//                                 opacity: 0,
//                                 y: 50,
//                                 rotate: 0,
//                             }}
//                             animate={{
//                                 opacity: 1,
//                                 y: 0,
//                             }}
//                             transition={{ duration: 0.2 }}
//                         >
//                             Experience Lucid CloudOps Modelling
//                         </motion.h1>
//                         <motion.p
//                             initial={{
//                                 opacity: 0,
//                                 y: 50,
//                                 rotate: 0,
//                             }}
//                             animate={{
//                                 opacity: 1,
//                                 y: 0,
//                             }}
//                             transition={{ duration: 0.4 }}
//                             className="text-center mt-6 mb-8 text-base md:text-xl max-w-3xl mx-auto relative z-10">
//                             Optimize your cloud infrastructure with Cloudshot. This SaaS solution integrates with your public cloud account, providing real-time insights and monitoring to enhance your cloud ecosystem performance.
//                         </motion.p>
//                         <motion.div
//                             initial={{
//                                 opacity: 0,
//                                 y: 50,
//                                 rotate: 0,
//                             }}
//                             animate={{
//                                 opacity: 1,
//                                 y: 0,
//                             }}
//                             transition={{ duration: 0.6 }}
//                             className="flex justify-center"
//                         >
//                             <Link href='https://appsumo.com/products/cloudshot?utm_source=partner-link&utm_medium=referral&utm_campaign=partner-217895' target='_blank'>
//                                 <Button className="py-2 px-6 focus:outline-none text-lg">
//                                     Get Started
//                                 </Button>
//                             </Link>
//                         </motion.div>
//                     </div>
//                     <motion.div
//                         initial={{
//                             opacity: 0,
//                             y: 50,
//                             rotate: 0,
//                         }}
//                         animate={{
//                             opacity: 1,
//                             y: 0,
//                         }}
//                         transition={{ duration: 0.6 }}
//                     >
//                         <div className="p-4 border border-neutral-200 bg-neutral-100 rounded mt-20 relative">
//                             <div className="absolute inset-x-0 bottom-0 h-0 z-40 w-full bg-gradient-to-b from-transparent via-white to-white scale-[1.1] pointer-events-none">
//                             </div>
//                             <div className="p-2 bg-white border border-neutral-200 rounded">
//                                 {/* {items} */}
//                                 <Image
//                                     src="/t1.png"
//                                     alt=""
//                                     width={1200}
//                                     height={600}
//                                     className="object-cover object-center"
//                                 />
//                             </div>
//                         </div>
//                     </motion.div>
//                 </div>
//             </section>
//         </BackgroundBeamsWithCollision>
//     )
// }

// export default Hero

"use client";

import React from 'react'
import { Button } from './ui/button'
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion'
import { CloudLightning } from 'lucide-react';

const Hero = () => {
    return (
        <BackgroundBeamsWithCollision>
            <section className="relative text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <div className="text-center text-black">
                        <motion.h1
                            className="text-3xl md:text-4xl lg:text-8xl font-semibold max-w-6xl mx-auto md:mt-4 text-center relative z-10"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            Experience Lucid CloudOps Modelling
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="text-center mt-6 mb-8 text-base md:text-xl max-w-3xl mx-auto relative z-10"
                        >
                            Optimize your cloud infrastructure with Cloudshot. We're like a personal trainer for your cloud – minus the uncomfortable spandex and protein shakes.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col items-center justify-center space-y-4"
                        >
                            <Link href='https://appsumo.com/products/cloudshot?utm_source=partner-link&utm_medium=referral&utm_campaign=partner-217895' target='_blank'>
                                <Button className="py-2 px-6 focus:outline-none text-lg">
                                    Get Started (No Cloud Required)
                                </Button>
                            </Link>
                            <p className="text-sm text-gray-500 italic">(Just kidding, you'll need a cloud. We're good, but not that good.)</p>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mt-20 relative"
                    >
                        <div className="p-4 border border-neutral-200 bg-neutral-100 rounded relative">
                            {/* <div className="absolute inset-x-0 bottom-0 h-16 z-40 w-full bg-gradient-to-b from-transparent via-white to-white scale-[1.1] pointer-events-none"></div> */}
                            <div className="p-2 bg-white border border-neutral-200 rounded">
                                <Image
                                    src="/t1.png"
                                    alt="Cloud infrastructure that's clearer than your Monday morning meetings"
                                    width={1200}
                                    height={600}
                                    className="object-cover object-center"
                                />
                            </div>
                        </div>
                        <div className="absolute -top-10 -right-10 transform rotate-12">
                            <CloudLightning size={64} className="text-blue-500" />
                            <p className="text-sm font-bold text-blue-500">Zap! Your cloud just got smarter</p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </BackgroundBeamsWithCollision>
    )
}

export default Hero