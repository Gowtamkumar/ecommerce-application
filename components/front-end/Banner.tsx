'use client'
import Image from "next/image";
import React from "react";
import img from "../../public/assets/images/apple-watch.png";
import { Button } from "@material-tailwind/react";
export default function Banner() {
  return (
    <section className="max-w-full bg-black">
      <div className="md:flex container md:px-2 py-24 mx-auto flex-row  align-center justify-center text-gray-500 ">
        <div className="md:basis-1/2">
          <h3 className="text-6xl">50% Off your first Shopping</h3>
          <p className="py-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut nam
            impedit cum sunt corrupti. Repudiandae, corrupti sint ab cupiditate
            debitis eveniet vitae non sit reprehenderit, in maxime consequatur.
            Excepturi, aliquid.
          </p>
          <Button>Show Now</Button>
        </div>
        <div className="md:basis-1/2">
          <Image alt="Banner imag" width={500} height={500} src={img} />
        </div>
      </div>
    </section>
  );
}
