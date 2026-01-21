import React, { createContext, useContext, useCallback, useEffect, useState } from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];

interface CarouselContextType {
  emblaRef: ReturnType<typeof useEmblaCarousel>[0];
  api: CarouselApi;
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
}

const CarouselContext = createContext<CarouselContextType | null>(null);

function useCarousel() {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}

interface CarouselProps {
  opts?: CarouselOptions;
  setApi?: (api: CarouselApi) => void;
  className?: string;
  children: React.ReactNode;
}

export function Carousel({ opts, setApi, className = "", children }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(opts);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi?.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (setApi && emblaApi) {
      setApi(emblaApi);
    }
  }, [emblaApi, setApi]);

  return (
    <CarouselContext.Provider
      value={{
        emblaRef,
        api: emblaApi,
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div className={`relative ${className}`}>{children}</div>
    </CarouselContext.Provider>
  );
}

interface CarouselContentProps {
  className?: string;
  children: React.ReactNode;
}

export function CarouselContent({ className = "", children }: CarouselContentProps) {
  const { emblaRef } = useCarousel();

  return (
    <div ref={emblaRef} className="overflow-hidden">
      <div className={`flex ${className}`}>{children}</div>
    </div>
  );
}

interface CarouselItemProps {
  className?: string;
  children: React.ReactNode;
}

export function CarouselItem({ className = "", children }: CarouselItemProps) {
  return (
    <div className={`min-w-0 shrink-0 grow-0 ${className}`}>{children}</div>
  );
}

interface CarouselButtonProps {
  className?: string;
}

export function CarouselPrevious({ className = "" }: CarouselButtonProps) {
  const { scrollPrev, canScrollPrev } = useCarousel();

  return (
    <button
      className={`inline-flex items-center justify-center rounded-full border border-black bg-white hover:bg-gray-100 disabled:opacity-50 ${className}`}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
    >
      <RxChevronLeft className="size-6" />
    </button>
  );
}

export function CarouselNext({ className = "" }: CarouselButtonProps) {
  const { scrollNext, canScrollNext } = useCarousel();

  return (
    <button
      className={`inline-flex items-center justify-center rounded-full border border-black bg-white hover:bg-gray-100 disabled:opacity-50 ${className}`}
      disabled={!canScrollNext}
      onClick={scrollNext}
    >
      <RxChevronRight className="size-6" />
    </button>
  );
}
