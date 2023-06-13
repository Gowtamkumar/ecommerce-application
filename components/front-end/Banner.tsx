"use client";
import Image from "next/image";
import React from "react";
import img from "../../public/assets/images/apple-watch.png";
import { Button } from "@material-tailwind/react";
export default function Banner() {
  return (
    <div className="md:flex w-full max-w-7xl px-8 mx-auto md:px-2 py-24 align-center justify-center text-gray-500 ">
      <div className="md:basis-1/2">
        <h3 className="text-6xl">50% Off your first Shopping</h3>
        <p className="py-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut nam
          impedit cum sunt corrupti. Repudiandae, corrupti sint ab cupiditate
          debitis eveniet vitae non sit reprehenderit, in maxime consequatur.
          Excepturi, aliquid.
        </p>
        <Button>Shop Now</Button>
      </div>
      <div className="md:basis-1/2">
        <Image alt="Banner imag" width={500} height={500} src={img} />
      </div>
    </div>
  );
}
