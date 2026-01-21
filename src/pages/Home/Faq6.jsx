"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";
import { RxPlus } from "react-icons/rx";

export function Faq6() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
          Questions
        </h2>
        <p className="md:text-md">
          Everything you need to know about deploying and running the system
        </p>
        <div className="mt-6 md:mt-8">
          <Button title="Contact us" variant="secondary">
            Contact us
          </Button>
        </div>
        <Accordion
          type="multiple"
          className="grid items-start justify-stretch gap-4"
        >
          <AccordionItem
            value="item-0"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              Is my data secure?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              All data stays in your Azure environment. We never store or train
              on your incidents. Encryption in transit and at rest is standard.
              Compliance with SOC 2, HIPAA, and PCI-DSS is built in.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-1"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              How does human override work?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Analysts can override any decision at any time. The system logs
              the override and learns from it, improving future decisions. You
              stay in control.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              What if we use multiple SIEM tools?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              We're built for Sentinel, but we can ingest incidents from other
              sources via API. The graph reasoning works on any incident data
              you feed it.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              How long does deployment take?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Most teams are live in under two weeks. We handle the Sentinel
              integration, you provide incident history for the AI to learn
              from. No rip and replace required.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              Can the AI close high-risk incidents?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              No. High-risk incidents always escalate to analysts with full
              evidence and reasoning. You set the confidence threshold that
              triggers escalation. Safety first.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
