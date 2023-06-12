"use client";
import React, { Suspense, useState } from "react";
import Loading from "./loading";
import ProtectedRoute from "@/components/ProtectedRoute";
import Sidebar from "@/components/Sidebar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute>
      <Suspense fallback={<Loading />}>
        <div>
          <Sidebar />
        </div>
        <div className="p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            {children}
          </div>
        </div>
      </Suspense>
    </ProtectedRoute>
  );
}

export default Layout;
