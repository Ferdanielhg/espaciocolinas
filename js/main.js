/* ==========================================================================
   ESPACIO COLINAS - CLEAN & FAST INTERACTIVE LOGIC
   ========================================================================== */

(function () {
  'use strict';

  const WHATSAPP_PHONE = '526561137420'; // +52 656 113 7420
  
  let currentService = {
    name: 'Corte Fade',
    price: '$220'
  };

  // DOM references
  const header = document.getElementById('site-header');
  const navToggle = document.getElementById('mobile-nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-item-link');
  const serviceCards = document.querySelectorAll('.service-card');
  
  const selectedNameEl = document.getElementById('selected-service-name');
  const selectedPriceEl = document.getElementById('selected-service-price');
  const bookingBtn = document.getElementById('services-booking-btn');
  
  const mobileServiceEl = document.getElementById('mobile-bar-service');
  const mobilePriceEl = document.getElementById('mobile-bar-price');
  const mobileBookingBtn = document.getElementById('mobile-bar-btn');

  // WhatsApp link builder
  function getWhatsAppUrl(name, price) {
    const message = `Hola Espacio Colinas, quiero agendar cita para: *${name}* (${price}). ¿Qué horario tienen libre?`;
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
  }

  function syncBookingUI() {
    const url = getWhatsAppUrl(currentService.name, currentService.price);

    if (selectedNameEl) selectedNameEl.textContent = currentService.name;
    if (selectedPriceEl) selectedPriceEl.textContent = currentService.price;
    if (bookingBtn) bookingBtn.href = url;

    if (mobileServiceEl) mobileServiceEl.textContent = currentService.name;
    if (mobilePriceEl) mobilePriceEl.textContent = currentService.price;
    if (mobileBookingBtn) mobileBookingBtn.href = url;
  }

  // Google Analytics conversion tracking helper
  function trackEvent(action, category, label, value) {
    if (typeof window.gtag === 'function') {
      try {
        window.gtag('event', action, {
          event_category: category,
          event_label: label,
          value: value
        });
      } catch (e) {
        // silent catch
      }
    }
  }

  // Service Selection
  serviceCards.forEach(card => {
    card.addEventListener('click', () => {
      serviceCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');

      const name = card.dataset.name;
      const price = card.dataset.price;
      if (name && price) {
        currentService = { name, price };
        syncBookingUI();
        trackEvent('select_item', 'Services', name, parseInt(price.replace(/\D/g, ''), 10) || 0);
      }
    });
  });

  // Track WhatsApp conversions on all CTA buttons
  document.querySelectorAll('a[href*="wa.me"]').forEach(btn => {
    btn.addEventListener('click', () => {
      trackEvent('generate_lead', 'Conversion', `WhatsApp: ${currentService.name}`, parseInt(currentService.price.replace(/\D/g, ''), 10) || 0);
    });
  });

  // Track Google Maps clicks
  document.querySelectorAll('a[href*="share.google"]').forEach(btn => {
    btn.addEventListener('click', () => {
      trackEvent('view_location', 'Engagement', 'Google Maps Link', 0);
    });
  });

  // Header Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile Navigation
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.contains('open');
      if (isOpen) {
        navMenu.classList.remove('open');
        navToggle.classList.remove('active');
        document.body.style.overflow = '';
      } else {
        navMenu.classList.add('open');
        navToggle.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        navToggle.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // Init
  syncBookingUI();

})();
