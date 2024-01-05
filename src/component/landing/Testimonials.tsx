import React from 'react'

function Testimonials() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        What Our Customers Say
                    </h2>
                    <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        Hear from our satisfied customers who love our products.
                    </p>
                </div>
                <div className="grid w-full grid-cols-1 lg:grid-cols-3 items-center justify-center gap-8 lg:gap-12 [&>img]:mx-auto">
                    <div className="flex flex-col justify-center space-y-4">
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            "I absolutely love the products from this store. High quality and
                            affordable prices!"
                        </p>
                        <h3 className="text-lg font-bold tracking-tighter sm:text-xl">
                            - Customer 1
                        </h3>
                    </div>
                    <div className="flex flex-col justify-center space-y-4">
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            "Amazing products! I can't recommend them enough."
                        </p>
                        <h3 className="text-lg font-bold tracking-tighter sm:text-xl">
                            - Customer 2
                        </h3>
                    </div>
                    <div className="flex flex-col justify-center space-y-4">
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            "Best shopping experience ever. The products are just fantastic."
                        </p>
                        <h3 className="text-lg font-bold tracking-tighter sm:text-xl">
                            - Customer 3
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials