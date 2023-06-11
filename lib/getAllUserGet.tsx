import React from "react";

export default async function  getAllUsers() {
  const resutl = await fetch('https://jsonplaceholder.typicode.com/posts/')
  if(!resutl.ok) throw new Error("Faild to data fatch")
  return resutl.json()
}
