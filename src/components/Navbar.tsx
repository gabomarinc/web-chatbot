import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { KonsulLogo } from "./KonsulLogo";

interface NavbarProps {
  onCalendlyOpen: () => void;
}

export function Navbar({ onCalendlyOpen }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Solución", href: "#solucion" },
    { label: "Cómo funciona", href: "#como-funciona" },
    { label: "Resultados", href: "#resultados" },
    { label: "Servicios", href: "#servicios" },
    { label: "Precios", href: "#precios" },
    { label: "FAQ", href: "#faq" },
    { label: "Contacto", href: "#contacto" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#0A2540] border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <KonsulLogo size="md" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={onCalendlyOpen} 
              className="bg-[#0A2540] hover:bg-[#0A2540]/90 text-white border border-white/20"
              aria-label="Agendar una cita de 30 minutos con Kônsul Digital"
            >
              Agenda 30 minutos
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[#0A2540] border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Navigation Items */}
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              ))}
              
              {/* CTA Button */}
              <div className="pt-4 border-t border-white/10">
                <Button 
                  onClick={onCalendlyOpen}
                  className="w-full bg-gradient-to-r from-[#00D1C7] to-[#6AE3E1] hover:opacity-90 text-white text-lg py-4"
                  aria-label="Agendar una cita de 30 minutos con Kônsul Digital"
                >
                  Agenda 30 minutos
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
