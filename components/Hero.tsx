import React from 'react'
import { Button } from './ui/button'
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Image from 'next/image';
import HeroCarousel from './HeroCarousel';

const Hero = () => {
    const items = [
        {
            img: "/cloudshot_1.svg",
            desc: 'Omnichannel',
            buttonIcon: "SilderIcon01",
        },
        {
            img: "/cloudshot_2.svg",
            desc: 'Multilingual',
            buttonIcon: "SilderIcon02",
        },
        {
            img: "/cloudshot_3.svg",
            desc: 'Interpolate',
            buttonIcon: "SilderIcon03",
        },
        {
            img: "/cloudshot_4.svg",
            desc: 'Enriched',
            buttonIcon: "SilderIcon04",
        },
    ]

    return (
        <section className="relative text-gray-600 body-font">
            <BackgroundBeamsWithCollision>
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <div className="text-center text-black">
                        <h1 className="text-2xl md:text-4xl lg:text-8xl font-semibold max-w-6xl mx-auto mt-4 text-center relative z-10">
                            Experience Lucid CloudOps Modelling
                        </h1>
                        <p className="text-center mt-6 mb-8 text-base md:text-xl max-w-3xl mx-auto relative z-10">
                            Unlock the full potential of your cloud infrastructure with Cloudshot, the cutting-edge SaaS solution that seamlessly integrates with your public cloud account. Cloudshot doesn't just monitor—it illuminates, offering real-time insights into your cloud ecosystem's pulse.
                        </p>
                        <div className="flex justify-center">
                            <Button className="py-2 px-6 focus:outline-none text-lg">Get Started</Button>
                        </div>
                    </div>
                    <div>
                        <div className="p-4 border border-neutral-200 bg-neutral-100 rounded mt-20 relative">
                            <div className="absolute inset-x-0 bottom-0 h-60 z-40 w-full bg-gradient-to-b from-transparent via-white to-white scale-[1.1] pointer-events-none">
                            </div>
                            <div className="p-2 bg-white border border-neutral-200 rounded">
                                {/* {items} */}
                                <Image
                                    src="/cloudshot_1.svg"
                                    alt=""
                                    width={1200}
                                    height={600}
                                    className="object-cover object-center"
                                />
                                <HeroCarousel />
                            </div>
                        </div>
                    </div>
                </div>
            </BackgroundBeamsWithCollision>
        </section>
    )
}

export default Hero