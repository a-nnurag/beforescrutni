"use client";
import React, { useEffect } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [clientWindowHeight, setClientWindowHeight] = useState(0);
  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  const handleNavBar = () => {
    if (clientWindowHeight != 0) {
      setBackgroundTransparacy(1);
    } else {
      setBackgroundTransparacy(0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    window.addEventListener("scroll", handleNavBar);
    return () => window.removeEventListener("scroll", handleNavBar);
  });

  return (
    <div>
      <header
        className="w-full  fixed top-0 left-0 z-10 flex justify-between align-middle m-30"
        style={{
          background: `rgba(255, 255, 255, ${backgroundTransparacy})`,
        }}
      >
        {/* LOGO */}
        <div>
          <Link href="/" className="text-2xl text-cyan-600 font-bold">
            <Image
              src="/logo.png"
              height={100}
              width={200}
              alt="logo"
              className={styles.logo}
            />
          </Link>
        </div>

        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            navbar ? "p-12 md:p-0 block" : "hidden"
          }`}
        >
          <nav className="h-screen md:h-auto items-center justify-center md:flex   ">
            <div className="pb-6 text-xl  py-2 md:px-6 text-center   hover:text-black text-black  md:hover:text-black ">
              <Link href="/" onClick={() => setNavbar(!navbar)}>
                Home
              </Link>
            </div>
            <div className="pb-6 text-xl  py-2 md:px-6 text-center   hover:text-black text-black md:hover:text-black ">
              <Link href="#aboutus" onClick={() => setNavbar(!navbar)}>
                About
              </Link>
            </div>
            <div className="pb-6 text-xl  py-2 md:px-6 text-center   hover:text-black text-black md:hover:text-black ">
              <Link href="#gallery" onClick={() => setNavbar(!navbar)}>
                Gallery
              </Link>
            </div>
            <div className="pb-6 text-xl  py-2 md:px-6 text-center   hover:text-black text-black md:hover:text-black ">
              <Link href="#ourteam" onClick={() => setNavbar(!navbar)}>
                Team
              </Link>
            </div>
            <div className="pb-6 text-xl  py-2 md:px-6 text-center   hover:text-black text-black md:hover:text-black ">
              <Link href="#initiative" onClick={() => setNavbar(!navbar)}>
                Initiative
              </Link>
            </div>
            <div className="pb-6 text-xl  py-2 md:px-6 text-center   hover:text-black text-black md:hover:text-black ">
              <Link href="#contactus" onClick={() => setNavbar(!navbar)}>
                Contact us
              </Link>
            </div>
          </nav>
        </div>

        {/* HAMBURGER MENU FOR MOBILE */}
        <div className="md:hidden">
          <button
            className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border sticky"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <ClearIcon fontSize="large" />
            ) : (
              <MenuIcon fontSize="large" />
            )}
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
