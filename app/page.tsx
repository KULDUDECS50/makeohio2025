"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Menu,
  MousePointer,
  Box,
  Focus,
  MapPlus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import image1 from "@/public/pfp/pfp1.png";
import image2 from "@/public/pfp/pfp2.png";
import image3 from "@/public/pfp/pfp3.png";
import image4 from "@/public/pfp/pfp4.png";
import ModelViewer from "@/components/ModelViewer";
import GlassViewer from "@/components/GlassViewer";
import Helmet from "react-helmet";
import MetaImg from "@/public/pfp/meta.png";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Helmet>
        <meta property="og:image" content="@/public/pfp/meta.png" />
        <meta name="twitter:image" content="@/public/pfp/meta.png" />
      </Helmet>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-7xl px-8 md:px-12 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <span>The Hacktivists</span>
          </div>
          <nav className="hidden md:flex gap-6 ml-auto">
            <Link
              href="#features"
              className="text-sm font-medium transition-colors hover:text-primary float-right"
            >
              Features
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium transition-colors hover:text-primary float-right"
            >
              Use Cases
            </Link>

            <Link
              href="#faq"
              className="text-sm font-medium transition-colors hover:text-primary float-right"
            >
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full md:py-10 lg:py-14 xl:py-18">
          <div className="container mx-auto max-w-7xl px-8 md:px-12">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4 sm:mt-8 md:mt-0">
                <div className="space-y-2 sm:mt-6 md:mt-0">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-6xl/none">
                    3D Scanning, Simplified.
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Streamline your models, collaborate seamlessly, and achieve
                    more together with our intuitive platform.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row"></div>
                <div className="flex items-center gap-2 text-sm">
                  <MousePointer className="h-4 w-4 text-primary" />
                  <span>Interact with the scan!</span>
                </div>
              </div>
              <div className="mt-8 flex justify-center lg:mt-0">
                <ModelViewer />
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/40"
        >
          <div className="container mx-auto max-w-7xl px-8 md:px-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything you need to succeed
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Our platform provides all the tools you need to streamline
                  your workflow and boost productivity.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm transition-transform hover:scale-101 hover:shadow-md" // Added hover classes
                >
                  <div className="rounded-full border p-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-center text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl md:px-12">
            <div className="absolute h-full -z-10 w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Use Cases
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Loved by industries worldwide
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Don't just take our word for it. Here's what professionals
                  have to say.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between rounded-lg border p-6 shadow-sm bg-white"
                >
                  <div className="space-y-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 fill-primary text-primary"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-muted-foreground">
                      {testimonial.content}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    <Image
                      src={testimonial.pfp}
                      alt={`Profile picture of ${testimonial.author}`}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-8 md:px-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  FAQ
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Frequently asked questions
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Find answers to common questions about our platform.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl py-12 lg:grid lg:grid-cols-2 lg:gap-12 items-start">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="text-xl font-bold">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <GlassViewer />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-8 md:py-12 lg:py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div className="space-y-2 text-center mb-6">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl/tight">
                View the Deck
              </h2>
              <p className="md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                Check out our presentation to learn more about our approach.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-5xl aspect-[16/9] overflow-hidden rounded-lg shadow-lg">
                <iframe
                  src="https://docs.google.com/presentation/d/e/2PACX-1vQZwgYBL5IWujzq8xrRdg1fkvz-Xrw2yvfNDyGlP6w-t3BUC65OYMRllWF4_7UFmMU0yULP6yl9RAaF/embed?start=false&loop=false&delayms=3000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-12">
        <div className="container mx-auto max-w-7xl px-8 md:px-12 flex flex-col gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-2 font-bold">
            <nav className="flex gap-4 md:gap-6 md:ml-auto">
              <Link
                href="https://www.linkedin.com/in/kuldeep-debnath/"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Kuldeep
              </Link>
              <Link
                href="https://www.linkedin.com/in/kunsh-arora/"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Kunsh
              </Link>
              <Link
                href="https://www.linkedin.com/in/lasheen-ahmed/"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Ahmed
              </Link>
            </nav>
          </div>

          <div className="md:ml-auto md:flex md:items-center md:gap-4">
            <p className="text-xs text-muted-foreground md:order-last">
              &copy; {new Date().getFullYear()} The Hacktivists Inc. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: <Focus />,
    title: "High-Precision Capture",
    description:
      "Accurately digitize objects and spaces with millimeter-level precision.",
  },
  {
    icon: <Box />,
    title: "Versatile 3D Models",
    description:
      "Generate models compatible with various 3D software and applications.",
  },
  {
    icon: <MapPlus />,
    title: "Unlock New Possibilities",
    description:
      "Transform your workflows, enhance designs, and accelerate innovation accessibly.",
  },
];

const testimonials = [
  {
    content:
      "3D scanning has revolutionized our design process. We can now quickly create accurate as-built models, saving us countless hours and reducing errors.",
    author: "Jane Miller",
    role: "Principal Architect",
    industry: "Architecture",
    pfp: image1,
  },
  {
    content:
      "Our process is now faster and more efficient thanks to 3D scanning. It allows us to rapidly prototype and reverse engineer parts with incredible precision.",
    author: "Roberta Chen",
    role: "Lead Engineer",
    industry: "Manufacturing",
    pfp: image2,
  },
  {
    content:
      "Digitizing historical artifacts has never been easier. The level of detail we can capture with 3D scanning is simply amazing. This technology is vital for cultural preservation.",
    author: "Dr. Emil Rodriguez",
    role: "Curator",
    industry: "Museum",
    pfp: image3,
  },
  {
    content:
      "As a designer, 3D scanning has become an indispensable tool. It allows us to rapidly iterate on designs, create accurate prototypes, and communicate effectively.",
    author: "David Kim",
    role: "Senior Industrial Designer",
    industry: "Product Design",
    pfp: image4,
  },
];

const faqs = [
  {
    question: "Why choose 3D scanning?",
    answer: "Digitize the world with unprecedented accuracy and detail.",
  },
  {
    question: "What's the key benefit?",
    answer: "Transform physical spaces and objects into usable digital assets.",
  },
  {
    question: "Who uses this technology?",
    answer: "Architects, designers, engineers, and cultural heritage experts.",
  },
  {
    question: "What can I create?",
    answer: "Detailed models for design, visualization, and preservation.",
  },
  {
    question: "What's the future of 3D?",
    answer: "More accessible tools are enabling immersive digital experiences.",
  },
];
