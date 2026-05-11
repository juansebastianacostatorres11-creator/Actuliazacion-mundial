import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Trophy } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";
import { ProductSection } from "./ProductSection";
import liverpoolLocal2026 from "@assets/Liverpool local 2026.jpeg";
import realMadridTercera from "@assets/Real madrid tercera equipacion.jpg";
import portAlt26 from "@assets/Portugal Alternativa Mundial 2026.png";
import portLoc26 from "@assets/Portugal Local Mundial 2026.jpeg";
import portVis26 from "@assets/Portugal Visitante Mundial 2026.png";
import espLoc26 from "@assets/España Local Mundial 2026.jpeg";
import espVis26 from "@assets/España Visitante mundial 2026.jpeg";
import argLoc26 from "@assets/Argentina Local mindial 2026.jpeg";
import argVis26 from "@assets/Argentina Visitante Mundial 2026.jpeg";
import ingLoc26 from "@assets/Inglaterra Local Mundial 2026.jpeg";
import aleLoc26 from "@assets/Alemania Local mundial 2026.jpeg";
import aleVis26 from "@assets/Alemania Visitante Mundial 2026.jpeg";
import belLoc26 from "@assets/Belgica Local mundial 2026.jpeg";
import fraLoc26 from "@assets/Francia Local Mundial 2026.jpeg";
import braLoc26 from "@assets/Brasil Local Mundial 2026.jpeg";
import braVis26 from "@assets/Brasil Visitante mundial 2026.jpeg";
import acMilanVisitante from "@/assets/fan/ac-milan-visitante.jpg";
import ajaxAlternativa from "@/assets/fan/ajax-alternativa.jpg";
import ajaxVisitante from "@/assets/fan/ajax-visitante.jpg";
import alemaniaMundial from "@/assets/fan/alemania-mundial.jpg";
import barcaEntrenamiento from "@/assets/fan/barca-entrenamiento.jpg";
import barcaVisitante from "@/assets/fan/barca-visitante.jpg";
import bayernTercera from "@/assets/fan/bayern-tercera.jpg";
import bayernClasica from "@/assets/fan/bayern-clasica.jpg";
import bayernLocal from "@/assets/fan/bayern-local.jpg";
import bayernVisitante from "@/assets/fan/bayern-visitante.jpg";
import realBetis from "@/assets/fan/real-betis.jpg";
import bocaClasica from "@/assets/fan/boca-clasica.jpg";
import celtic from "@/assets/fan/celtic.jpg";
import chelseaRetro from "@/assets/fan/chelsea-retro.jpg";
import retroManUnited2008 from "@assets/WhatsApp_Image_2026-04-29_at_4.56.43_PM_1777518805852.jpeg";
import retroSantos2012 from "@assets/WhatsApp_Image_2026-04-29_at_4.53.48_PM_1777518805857.jpeg";
import jugArgentinaLocal from "@assets/WhatsApp_Image_2026-04-29_at_7.56.35_PM_(1)_1777519000274.jpeg";
import jugPortugalNegra from "@assets/WhatsApp_Image_2026-04-29_at_7.56.44_PM_1777519000278.jpeg";
import jugBayernLocal from "@assets/WhatsApp_Image_2026-04-29_at_7.56.35_PM_(2)_1777519068260.jpeg";
import jugRealMadridLocal from "@assets/WhatsApp_Image_2026-04-29_at_7.56.35_PM_1777519068261.jpeg";
import jugBrasilEntrenamiento from "@assets/WhatsApp_Image_2026-04-29_at_7.56.36_PM_1777519068263.jpeg";
import jugBarcelonaKobe from "@assets/WhatsApp_Image_2026-04-29_at_7.56.41_PM_(1)_1777519068264.jpeg";
import jugBocaAniversario from "@assets/WhatsApp_Image_2026-04-29_at_7.56.41_PM_1777519068265.jpeg";
import jugBarcelonaNaranja from "@assets/WhatsApp_Image_2026-04-29_at_7.56.42_PM_(1)_1777519068266.jpeg";
import jugRealMadridNegra from "@assets/WhatsApp_Image_2026-04-29_at_7.56.42_PM_1777519155911.jpeg";
import espana from "@/assets/fan/espana.jpg";
import fluminense from "@/assets/fan/fluminense.jpg";
import italiaMundial from "@/assets/fan/italia-mundial.jpg";
import liverpoolVerde from "@/assets/fan/liverpool-verde.jpg";
import liverpoolVisitante from "@/assets/fan/liverpool-visitante.jpg";
import liverpoolLocal from "@/assets/fan/liverpool-local.jpg";
import manCityVisitante from "@/assets/fan/man-city-visitante.jpg";
import napoli from "@/assets/fan/napoli.jpg";
import newcastle from "@/assets/fan/newcastle.jpg";
import psgVisitante from "@/assets/fan/psg-visitante.jpg";
import realMadrid from "@/assets/fan/real-madrid-mbappe.jpg";
import riverPlate from "@/assets/fan/river-plate.jpg";
import roma from "@/assets/fan/roma.jpg";
import santos from "@/assets/fan/santos.jpg";
import flamengoRetro from "@/assets/fan/flamengo-retro.jpg";
import entRealMadridBlanco from "@/assets/entrenamiento/real-madrid-blanco.jpg";
import entRealMadridMorado from "@/assets/entrenamiento/real-madrid-morado.jpg";
import entBayernNegro from "@/assets/entrenamiento/bayern-negro.jpg";
import entInterQatar from "@/assets/entrenamiento/inter-qatar.jpg";
import entBayernBlanco from "@/assets/entrenamiento/bayern-blanco.jpg";
import entLiverpoolAxa from "@/assets/entrenamiento/liverpool-axa.jpg";
import entFlamengoRojo from "@/assets/entrenamiento/flamengo-rojo.jpg";
import entBocaAmarillo from "@/assets/entrenamiento/boca-amarillo.jpg";
import entPalmeirasVerde from "@/assets/entrenamiento/palmeiras-verde.jpg";
import mlBarcelona from "@/assets/manga-larga/barcelona.jpg";
import mlManCity from "@/assets/manga-larga/manchester-city.jpg";
import mlRealMadrid from "@/assets/manga-larga/real-madrid.jpg";
import mlAcMilan from "@/assets/manga-larga/ac-milan.jpg";
import mlPsg from "@/assets/manga-larga/psg.jpg";

export function Products() {
  const [query, setQuery] = useState("");

  const sections = [
    {
      id: "mundial-2026",
      title: "Mundial 2026",
      price: "$75.000",
      imageSrc: "/category-mundial.png",
      customTitle: (
        <div className="flex items-center gap-3 md:gap-4">
          <Trophy className="h-8 w-8 md:h-12 md:w-12 text-[#FFD700] drop-shadow-[0_0_8px_rgba(255,215,0,0.8)]" />
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-wider bg-gradient-to-r from-[#D91A3C] via-[#FFD700] to-[#1A3CD9] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,215,0,0.3)]">
            Mundial 2026
          </h2>
        </div>
      ),
      products: [
        { id: "m26-1", name: "Portugal Alternativa Mundial 2026", description: "Camiseta alternativa de la selección de Portugal para el Mundial 2026.", imageSrc: portAlt26 },
        { id: "m26-2", name: "Portugal Local Mundial 2026", description: "Camiseta local de la selección de Portugal para el Mundial 2026.", imageSrc: portLoc26 },
        { id: "m26-3", name: "Portugal Visitante Mundial 2026", description: "Camiseta visitante de la selección de Portugal para el Mundial 2026.", imageSrc: portVis26 },
        { id: "m26-4", name: "España Local Mundial 2026", description: "Camiseta local de la selección de España para el Mundial 2026.", imageSrc: espLoc26 },
        { id: "m26-5", name: "España Visitante Mundial 2026", description: "Camiseta visitante de la selección de España para el Mundial 2026.", imageSrc: espVis26 },
        { id: "m26-6", name: "Argentina Local Mundial 2026", description: "Camiseta local de la selección de Argentina para el Mundial 2026.", imageSrc: argLoc26 },
        { id: "m26-7", name: "Argentina Visitante Mundial 2026", description: "Camiseta visitante de la selección de Argentina para el Mundial 2026.", imageSrc: argVis26 },
        { id: "m26-8", name: "Inglaterra Local Mundial 2026", description: "Camiseta local de la selección de Inglaterra para el Mundial 2026.", imageSrc: ingLoc26 },
        { id: "m26-9", name: "Alemania Local Mundial 2026", description: "Camiseta local de la selección de Alemania para el Mundial 2026.", imageSrc: aleLoc26 },
        { id: "m26-10", name: "Alemania Visitante Mundial 2026", description: "Camiseta visitante de la selección de Alemania para el Mundial 2026.", imageSrc: aleVis26 },
        { id: "m26-11", name: "Bélgica Local Mundial 2026", description: "Camiseta local de la selección de Bélgica para el Mundial 2026.", imageSrc: belLoc26 },
        { id: "m26-12", name: "Francia Local Mundial 2026", description: "Camiseta local de la selección de Francia para el Mundial 2026.", imageSrc: fraLoc26 },
        { id: "m26-13", name: "Brasil Local Mundial 2026", description: "Camiseta local de la selección de Brasil para el Mundial 2026.", imageSrc: braLoc26, price: "$90.000" },
        { id: "m26-14", name: "Brasil Visitante Mundial 2026", description: "Camiseta visitante de la selección de Brasil para el Mundial 2026.", imageSrc: braVis26 },
      ]
    },
    {
      id: "retro",
      title: "Camisas Retro",
      price: "$120.000",
      imageSrc: "/category-retro.png",
      products: [
        { id: "r5", name: "Retro Manchester United Final Moscow 2008 #7 Ronaldo", description: "Roja Nike, AIG. Edición conmemorativa Final UEFA Champions League Moscú 2008. Dorsal #7 Ronaldo.", imageSrc: retroManUnited2008, price: "$100.000" },
        { id: "r6", name: "Retro Santos FC Centenário 2012", description: "Blanca Nike Dri-Fit, patrocinador Banco BMG. Edición 1912-2012, 100 años del Peixe. Mangas con SEARA y NETSHOES.", imageSrc: retroSantos2012, price: "$100.000" },
      ]
    },
    {
      id: "entrenamiento",
      title: "Uniformes de Entrenamiento",
      price: "$75.000",
      imageSrc: "/category-entrenamiento.png",
      products: [
        { id: "e1", name: "Real Madrid Entrenamiento Blanco", description: "Camiseta sin mangas blanca con escudo morado y pantaloneta morada. Adidas Originals.", imageSrc: entRealMadridBlanco },
        { id: "e2", name: "Real Madrid Entrenamiento Morado", description: "Conjunto morado oscuro Adidas. Patrocinador Emirates Fly Better. Tela transpirable Aeroready.", imageSrc: entRealMadridMorado },
        { id: "e3", name: "Bayern Múnich Entrenamiento Negro", description: "Camiseta sin mangas negra con detalles rojos. Pantaloneta negra a juego. FC Bayern.", imageSrc: entBayernNegro },
        { id: "e4", name: "Inter Milán Entrenamiento", description: "Conjunto gris claro con patrocinador Qatar Airways. Pantaloneta azul oscuro Nike.", imageSrc: entInterQatar },
        { id: "e6", name: "Bayern Múnich Entrenamiento Blanco", description: "Camiseta blanca con vivos rojos y pantaloneta negra con franjas rojas. Edición elegante.", imageSrc: entBayernBlanco },
        { id: "e7", name: "Liverpool Entrenamiento AXA", description: "Camiseta blanca con patrocinador AXA en rojo y pantaloneta negra con franjas rojas.", imageSrc: entLiverpoolAxa },
        { id: "e8", name: "Flamengo Entrenamiento", description: "Camiseta roja con escudo CRF blanco. Pantaloneta negra con franjas blancas Adidas Originals.", imageSrc: entFlamengoRojo },
        { id: "e9", name: "Boca Juniors Entrenamiento Amarillo", description: "Camiseta amarilla con patrocinador Betsson y pantaloneta azul oscuro con vivos amarillos.", imageSrc: entBocaAmarillo },
        { id: "e10", name: "Palmeiras Entrenamiento", description: "Conjunto verde Puma con estampado en triángulos. Patrocinador Foundation. Verdão.", imageSrc: entPalmeirasVerde },
      ]
    },
    {
      id: "jugador",
      title: "Camisas Tipo Jugador",
      price: "$100.000",
      imageSrc: "/category-jugador.png",
      products: [
        { id: "j9", name: "Portugal Visitante Negra #7 Jugador", description: "Puma DryCell versión jugador. Negra con escudos sublimados, dorsal #7 dorado y detalles tricolor.", imageSrc: jugPortugalNegra, price: "Por WhatsApp" },
        { id: "j11", name: "Real Madrid Local Jugador", description: "Adidas Aeroready versión jugador. Blanca con franjas negras y vivos amarillos. Patrocinador Emirates Fly Better.", imageSrc: jugRealMadridLocal, price: "Por WhatsApp" },
        { id: "j13", name: "Barcelona Visitante Crema Kobe Jugador", description: "Nike Engineered versión jugador. Crema con detalles morados, logo Mamba en homenaje a Kobe Bryant. Spotify.", imageSrc: jugBarcelonaKobe, price: "Por WhatsApp" },
        { id: "j14", name: "Boca Juniors 120 Aniversario Jugador", description: "Adidas Aeroready versión jugador. Azul y amarillo, escudo CABJ aniversario 1905-2025. Patrocinador Betsson.", imageSrc: jugBocaAniversario, price: "Por WhatsApp" },
        { id: "j15", name: "Barcelona Tercera Naranja Jugador", description: "Nike Dri-Fit ADV versión jugador. Naranja vibrante con detalles azul marino, escudo FCB y Spotify. Parche UEFA Foundation.", imageSrc: jugBarcelonaNaranja, price: "Por WhatsApp" },
        { id: "j16", name: "Real Madrid Alternativa Negra Jugador", description: "Adidas Originals versión jugador. Negra con franjas blancas, escudo plateado RMA y patrocinador Emirates Fly Better.", imageSrc: jugRealMadridNegra, price: "Por WhatsApp" },
      ]
    },
    {
      id: "fan",
      title: "Camisas Tipo Fan",
      price: "$70.000",
      imageSrc: "/category-fan.png",
      products: [
        { id: "f31", name: "Argentina Local 3 Estrellas Fan", description: "Adidas Aeroready versión fan. Rayas celeste y blanco con escudo AFA dorado de 3 estrellas.", imageSrc: jugArgentinaLocal, price: "Por WhatsApp" },
        { id: "f32", name: "Bayern Múnich Local Fan", description: "Adidas Aeroready versión fan. Roja con franjas blancas, T-Mobile y patrocinador Allianz en manga.", imageSrc: jugBayernLocal, price: "Por WhatsApp" },
        { id: "f33", name: "Brasil Entrenamiento Negra Fan", description: "Jordan negra con patrocinadores Itaú, Vivo y Guaraná Antarctica. Escudo CBF a color. Selección Brasileira.", imageSrc: jugBrasilEntrenamiento, price: "Por WhatsApp" },
        { id: "f34", name: "Liverpool Local 2026", description: "Nueva camiseta local del Liverpool FC edición 2026.", imageSrc: liverpoolLocal2026 },
        { id: "f35", name: "Real Madrid Tercera Equipación", description: "Tercera camiseta del Real Madrid. Elegancia y estilo único.", imageSrc: realMadridTercera },
        { id: "f1", name: "AC Milan Visitante", description: "Conjunto amarillo con cuello verde. Patrocinador Emirates Fly Better. Camisa + pantaloneta.", imageSrc: acMilanVisitante },
        { id: "f2", name: "Ajax Alternativa", description: "Edición especial negra con ondas blancas y detalles dorados. Conjunto completo.", imageSrc: ajaxAlternativa },
        { id: "f3", name: "Ajax Visitante", description: "Diseño crema con detalles vinotinto y azul. Inspirado en clásicos europeos.", imageSrc: ajaxVisitante },
        { id: "f4", name: "Alemania Mundial", description: "Camisa blanca histórica con franja icónica negro-rojo-amarillo. Pantaloneta negra.", imageSrc: alemaniaMundial },
        { id: "f5", name: "Barcelona Entrenamiento", description: "Rosa fucsia con mangas oscuras. Edición Spotify. Conjunto camisa + pantaloneta.", imageSrc: barcaEntrenamiento },
        { id: "f6", name: "Barcelona Visitante", description: "Naranja vibrante con detalles azul marino. Conjunto completo del FCB.", imageSrc: barcaVisitante },
        { id: "f7", name: "Bayern Múnich Tercera", description: "Negro total con detalles dorados y rojos. Patrocinador Allianz. Look elegante.", imageSrc: bayernTercera },
        { id: "f8", name: "Bayern Múnich Clásica 125", description: "Roja edición aniversario 125 años. Detalles dorados y pantaloneta blanca.", imageSrc: bayernClasica },
        { id: "f9", name: "Bayern Múnich Local", description: "La icónica roja con franja blanca central. Patrocinador T-Mobile.", imageSrc: bayernLocal },
        { id: "f10", name: "Bayern Múnich Visitante", description: "Beige con detalles verdes. Edición elegante Bundesliga. Conjunto completo.", imageSrc: bayernVisitante },
        { id: "f11", name: "Real Betis Local", description: "Verdiblanco clásico. Patrocinador GREE. Pantaloneta negra. Tradición sevillana.", imageSrc: realBetis },
        { id: "f12", name: "Boca Juniors Clásica", description: "Azul y amarillo con patrocinador Quilmes. Edición retro de los 2000.", imageSrc: bocaClasica },
        { id: "f13", name: "Celtic FC Local", description: "Las icónicas franjas verdiblancas. Patrocinador Dafabet. Conjunto camisa + pantaloneta.", imageSrc: celtic },
        { id: "f14", name: "Chelsea Retro Visitante", description: "Edición negra con vivos azules y cuello blanco. La clásica de los 2000s.", imageSrc: chelseaRetro },
        { id: "f15", name: "España Local", description: "La Roja. Camisa roja con franjas amarillas y pantaloneta azul oscuro. Selección Española.", imageSrc: espana },
        { id: "f16", name: "Fluminense Local", description: "Tricolor verde, blanco y vinotinto. Patrocinador Superbet. Pantaloneta blanca.", imageSrc: fluminense },
        { id: "f17", name: "Italia Mundial", description: "Azzurra clásica con detalles dorados y pantaloneta blanca. Selección italiana.", imageSrc: italiaMundial },
        { id: "f18", name: "Liverpool Tercera Verde", description: "Verde Adidas Originals con pantaloneta blanca. Edición Standard Chartered.", imageSrc: liverpoolVerde },
        { id: "f19", name: "Liverpool Visitante", description: "Crema con detalles rojos y pantaloneta negra con franjas. Edición Aerorready.", imageSrc: liverpoolVisitante },
        { id: "f20", name: "Liverpool Local", description: "La icónica roja con cuello blanco. Patrocinador Standard Chartered. Conjunto completo.", imageSrc: liverpoolLocal },
        { id: "f22", name: "Manchester City Visitante", description: "Naranja con franja diagonal negro-amarilla. Edición portero. Conjunto camisa + short.", imageSrc: manCityVisitante },
        { id: "f23", name: "Napoli Local", description: "Azul cielo clásico con patrocinador MSC. EA7. Pantaloneta blanca. Serie A.", imageSrc: napoli },
        { id: "f24", name: "Newcastle Visitante", description: "Azul real con detalles naranjas. Patrocinador Sela. Adidas Originals. Premier League.", imageSrc: newcastle },
        { id: "f25", name: "PSG Visitante Retro", description: "Roja con vivos azules. Patrocinador Qatar Airways. Estilo años 2000. Ligue 1.", imageSrc: psgVisitante },
        { id: "f26", name: "Real Madrid Local", description: "La blanca de los Galácticos. Patrocinador Emirates Fly Better. Conjunto camisa + pantaloneta.", imageSrc: realMadrid },
        { id: "f27", name: "River Plate Visitante", description: "Negro con franjas rojas. Patrocinador Betano. Pantaloneta roja. Clásico argentino.", imageSrc: riverPlate },
        { id: "f28", name: "AS Roma Local", description: "Color granate con detalles naranja. Patrocinador Riyadh Season. Serie A italiana.", imageSrc: roma },
        { id: "f29", name: "Santos Visitante", description: "Celeste Umbro tipo polo con cuello. Patrocinador oficial. Edición clásica brasileña.", imageSrc: santos },
        { id: "f30", name: "Flamengo Retro Crema", description: "Edición vintage crema con detalles dorados, vinotinto y negro. Adidas Originals.", imageSrc: flamengoRetro },
      ]
    },
    {
      id: "manga-larga",
      title: "Uniformes Manga Larga",
      price: "$65.000",
      imageSrc: "/category-manga-larga.png",
      products: [
        { id: "m1", name: "Barcelona Manga Larga", description: "Local azulgrana clásica con patrocinador Spotify amarillo. Nike. Diseño icónico FCB.", imageSrc: mlBarcelona },
        { id: "m2", name: "Manchester City Manga Larga", description: "Celeste local con franja diagonal blanca. Patrocinador Etihad Airways. Puma.", imageSrc: mlManCity },
        { id: "m3", name: "Real Madrid Visitante Manga Larga", description: "Azul oscuro con detalles verde lima. Patrocinador Emirates Fly Better. Adidas.", imageSrc: mlRealMadrid },
        { id: "m4", name: "AC Milan Local Manga Larga", description: "Rossonera clásica con escudo Scudetto y patrocinador Emirates. Puma. Serie A.", imageSrc: mlAcMilan },
        { id: "m5", name: "PSG Local Manga Larga", description: "Azul oscuro con franja central roja-blanca. Patrocinador Qatar Airways. Nike. Ligue 1.", imageSrc: mlPsg },
      ]
    }
  ];

  const normalizedQuery = query.trim().toLowerCase();
  const isSearching = normalizedQuery.length > 0;

  const filteredResults = useMemo(() => {
    if (!isSearching) return [];
    const results: { product: { id: string; name: string; description: string; imageSrc?: string; price?: string }, price: string, fallbackImg: string, categoryTitle: string }[] = [];
    for (const section of sections) {
      for (const product of section.products) {
        const haystack = `${product.name} ${product.description}`.toLowerCase();
        if (haystack.includes(normalizedQuery)) {
          const productPrice = (product as { price?: string }).price;
          results.push({
            product,
            price: productPrice ?? section.price,
            fallbackImg: section.imageSrc,
            categoryTitle: section.title,
          });
        }
      }
    }
    return results;
  }, [normalizedQuery, isSearching]);

  return (
    <>
      <div id="catalogo" className="sticky top-[72px] z-30 bg-background/85 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary pointer-events-none" />
            <Input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Busca tu equipo: Barcelona, Real Madrid, Boca, Liverpool..."
              className="pl-12 pr-12 h-12 bg-card/80 border-border/60 focus-visible:ring-primary text-base"
              data-testid="input-search-products"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 h-7 w-7 rounded-full flex items-center justify-center bg-secondary hover:bg-primary hover:text-black transition-colors"
                aria-label="Limpiar búsqueda"
                data-testid="button-clear-search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isSearching ? (
          <motion.section
            key="search-results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-16 md:py-20"
          >
            <div className="container mx-auto px-4 md:px-6">
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white uppercase tracking-wider">
                  Resultados de búsqueda
                </h2>
                <div className="h-1 w-20 bg-primary mt-4 rounded-full" />
                <p className="text-muted-foreground mt-4">
                  {filteredResults.length === 0
                    ? `Sin resultados para "${query}". Prueba con otro nombre de equipo.`
                    : `${filteredResults.length} ${filteredResults.length === 1 ? "camisa encontrada" : "camisas encontradas"} para "${query}"`}
                </p>
              </div>

              {filteredResults.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                  {filteredResults.map(({ product, price, fallbackImg, categoryTitle }, i) => {
                    const isPriceByWhatsapp = price.toLowerCase().includes("whatsapp");
                    const message = isPriceByWhatsapp
                      ? `Hola S-3, me interesa la camisa ${product.name}. ¿Me pasas el precio y disponibilidad?`
                      : `Hola S-3, me interesa la camisa ${product.name} (${price}). ¿Está disponible?`;
                    return (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: Math.min(i * 0.04, 0.4) }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="group relative bg-card border border-border/50 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 glow-shadow"
                        data-testid={`card-search-result-${product.id}`}
                      >
                        <div className="aspect-[3/4] overflow-hidden relative bg-black/50">
                          <img
                            src={product.imageSrc ?? fallbackImg}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                          <div className="absolute top-4 left-4 bg-primary/90 text-black text-xs font-bold uppercase tracking-wider px-2 py-1 rounded">
                            {categoryTitle.replace("Uniformes ", "").replace("Camisas ", "")}
                          </div>
                          {isPriceByWhatsapp ? (
                            <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm border border-primary/30 px-3 py-1.5 rounded-lg">
                              <span className="text-xs font-display font-bold uppercase tracking-wider text-primary">Precio por WhatsApp</span>
                            </div>
                          ) : (
                            <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm border border-primary/30 px-3 py-1.5 rounded-lg flex items-baseline gap-1">
                              <span className="text-xl font-display font-bold text-primary">{price}</span>
                              <span className="text-xs font-bold text-muted-foreground">COP</span>
                            </div>
                          )}
                        </div>
                        <div className="p-5 flex flex-col h-[180px]">
                          <h3 className="text-xl font-display tracking-wide uppercase text-white mb-2">{product.name}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-2 flex-grow">{product.description}</p>
                          <Button asChild className="w-full mt-4 font-bold bg-primary/10 text-primary hover:bg-primary hover:text-black border border-primary/20">
                            <a href={buildWhatsAppLink(message)} target="_blank" rel="noopener noreferrer">
                              <MessageCircle className="mr-2 h-4 w-4" />
                              Pedir por WhatsApp
                            </a>
                          </Button>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </div>
          </motion.section>
        ) : (
          <motion.div
            key="all-sections"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {sections.map((section, index) => (
              <React.Fragment key={section.id}>
                <ProductSection {...section} />
                {index % 2 === 0 && index < sections.length - 1 && (
                  <div className="w-full h-16 bg-gradient-to-b from-transparent to-card/30" style={{ clipPath: "polygon(0 0, 100% 100%, 100% 100%, 0 100%)" }} />
                )}
              </React.Fragment>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
