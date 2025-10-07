import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";

export function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#0A2540] py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <Button
              onClick={() => navigate(-1)}
              variant="outline"
              size="sm"
              className="border-white/30 text-white hover:bg-white/10"
            >
              <ArrowLeft className="mr-2" size={16} />
              Volver
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Política de Privacidad
            </h1>
            <p className="text-white/80 text-lg">
              Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="prose prose-lg max-w-none"
        >
          <div className="space-y-8">
            
            <section>
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4">1. Información que recopilamos</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  En Kônsul Digital, recopilamos información que nos proporcionas directamente cuando:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Te registras para una cuenta o utilizas nuestros servicios</li>
                  <li>Programas una reunión o consulta a través de Calendly</li>
                  <li>Nos contactas a través de formularios de contacto o chat</li>
                  <li>Te suscribes a nuestros boletines informativos</li>
                  <li>Participas en encuestas o promociones</li>
                </ul>
                <p>
                  Esta información puede incluir tu nombre, dirección de correo electrónico, número de teléfono, 
                  información de la empresa y cualquier otra información que elijas proporcionar.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4">2. Cómo utilizamos tu información</h2>
              <div className="text-gray-700 space-y-4">
                <p>Utilizamos la información recopilada para:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Proporcionar, mantener y mejorar nuestros servicios de chatbot e IA</li>
                  <li>Procesar transacciones y enviar información relacionada</li>
                  <li>Enviar comunicaciones técnicas, actualizaciones de seguridad y soporte administrativo</li>
                  <li>Responder a tus comentarios, preguntas y solicitudes de servicio al cliente</li>
                  <li>Enviar información promocional y marketing (con tu consentimiento)</li>
                  <li>Realizar análisis y mejoras en nuestros servicios</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4">3. Compartir información</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  No vendemos, alquilamos ni compartimos tu información personal con terceros, excepto en las siguientes circunstancias:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Proveedores de servicios:</strong> Compartimos información con proveedores que nos ayudan a operar nuestro negocio (como Calendly, servicios de email, hosting)</li>
                  <li><strong>Cumplimiento legal:</strong> Cuando sea requerido por ley o para proteger nuestros derechos</li>
                  <li><strong>Consentimiento:</strong> Cuando hayas dado tu consentimiento explícito</li>
                  <li><strong>Transferencias empresariales:</strong> En caso de fusión, adquisición o venta de activos</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4">4. Seguridad de los datos</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Implementamos medidas de seguridad técnicas, administrativas y físicas apropiadas para proteger 
                  tu información personal contra acceso no autorizado, alteración, divulgación o destrucción.
                </p>
                <p>
                  Sin embargo, ningún método de transmisión por Internet o almacenamiento electrónico es 100% seguro. 
                  Aunque nos esforzamos por proteger tu información personal, no podemos garantizar su seguridad absoluta.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4">5. Tus derechos</h2>
              <div className="text-gray-700 space-y-4">
                <p>Tienes derecho a:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Acceder a tu información personal</li>
                  <li>Rectificar información inexacta o incompleta</li>
                  <li>Solicitar la eliminación de tu información personal</li>
                  <li>Limitar el procesamiento de tu información</li>
                  <li>Retirar tu consentimiento en cualquier momento</li>
                  <li>Presentar una queja ante la autoridad de protección de datos competente</li>
                </ul>
                <p>
                  Para ejercer estos derechos, puedes contactarnos en: 
                  <a href="mailto:privacidad@konsul.digital" className="text-[#00D1C7] hover:underline">
                    privacidad@konsul.digital
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4">6. Cookies y tecnologías similares</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web, 
                  analizar el tráfico y personalizar el contenido. Puedes controlar el uso de cookies a través 
                  de la configuración de tu navegador.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4">7. Retención de datos</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Conservamos tu información personal solo durante el tiempo necesario para cumplir con los 
                  propósitos descritos en esta política, a menos que la ley requiera un período de retención más largo.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4">8. Cambios a esta política</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Podemos actualizar esta Política de Privacidad ocasionalmente. Te notificaremos sobre cualquier 
                  cambio material publicando la nueva política en esta página y actualizando la fecha de "última actualización".
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4">9. Contacto</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Si tienes preguntas sobre esta Política de Privacidad, puedes contactarnos:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p><strong>Kônsul Digital</strong></p>
                  <p>Email: <a href="mailto:privacidad@konsul.digital" className="text-[#00D1C7] hover:underline">privacidad@konsul.digital</a></p>
                  <p>Sitio web: <a href="https://chatbot.konsul.digital" className="text-[#00D1C7] hover:underline">chatbot.konsul.digital</a></p>
                </div>
              </div>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
}

