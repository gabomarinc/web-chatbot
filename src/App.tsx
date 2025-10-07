import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
// Función para abrir Calendly
const openCalendly = () => {
  if (typeof window !== 'undefined' && window.Calendly) {
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/wearekonsul/30min'
    });
  } else {
    // Fallback: abrir en nueva pestaña
    window.open('https://calendly.com/wearekonsul/30min', '_blank');
  }
};
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./components/ui/accordion";
import { 
  MessageSquare, 
  Calendar, 
  TrendingUp, 
  Zap, 
  Globe, 
  BarChart3, 
  Users, 
  Settings, 
  Database, 
  Target,
  Brain,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Phone,
  Send,
  Camera,
  Smartphone
} from "lucide-react";

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToDemo = () => {
    const element = document.querySelector("#demo");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <header>
        <Navbar onCalendlyOpen={openCalendly} />
      </header>
      
      <Hero 
        onCalendlyOpen={openCalendly} 
        onDemoClick={scrollToDemo}
      />

      {/* Chatbot Value Section */}
      <section id="solucion" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A2540]">
              Kônsul: el agente de IA que trabaja como tu mejor asistente.
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Responde, filtra, agenda y hace seguimiento automático de tus clientes. Sin café, sin descanso.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MessageSquare,
                title: "Automatiza conversaciones reales",
                description: "Atiende a tus clientes con lenguaje natural y respuestas personalizadas.",
                gradient: "from-[#00D1C7] to-[#6AE3E1]"
              },
              {
                icon: Calendar,
                title: "Agenda reuniones con Google Calendar",
                description: "Sin intermediarios: Kônsul coordina citas directamente en tu calendario.",
                gradient: "from-[#6AE3E1] to-[#00D1C7]"
              },
              {
                icon: Brain,
                title: "Aprende y mejora con el uso",
                description: "Cada interacción vuelve al sistema más preciso y eficiente.",
                gradient: "from-[#00D1C7] to-[#0A2540]"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-shadow duration-300 border-2 border-gray-100 hover:border-[#00D1C7]/30">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6`}>
                    <feature.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-[#0A2540]">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Chatbot Section */}
      <section id="demo" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
              Prueba Kônsul en acción
            </h2>
            <p className="text-lg text-gray-600">
              Interactúa con nuestro agente de IA inteligente y descubre cómo puede transformar la atención a tus clientes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-r from-[#00D1C7] to-[#6AE3E1] p-4 flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/60"></div>
                  <div className="w-3 h-3 rounded-full bg-white/60"></div>
                  <div className="w-3 h-3 rounded-full bg-white/60"></div>
                </div>
                <span className="text-white font-semibold text-sm">Chat en vivo con Kônsul</span>
              </div>
              <div className="relative w-full" style={{ height: '700px' }}>
                <iframe 
                  src="https://app.gptmaker.ai/widget/3E76F75BD0A222B0634A96DA1F24A670/iframe" 
                  width="100%" 
                  style={{ height: '100%', minHeight: '700px' }}
                  allow="microphone;" 
                  frameBorder="0"
                  title="Kônsul AI Agente Demo"
                  className="w-full h-full"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-6">
              ¿Te gustó la experiencia? Implementa tu propio agente de IA personalizado.
            </p>
            <Button
              onClick={openCalendly}
              size="lg"
              className="bg-gradient-to-r from-[#00D1C7] to-[#6AE3E1] hover:opacity-90 text-white text-lg px-8 py-4"
            >
              Quiero mi agente de IA
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Integraciones */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A2540]">
              Conecta con todas las plataformas
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Kônsul se integra con los canales que tus clientes ya usan. Sin complicaciones, sin límites.
            </p>
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              <Button
                onClick={openCalendly}
                size="lg"
                className="bg-gradient-to-r from-[#00D1C7] to-[#6AE3E1] hover:opacity-90 text-white text-lg px-8 py-4"
                aria-label="Agendar una cita de 30 minutos con Kônsul Digital"
              >
                Agenda 30 minutos
              </Button>
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Send,
                title: "Telegram",
                description: "Crea un bot en Telegram y conéctalo a tu agente Kônsul.",
                color: "bg-blue-500",
                gradient: "from-blue-400 to-blue-600",
                tagColor: "bg-blue-100 text-blue-700"
              },
              {
                icon: MessageSquare,
                title: "WhatsApp Meta",
                description: "Vincula tu agente al WhatsApp Oficial de Meta vía Cloud API.",
                color: "bg-green-500",
                gradient: "from-green-400 to-green-600",
                tagColor: "bg-green-100 text-green-700"
              },
              {
                icon: Camera,
                title: "Instagram",
                description: "Automatiza los mensajes directos de tu Instagram.",
                color: "bg-pink-500",
                gradient: "from-pink-400 via-purple-500 to-orange-400",
                tagColor: "bg-pink-100 text-pink-700"
              },
              {
                icon: MessageSquare,
                title: "Messenger",
                description: "Atiende a los clientes que envían mensajes en tu Página de Facebook.",
                color: "bg-blue-600",
                gradient: "from-blue-500 to-blue-700",
                tagColor: "bg-indigo-100 text-indigo-700"
              },
              {
                icon: Globe,
                title: "Web Chat",
                description: "Coloca tu agente para atender a los visitantes de tu sitio web.",
                color: "bg-purple-500",
                gradient: "from-purple-400 to-purple-600",
                tagColor: "bg-purple-100 text-purple-700"
              },
              {
                icon: Smartphone,
                title: "SMS",
                description: "Permite que el agente interactúe con los clientes por mensaje de texto.",
                color: "bg-green-600",
                gradient: "from-green-500 to-green-700",
                tagColor: "bg-emerald-100 text-emerald-700"
              }
            ].map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#00D1C7]/30 bg-white">
                  {/* Tag Nuevo */}
                  <div className="absolute top-4 right-4">
                    <span className={`${integration.tagColor} text-xs font-medium px-2 py-1 rounded-full`}>
                      Nuevo
                    </span>
                  </div>
                  
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${integration.gradient} flex items-center justify-center mb-4`}>
                    <integration.icon className="text-white" size={24} />
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3 text-[#0A2540]">{integration.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{integration.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section id="como-funciona" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A2540]">
              Cómo funciona Kônsul.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
            {/* Connecting Line - Desktop */}
            <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-[#00D1C7] via-[#6AE3E1] to-[#00D1C7] opacity-20"></div>

            {[
              {
                step: "01",
                icon: Settings,
                title: "Conecta tus herramientas.",
                description: "CRM, WhatsApp, sitio web y formularios."
              },
              {
                step: "02",
                icon: Zap,
                title: "Automatiza flujos.",
                description: "Captura leads, responde preguntas, agenda y envía recordatorios."
              },
              {
                step: "03",
                icon: BarChart3,
                title: "Mide y mejora.",
                description: "Dashboard con métricas de conversación y rendimiento."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#00D1C7] to-[#6AE3E1] text-white text-2xl font-bold mb-6 relative z-10">
                  {step.step}
                </div>
                <div className="mb-4">
                  <step.icon className="mx-auto text-[#00D1C7]" size={40} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#0A2540]">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A2540]">
              Lo que hace único a nuestro asistente con IA.
            </h2>
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              <Button
                onClick={scrollToDemo}
                size="lg"
                variant="outline"
                className="border-[#00D1C7] text-[#00D1C7] hover:bg-[#00D1C7] hover:text-white text-lg px-8 py-4"
                aria-label="Probar la demo de Kônsul Digital para ver las funcionalidades"
              >
                Probar Demo
              </Button>
            </motion.div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Globe,
                title: "Atención omnicanal",
                description: "Web, WhatsApp, email, redes sociales."
              },
              {
                icon: Target,
                title: "Generación y calificación de leads",
                description: "Identifica oportunidades automáticamente."
              },
              {
                icon: Calendar,
                title: "Integración con Google Calendar",
                description: "Sincronización directa con tu calendario."
              },
              {
                icon: Brain,
                title: "Aprendizaje continuo con IA",
                description: "Mejora con cada conversación."
              },
              {
                icon: BarChart3,
                title: "Panel de analítica en tiempo real",
                description: "Métricas y KPIs siempre actualizados."
              },
              {
                icon: Users,
                title: "Transferencia fluida a humanos",
                description: "Escalamiento inteligente cuando es necesario."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100">
                  <feature.icon className="text-[#00D1C7] mb-4" size={32} />
                  <h3 className="font-bold mb-2 text-[#0A2540]">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados / Testimonios */}
      <section id="resultados" className="py-16 md:py-24 bg-[#0A2540] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Empresas que ya conversan con Kônsul.
            </h2>
          </motion.div>

          {/* KPI Counters */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { value: "+100%", label: "velocidad de respuesta", icon: TrendingUp },
              { value: "–50%", label: "tareas manuales", icon: Zap },
              { value: "+30%", label: "leads calificados", icon: Target }
            ].map((kpi, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#00D1C7]/20 mb-4">
                  <kpi.icon className="text-[#00D1C7]" size={32} />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white">
                  {kpi.value}
                </div>
                <p className="mt-2 text-white/80">{kpi.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "Kônsul cambió nuestra forma de atender clientes. Es rápido, natural y siempre disponible.",
                author: "María González",
                role: "CEO, TechSolutions"
              },
              {
                quote: "Ahora nuestros leads se agendan solos. Kônsul lo hace simple y efectivo.",
                author: "Carlos Martínez",
                role: "Director de Marketing, Innovatech"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 bg-gray-800/50 border border-gray-700">
                  <Sparkles className="text-[#00D1C7] mb-4" size={24} />
                  <p className="text-lg mb-6 italic text-white/90">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00D1C7] to-[#6AE3E1]"></div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.author}</div>
                      <div className="text-sm text-white/70">{testimonial.role}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Otros servicios */}
      <section id="servicios" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A2540]">
              Más soluciones impulsadas por inteligencia artificial.
            </h2>
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              <Button
                onClick={openCalendly}
                size="lg"
                className="bg-gradient-to-r from-[#00D1C7] to-[#6AE3E1] hover:opacity-90 text-white text-lg px-8 py-4"
                aria-label="Agendar una cita de 30 minutos con Kônsul Digital"
              >
                Agenda 30 minutos
              </Button>
            </motion.div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: "Automatización de Procesos",
                description: "Optimizamos operaciones internas y externas."
              },
              {
                icon: Database,
                title: "Data & Analytics",
                description: "Decisiones basadas en datos, no en corazonadas."
              },
              {
                icon: Settings,
                title: "Optimización de Flujos",
                description: "Conectamos tus sistemas para que trabajen juntos."
              },
              {
                icon: Users,
                title: "Consultoría Digital",
                description: "Acompañamos tu transformación tecnológica."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00D1C7] to-[#6AE3E1] flex items-center justify-center mb-4">
                    <service.icon className="text-white" size={24} />
                  </div>
                  <h3 className="font-bold mb-3 text-[#0A2540]">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="precios" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A2540]">
              Planes pensados para crecer con IA.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                description: "Ideal para empresas que quieren comenzar con automatización básica.",
                features: [
                  "Agente de IA básico",
                  "Hasta 1,000 conversaciones/mes",
                  "Integración con sitio web",
                  "Panel de analítica básico",
                  "Soporte por email"
                ]
              },
              {
                name: "Growth",
                description: "Perfecto para equipos que buscan escalar con agentes de IA inteligentes y analítica avanzada.",
                features: [
                  "Agente de IA avanzado",
                  "Conversaciones ilimitadas",
                  "Integración omnicanal",
                  "Google Calendar + CRM + APIs",
                  "Analítica avanzada",
                  "Soporte prioritario 24/7"
                ],
                popular: true
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`p-8 h-full ${plan.popular ? 'border-2 border-[#00D1C7] shadow-xl' : 'border border-gray-100'} relative`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00D1C7] text-white px-4 py-1 rounded-full text-sm font-bold">
                      Más popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-3 text-[#0A2540]">{plan.name}</h3>
                  <p className="text-gray-600 mb-8">{plan.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="text-[#00D1C7] flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    onClick={openCalendly}
                    className={`w-full ${plan.popular ? 'bg-[#00D1C7] hover:bg-[#00D1C7]/90 text-white' : 'bg-[#0A2540] hover:bg-[#0A2540]/90 text-white'}`}
                  >
                    Solicitar propuesta
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A2540]">
              Preguntas frecuentes.
            </h2>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "¿Cuánto tarda la implementación?",
                answer: "La implementación básica toma entre 1-2 semanas. Incluye configuración inicial, integración con tus sistemas y entrenamiento del agente de IA con tu información específica."
              },
              {
                question: "¿Puedo integrarlo con mis herramientas actuales?",
                answer: "Sí, Kônsul se integra con las principales plataformas de CRM, WhatsApp Business, Google Calendar, y la mayoría de herramientas empresariales mediante APIs."
              },
              {
                question: "¿Funciona en varios idiomas?",
                answer: "Actualmente Kônsul funciona en español e inglés de forma nativa. Podemos configurar soporte para otros idiomas según las necesidades de tu negocio."
              },
              {
                question: "¿Cómo se entrenan las respuestas?",
                answer: "El sistema aprende de tu documentación, FAQs existentes y conversaciones previas. Además, nuestro equipo trabaja contigo en la configuración inicial para asegurar respuestas precisas desde el primer día."
              },
              {
                question: "¿Kônsul reemplaza a mi equipo humano?",
                answer: "No, Kônsul complementa a tu equipo. Automatiza tareas repetitivas y califica leads, permitiendo que tu equipo se enfoque en casos complejos y ventas de alto valor. El sistema puede transferir conversaciones a humanos cuando es necesario."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:text-[#00D1C7] text-[#0A2540]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contacto" className="py-16 md:py-24 bg-gradient-to-br from-[#00D1C7] via-[#6AE3E1] to-[#00D1C7] text-[#0A2540]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              ¿Listo para conocer a tu nuevo asistente inteligente?
            </h2>
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Agenda una llamada y descubre cómo Kônsul puede automatizar tus conversaciones y acelerar tus resultados.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={openCalendly}
                size="lg"
                className="bg-[#0A2540] hover:bg-[#0A2540]/90 text-white text-lg px-8 py-6"
              >
                <Phone className="mr-2" size={20} />
                Agenda 30 minutos
              </Button>
              <Button
                onClick={scrollToDemo}
                size="lg"
                variant="outline"
                className="border-[#0A2540]/30 text-[#0A2540] hover:bg-[#0A2540]/10 text-lg px-8 py-6 bg-white"
              >
                Probar Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <footer>
        <Footer />
      </footer>

      {/* Sticky Mobile CTA */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: isVisible ? 0 : 100 }}
        className="fixed bottom-0 left-0 right-0 p-4 bg-[#0A2540] text-white shadow-2xl lg:hidden z-40"
      >
        <Button
          onClick={openCalendly}
          className="w-full bg-gradient-to-r from-[#00D1C7] to-[#6AE3E1] hover:opacity-90 text-white"
          size="lg"
        >
          📅 Agenda 30 minutos con Kônsul
        </Button>
      </motion.div>

    </div>
  );
}
