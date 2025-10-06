import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";

export function TermsConditions() {
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
              Términos y Condiciones
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
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4">1. Aceptación de los términos</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Al acceder y utilizar los servicios de Kônsul Digital ("nosotros", "nuestro" o "la empresa"), 
                  aceptas estar sujeto a estos Términos y Condiciones. Si no estás de acuerdo con alguna parte 
                  de estos términos, no debes utilizar nuestros servicios.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4">2. Descripción del servicio</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Kônsul Digital proporciona servicios de chatbots inteligentes y automatización con IA, incluyendo:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Desarrollo e implementación de chatbots personalizados</li>
                  <li>Integración con múltiples plataformas (WhatsApp, Telegram, Instagram, Messenger, Web Chat, SMS)</li>
                  <li>Automatización de procesos de atención al cliente</li>
                  <li>Servicios de consultoría en inteligencia artificial</li>
                  <li>Soporte técnico y mantenimiento</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4">3. Uso aceptable</h2>
              <div className="text-gray-700 space-y-4">
                <p>Al utilizar nuestros servicios, te comprometes a:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Utilizar los servicios únicamente para fines legítimos y legales</li>
                  <li>No interferir con el funcionamiento normal de nuestros servicios</li>
                  <li>No intentar acceder a sistemas o datos no autorizados</li>
                  <li>No utilizar nuestros servicios para actividades fraudulentas o maliciosas</li>
                  <li>Respetar los derechos de propiedad intelectual de terceros</li>
                  <li>Proporcionar información veraz y actualizada</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4">4. Cuentas y responsabilidades del usuario</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Cuando crees una cuenta o utilices nuestros servicios:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Eres responsable de mantener la confidencialidad de tu cuenta</li>
                  <li>Debes notificarnos inmediatamente cualquier uso no autorizado</li>
                  <li>Eres responsable de todas las actividades que ocurran bajo tu cuenta</li>
                  <li>Debes proporcionar información precisa y actualizada</li>
                  <li>Debes cumplir con todas las leyes y regulaciones aplicables</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4">5. Propiedad intelectual</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Todos los derechos de propiedad intelectual relacionados con nuestros servicios, incluyendo 
                  pero no limitado a software, algoritmos, diseño, contenido y marcas comerciales, son propiedad 
                  de Kônsul Digital o nuestros licenciantes.
                </p>
                <p>
                  Se te otorga una licencia limitada, no exclusiva y no transferible para utilizar nuestros 
                  servicios de acuerdo con estos términos.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4">6. Pagos y facturación</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Para servicios de pago:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Los precios están sujetos a cambio con previo aviso</li>
                  <li>Los pagos deben realizarse según los términos acordados</li>
                  <li>No ofrecemos reembolsos por servicios ya prestados</li>
                  <li>Puedes cancelar tu suscripción en cualquier momento</li>
                  <li>Somos responsables de cualquier impuesto aplicable</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4">7. Limitación de responsabilidad</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  En la máxima medida permitida por la ley:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Nuestros servicios se proporcionan "tal como están"</li>
                  <li>No garantizamos la disponibilidad ininterrumpida de nuestros servicios</li>
                  <li>No seremos responsables por daños indirectos, incidentales o consecuenciales</li>
                  <li>Nuestra responsabilidad total no excederá el monto pagado por nuestros servicios</li>
                  <li>No garantizamos resultados específicos del uso de nuestros servicios</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4">8. Terminación</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Podemos terminar o suspender tu acceso a nuestros servicios:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Por incumplimiento de estos términos</li>
                  <li>Por solicitud tuya</li>
                  <li>Por razones comerciales legítimas</li>
                  <li>Por requisitos legales o regulatorios</li>
                </ul>
                <p>
                  La terminación no afectará las obligaciones y responsabilidades que hayan surgido antes 
                  de la fecha de terminación.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4">9. Modificaciones</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Nos reservamos el derecho de modificar estos términos en cualquier momento. 
                  Las modificaciones entrarán en vigor inmediatamente después de su publicación en nuestro sitio web. 
                  Tu uso continuado de nuestros servicios constituye aceptación de los términos modificados.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4">10. Ley aplicable</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Estos términos se rigen por las leyes de España. Cualquier disputa será resuelta 
                  en los tribunales competentes de España.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4">11. Contacto</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Para preguntas sobre estos Términos y Condiciones, puedes contactarnos:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p><strong>Kônsul Digital</strong></p>
                  <p>Email: <a href="mailto:legal@konsul.digital" className="text-[#00D1C7] hover:underline">legal@konsul.digital</a></p>
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
