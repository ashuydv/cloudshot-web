import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from 'next/link'
import { CircleUser, Menu, Package2, Search } from 'lucide-react'
import { Button } from './ui/button'
import Image from 'next/image'

type Props = {}

const Header = (props: Props) => {
    return (
        <header className="container bg-background sticky top-0 flex h-20 items-center gap-4 backdrop-filter backdrop-blur-md z-50 px-4 md:px-6">
            <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                <Link
                    href="/"
                    className=" gap-2 font-semibold md:text-base"
                >
                    <Image src='/logo.png' width={200} height={200} alt='logo' />
                </Link>
                <Link
                    href="/pricing"
                    className="text-blacker:text-foreground text-base leading-8"
                >
                    Pricing
                </Link>
                <Link
                    href="/contact"
                    className="text-blacker:text-foreground text-base leading-8"
                >
                    Contact
                </Link>
            </nav>
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="shrink-0 md:hidden"
                    >
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <nav className="grid gap-6 text-lg font-medium">
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-lg font-semibold"
                        >
                            <Package2 className="h-6 w-6" />
                            <span className="sr-only">Cloudshot.io</span>
                        </Link>
                        <Link
                            href="/pricing"
                            className="text-black"
                        >
                            Pricing
                        </Link>
                        <Link
                            href="/contact"
                            className="text-black"
                        >
                            Contact
                        </Link>
                    </nav>
                </SheetContent>
            </Sheet>
            <div className="flex w-full items-center">
                <div className='ml-auto flex-1 sm:flex-initial space-x-4 md:ml-auto md:space-x-2 lg:space-x-4'>
                    <Button className='text-base'>
                        <Link href='https://app.cloudshot.io/signin.html'
                        >
                            Sign In
                        </Link>
                    </Button>
                    <Button className='text-base'>
                        <Link href='https://app.cloudshot.io/signup.html'
                        >
                            Sign Up
                        </Link>
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Header