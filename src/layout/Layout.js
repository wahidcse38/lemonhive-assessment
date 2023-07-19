import React from "react";

import { Inter } from "next/font/google";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

function Layout({ children }) {
  return (
    <div className={`${inter.className}`}>
      <Hero />
      <main className="container px-5">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
