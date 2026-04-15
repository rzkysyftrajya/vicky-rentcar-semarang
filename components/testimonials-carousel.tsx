"use client"

import React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card } from "@/components/ui/card"

export function TestimonialsCarousel() {
  const images = [
    "/testimoni/1.webp",
    "/testimoni/2.webp",
    "/testimoni/3.webp",
    "/testimoni/4.webp",
    "/testimoni/5.webp",
    "/testimoni/6.webp",
    "/testimoni/7.webp",
    "/testimoni/8.webp",
    "/testimoni/9.webp",
    "/testimoni/10.webp",
    "/testimoni/11.webp",
    "/testimoni/12.webp",
    "/testimoni/13.webp",
    "/testimoni/14.webp",
    "/testimoni/15.webp",
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Beberapa testimoni kita dari Makassar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Testimoni asli pelanggan rental mobil PT VICKY RentCar Makassar
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {images.map((src, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 lg:basis-1/4"
                >
                  <div className="group">
                    <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 group-hover:scale-105 h-48 md:h-64 bg-gradient-to-br from-lime-50 to-emerald-50 mx-auto max-w-sm">
                      <img
                        src={src}
                        alt="Testimoni Pelanggan"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12 md:-left-16 top-1/2 -translate-y-1/2 w-10 h-10" />
            <CarouselNext className="-right-12 md:-right-16 top-1/2 -translate-y-1/2 w-10 h-10" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}