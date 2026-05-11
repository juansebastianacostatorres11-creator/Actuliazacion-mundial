import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Send } from "lucide-react";

const formSchema = z.object({
  nombre: z.string().min(2, "El nombre es muy corto"),
  ciudad: z.string().min(2, "La ciudad es requerida"),
  producto: z.string().min(1, "Selecciona un producto"),
  mensaje: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function Personalization() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      ciudad: "",
      producto: "",
      mensaje: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    let msg = `Hola S-3, mi nombre es ${data.nombre} de ${data.ciudad}. \nMe interesa: ${data.producto}. \nQuiero personalizar mi pedido.`;
    if (data.mensaje) {
      msg += `\n\nDetalles: ${data.mensaje}`;
    }
    
    window.open(buildWhatsAppLink(msg), "_blank");
  };

  return (
    <section id="personalizacion" className="py-24 relative overflow-hidden">
      {/* Dynamic background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold text-white uppercase tracking-tight mb-6">
              Tu Nombre. <br />
              <span className="text-primary">Tu Leyenda.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Personaliza tu camiseta o el uniforme completo de tu equipo. Agregamos 
              <strong> nombre, número y escudo</strong> con acabados de alta calidad para que te sientas como un profesional.
            </p>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 bg-card border border-border p-4 rounded-xl">
                <div className="text-2xl font-display text-primary">01</div>
                <div className="text-sm font-medium text-white">Elige tu categoría y diseño</div>
              </div>
              <div className="flex items-center gap-4 bg-card border border-border p-4 rounded-xl">
                <div className="text-2xl font-display text-primary">02</div>
                <div className="text-sm font-medium text-white">Dinos el nombre, número y talla</div>
              </div>
              <div className="flex items-center gap-4 bg-card border border-border p-4 rounded-xl">
                <div className="text-2xl font-display text-primary">03</div>
                <div className="text-sm font-medium text-white">Fabricamos y enviamos a tu ciudad</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-display uppercase tracking-wide text-white mb-6">Cotizar Personalización</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="nombre"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre</FormLabel>
                        <FormControl>
                          <Input placeholder="Tu nombre" {...field} className="bg-background" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="ciudad"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ciudad</FormLabel>
                        <FormControl>
                          <Input placeholder="Ej. Bogotá, Medellín" {...field} className="bg-background" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="producto"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Producto de interés</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background">
                            <SelectValue placeholder="Selecciona una categoría" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Camisas Retro">Camisas Retro</SelectItem>
                          <SelectItem value="Uniformes de Entrenamiento">Uniformes de Entrenamiento</SelectItem>
                          <SelectItem value="Camisas Tipo Jugador">Camisas Tipo Jugador</SelectItem>
                          <SelectItem value="Camisas Tipo Fan">Camisas Tipo Fan</SelectItem>
                          <SelectItem value="Uniformes Manga Larga">Uniformes Manga Larga</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="mensaje"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensaje / Detalles (opcional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Nombre y número a estampar, cantidad, etc." 
                          className="resize-none bg-background h-24" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" className="w-full font-bold uppercase tracking-wider h-14">
                  <Send className="mr-2 h-5 w-5" />
                  Enviar por WhatsApp
                </Button>
              </form>
            </Form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
