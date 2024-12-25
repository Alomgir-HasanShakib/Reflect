import TestimonialCarousel from "@/components/testimonialCarousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  BarChart2,
  Book,
  Calendar,
  ChevronRight,
  FileText,
  Lock,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import faqs from "@/data/faqs";

const features = [
  {
    icon: Book,
    title: "Rich Text Editor",
    description:
      "Express yourself with a powerful editor supporting markdown, formatting, and more.",
  },
  {
    icon: Sparkles,
    title: "Daily Inspiration",
    description:
      "Get inspired with daily prompts and mood-based imagery to spark your creativity.",
  },
  {
    icon: Lock,
    title: "Secure & Private",
    description:
      "Your thoughts are safe with enterprise-grade security and privacy features.",
  },
];

export default function Home() {
  return (
    <>
      <div className="container relative mx-auto px-4 pt-16 pb-16">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 gradient-title">
            Your Space to Reflect. <br /> Your Story to Tell
          </h1>
          <p className="text-lg md:text-xl text-orange-800 mb-8">
            Capture your thoughts, track your moods, and reflect on your journey
            in a beautiful, secure space.
          </p>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-orange-50 via-transparent to-transparent pointer-events-none z-10" />
            <div className="bg-white rounded-2xl p-4 max-full mx-auto">
              <div className="border-b border-orange-100 pb-4 mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-orange-600" />
                  <span className="text-orange-900 font-medium">
                    Today&rsquo;s Entry
                  </span>
                </div>
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-orange-200" />
                  <div className="h-3 w-3 rounded-full bg-orange-300" />
                  <div className="h-3 w-3 rounded-full bg-orange-400" />
                </div>
              </div>

              <div className="space-y-4 p-4">
                <h3 className="text-xl font-semibold text-orange-900">
                  Daily Prompt
                </h3>

                <Skeleton className="h-4 bg-orange-100 rounded w-3/4" />
                <Skeleton className="h-4 bg-orange-100 rounded w-full" />
                <Skeleton className="h-4 bg-orange-100 rounded w-2/3" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <Link href={"/dashboard"}>
            <Button
              variant="journal"
              className="px-8 py-6 rounded-full flex items-center gap-2"
            >
              Start Writing <ChevronRight className="h-5 w-5" />
            </Button>
          </Link>
          <Link href={"#features"}>
            <Button
              variant="outline"
              className="px-8 py-6 rounded-full  border-orange-600 text-orange-600 hover:bg-orange-100"
            >
              Learn More
            </Button>
          </Link>
        </div>
        {/* ********************************************feature section********************************************** */}

        <section
          id="features"
          className="mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <Card key={feature.title} className="shadow-lg">
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-xl text-orange-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-orange-700">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </section>
        <div className="space-y-24 mt-24">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
                <FileText className="h-6 w-6 text-orange-600" />
              </div>
              <h className="text-2xl font-bold text-orange-900">
                Rich Text Editor
              </h>
              <p className="text-lg text-orange-700">
                Express yourself fully with our powerful editor featuring:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-400" />
                  <span> Formate Text with ease</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-400" />
                  <span> Embade Links</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4 bg-white rounded-2xl shadow-xl p-6 border border-orange-100">
              <div className="flex gap-2 mb-6">
                <div className="h-8 w-8 rounded bg-orange-100" />
                <div className="h-8 w-8 rounded bg-orange-100" />
                <div className="h-8 w-8 rounded bg-orange-100" />
              </div>
              <Skeleton className={"h-4 bg-orange-50 rounded w-3/4"} />
              <Skeleton className={"h-4 bg-orange-50 rounded w-full"} />
              <Skeleton className={"h-4 bg-orange-50 rounded w-2/3"} />
              <Skeleton className={"h-4 bg-orange-50 rounded w-1/3"} />
            </div>
          </div>
          <div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4 bg-white rounded-2xl shadow-xl p-6 border border-orange-100">
                <div className="h-40 bg-gradient-to-t from-orange-100 to-orange-50 rounded-lg"></div>
                <div className="flex justify-between">
                  <div className="h-4 w-16 bg-orange-100 rounded" />
                  <div className="h-4 w-16 bg-orange-100 rounded" />
                  <div className="h-4 w-16 bg-orange-100 rounded" />
                </div>
              </div>
              <div className="space-y-6">
                <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <BarChart2 className="h-6 w-6 text-orange-600" />
                </div>
                <h className="text-2xl font-bold text-orange-900">
                  Mood Analytics
                </h>
                <p className="text-lg text-orange-700">
                  Track your emotinal journey with poweful Analytics:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-orange-400" />
                    <span>Visual Mood Trends</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-orange-400" />
                    <span>Pattern recongnition</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* ********************************************feature section end ********************************************** */}

        {/* ********************************************Testomonial section Start ********************************************** */}

        <TestimonialCarousel />

        {/* ********************************************Testomonial section end ********************************************** */}

        {/* ********************************************FAQ section Start ********************************************** */}

        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-orange-900 mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full mx-auto">
            {faqs.map((faq, idx) => (
              <AccordionItem key={faq.q} value={`item-${idx}`}>
                <AccordionTrigger className="text-orange-900 text-lg">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-orange-700 ">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* ********************************************FAQ section end ********************************************** */}
      </div>
    </>
  );
}
