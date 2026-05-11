import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

import jugJuniorLocal from "@assets/WhatsApp_Image_2026-04-29_at_7.56.37_PM_1777519000276.jpeg";
import jugJuniorAlternativa from "@assets/WhatsApp_Image_2026-04-29_at_7.56.43_PM_1777519000277.jpeg";
import juniorAlternativa2026 from "@assets/Junior visitante 2026.jpeg";
import colombiaMangaLarga2026 from "@assets/Camisa manga larga mundial 2026.jpeg";
import jugColombiaVisitanteAmarilla from "@assets/WhatsApp_Image_2026-04-29_at_7.50.43_PM_1777519000273.jpeg";
import colombiaEntrenamientoDuo from "@assets/WhatsApp_Image_2026-04-29_at_7.56.35_PM_1777517290461.jpeg";
import colombiaEntrenamientoBlanco from "@assets/WhatsApp_Image_2026-04-29_at_7.56.36_PM_(1)_1777517290463.jpeg";
import colombiaRetro1990 from "@assets/WhatsApp_Image_2026-04-29_at_7.56.36_PM_(2)_1777517290464.jpeg";
import colombiaEntrenamientoAzul from "@assets/WhatsApp_Image_2026-04-29_at_7.56.36_PM_1777517290465.jpeg";
import juniorAstros10 from "@assets/WhatsApp_Image_2026-04-29_at_7.56.37_PM_(1)_1777517290467.jpeg";
import juniorLocal from "@assets/WhatsApp_Image_2026-04-29_at_7.56.37_PM_(2)_1777517290468.jpeg";
import juniorPoloBlanco from "@assets/WhatsApp_Image_2026-04-29_at_7.56.37_PM_(3)_1777517290468.jpeg";
import juniorPoloNegro from "@assets/WhatsApp_Image_2026-04-29_at_7.56.38_PM_(1)_1777517290469.jpeg";
import juniorRetroAguilaRayas from "@assets/WhatsApp_Image_2026-04-29_at_7.56.38_PM_(2)_1777517290470.jpeg";
import juniorRetroAguilaPin from "@assets/WhatsApp_Image_2026-04-29_at_7.56.38_PM_(3)_1777517290471.jpeg";
import juniorRetroAguilaCuelloAzul from "@assets/WhatsApp_Image_2026-04-29_at_7.56.38_PM_1777517290472.jpeg";
import colombiaTerceraAzul from "@assets/WhatsApp_Image_2026-04-29_at_7.56.39_PM_(1)_1777517290472.jpeg";
import juniorAdidasBlanco from "@assets/WhatsApp_Image_2026-04-29_at_7.56.39_PM_1777517290473.jpeg";
import juniorPastasMuneca from "@assets/WhatsApp_Image_2026-04-29_at_7.56.40_PM_(1)_1777517290474.jpeg";
import juniorPoloAmarillo from "@assets/WhatsApp_Image_2026-04-29_at_7.56.41_PM_1777517980060.jpeg";
import juniorChaquetaNegra from "@assets/WhatsApp_Image_2026-04-29_at_7.56.43_PM_(2)_1777517980067.jpeg";
import juniorEntrenamientoBlanco from "@assets/WhatsApp_Image_2026-04-29_at_7.56.43_PM_1777517980068.jpeg";
import juniorRetroReebok from "@assets/WhatsApp_Image_2026-04-29_at_7.56.44_PM_(1)_1777517980070.jpeg";
import juniorChaquetaBlanca from "@assets/WhatsApp_Image_2026-04-29_at_7.56.44_PM_1777517980071.jpeg";

const COLOMBIA_YELLOW = "#FCD116";
const COLOMBIA_BLUE = "#003893";
const COLOMBIA_RED = "#CE1126";

interface PatriaProduct {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
  fit?: "cover" | "contain";
}

const products: PatriaProduct[] = [
  { id: "p27", name: "Junior alternativa 2026", description: "Nueva camiseta alternativa del Junior de Barranquilla edición 2026.", imageSrc: juniorAlternativa2026 },
  { id: "p25", name: "Junior local 2026 con publicidad", description: "Adidas versión jugador rojiblanca con patrocinadores completos.", imageSrc: jugJuniorLocal },
  { id: "p26", name: "Junior alternativa verde 2025 con publicidad", description: "Adidas versión jugador verde y rojo con efecto puntos halftone y patrocinadores.", imageSrc: jugJuniorAlternativa },
  { id: "p28", name: "Colombia local mundial 2026", description: "Adidas Climacool versión jugador. Amarilla con bandas tricolor en hombros y escudo FCF.", imageSrc: jugColombiaVisitanteAmarilla },
  { id: "p24", name: "Colombia manga larga Mundial 2026", description: "Camiseta amarilla manga larga de la Selección Colombia, edición Mundial 2026.", imageSrc: colombiaMangaLarga2026 },
  { id: "p4", name: "Selección Colombia Tercera Azul", description: "Azul cielo con detalles azul oscuro y amarillo. Adidas Originals. Estampado tradicional colombiano.", imageSrc: colombiaTerceraAzul },
  { id: "p5", name: "Selección Colombia Retro 1990", description: "La icónica del Mundial Italia 90. Amarilla con detalles vinotinto y azul Adidas. Edición clásica Climacool.", imageSrc: colombiaRetro1990 },
  { id: "p6", name: "Conjunto Entrenamiento Selección Blanco", description: "Esqueleto blanco con escudo FCF, patrocinador Águila y BetPlay. Pantaloneta azul oscuro con franjas rojas.", imageSrc: colombiaEntrenamientoBlanco },
  { id: "p7", name: "Conjunto Entrenamiento Selección Azul", description: "Esqueleto azul oscuro con vivos amarillos, patrocinador Águila y BetPlay. Pantaloneta a juego.", imageSrc: colombiaEntrenamientoAzul },
  { id: "p8", name: "Camisetas Entrenamiento Selección (Duo)", description: "Camisetas blancas y azul oscuro Adidas con escudo FCF, vivos rojos y amarillos. Línea entrenamiento oficial.", imageSrc: colombiaEntrenamientoDuo },
  { id: "p9", name: "Junior de Barranquilla Local", description: "La clásica rojiblanca a rayas con escudo Junior. Adidas. Pantaloneta azul oscuro. Liga BetPlay.", imageSrc: juniorLocal },
  { id: "p11", name: "Junior Visitante Adidas Blanco", description: "Camiseta blanca Adidas con patrocinadores BetPlay, Águila y Ron Viejo de Caldas. Escudo Junior bordado.", imageSrc: juniorAdidasBlanco },
  { id: "p12", name: "Junior Polo Blanco", description: "Versión polo blanca con detalles azul oscuro y rojo. Adidas Climacool. Estilo casual oficial.", imageSrc: juniorPoloBlanco },
  { id: "p13", name: "Junior Polo Negro", description: "Versión polo negra con escudo Junior y detalles grises. Adidas Climacool. Edición elegante.", imageSrc: juniorPoloNegro },
  { id: "p14", name: "Junior Retro Astros #10", description: "Retro blanca con cuello rojo, dorsal #10 Astros y patrocinador Cerveza Águila. Edición coleccionista.", imageSrc: juniorAstros10 },
  { id: "p15", name: "Junior Retro Cerveza Águila Rayas", description: "Retro a rayas rojiblancas con dorsal #10 Zodium. Patrocinador Cerveza Águila. Cuello azul oscuro.", imageSrc: juniorRetroAguilaRayas },
  { id: "p16", name: "Junior Retro Pinstripes Águila", description: "Retro blanca con líneas rojas finas, dorsal #10 Zodium y patrocinador Cerveza Águila. Cuello polo azul.", imageSrc: juniorRetroAguilaPin },
  { id: "p17", name: "Junior Retro Águila Cuello Azul", description: "Retro blanca clásica con cuello azul oscuro, dorsal #10 y patrocinador Cerveza Águila. Adidas.", imageSrc: juniorRetroAguilaCuelloAzul },
  { id: "p18", name: "Junior Especial Pastas La Muñeca", description: "Edición especial rojiblanca con patrocinador Pastas La Muñeca. Marca Runic. Coleccionable Junior.", imageSrc: juniorPastasMuneca },
  { id: "p19", name: "Junior Polo Amarillo Adidas", description: "Polo amarillo Adidas con escudo Junior y patrocinadores BetPlay, Águila y Ron Viejo de Caldas. Aeroready.", imageSrc: juniorPoloAmarillo },
  { id: "p20", name: "Junior Chaqueta Negra Aeroready", description: "Chaqueta deportiva negra Adidas con cremallera, escudo Junior bordado y franjas blancas en hombros. Aeroready.", imageSrc: juniorChaquetaNegra },
  { id: "p21", name: "Junior Entrenamiento Blanca", description: "Camiseta de entrenamiento blanca Adidas con franjas negras, escudo Junior y patrocinadores BetPlay, Águila y Ron Caldas.", imageSrc: juniorEntrenamientoBlanco },
  { id: "p22", name: "Junior Retro Reebok Cerveza Águila #10", description: "Retro Reebok rayas rojiblancas con cuello azul oscuro, dorsal #10 y patrocinador Cerveza Águila. Edición coleccionista.", imageSrc: juniorRetroReebok },
  { id: "p23", name: "Junior Chaqueta Blanca Aeroready", description: "Chaqueta deportiva blanca Adidas con cremallera, escudo Junior bordado y detalles grises en costados. Aeroready.", imageSrc: juniorChaquetaBlanca },
];

function PatriaCard({ product, index }: { product: PatriaProduct; index: number }) {
  const message = `Hola S-3, me interesa la camisa ${product.name} de la sección Nuestra Patria. ¿Me pasas el precio y disponibilidad?`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: Math.min(index * 0.05, 0.4) }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative bg-card border border-border/50 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 glow-shadow"
      data-testid={`card-patria-${product.id}`}
    >
      {/* Top tricolor stripe */}
      <div className="absolute top-0 left-0 right-0 h-1 z-10 flex">
        <div className="flex-1" style={{ backgroundColor: COLOMBIA_YELLOW }} />
        <div className="flex-1" style={{ backgroundColor: COLOMBIA_BLUE }} />
        <div className="flex-1" style={{ backgroundColor: COLOMBIA_RED }} />
      </div>

      <div className="aspect-[3/4] overflow-hidden relative bg-black/50">
        <img
          src={product.imageSrc}
          alt={product.name}
          className={`w-full h-full ${product.fit === "contain" ? "object-contain p-4" : "object-cover"} transition-transform duration-700 group-hover:scale-110 opacity-95 group-hover:opacity-100`}
        />
        {product.fit !== "contain" && (
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
        )}

        {/* Precio por WhatsApp badge */}
        <div className="absolute top-4 right-4 bg-background/85 backdrop-blur-sm border border-primary/40 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
          <MessageCircle className="h-3.5 w-3.5 text-primary" />
          <span className="text-xs font-display font-bold text-primary uppercase tracking-wider">Precio por WhatsApp</span>
        </div>
      </div>

      <div className="p-5 flex flex-col h-[180px]">
        <h3 className="text-xl font-display tracking-wide uppercase text-white mb-2">{product.name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 flex-grow">{product.description}</p>

        <Button asChild className="w-full mt-4 font-bold bg-primary/10 text-primary hover:bg-primary hover:text-black border border-primary/20">
          <a href={buildWhatsAppLink(message)} target="_blank" rel="noopener noreferrer" data-testid={`button-whatsapp-${product.id}`}>
            <MessageCircle className="mr-2 h-4 w-4" />
            Cotizar por WhatsApp
          </a>
        </Button>
      </div>
    </motion.div>
  );
}

export function NuestraPatria() {
  return (
    <section id="nuestra-patria" className="py-20 md:py-32 relative overflow-hidden">
      {/* Decorative tricolor bands behind the section */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.07]">
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ backgroundColor: COLOMBIA_YELLOW }}
        />
        <div
          className="absolute top-1/3 -left-40 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{ backgroundColor: COLOMBIA_BLUE }}
        />
        <div
          className="absolute -bottom-32 right-1/4 w-[450px] h-[450px] rounded-full blur-3xl"
          style={{ backgroundColor: COLOMBIA_RED }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div className="flex-1">
            {/* Tricolor bar above title */}
            <div className="flex gap-1 mb-4">
              <div className="h-2 w-10 rounded-sm" style={{ backgroundColor: COLOMBIA_YELLOW }} />
              <div className="h-2 w-10 rounded-sm" style={{ backgroundColor: COLOMBIA_BLUE }} />
              <div className="h-2 w-10 rounded-sm" style={{ backgroundColor: COLOMBIA_RED }} />
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-wider">
              <span className="text-white">Nuestra </span>
              <span className="bg-gradient-to-r from-[#FCD116] via-[#003893] to-[#CE1126] bg-clip-text text-transparent">Patria</span>
            </h2>

            <div className="flex items-center gap-3 mt-4">
              <div className="h-1 w-20 bg-primary rounded-full" />
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
                Selección Colombia · Junior de Barranquilla
              </p>
            </div>

            <p className="text-base text-muted-foreground mt-4 max-w-2xl">
              Vestimos los colores que nos representan. Camisetas oficiales y retro de la Selección Colombia y del Tiburón. Cotiza tu uniforme directo por WhatsApp.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-secondary/80 backdrop-blur-sm border border-border px-5 py-3 rounded-xl">
            <div className="flex flex-col gap-0.5">
              <div className="h-1.5 w-8 rounded-sm" style={{ backgroundColor: COLOMBIA_YELLOW }} />
              <div className="h-1.5 w-8 rounded-sm" style={{ backgroundColor: COLOMBIA_BLUE }} />
              <div className="h-1.5 w-8 rounded-sm" style={{ backgroundColor: COLOMBIA_RED }} />
            </div>
            <span className="text-sm font-display font-bold text-white uppercase tracking-wider">
              Orgullo<br />Colombiano
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, i) => (
            <PatriaCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
