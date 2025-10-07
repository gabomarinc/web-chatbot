import { Mail } from "lucide-react";
import { KonsulLogo } from "./KonsulLogo";

export function Footer() {
  return (
    <footer className="bg-[#0A2540] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <KonsulLogo size="lg" />
            <p className="mt-4 text-white/70 max-w-md">
              Soluciones impulsadas por inteligencia artificial para automatizar tu negocio y mejorar la experiencia de tus clientes.
            </p>
            <div className="mt-6 flex items-center gap-2 text-white/70">
              <Mail size={18} />
              <a href="mailto:somos@konsul.digital" className="hover:text-[#00D1C7] transition-colors">
                somos@konsul.digital
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="#solucion" className="hover:text-[#00D1C7] transition-colors">
                  Solución
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#00D1C7] transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#precios" className="hover:text-[#00D1C7] transition-colors">
                  Precios
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-[#00D1C7] transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-white/70 mb-6">
              <li>
                <a href="/politica-privacidad" className="hover:text-[#00D1C7] transition-colors">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="/terminos-condiciones" className="hover:text-[#00D1C7] transition-colors">
                  Términos y condiciones
                </a>
              </li>
            </ul>

          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/60 text-sm">
          <p>© 2025 Kônsul Digital. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
