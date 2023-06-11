'use client'
import { useParams } from "next/navigation";
import React from "react";

export default function SingleCategory() {
  const param = useParams()
  return <div>{param.name}</div>;
}
