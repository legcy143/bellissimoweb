import React from 'react'
import ProductCard from './UI'

export default function ProductFeatured() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
            <div className="container px-4 md:px-6">
                <div className="grid items-center gap-6 lg:grid-cols-3 lg:gap-12 xl:grid-cols-3">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Featured Products
                            </h2>
                            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Explore our collection of top selling and trending products.
                            </p>
                        </div>
                    </div>
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </section>
    )
}
