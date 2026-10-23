/**
 * CHAWLA DENTAL CLINIC & SURGICAL CENTER — INTERACTIVE ENGINE
 * Dr. Ramandeep Singh Chawla (BDS, MDS Oral & Maxillofacial Surgery)
 * Janakpuri, New Delhi
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Set Default Appointment Date (Tomorrow)
  const dateInputs = document.querySelectorAll('input[type="date"]');
  const nextDay = new Date();
  nextDay.setDate(nextDay.getDate() + 1);
  const formattedNextDay = nextDay.toISOString().split('T')[0];
  dateInputs.forEach(input => {
    input.value = formattedNextDay;
    input.min = formattedNextDay;
  });

  // 3. Toast Notifications
  const toast = document.getElementById('toastBox');
  const toastHead = document.getElementById('toastHead');
  const toastBody = document.getElementById('toastBody');
  let toastTimeout = null;

  function triggerToast(head, body) {
    if (!toast) return;
    toastHead.textContent = head;
    toastBody.textContent = body;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }

  // 4. Hero Mini Booking Form
  const heroForm = document.getElementById('heroBookingForm');
  if (heroForm) {
    heroForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const procedure = heroForm.querySelector('select').value;
      const contact = heroForm.querySelector('input[type="tel"]').value.trim();

      if (!contact || contact.length < 8) {
        triggerToast('Phone Number Needed', 'Please enter a valid telephone or WhatsApp contact number.');
        return;
      }

      triggerToast(
        'Surgical Consultation Slotted',
        `Dr. Ramandeep Singh Chawla’s desk at Janakpuri will contact ${contact} shortly for your ${procedure} evaluation.`
      );
      heroForm.reset();
      dateInputs.forEach(input => input.value = formattedNextDay);
    });
  }

  // 5. Main Appointment Booking Form
  const mainForm = document.getElementById('surgicalMainBooking');
  if (mainForm) {
    mainForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const patientName = document.getElementById('sName').value.trim();
      const patientPhone = document.getElementById('sPhone').value.trim();
      const procedure = document.getElementById('sProcedure').value;
      const date = document.getElementById('sDate').value;
      const slot = document.getElementById('sSlot').value;

      if (!patientName || !patientPhone) {
        triggerToast('Missing Fields', 'Please fill in both your full name and phone number.');
        return;
      }

      triggerToast(
        'Confirmed with Dr. Chawla',
        `Thank you, ${patientName}. Your appointment for ${procedure} on ${date} (${slot}) at C4F/270 Janakpuri is registered.`
      );
      mainForm.reset();
      dateInputs.forEach(input => input.value = formattedNextDay);
    });
  }

  // 6. Mobile Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.querySelector('.nav-menu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = navMenu.style.display === 'flex';
      navMenu.style.display = isVisible ? 'none' : 'flex';
      navMenu.style.flexDirection = 'column';
      navMenu.style.position = 'absolute';
      navMenu.style.top = '76px';
      navMenu.style.left = '0';
      navMenu.style.width = '100%';
      navMenu.style.background = '#070d18';
      navMenu.style.padding = '20px 24px';
      navMenu.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
    });
  }
});
