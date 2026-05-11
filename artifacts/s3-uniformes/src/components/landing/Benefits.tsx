import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, PenTool, PiggyBank } from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      icon: ShieldCheck,
      title: "Calidad Garantizada",
      description: "Telas premium, escudos detallados y durabilidad para aguantar 90 minutos y más."
    },
    {
      icon: PenTool,
      title: "Personalización",
      description: "Agrega tu nombre, número y escudo. Viste tu propia identidad."
    },
    {
      icon: PiggyBank,
      title: "Precios Accesibles",
      description: "Equipa a todo tu equipo sin romper el banco. Descuentos por mayor."
    }
  ];

  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-wider mb-4">
            Por qué elegirnos
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <benefit.icon size={32} />
              </div>
              <h3 className="text-xl font-display uppercase tracking-wide text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
