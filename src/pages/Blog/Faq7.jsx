"use client";

import { Button } from "../../components/ui";
import React from "react";

export function Faq7() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container w-full max-w-lg">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Questions
          </h2>
          <p className="md:text-md">
            Find answers about our blog, content, and how we cover autonomous
            incident response.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How often do you publish?
            </h2>
            <p>
              We publish new insights weekly, covering threat trends, AI-driven
              SOC automation, and real-world incident response strategies. Each
              piece reflects what we're seeing in the field and what matters to
              security teams drowning in alerts.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Can we contribute guest posts?
            </h2>
            <p>
              Yes. If you have expertise in incident automation, graph-based
              threat analysis, or Microsoft Sentinel, reach out. We collaborate
              with practitioners and researchers who bring fresh perspectives to
              autonomous security.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Do you cover specific tools?
            </h2>
            <p>
              We focus on Sentinel, Copilot, and the broader SOC automation
              landscape. Our analysis compares approaches—rule-based, assistive
              AI, and truly autonomous systems—to help teams understand what
              actually works.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How can I request a topic?
            </h2>
            <p>
              Contact us directly with your question or challenge. We write
              about problems our readers face, and your feedback shapes our
              editorial calendar. Security teams know what they need to hear.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Are posts available offline?
            </h2>
            <p>
              Subscribe to our newsletter and we'll send summaries straight to
              your inbox. Each piece includes key takeaways you can reference
              later, no internet required.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="md:text-md">Reach out to our team.</p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
