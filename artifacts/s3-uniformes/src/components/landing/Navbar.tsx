import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/s3-logo.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Retro", href: "#retro" },
    { name: "Entrenamiento", href: "#entrenamiento" },
    { name: "Jugador", href: "#jugador" },
    { name: "Fan", href: "#fan" },
    { name: "Manga Larga", href: "#manga-larga" },
    { name: "Nuestra Patria", href: "#nuestra-patria" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <img
            src={logo}
            alt="S-3 Uniformes"
            className="h-10 md:h-12 w-auto cursor-pointer select-none"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Button asChild className="font-bold text-black uppercase tracking-wide">
            <a href="#personalizacion">Pedir Ahora</a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-background/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-8 lg:hidden animate-in fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-display tracking-wide text-white hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button asChild size="lg" className="font-bold text-black uppercase tracking-wide mt-4">
            <a href="#personalizacion" onClick={() => setMobileMenuOpen(false)}>Pedir Ahora</a>
          </Button>
        </div>
      )}
    </header>
  );
}
