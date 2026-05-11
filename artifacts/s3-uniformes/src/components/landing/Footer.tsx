import React from "react";
import { SiInstagram, SiTiktok, SiWhatsapp } from "react-icons/si";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import logo from "@/assets/s3-logo.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-12 border-t border-border mt-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          
          <div className="flex flex-col items-center md:items-start gap-3">
            <img src={logo} alt="S-3 Uniformes" className="h-20 md:h-24 w-auto select-none" />
            <p className="text-muted-foreground font-medium uppercase tracking-widest text-sm">
              Uniformes de Fútbol — Colombia
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-white hover:text-primary hover:border-primary transition-colors"
            >
              <SiInstagram size={20} />
            </a>
            <a 
              href={buildWhatsAppLink("Hola S-3, me gustaría hacer una consulta.")} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-white hover:text-primary hover:border-primary transition-colors"
            >
              <SiWhatsapp size={22} />
            </a>
            <a 
              href="https://tiktok.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-white hover:text-primary hover:border-primary transition-colors"
            >
              <SiTiktok size={20} />
            </a>
          </div>

        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} S-3 Uniformes. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
