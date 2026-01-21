"use client";

import { Button } from "../../components/ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout398() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Services</p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              We handle the setup
            </h1>
            <p className="md:text-md">
              Get running fast with expert guidance every step
            </p>
          </div>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8">
            <div className="flex flex-col border border-border-primary">
              <div className="flex w-full flex-col items-center justify-center self-start">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <p className="mb-2 text-sm font-semibold">Onboarding</p>
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  We connect you to Sentinel
                </h2>
                <p>Seamless integration with your existing environment</p>
                <div className="mt-5 md:mt-6">
                  <Button
                    title="Start"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Start
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col border border-border-primary">
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Tune the system to your needs
                </h2>
                <p>Customization shapes how the AI learns your risk</p>
              </div>
            </div>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8">
            <div className="flex flex-col border border-border-primary">
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 2"
                  />
                </div>
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  We stay with you after launch
                </h2>
                <p>Round-the-clock support keeps incidents flowing smoothly</p>
              </div>
            </div>
            <div className="flex flex-col border border-border-primary">
              <div className="flex w-full flex-col items-center justify-center self-start">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 2"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <p className="mb-2 text-sm font-semibold">Training</p>
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Analysts learn to hunt with graphs
                </h2>
                <p>Deep dives into the tool for your security team</p>
              </div>
            </div>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8">
            <div className="flex flex-col border border-border-primary">
              <div className="flex w-full flex-col items-center justify-center self-start">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 3"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <p className="mb-2 text-sm font-semibold">Leadership</p>
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Executives see the business impact
                </h2>
                <p>Plain-language reports and dashboards for decision makers</p>
              </div>
            </div>
            <div className="flex flex-col border border-border-primary">
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 3"
                  />
                </div>
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Migration from legacy systems
                </h2>
                <p>We move your playbooks and history cleanly</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
