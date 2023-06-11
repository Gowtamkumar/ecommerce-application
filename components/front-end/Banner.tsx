import React from "react";
import Image from "next/image";
import img from "../../public/assets/images/apple-watch.png";
import Link from "next/link";
export default function Banner() {
  return (
    <section className="dark:bg-gray-800 py-8 bg-gray-200">
      <div className="container mx-auto flex justify-between items-center bg-gray-200 dark:bg-gray-800  p-4">
        <div className="w-1/2">
          <Image src={img} alt="Banner" priority={true} width={500} height={500} />
        </div>
        <div className="text-center mt-4 w-1/2 text-black dark:text-white">
          <h2 className="text-3xl font-bold ">Big Sale!</h2>
          <p className="text-lg">
            Up to 50% off on selected items
          </p>
          <Link
            href="#"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4 inline-block"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
}
