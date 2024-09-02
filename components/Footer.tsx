import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className="text-gray-600 border-t body-font">
            <div className="container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <Link
                        href="/"
                        className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
                    >
                        <Image src='/logo.png' width={100} height={100} alt='logo' />
                        <span className="text-xl font-semibold relative inline-flex items-center">
                            Cloudshot
                            <sup className="ml-0.5 text-[8px] leading-none">
                                <span className="inline-flex items-center justify-center border border-current rounded-full w-3 h-3">
                                    R
                                </span>
                            </sup>
                        </span>
                    </Link>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"></h2>
                        <nav className="w-full mb-10">
                            <ul className="list-none flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-center md:justify-end sm:space-y-0 sm:space-x-4">
                                <li className="text-center sm:text-left">
                                    <Link href='/cancellation-policy' className="text-gray-600 hover:text-gray-800 text-sm sm:text-base">
                                        Cancellation Policy
                                    </Link>
                                </li>
                                <li className="text-center sm:text-left">
                                    <Link href='/privacy-policy' className="text-gray-600 hover:text-gray-800 text-sm sm:text-base">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li className="text-center sm:text-left">
                                    <Link href='/terms' className="text-gray-600 hover:text-gray-800 text-sm sm:text-base">
                                        Terms & Conditions
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer