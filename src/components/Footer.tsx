import { Linkedin, Twitter, Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0A2540] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold">Kônsul Digital</h3>
            <p className="mt-4 text-white/70 max-w-md">
              Soluciones impulsadas por inteligencia artificial para automatizar tu negocio y mejorar la experiencia de tus clientes.
            </p>
            <div className="mt-6 flex items-center gap-2 text-white/70">
              <Mail size={18} />
              <a href="mailto:hello@konsul.digital" className="hover:text-[#00D1C7] transition-colors">
                hello@konsul.digital
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

            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00D1C7] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00D1C7] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00D1C7] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
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
