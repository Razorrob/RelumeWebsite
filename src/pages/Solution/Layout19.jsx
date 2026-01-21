"use client";

import { Button } from "../../components/ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout19() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Autonomy</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Incidents close themselves while you focus elsewhere
            </h2>
            <p className="mb-5 md:mb-6 md:text-md">
              The system ingests every alert, runs analysis in seconds,
              classifies with confidence scoring, and either closes low-risk
              incidents or escalates high-risk ones with full evidence attached.
              No waiting for analyst bandwidth. No manual triage queues.
              Incidents that would take your team hours to sort through resolve
              autonomously, leaving your analysts free to hunt real threats
              instead of drowning in noise.
            </p>
            <ul className="my-4 list-disc pl-5">
              <li className="my-1 self-start pl-2">
                <p>Automatic ingestion and analysis</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Confidence-based closure decisions</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Full audit trail for compliance</p>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Explore" variant="secondary">
                Explore
              </Button>
              <Button
                title="Learn more"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Learn more
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
