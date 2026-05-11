import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

interface Product {
  id: string;
  name: string;
  description: string;
  imageSrc?: string;
  price?: string;
}

interface ProductSectionProps {
  id: string;
  title: string;
  price: string;
  products: Product[];
  imageSrc: string;
  customTitle?: React.ReactNode;
}

function ProductCard({ product, price, imageSrc, categoryName }: { product: Product, price: string, imageSrc: string, categoryName: string }) {
  const finalPrice = product.price ?? price;
  const isPriceByWhatsapp = finalPrice.toLowerCase().includes("whatsapp");
  const message = isPriceByWhatsapp
    ? `Hola S-3, me interesa la camisa ${product.name}. ¿Me pasas el precio y disponibilidad?`
    : `Hola S-3, me interesa la camisa ${product.name} (${finalPrice}). ¿Está disponible?`;
  
  return (
    <motion.div 
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative bg-card border border-border/50 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 glow-shadow"
    >
      <div className="aspect-[3/4] overflow-hidden relative bg-black/50">
        <img 
          src={product.imageSrc ?? imageSrc} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
        
        {/* Price badge */}
        {isPriceByWhatsapp ? (
          <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm border border-primary/30 px-3 py-1.5 rounded-lg">
            <span className="text-xs font-display font-bold uppercase tracking-wider text-primary">Precio por WhatsApp</span>
          </div>
        ) : (
          <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm border border-primary/30 px-3 py-1.5 rounded-lg flex items-baseline gap-1">
            <span className="text-xl font-display font-bold text-primary">{finalPrice}</span>
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
}

export function ProductSection({ id, title, price, products, imageSrc, customTitle }: ProductSectionProps) {
  return (
    <section id={id} className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
        >
          <div>
            {customTitle ? customTitle : <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-wider">{title}</h2>}
            <div className="h-1 w-20 bg-primary mt-4 rounded-full" />
          </div>
          <div className="flex items-baseline gap-2 bg-secondary px-6 py-3 rounded-xl border border-border">
            <span className="text-3xl font-display font-bold text-primary">{price}</span>
            <span className="text-sm font-bold text-muted-foreground">COP</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
            >
              <ProductCard 
                product={product} 
                price={price} 
                imageSrc={imageSrc} 
                categoryName={title} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
