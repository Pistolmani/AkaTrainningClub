/* ==========================================================================
   AKA Academy — Custom Premium Logic (Vanilla JS)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Language Localization Setup — always default to Georgian; honor user's manual override.
  const defaultLang = 'ka';
  let currentLang = defaultLang;

  try {
    const savedLang = localStorage.getItem('aka-lang');
    if (savedLang === 'ka' || savedLang === 'en') {
      currentLang = savedLang;
    }
  } catch (e) {
    console.warn('LocalStorage is not available, falling back to default language.');
  }

  // Set initial language
  setLanguage(currentLang);

  // 2. Sticky Header Styling on Scroll
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    if (window.scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // Run once in case page loaded scrolled

  // 3. Scroll Reveal Observer (Fade-In Animation)
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceMotion && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });
  } else {
    // If IntersectionObserver is not supported or reduced motion is enabled, show all
    document.querySelectorAll('.reveal').forEach(el => {
      el.classList.add('active');
    });
  }

  // 4. Mobile Menu Toggle Setup
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  
  window.toggleMenu = () => {
    navLinks.classList.toggle('mobile-active');
    menuToggle.classList.toggle('active');
  };

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('mobile-active');
      menuToggle.classList.remove('active');
    });
  });

  // 5. Contact Form Submission Logic (Feedback Simulation)
  const formFeedback = document.getElementById('formFeedback');
  window.handleFormSubmit = (e) => {
    e.preventDefault();
    const isKa = document.documentElement.getAttribute('data-lang') === 'ka';
    
    // Simulate successful form capture
    formFeedback.style.color = '#F4E4A6';
    formFeedback.textContent = isKa 
      ? 'მადლობა — თქვენი შეტყობინება გაგზავნილია. მალე დაგიკავშირდებით.' 
      : 'Thank you! Your message has been sent. We will get back to you shortly.';
    
    // Clear form inputs
    document.getElementById('contactForm').reset();
  };

  // 6. Gallery Lightbox Modal
  const lightbox = document.getElementById('lightbox');
  const lightboxLabel = document.getElementById('lightboxLabel');
  
  const galleryLabelsKA = [
    "მოედანი — ფართო კადრი",
    "სავარჯიშო კონუსები",
    "1-on-1 სესია",
    "გუნდი ვარჯიშზე",
    "ღამის განათება",
    "ბურთთან მუშაობა"
  ];
  
  const galleryLabelsEN = [
    "Pitch — wide shot",
    "Cones drill",
    "1-on-1 session",
    "Team at training",
    "Floodlights at night",
    "Ball work close-up"
  ];

  window.openLightbox = (index) => {
    const isKa = document.documentElement.getAttribute('data-lang') === 'ka';
    const label = isKa ? galleryLabelsKA[index] : galleryLabelsEN[index];
    
    lightboxLabel.textContent = label;
    lightbox.style.display = 'flex';
  };

  window.closeLightbox = () => {
    lightbox.style.display = 'none';
  };
});

// Global Language Switching Logic
window.setLanguage = (lang) => {
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.lang = lang;
  
  // Toggle Nav buttons
  const btnKa = document.getElementById('btnKa');
  const btnEn = document.getElementById('btnEn');
  const btnKaFooter = document.getElementById('btnKaFooter');
  const btnEnFooter = document.getElementById('btnEnFooter');

  if (lang === 'ka') {
    if (btnKa) btnKa.classList.add('active');
    if (btnEn) btnEn.classList.remove('active');
    if (btnKaFooter) btnKaFooter.classList.add('active');
    if (btnEnFooter) btnEnFooter.classList.remove('active');
  } else {
    if (btnKa) btnKa.classList.remove('active');
    if (btnEn) btnEn.classList.add('active');
    if (btnKaFooter) btnKaFooter.classList.remove('active');
    if (btnEnFooter) btnEnFooter.classList.add('active');
  }

  // Save selected language in localStorage
  try {
    localStorage.setItem('aka-lang', lang);
  } catch (e) {
    console.warn('Unable to write to LocalStorage.');
  }
};

// Coach video sound toggle
window.toggleCoachSound = function () {
  const video = document.getElementById('coachVideo');
  const btn = document.getElementById('videoSoundToggle');
  if (!video || !btn) return;
  video.muted = !video.muted;
  btn.classList.toggle('is-unmuted', !video.muted);
  btn.setAttribute('aria-label', video.muted ? 'Unmute video' : 'Mute video');
  // Some browsers pause muted-to-unmuted autoplay; ensure it keeps playing
  const p = video.play();
  if (p && typeof p.catch === 'function') p.catch(() => {});
};
