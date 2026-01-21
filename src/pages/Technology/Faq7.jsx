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
            Technical details on deployment, integration, and security controls.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How does Graph-AI Sentinel integrate?
            </h2>
            <p>
              Graph-AI Sentinel connects directly to your existing Sentinel
              environment without replacement or rearchitecture. The system
              auto-discovers incidents, builds dynamic knowledge graphs from
              your entities and alerts, and operates autonomously within your
              security posture. All data stays within your Azure tenant.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What about data privacy and compliance?
            </h2>
            <p>
              Your incident data never leaves your Azure environment. Graph-AI
              Sentinel operates as a native Azure service, maintaining full
              compliance with SOC 2, ISO 27001, and your organization's data
              residency requirements. Audit trails log every decision for
              regulatory review.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Can we control the autonomous decisions?
            </h2>
            <p>
              Absolutely. Configurable confidence thresholds determine when the
              system auto-closes, escalates, or flags for human review. You set
              the guardrails, and the AI respects them. Every action includes
              full explainability and logging for compliance.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What deployment models are available?
            </h2>
            <p>
              Graph-AI Sentinel deploys as a managed service in your Azure
              subscription or through the Azure Marketplace for streamlined
              onboarding. No infrastructure to manage, no complex setup—just
              connect your Sentinel workspace and start.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How does the system learn and improve?
            </h2>
            <p>
              The AI builds a feedback loop from your organization's incident
              resolutions. Over time, it learns your environment's patterns,
              reducing false positives and improving classification accuracy.
              This adaptive intelligence sets it apart from static rule-based
              systems.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Need more details?
          </h4>
          <p className="md:text-md">
            Reach out to our team for technical specifications.
          </p>
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
