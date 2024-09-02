import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from './ui/button'
import Image from 'next/image'

const CloudshotLogo = () => (
    <Link href="/" className="flex items-center gap-2 font-semibold">
        <Image src='/logo.png' width={100} height={100} alt='Cloudshot logo' />
        <span className="text-xl font-semibold relative inline-flex items-center">
            Cloudshot
            <sup className="ml-0.5 text-[8px] leading-none">
                <span className="inline-flex items-center justify-center border border-current rounded-full w-3 h-3">
                    R
                </span>
            </sup>
        </span>
    </Link>
)

const NavLinks = ({ className = "" }) => (
    <>
        <Link href="/pricing" className={className}>Pricing</Link>
        <Link href="/contact" className={className}>Contact</Link>
        <Link href='https://app.cloudshot.io/signin.html' className={className}>
            <Button>
                Sign In
            </Button>
        </Link>
        <Link href='https://app.cloudshot.io/signup.html' className={className}>
            <Button className='bg-white text-black hover:text-white transition-all border-2 border-secondary-foreground'>
                Sign Up
            </Button>
        </Link>
    </>
)

const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80">
            <div className="container flex h-16 items-center justify-between px-4">
                <CloudshotLogo />

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-4">
                    <NavLinks className="text-sm font-medium text-black hover:text-gray-600 transition-colors" />
                </nav>

                {/* Mobile Navigation */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="md:hidden">
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                        <nav className="flex flex-col gap-6 mt-0">
                            <CloudshotLogo />
                            <NavLinks className="text-lg font-medium text-black hover:text-gray-600 transition-colors" />
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}

export default Header