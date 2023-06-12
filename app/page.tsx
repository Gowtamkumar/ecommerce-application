import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Suspense } from "react";
import Loading from "./loading";
import ShopPage from "@/components/front-end/ShopPage";
import Banner from "@/components/front-end/Banner";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="mx-auto container">
        <Banner />
        <ShopPage />
      </div>
    </Suspense>
  );
}
