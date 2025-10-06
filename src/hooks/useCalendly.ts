export const openCalendly = () => {
  if (typeof window !== 'undefined' && window.Calendly) {
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/wearekonsul/30min'
    });
  } else {
    // Fallback: abrir en nueva pestaña
    window.open('https://calendly.com/wearekonsul/30min', '_blank');
  }
};
