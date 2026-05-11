import React from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Products } from "@/components/landing/Products";
import { NuestraPatria } from "@/components/landing/NuestraPatria";
import { EstampadosNotice } from "@/components/landing/EstampadosNotice";
import { Benefits } from "@/components/landing/Benefits";
import { Personalization } from "@/components/landing/Personalization";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <NuestraPatria />
        <EstampadosNotice />
        <Benefits />
        <Personalization />
      </main>
      <Footer />
    </div>
  );
}
