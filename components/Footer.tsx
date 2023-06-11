import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border border-gray-200 text-center p-2 dark:bg-gray-800 dark:border-gray-700">
      <div className="container mx-auto max-w-screen-xl  md:items-center">
        <span className="text-sm text-center text-gray-500 dark:text-gray-400">
          © 2023{" "}
          <a href="#" className="hover:underline">
            Ecommerce
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
