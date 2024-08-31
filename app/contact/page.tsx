import CardComponent from '@/components/CardComponent'
import { ContactForm } from '@/components/ContactForm'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <section className='container px-5'>
            <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
                <div className="relative w-full z-20 hidden md:flex border-neutral-100 dark:border-neutral-900 overflow-hidden items-center justify-center">
                    <div className='flex items-start flex-col gap-4 w-full'>
                        <div className="flex items-center w-full gap-4">
                            <div className='min-h-[100px] border w-full p-4 rounded-xl'>
                                <CardComponent
                                    icon='/phone.svg'
                                    title="Call"
                                    desc="+91 99227 83337"
                                />
                            </div>
                            <div className='min-h-[100px] border w-full p-4 rounded-xl'>
                                <CardComponent
                                    icon='/mail.svg'
                                    title="Email"
                                    desc="doreply@bereej.com"
                                />
                            </div>
                        </div>
                        <div className='min-h-[100px] border w-full p-4 rounded-xl'>
                            <CardComponent
                                icon='/location.svg'
                                title="Location"
                                desc="Office #11, Landmark Commercial Complex,
                                      Paud Road, Kothrud, Pune.
                                      Maharashtra 411 038, India."
                            />
                        </div>
                        <div className="border w-full p-4 rounded-xl">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.435465895523!2d73.81132371744383!3d18.5092135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfbc1bc1d4df%3A0x43ba1366686ff1c0!2sLandmark%20Commercial%20Complex%2C%20Sarvatra%20Society%2C%20Anand%20Nagar%2C%20Kothrud%2C%20Pune%2C%20Maharashtra%20411038!5e0!3m2!1sen!2sin!4v1672905462342!5m2!1sen!2sin" frameBorder="0" style={{ border: 0, width: "100%", height: "320px", borderRadius: "8px" }} allowFullScreen={true}></iframe>
                        </div>
                    </div>
                </div>
                <div className="flex relative z-20 items-center w-full justify-center px-4 py-4 lg:py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <div className="mx-auto w-full max-w-xl">
                        <div>
                            <h1 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-black dark:text-white">Contact Us</h1>
                            <p className="mt-4 text-black text-sm max-w-sm">Please reach out to us and we will get back to you at the speed of light.</p>
                        </div>
                        <div className="py-10">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page