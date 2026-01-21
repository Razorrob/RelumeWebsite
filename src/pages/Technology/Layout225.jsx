"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout225() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2">
              <div className="flex self-start">
                <div className="mr-6 flex-none self-start">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                    Ingest and connect
                  </h3>
                  <p>
                    Graph-AI Sentinel auto-discovers incidents from your
                    Sentinel workspace and ingests entity data, alerts, and
                    historical context.
                  </p>
                  <div className="mt-5 flex items-center gap-x-4 md:mt-6">
                    <Button
                      title="Arrow"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      Arrow
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex self-start">
                <div className="mr-6 flex-none self-start">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                    Build the graph
                  </h3>
                  <p>
                    Dynamic knowledge graphs construct relationships between
                    users, devices, IPs, and events to map threat scope and
                    attack patterns.
                  </p>
                  <div className="mt-5 flex items-center gap-x-4 md:mt-6">
                    <Button
                      title="Arrow"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      Arrow
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex self-start">
                <div className="mr-6 flex-none self-start">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                    Reason and decide
                  </h3>
                  <p>
                    AI-driven reasoning analyzes the graph, classifies
                    incidents, scores confidence, and determines whether to
                    auto-close, escalate, or flag for review.
                  </p>
                  <div className="mt-5 flex items-center gap-x-4 md:mt-6">
                    <Button
                      title="Arrow"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      Arrow
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
