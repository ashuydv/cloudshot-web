import React from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
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
                    href="#"
                    className=" gap-2 font-semibold md:text-base"
                >
                    <Image src='/logo.png' width={200} height={200} alt='logo' />
                </Link>
                <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground text-base"
                >
                    Pricing
                </Link>
                <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground text-base"
                >
                    Blog
                </Link>
                <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground text-base"
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
                            href="#"
                            className="flex items-center gap-2 text-lg font-semibold"
                        >
                            <Package2 className="h-6 w-6" />
                            <span className="sr-only">Acme Inc</span>
                        </Link>
                        <Link
                            href="#"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            Pricing
                        </Link>
                        <Link
                            href="#"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            Blog
                        </Link>
                        <Link
                            href="#"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            Contact
                        </Link>
                    </nav>
                </SheetContent>
            </Sheet>
            <div className="flex w-full items-center">
                <div className='ml-auto flex-1 sm:flex-initial space-x-4 md:ml-auto md:space-x-2 lg:space-x-4'>
                    <Button className='text-base'>
                        Login
                    </Button>
                    <Button className='text-base'>
                        Sign Up
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Header