"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";

interface HeroSectionProps {
  onOpenModal: () => void;
}

export default function HeroSection({ onOpenModal }: HeroSectionProps) {
  return (
    <>
      {/* Gradient section with content inside */}
      <section className="bg-gradient-hero rounded-3xl overflow-hidden mt-8 md:mt-24 mx-6 md:mx-12">
        <div className="grid md:grid-cols-2 gap-y-0 md:gap-8 items-center">
          {/* Content inside gradient (mobile + desktop) */}
          <div className="p-4 md:p-12 lg:p-20 space-y-4 md:space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Engage your visitors with instant AI answers.
            </h1>

            <p className="text-lg md:text-xl max-w-md">
              Get custom AI search and engagement tools tailored to your content and
              enhanced by a library of 100s of trusted publications.
            </p>

            <div>
              <Button
                variant="gradient-icon"
                size="lg"
                onClick={() => {
                  // Track button click in Amplitude
                  if (typeof window !== 'undefined' && (window as any).amplitude) {
                    (window as any).amplitude.track('Join Waitlist Button Clicked', {
                      site: 'getaskanything'
                    });
                  }
                  onOpenModal();
                }}
                className="shadow-lg hover:shadow-xl"
              >
                Join Waitlist
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative h-full min-h-[150px] md:min-h-[600px] flex items-center md:items-end justify-center md:justify-end pb-0">
            <div className="relative w-full h-full flex items-end justify-end">
              <Image
                src="https://gist.ai/wp-content/uploads/2025/09/ask-anything2-fs8.png"
                alt="Ask anything interface"
                width={844}
                height={600}
                className="object-contain object-bottom w-3/4 sm:w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
