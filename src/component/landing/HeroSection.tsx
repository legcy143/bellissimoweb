import React from 'react'

export default function HeroSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                            Discover the Best Products
                        </h1>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                            Shop the latest and greatest products from our collection. High
                            quality, affordable prices.
                        </p>
                    </div>
                    <div className="space-x-4">
                        <a
                            className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                            href="#"
                        >
                            Shop Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
