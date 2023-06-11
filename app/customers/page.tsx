import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import style from "./user.module.css";

export default function Customers() {
  return (
    <div>
      {/* <Header /> */}
      <div className={style.container}>
        <div className={style.header}>Header</div>
        <div className={style.menu}>Menu</div>
        <div className={style.content}>Content</div>
        <div className={style.footer}>Footer</div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
