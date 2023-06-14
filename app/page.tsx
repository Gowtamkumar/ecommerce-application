/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Suspense } from "react";
import Loading from "./loading";
import ShopPage from "@/components/front-end/ShopPage";
import Banner from "@/components/front-end/Banner";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Rating,
  Typography,
} from "@material-tailwind/react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

import { products } from "@/utils/mockData";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <section className="bg-black">
        <Banner />
      </section>
      <section className="bg-gray-400">
        <div className="flex container  mx-auto justify-between text-black py-8">
          <div>
            <span className="basis-1/2">Flash Deals</span>{" "}
          </div>
          <div>
            <Typography color="blue-gray" className="font-medium">
              <Link href="/products"> View All</Link>
            </Typography>
          </div>
        </div>

        <div className="grid md:grid-cols-4 grid-cols-1 gap-3 pb-10 text-black container mx-auto">
          {products.map((item: any, idx: number) => {
            return (
              <Card className="md:w-80 w-full" key={idx}>
                <CardHeader shadow={false} floated={false} className="h-96">
                  <Image
                    width={500}
                    height={400}
                    alt="Product imag"
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
                  />
                </CardHeader>
                <CardBody>
                  <div className="flex items-center justify-between mb-2">
                    <Typography color="blue-gray" className="font-medium">
                      <Link href="/">Apple AirPods</Link>
                    </Typography>
                    <Typography color="blue-gray" className="font-medium">
                      $95.00
                    </Typography>
                  </div>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal opacity-75"
                  >
                    With plenty of talk and listen time, voice-activated Siri
                    access, and an available wireless charging case.
                  </Typography>

                  <div className="flex items-center py-2">
                    <span>Rating: </span>
                    <Rating value={5} title="Rating" readonly />
                  </div>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button
                    ripple={false}
                    fullWidth={true}
                    className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
                  >
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </section>
      <ShopPage />
    </Suspense>
  );
}
