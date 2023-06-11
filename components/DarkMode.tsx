"use client";
import { useEffect, useState } from "react";
import { CiDark } from "react-icons/ci";

function Darkmode() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme:dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setDarkMode(!darkMode);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, []);

  const changeTheme = () => {
    localStorage.theme = darkMode ? "light" : "dark";
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <CiDark
      className="text-2xl cursor-pointer dark:text-white text-black"
      onClick={changeTheme}
    />
  );
}

export default Darkmode;
