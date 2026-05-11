import React from "react";
import { motion } from "framer-motion";
import { Info, Sparkles, ShieldCheck } from "lucide-react";
import bayernEstampados from "@assets/WhatsApp_Image_2026-04-29_at_5.22.08_PM_1777518214462.jpeg";

export function EstampadosNotice() {
  return (
    <section id="estampados" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative overflow-hidden rounded-2xl border border-primary/30 bg-card/80 backdrop-blur-sm glow-shadow"
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-72 md:h-auto min-h-[320px] overflow-hidden">
              <img
                src={bayernEstampados}
                alt="Camisetas Bayern Múnich con estampados, dorsales y parches UEFA Foundation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/95 md:to-card/95" />
              <div className="absolute top-4 left-4 bg-primary text-black text-xs font-display font-bold uppercase tracking-wider px-3 py-1.5 rounded-md">
                Información Importante
              </div>
            </div>

            <div className="p-6 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center">
                  <Info className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white uppercase tracking-wider">
                  Estampados y Parches
                </h2>
              </div>

              <p className="text-base text-muted-foreground leading-relaxed mb-5">
                En algunas camisetas, los <span className="text-white font-bold">estampados</span> (nombre y dorsal) y los <span className="text-white font-bold">parches oficiales</span> (UEFA Champions League, Foundation, escudo de liga, etc.) vienen <span className="text-primary font-bold">por separado</span> y tienen un <span className="text-primary font-bold">valor adicional</span>.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Personaliza tu camisa con el nombre y número de tu jugador favorito.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Parches de torneos oficiales (Champions, Libertadores, Europa League, etc.) disponibles bajo pedido.
                  </p>
                </div>
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                <p className="text-sm text-white">
                  <span className="font-display font-bold uppercase tracking-wider text-primary">Consulta el costo:</span> Pregunta por el valor de los estampados y parches al momento de hacer tu pedido por WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
