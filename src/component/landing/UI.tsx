import React from 'react'

export default function ProductCard() {
    return (
        <div className="flex flex-col justify-center space-y-4">
            <img
                src="/placeholder.svg"
                width={250}
                height={250}
                alt="Product Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
            <h3 className="text-lg font-bold tracking-tighter sm:text-xl">
                Product 1
            </h3>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                $49.99
            </p>
        </div>
    )
}
