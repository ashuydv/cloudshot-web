/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import { Badge } from './ui/badge'
import AnimatedShinyText from './magicui/animated-shiny-text'
import { cn } from '@/lib/utils'
import { ArrowRightIcon } from 'lucide-react'

type Props = {}

const Hero = (props: Props) => {
    return (
        <section className="relative text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <div className="text-center text-black">
                    <h1 className="text-2xl md:text-4xl lg:text-8xl font-semibold max-w-6xl mx-auto mt-4 text-center relative z-10">
                        Generate Images, Text and Videos with AI
                    </h1>
                    <p className="text-center mt-6 mb-8 text-base md:text-xl max-w-3xl mx-auto relative z-10">
                        Everything AI seamlessly integrated all the modern AI generation tools into one platform so that you can generate content with a single click.
                    </p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                    </div>
                </div>
                <Image width={1200} height={600} className="my-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/1200x600" />
            </div>
        </section>
    )
}

export default Hero