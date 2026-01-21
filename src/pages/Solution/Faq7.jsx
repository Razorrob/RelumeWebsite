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
            Common concerns about autonomous incident handling
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Can humans override the system?
            </h2>
            <p>
              Yes. Every decision is logged and reversible. You set thresholds
              for what the system can close autonomously, and anything outside
              those bounds escalates to your team. Full control remains yours.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How does confidence scoring work?
            </h2>
            <p>
              The AI assigns a confidence percentage to each decision based on
              how closely the incident matches known patterns in your graph. A
              98% match to a benign pattern means high confidence in closure.
              Low confidence triggers escalation for human review.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Is this compliant with audit requirements?
            </h2>
            <p>
              Every action is timestamped and logged. You can trace why the
              system closed an incident, what data it considered, and who
              approved it. Compliance teams get the audit trail they need.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Does it work with Microsoft Sentinel?
            </h2>
            <p>
              It's built for Sentinel. Direct integration means incidents flow
              in natively, and actions write back to your workspace. No
              middleware, no translation layers, no friction.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What if the AI makes a mistake?
            </h2>
            <p>
              Mistakes become learning moments. When you correct a decision, the
              system updates its understanding of your environment. Over time,
              it gets smarter about what your organization considers risky.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Need more clarity?
          </h4>
          <p className="md:text-md">Our team answers the hard questions</p>
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
