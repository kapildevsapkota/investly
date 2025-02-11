import type { Metadata } from "next"
import Image from "next/image"
import { BarChart2, Shield, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "About Investly | Our Mission & Values",
  description:
    "Learn about Investly's commitment to revolutionizing investing through AI-driven strategies and user-centric services",
}

export default function AboutUsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">About Investly</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Empowering investors with AI-driven strategies and personalized financial solutions to build a secure and
          prosperous future.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/about1.png"
            alt="Investly Dashboard"
            fill
            className="object-cover"
            quality={95}
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">Revolutionizing Investment Strategies</h2>
          <p className="text-muted-foreground">
            At Investly, we're dedicated to transforming the investment landscape through cutting-edge AI technology and
            data-driven insights. Our platform empowers both novice and experienced investors to make informed decisions
            and achieve their financial goals.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <BarChart2 className="h-5 w-5 text-primary" />
              <span>AI-powered investment analysis</span>
            </li>
            <li className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-primary" />
              <span>Robust security measures</span>
            </li>
            <li className="flex items-center gap-3">
              <Users className="h-5 w-5 text-primary" />
              <span>Personalized user experience</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 space-y-6">
          <h2 className="text-3xl font-semibold">Our Core Values</h2>
          <p className="text-muted-foreground">
            Investly is built on a foundation of trust, innovation, and user-centricity. We believe that everyone should
            have access to sophisticated investment tools and strategies, regardless of their experience level or
            account size.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <div className="h-2 w-2 bg-primary rounded-full" />
              <span>Transparency in all operations</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="h-2 w-2 bg-primary rounded-full" />
              <span>Continuous innovation and improvement</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="h-2 w-2 bg-primary rounded-full" />
              <span>Commitment to financial education</span>
            </li>
          </ul>
        </div>
        <div className="order-1 md:order-2 relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/about.png"
            alt="Investly Team"
            fill
            className="object-cover"
            quality={95}
          />
        </div>
      </div>
    </div>
  )
}

