import { Button } from "./ui/button";
import { MessageSquare, TrendingUp, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface HeroProps {
  onCalendlyOpen: () => void;
  onDemoClick: () => void;
}

// Componente para mensajes animados
function AnimatedMessage({ 
  text, 
  isUser = false, 
  delay = 0, 
  onComplete 
}: { 
  text: string; 
  isUser?: boolean; 
  delay?: number; 
  onComplete?: () => void;
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
          onComplete?.();
        }
      }, 50); // Velocidad de escritura

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, delay: delay / 1000 }}
      className={`flex gap-3 ${isUser ? 'justify-end' : ''}`}
    >
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00D1C7] to-[#6AE3E1] flex-shrink-0"></div>
      )}
      <div className={`rounded-lg px-4 py-3 max-w-[80%] ${
        isUser 
          ? 'bg-[#0A2540] rounded-tr-none' 
          : 'bg-gray-100 rounded-tl-none'
      }`}>
        <p className={`text-sm ${isUser ? 'text-white' : 'text-gray-700'}`}>
          {displayedText}
          {isTyping && <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="ml-1"
          >
            |
          </motion.span>}
        </p>
      </div>
    </motion.div>
  );
}

export function Hero({ onCalendlyOpen, onDemoClick }: HeroProps) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const messages = [
    { text: "¡Hola! Soy Kônsul. ¿En qué puedo ayudarte hoy?", isUser: false },
    { text: "Necesito información sobre automatización", isUser: true },
    { text: "Perfecto. Te puedo agendar una llamada con nuestro equipo. ¿Qué día te viene mejor?", isUser: false }
  ];

  const handleMessageComplete = () => {
    setTimeout(() => {
      setCurrentMessageIndex(prev => {
        if (prev < messages.length - 1) {
          return prev + 1;
        } else {
          // Reiniciar la animación después de 3 segundos
          setTimeout(() => {
            setCurrentMessageIndex(0);
          }, 3000);
          return prev;
        }
      });
    }, 1000);
  };

  return (
    <section className="relative bg-[#0A2540] z-0 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8 lg:py-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-8 items-center min-h-[calc(100vh-12rem)] lg:min-h-[calc(100vh-10rem)]">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Tu nuevo asistente inteligente con IA.
            </h1>
            <p className="mt-1 sm:mt-2 md:mt-3 text-sm sm:text-base md:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto lg:mx-0">
              Kônsul conversa, agenda y automatiza para que tu negocio funcione incluso cuando vos no estás.
            </p>

            {/* Buttons */}
            <div className="mt-2 sm:mt-3 md:mt-4 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start w-full">
              <Button
                onClick={onCalendlyOpen}
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-[#00D1C7] to-[#6AE3E1] hover:opacity-90 text-white text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
                aria-label="Agendar una cita de 30 minutos para conocer Kônsul Digital"
              >
                Agenda 30 minutos
              </Button>
              <Button
                onClick={onDemoClick}
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-transparent"
                aria-label="Probar la demo de Kônsul Digital para ver cómo funciona"
              >
                Probar Demo
              </Button>
            </div>

            {/* Tagline */}
            <p className="mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base text-white/80">
              Chatbots que atienden, aprenden y convierten.
            </p>
          </motion.div>

          {/* Right: Chat Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-0 w-full max-w-xs mx-auto lg:max-w-md order-first lg:order-last"
          >
            <div className="bg-white rounded-xl shadow-xl p-4 w-full">
              {/* Chat Header */}
              <div className="flex items-center gap-3 pb-4 border-b">
                <div className="relative">
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.05, 1],
                      boxShadow: [
                        "0 0 0 0 rgba(0, 209, 199, 0.7)",
                        "0 0 0 10px rgba(0, 209, 199, 0)",
                        "0 0 0 0 rgba(0, 209, 199, 0)"
                      ]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00D1C7] to-[#6AE3E1] flex items-center justify-center"
                  >
                    <MessageSquare size={20} className="text-white" />
                  </motion.div>
                  <motion.div
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-[#0A2540]">Kônsul AI</h3>
                  <motion.p 
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-xs text-gray-500 flex items-center gap-1"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    En línea
                  </motion.p>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4 mt-4 min-h-[200px]">
                <AnimatePresence mode="popLayout">
                  {messages.slice(0, currentMessageIndex + 1).map((message, index) => (
                    <AnimatedMessage
                      key={`${index}-${currentMessageIndex}`}
                      text={message.text}
                      isUser={message.isUser}
                      delay={index * 2000}
                      onComplete={index === currentMessageIndex ? handleMessageComplete : undefined}
                    />
                  ))}
                </AnimatePresence>
              </div>

              {/* Mini Analytics */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                className="mt-6 pt-4 border-t grid grid-cols-3 gap-3"
              >
                {[
                  { icon: TrendingUp, value: "+40%", label: "Respuestas" },
                  { icon: Calendar, value: "+25%", label: "Leads" },
                  { icon: MessageSquare, value: "24/7", label: "Online" }
                ].map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 2 + (index * 0.2),
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center cursor-pointer"
                  >
                    <div className="flex items-center justify-center gap-1 text-[#00D1C7]">
                      <metric.icon size={16} />
                      <motion.span 
                        className="text-xl font-bold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.5 + (index * 0.2) }}
                      >
                        {metric.value}
                      </motion.span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{metric.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Floating Elements - Hidden on mobile */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-8 -left-10 bg-white rounded-xl shadow-lg p-3 hidden md:block z-0"
            >
              <MessageSquare className="text-[#00D1C7]" size={24} />
            </motion.div>

            {/* Additional floating elements */}
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                x: [0, 5, 0],
                rotate: [0, -10, 10, 0]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-6 -right-8 bg-gradient-to-br from-[#00D1C7] to-[#6AE3E1] rounded-xl shadow-lg p-2 hidden md:block z-0"
            >
              <TrendingUp className="text-white" size={20} />
            </motion.div>

            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute top-1/2 -left-12 bg-white/10 backdrop-blur-sm rounded-full p-2 hidden lg:block z-0"
            >
              <Calendar className="text-white" size={16} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
