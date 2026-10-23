/**
 * JAYNA DENTAL WORLD — INTERACTIVE CONTROLLER
 * Booking Engine, Form Validation, Dynamic Toast, and Sticky Navigation.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header Scroll Effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Set Default Appointment Dates
  const dateInputs = document.querySelectorAll('input[type="date"]');
  const today = new Date();
  today.setDate(today.getDate() + 1); // Default to tomorrow
  const tomorrowFormatted = today.toISOString().split('T')[0];
  dateInputs.forEach(input => {
    input.value = tomorrowFormatted;
    input.min = tomorrowFormatted;
  });

  // 3. Dynamic Toast System
  const toast = document.getElementById('toastNotice');
  const toastTitle = document.getElementById('toastTitle');
  const toastMsg = document.getElementById('toastMsg');
  let toastTimer = null;

  function showToast(title, message) {
    if (!toast) return;
    toastTitle.textContent = title;
    toastMsg.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }

  // 4. Hero Quick Form Submission
  const heroForm = document.getElementById('heroQuickForm');
  if (heroForm) {
    heroForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const service = heroForm.querySelector('select').value;
      const phone = heroForm.querySelector('input[type="tel"]').value;
      if (!phone || phone.length < 8) {
        showToast('Phone Number Required', 'Please enter a valid phone number for appointment confirmation.');
        return;
      }
      showToast('Consultation Requested!', `Our Connaught Place front desk will call ${phone} within 15 minutes to confirm your ${service} appointment.`);
      heroForm.reset();
      dateInputs.forEach(input => input.value = tomorrowFormatted);
    });
  }

  // 5. Main Booking Form Submission
  const mainBookingForm = document.getElementById('mainBookingForm');
  if (mainBookingForm) {
    mainBookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('patientName').value.trim();
      const phone = document.getElementById('patientPhone').value.trim();
      const service = document.getElementById('patientService').value;
      const date = document.getElementById('patientDate').value;
      const slot = document.getElementById('patientSlot').value;

      if (!name || !phone) {
        showToast('Missing Details', 'Please provide your full name and contact number.');
        return;
      }

      showToast('Appointment Confirmed!', `Thank you, ${name}. Your appointment for ${service} on ${date} (${slot}) has been scheduled. Check your SMS/WhatsApp for confirmation.`);
      mainBookingForm.reset();
      dateInputs.forEach(input => input.value = tomorrowFormatted);
    });
  }

  // 6. Mobile Navigation Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.querySelector('.nav-links');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = navLinks.style.display === 'flex';
      navLinks.style.display = isVisible ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '76px';
      navLinks.style.left = '0';
      navLinks.style.width = '100%';
      navLinks.style.background = '#070e1b';
      navLinks.style.padding = '20px 24px';
      navLinks.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
    });
  }
});
