"use client";

import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui";
import React from "react";
import { BiCheck } from "react-icons/bi";

export function Pricing9() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="mx-auto mb-8 max-w-lg text-center md:mb-10 lg:mb-12">
          <p className="mb-3 font-semibold md:mb-4">Simple</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Transparent pricing
          </h1>
          <p className="md:text-md">
            Pay only for what you use. Scale up as your incident volume grows,
            no surprises.
          </p>
        </div>
        <Tabs defaultValue="monthly">
          <TabsList className="mx-auto mb-12 w-fit">
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="yearly">Yearly</TabsTrigger>
          </TabsList>
          <TabsContent
            value="monthly"
            className="data-[state=active]:animate-tabs"
          >
            <div className="flex h-full flex-col justify-between border border-border-primary px-6 py-8 md:p-8">
              <div className="flex items-start justify-between">
                <div>
                  <div className="rb-4 mb-4 flex flex-col items-start justify-end">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                      alt="Relume icon 1"
                      className="size-12"
                    />
                  </div>
                  <h5 className="mb-2 text-xl font-bold md:text-2xl">
                    Starter plan
                  </h5>
                  <p>Up to 500 incidents</p>
                </div>
                <div className="text-right">
                  <h1 className="text-6xl font-bold md:text-9xl lg:text-10xl">
                    $99
                  </h1>
                </div>
              </div>
              <div className="my-8 h-px w-full shrink-0 bg-border" />
              <p>Includes</p>
              <div className="mb-8 mt-4 grid grid-cols-1 gap-x-6 gap-y-4 py-2 md:grid-cols-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Autonomous incident triage</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Graph-based analysis</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Confidence scoring</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Audit trail logging</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Sentinel integration</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Email support</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Basic API access</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Monthly reports</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Single team seat</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>90 day retention</p>
                </div>
              </div>
              <div>
                <Button title="Start free trial" className="w-full">
                  Start free trial
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="yearly"
            className="data-[state=active]:animate-tabs"
          >
            <div className="flex h-full flex-col justify-between border border-border-primary px-6 py-8 md:p-8">
              <div className="flex items-start justify-between">
                <div>
                  <div className="rb-4 mb-4 flex flex-col items-start justify-end">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                      alt="Relume icon 2"
                      className="size-12"
                    />
                  </div>
                  <h5 className="mb-2 text-xl font-bold md:text-2xl">
                    Professional plan
                  </h5>
                  <p>Up to 2000 incidents</p>
                </div>
                <div className="text-right">
                  <h1 className="text-6xl font-bold md:text-9xl lg:text-10xl">
                    $399
                  </h1>
                  <p className="mt-2 font-medium">Save 17 percent yearly</p>
                </div>
              </div>
              <div className="my-8 h-px w-full shrink-0 bg-border" />
              <p>Includes</p>
              <div className="mb-8 mt-4 grid grid-cols-1 gap-x-6 gap-y-4 py-2 md:grid-cols-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Everything in Starter</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Custom thresholds</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Team collaboration</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Advanced reporting</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Priority support</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Full API access</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Five team seats</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>One year retention</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Custom integrations</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Feedback loop training</p>
                </div>
              </div>
              <div>
                <Button title="Start free trial" className="w-full">
                  Start free trial
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
