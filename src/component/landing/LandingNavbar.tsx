import Link from 'next/link'
import React from 'react'

export default function LandingNavbar() {
    return (
        <header className="px-4 lg:px-6 h-16 flex items-center">
            <Link className="flex items-center justify-center" href="/">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                >
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                    <path d="M3 6h18" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                <span className="sr-only">bellissimo</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <Link
                    className="text-sm font-medium hover:underline underline-offset-4"
                    href="/"
                >
                    Home
                </Link>
                <Link
                    className="text-sm font-medium hover:underline underline-offset-4"
                    href="/shop"
                >
                    Shop
                </Link>
                <Link
                    className="text-sm font-medium hover:underline underline-offset-4"
                    href="/about"
                >
                    About
                </Link>
                <Link
                    className="text-sm font-medium hover:underline underline-offset-4"
                    href="/contact"
                >
                    Contact
                </Link>
            </nav>
        </header>
    )
}
