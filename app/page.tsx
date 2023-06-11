import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Suspense } from "react";
import Loading from "./loading";
import ShopPage from "@/components/front-end/ShopPage";
import Banner from "@/components/front-end/Banner";
import Widget from "@/components/front-end/Wiget";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="mx-auto">
        <Banner />
        <ShopPage />
      </div>
    </Suspense>
  );
}
