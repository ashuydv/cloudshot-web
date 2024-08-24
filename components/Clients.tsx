/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'

type Props = {}

const Clients = (props: Props) => {
    return (
        <section className="text-black body-font">
            <div className="container px-5 py-8 pb-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-5xl text-4xl font-medium title-font mb-4">Trusted by the best companies</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Every AI is the choice of all the fortune 500 companies.                    </p>
                </div>
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <Image width={400} height={200} className='rounded-lg overflow-hidden' src="https://dummyimage.com/400x200/000/fff" alt="brand-1" />
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <Image width={400} height={200} className='rounded-lg overflow-hidden' src="https://dummyimage.com/400x200/000/fff" alt="brand-1" />
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <Image width={400} height={200} className='rounded-lg overflow-hidden' src="https://dummyimage.com/400x200/000/fff" alt="brand-1" />
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <Image width={400} height={200} className='rounded-lg overflow-hidden' src="https://dummyimage.com/400x200/000/fff" alt="brand-1" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Clients