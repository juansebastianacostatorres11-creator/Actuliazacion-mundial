import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt="Stadium background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-transparent" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] tracking-tight text-white mb-6 uppercase text-glow">
            Viste como <br />
            <span className="text-primary">un campeón</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
            S-3 — Uniformes de Fútbol para los que juegan en serio. Calidad premium, diseños históricos y la pasión del estadio en cada detalle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="font-bold uppercase tracking-wider text-base h-14 px-8">
              <a href="#retro">Ver Catálogo</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="font-bold uppercase tracking-wider text-base h-14 px-8 border-white text-white hover:bg-white hover:text-black">
              <a href={buildWhatsAppLink("Hola S-3, me gustaría hacer una consulta general.")} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Pedir por WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
}
