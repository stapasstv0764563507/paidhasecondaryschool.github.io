/* ============================================================
   Paidha Secondary School — St. Augustine
   main.js  |  Main JavaScript
   ============================================================ */

/* ── SMOOTH SCROLL for nav links ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ── NAV: add shadow on scroll ── */
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (nav) {
    nav.style.boxShadow = window.scrollY > 50
      ? '0 4px 24px rgba(0,0,0,0.3)'
      : 'none';
  }
});

/* ── ADMISSION FORM SUBMIT ── */
function submitApplication() {
  const required = [
    'f-firstname','f-lastname','f-dob','f-gender','f-nationality',
    'f-district','f-address','f-prevschool','f-class','f-ple','f-pleyear',
    'f-guardian','f-relation','f-phone','f-gaddress'
  ];
  let allFilled = true;
  required.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if (!el.value.trim()) {
      el.style.borderColor = '#ef4444';
      el.style.boxShadow = '0 0 0 3px rgba(239,68,68,0.1)';
      allFilled = false;
    } else {
      el.style.borderColor = '#d1d5db';
      el.style.boxShadow = 'none';
    }
  });
  if (!allFilled) {
    alert('⚠️ Please fill in all required fields marked with * before submitting.');
    return;
  }
  const form = document.getElementById('admission-form');
  const success = document.getElementById('admission-success');
  if (form) form.style.display = 'none';
  if (success) success.style.display = 'block';
  const admissionsSection = document.getElementById('admissions');
  if (admissionsSection) {
    admissionsSection.scrollIntoView({ behavior: 'smooth' });
  }
}

/* ── CONTACT FORM ── */
function sendContactMessage() {
  const name  = document.getElementById('c-name');
  const email = document.getElementById('c-email');
  const msg   = document.getElementById('c-message');
  if (!name.value.trim() || !email.value.trim() || !msg.value.trim()) {
    alert('Please fill in all fields.');
    return;
  }
  alert('Thank you! Your message has been sent. We will get back to you soon.');
  name.value = '';
  email.value = '';
  document.getElementById('c-subject').value = '';
  msg.value = '';
}

/* ── ANIMATE elements on scroll (Intersection Observer) ── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.program-card, .news-card, .about-list li').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
