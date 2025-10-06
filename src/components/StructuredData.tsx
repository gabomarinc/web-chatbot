export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Kônsul Digital",
    "description": "Chatbots inteligentes con IA para automatizar WhatsApp, Telegram, Instagram, Messenger y más. Atiende clientes 24/7 y aumenta conversiones.",
    "url": "https://chatbot.konsul.digital",
    "logo": "https://chatbot.konsul.digital/logo-konsul.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "Spanish"
    },
    "sameAs": [
      "https://chatbot.konsul.digital"
    ],
    "offers": {
      "@type": "Offer",
      "name": "Chatbot IA para Automatización Empresarial",
      "description": "Servicios de chatbots inteligentes con IA para múltiples plataformas",
      "category": "Software",
      "availability": "https://schema.org/InStock"
    },
    "serviceType": "Chatbot Development",
    "areaServed": "ES",
    "knowsAbout": [
      "Chatbots",
      "Inteligencia Artificial",
      "Automatización",
      "WhatsApp Business",
      "Telegram Bots",
      "Instagram Automation",
      "Messenger Bots"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
