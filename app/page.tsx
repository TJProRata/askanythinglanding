"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import ContactModal from "@/components/ui/ContactModal";
import Accordion from "@/components/ui/Accordion";

const faqItems = [
  {
    question: "What is Ask Anything?",
    answer: "Ask Anything is a customizable AI search engine for websites that is tuned to the site's content and enhanced by a licensed library of 100s of trusted publications.",
  },
  {
    question: "How does Ask Anything benefit publishers and site owners?",
    answer: "It keeps users on your website with interactive AI experiences, improving discovery and driving both longer sessions and stronger engagement.",
  },
  {
    question: "How do my visitors benefit?",
    answer: 'Visitors benefit by being able to "ask anything" in natural language and get authoritative, explainable answers grounded in your content and other licensed, trusted sources—reducing bounce-backs to general search.',
  },
  {
    question: "How does Ask Anything ensure responses match my content?",
    answer: "Your content is prioritized—it's tuned to reflect your organization, taxonomy, and expertise first. Trusted sources from other publications fill gaps as needed.",
  },
  {
    question: "What happens when a question goes beyond my coverage?",
    answer: "When needed, Ask Anything draws from a network of over 700 licensed, high-quality publications in order to ensure visitor questions are answered accurately.",
  },
  {
    question: "What types of content and sites do you support?",
    answer: "Ask Anything is designed to make it simple for you to add powerful, AI-driven search to your site and other digital properties. Content ingestion is seamless through WordPress post endpoints or RSS feeds. Content behind logins can also be ingested, provided we work with you to determine the best approach.",
  },
  {
    question: "Do you handle languages other than English?",
    answer: "We support English-language content and are available for publishers in the US market. As we grow, we look forward to expanding both language and market coverage to serve an even wider range of publishers.",
  },
  {
    question: "What are the Content Policies required to participate?",
    answer: "We pride ourselves on having high quality standards. All publishers using Ask Anything are obligated to meet certain minimum standards and compliance with relevant laws.",
  },
];

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <Header onOpenModal={() => setIsModalOpen(true)} />

      {/* Submenu - Ask Anything */}
      <section className="bg-white py-4">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-6xl md:text-7xl font-bold whitespace-nowrap">
                <span className="bg-gradient-to-r from-[#FFAF07] to-[#926DD7] bg-clip-text [-webkit-background-clip:text] text-transparent">Ask</span>{" "}
                <span className="text-dark">Anything</span>
              </h1>
            </div>
            <div className="hidden md:flex justify-end">
              <div className="bg-white">
                {/* Login button placeholder */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <main>
        {/* Hero Section */}
        <HeroSection onOpenModal={() => setIsModalOpen(true)} />

        {/* Video Section */}
        <section className="container mx-auto px-6 md:px-12 py-12">
          <div className="mx-auto rounded-3xl overflow-hidden" style={{ maxWidth: '1320px', width: '100%' }}>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
              style={{ objectFit: 'contain' }}
            >
              <source
                src="/videos/AskAnythingHomepageloop.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </section>

        {/* Why Ask Anything Section */}
        <section className="container mx-auto px-6 md:px-12 py-20">
          <h2 className="text-5xl md:text-7xl font-semibold text-center mb-20">
            Why Ask Anything?
          </h2>

          <div className="space-y-20">
            {/* Feature 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-semibold">
                  Accurate answers powered by your content—and beyond.
                </h3>
                <p className="text-lg">
                  Tuned to your content and enriched with a fully licensed library of over 700 trusted sources, Ask Anything delivers precise, well-informed answers to nearly any question.
                </p>
              </div>
              <div>
                <Image
                  src="https://gist.ai/wp-content/uploads/2025/09/why-answers-2-1024x819-jpg.webp"
                  alt="Accurate answers"
                  width={1024}
                  height={819}
                  className="rounded-3xl"
                />
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-semibold">
                  Keeps your visitors on your site.
                </h3>
                <p className="text-lg">
                  Don't lose visitors to Google. Provide your visitors with fast, reliable AI answers and suggested topics so they can continue to explore your site.
                </p>
              </div>
              <div>
                <Image
                  src="https://gist.ai/wp-content/uploads/2025/09/why-answers-1-1024x819-png.webp"
                  alt="Keep visitors on site"
                  width={1024}
                  height={819}
                  className="rounded-3xl"
                />
              </div>
            </div>

            {/* Feature 3 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-semibold">
                  Matches your look and feel.
                </h3>
                <p className="text-lg">
                  Pick the text, color, size, and position of your AI search engine so it blends perfectly with your site.
                </p>
              </div>
              <div>
                <Image
                  src="https://gist.ai/wp-content/uploads/2025/09/why-answers-3-1024x819-png.webp"
                  alt="Customizable"
                  width={1024}
                  height={819}
                  className="rounded-3xl"
                />
              </div>
            </div>

            {/* Feature 4 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-semibold">
                  Launches in minutes.
                </h3>
                <p className="text-lg">
                  Install with a short snippet of code— works with WordPress, Webflow, Wix, Ghost, and more.
                </p>
              </div>
              <div>
                <Image
                  src="https://gist.ai/wp-content/uploads/2025/09/why-answers-4-1024x819-jpg.webp"
                  alt="Easy installation"
                  width={1024}
                  height={819}
                  className="rounded-3xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Try It CTA Section */}
        <section className="py-32 md:py-44 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://gist.ai/wp-content/uploads/2025/08/bg2.svg')" }}>
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-5xl md:text-7xl font-semibold mb-10 text-[#4E4E4E] max-w-4xl">
              Try it out, it's free.
            </h2>
            <p className="text-xl md:text-2xl max-w-4xl mb-10 text-[#4E4E4E]">
              You can even earn revenue by displaying relevant sponsored messages that blend naturally into the user experience.
            </p>
            <Button variant="gradient-icon" size="lg" onClick={() => setIsModalOpen(true)}>
              Join Waitlist
            </Button>
          </div>
        </section>

        {/* Examples Section */}
        <section className="container mx-auto px-6 md:px-12 py-32">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6">
            See Ask Anything in action
          </h2>
          <p className="text-lg text-center mb-16">
            Check Ask Anything powering AI search across these example publications.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <a href="https://www.popsci.com/health/pollen-sunscreen/" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://gist.ai/wp-content/uploads/2025/09/pop_science-png.webp"
                alt="Popular Science"
                width={460}
                height={292}
                className="hover:opacity-80 transition-opacity"
              />
            </a>
            <a href="https://mickeyvisit.com/" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://gist.ai/wp-content/uploads/2025/09/pop3-png.webp"
                alt="Mickey Visit"
                width={460}
                height={292}
                className="hover:opacity-80 transition-opacity"
              />
            </a>
            <a href="https://styleblueprint.com/" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://gist.ai/wp-content/uploads/2025/09/pop4-png.webp"
                alt="Style Blueprint"
                width={460}
                height={292}
                className="hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-6 md:px-12 py-20">
          <h2 className="text-4xl md:text-5xl font-semibold mb-12">
            Frequently asked questions
          </h2>
          <Accordion items={faqItems} />
        </section>

        {/* Ready CTA Section */}
        <section className="py-64 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://gist.ai/wp-content/uploads/2025/08/answers-ready_.png')" }}>
          <div className="container mx-auto px-6 md:px-12 text-center">
            <h2 className="text-7xl md:text-9xl font-semibold mb-10 pb-4">
              <span className="bg-gradient-to-r from-[#FFAF07] to-[#926DD7] bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Ready?
              </span>
            </h2>
            <Button variant="gradient-icon" size="lg" onClick={() => setIsModalOpen(true)}>
              Join Waitlist
            </Button>
          </div>
        </section>
      </main>

      <Footer onOpenContactModal={() => setIsContactModalOpen(true)} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  );
}
