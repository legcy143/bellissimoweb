import Footer from "@/component/landing/Footer"
import HeroSection from "@/component/landing/HeroSection"
import LandingNavbar from "@/component/landing/LandingNavbar"
import ProductFeatured from "@/component/landing/ProductFeatured"
import Testimonials from "@/component/landing/Testimonials"
import ProductCard from "@/component/landing/UI"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <LandingNavbar />
      <main className="flex-1">
        <HeroSection />
        <ProductFeatured />
        <Testimonials />
        <Footer />
        {/*  */}
      </main>
    </div>

  )
}

