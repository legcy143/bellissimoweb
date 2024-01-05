import LandingNavbar from '@/component/landing/LandingNavbar'
import React from 'react'

export default function Contact() {
    return (
        <div className="flex flex-col min-h-screen">
            <LandingNavbar />
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                    Contact Us
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                    We'd love to hear from you. Feel free to get in touch with us.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
                    <div className="px-4 md:px-6">
                        <div className="flex flex-wrap items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                        Get In Touch
                                    </h2>
                                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                        Fill out the form below and we'll get back to you as soon as
                                        possible.
                                    </p>
                                </div>
                                <form className="flex flex-col space-y-4 items-center justify-center">
                                    <input
                                        className="flex h-10 w-full rounded-md border border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1 p-2"
                                        placeholder="Your Name"
                                        type="text"
                                    />
                                    <input
                                        className="flex h-10 w-[100%] rounded-md border border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1 p-2"
                                        placeholder="Your Email"
                                        type="email"
                                    />
                                    <input
                                        className="flex h-10 w-[100%] rounded-md border border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1 p-2"
                                        placeholder="Subject"
                                        type="text"
                                    />
                                    <textarea
                                        placeholder="Your Message"
                                        className="w-[100%] flex-1 h-32 p-2 resize-none"
                                        defaultValue={""}
                                    />
                                    <button
                                        className="inline-flex items-center justify-center rounded-md text-sm text-white font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-primary-foreground hover:bg-black/90  py-2 w-[100%]"
                                        type="submit"
                                    >
                                        submit
                                    </button>
                                </form>
                            </div>
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">
                                        Our Location
                                    </h2>
                                    <p className="max-w-[600px] text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400">
                                        1234 Street Name, City, State, Country
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">
                                        Contact Information
                                    </h2>
                                    <p className="max-w-[600px] text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400">
                                        Email: info@shopify.com <br />
                                        Phone: +1 234 567 890
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
