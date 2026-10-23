/**
 * RISHABH PORTFOLIO — CRAFTED WEBSITES, LASTING IMPRESSIONS
 * Studio IDE Engine, Viewport Switcher, Multiplayer Cursor Simulation,
 * Live Telemetry & Micro-Interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Project Showcase Data for Studio Canvas ---
  const studioProjects = [
    {
      id: 'aktiv',
      name: 'aktiv-fitness.vercel.app',
      liveUrl: 'https://aktiv-fitness.vercel.app/',
      image: 'assets/images/project-aktiv.jpg',
      dimension: 'FitnessHero • 1380 × 760',
      cssSnippet: `.hero-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(3rem, 7vw, 6rem);
  letter-spacing: 0.04em;
  background: linear-gradient(135deg, #ff6b2b, #ff2d55);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.hero-tag {
  color: #ff6b2b;
  font-weight: 700;
  letter-spacing: 2px;
}`,
      highlightStyle: { top: '16%', left: '8%', width: '84%', height: '68%' }
    },
    {
      id: 'jayna',
      name: 'jaynadentalworld.com',
      liveUrl: 'projects/jayna-dental/index.html',
      image: 'assets/images/project-jayna.jpg',
      dimension: 'HeritageDental • 1420 × 780',
      cssSnippet: `.dental-hero-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.5rem, 4.5vw, 4.1rem);
  color: #ffffff;
}
.highlight-cyan {
  color: #00e5be;
  font-style: italic;
  text-shadow: 0 0 30px rgba(0, 229, 190, 0.4);
}`,
      highlightStyle: { top: '14%', left: '10%', width: '80%', height: '72%' }
    },
    {
      id: 'chawla',
      name: 'chawladental.in',
      liveUrl: 'projects/chawla-dental/index.html',
      image: 'assets/images/project-chawla.jpg',
      dimension: 'SurgicalSuite • 1400 × 800',
      cssSnippet: `.surgical-heading {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 800;
  letter-spacing: -0.02em;
}
.gradient-text {
  background: linear-gradient(135deg, #00d2c4, #38bdf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}`,
      highlightStyle: { top: '15%', left: '8%', width: '84%', height: '70%' }
    },
    {
      id: 'tigre',
      name: 'tigretigre.com',
      image: 'assets/images/project-tigre.jpg',
      dimension: 'Hero • 1200 × 680',
      cssSnippet: `.hero-heading {
  display: flex;
  font-family: var(--font-sans);
  font-weight: 800;
  letter-spacing: -0.03em;
}
.hero-heading em {
  font-family: var(--font-serif);
  font-style: italic;
  color: #ffffff;
}`,
      highlightStyle: { top: '18%', left: '12%', width: '76%', height: '64%' }
    },
    {
      id: 'nexus',
      name: 'nexus-ops.cloud',
      image: 'assets/images/project-nexus.jpg',
      dimension: 'TelemetryGrid • 1440 × 820',
      cssSnippet: `.telemetry-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  background: #0a0c12;
}
.latency-stream {
  canvas-rendering: optimizeSpeed;
  frame-rate: 60fps;
}`,
      highlightStyle: { top: '12%', left: '8%', width: '84%', height: '76%' }
    },
    {
      id: 'elements',
      name: 'elements-studio.design',
      image: 'assets/images/project-elements.jpg',
      dimension: 'EditorialCover • 1280 × 740',
      cssSnippet: `.editorial-masthead {
  font-family: 'Instrument Serif', serif;
  font-size: clamp(4rem, 9vw, 8rem);
  text-transform: uppercase;
  letter-spacing: -0.04em;
  color: #ffffff;
}`,
      highlightStyle: { top: '15%', left: '10%', width: '80%', height: '70%' }
    }
  ];

  let currentProjectIndex = 0;

  // --- 2. Studio IDE Canvas Viewport Controls ---
  const viewDesktopBtn = document.getElementById('viewDesktopBtn');
  const viewMobileBtn = document.getElementById('viewMobileBtn');
  const artboardFrame = document.getElementById('artboardFrame');
  const viewportWidthLabel = document.getElementById('viewportWidthLabel');
  const viewportZoomLabel = document.getElementById('viewportZoomLabel');

  if (viewDesktopBtn && viewMobileBtn && artboardFrame) {
    viewDesktopBtn.addEventListener('click', () => {
      viewDesktopBtn.classList.add('active');
      viewMobileBtn.classList.remove('active');
      artboardFrame.classList.remove('mobile-mode');
      if (viewportWidthLabel) viewportWidthLabel.textContent = '1586px';
      if (viewportZoomLabel) viewportZoomLabel.textContent = '100%';
    });

    viewMobileBtn.addEventListener('click', () => {
      viewMobileBtn.classList.add('active');
      viewDesktopBtn.classList.remove('active');
      artboardFrame.classList.add('mobile-mode');
      if (viewportWidthLabel) viewportWidthLabel.textContent = '390px';
      if (viewportZoomLabel) viewportZoomLabel.textContent = '85%';
    });
  }

  // --- 3. Studio Project Switcher ---
  const canvasProjectToggle = document.getElementById('canvasProjectToggle');
  const currentProjectBreadcrumb = document.getElementById('currentProjectBreadcrumb');
  const currentProjectExternalLink = document.getElementById('currentProjectExternalLink');
  const artboardMainImage = document.getElementById('artboardMainImage');
  const layerHighlightBox = document.getElementById('layerHighlightBox');
  const boxDimensionTag = document.getElementById('boxDimensionTag');
  const cssCodeSnippet = document.querySelector('.css-code-snippet code');

  function loadProjectIntoCanvas(index) {
    currentProjectIndex = index % studioProjects.length;
    const project = studioProjects[currentProjectIndex];

    if (artboardMainImage) {
      artboardMainImage.style.opacity = '0';
      setTimeout(() => {
        artboardMainImage.src = project.image;
        artboardMainImage.style.opacity = '1';
      }, 150);
    }

    if (currentProjectBreadcrumb) {
      currentProjectBreadcrumb.textContent = project.name;
    }

    if (currentProjectExternalLink) {
      if (project.liveUrl) {
        currentProjectExternalLink.href = project.liveUrl;
        currentProjectExternalLink.style.display = 'inline-flex';
      } else {
        currentProjectExternalLink.style.display = 'none';
      }
    }

    if (boxDimensionTag) {
      boxDimensionTag.textContent = project.dimension;
    }

    if (cssCodeSnippet) {
      cssCodeSnippet.textContent = project.cssSnippet;
    }

    if (layerHighlightBox && project.highlightStyle) {
      Object.assign(layerHighlightBox.style, project.highlightStyle);
    }
  }

  if (canvasProjectToggle) {
    canvasProjectToggle.addEventListener('click', () => {
      loadProjectIntoCanvas(currentProjectIndex + 1);
    });
  }

  // Allow clicking project cards below to load directly into the studio canvas
  const canvasLoadBtns = document.querySelectorAll('.btn-canvas-load');
  canvasLoadBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const projId = btn.dataset.loadProject;
      const foundIdx = studioProjects.findIndex(p => p.id === projId);
      if (foundIdx !== -1) {
        loadProjectIntoCanvas(foundIdx);
        // Smooth scroll to studio
        const studioEl = document.getElementById('studio');
        if (studioEl) {
          studioEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // --- 4. Studio Layer Tree Click Interaction ---
  const layerItems = document.querySelectorAll('.layer-item');
  const propWidthVal = document.getElementById('propWidthVal');
  const propHeightVal = document.getElementById('propHeightVal');
  const propMaxWidthVal = document.getElementById('propMaxWidthVal');

  const layerPresets = {
    'hero': {
      dimension: 'Hero • 1200 × 680',
      box: { top: '18%', left: '12%', width: '76%', height: '64%' },
      w: '1fr', h: 'Auto', maxW: '1200'
    },
    'tech-stack': {
      dimension: 'TechStack • 1200 × 520',
      box: { top: '35%', left: '10%', width: '80%', height: '45%' },
      w: '100%', h: 'Fit', maxW: '1200'
    },
    'intro': {
      dimension: 'IntroBlock • 960 × 440',
      box: { top: '22%', left: '20%', width: '60%', height: '56%' },
      w: '960px', h: 'Auto', maxW: '960'
    },
    'featured-works': {
      dimension: 'WorksGrid • 1240 × 980',
      box: { top: '15%', left: '8%', width: '84%', height: '70%' },
      w: '1fr', h: 'Auto', maxW: '1240'
    },
    'services': {
      dimension: 'ServicesGrid • 1200 × 600',
      box: { top: '25%', left: '14%', width: '72%', height: '50%' },
      w: '1fr', h: 'Auto', maxW: '1200'
    },
    'approach': {
      dimension: 'ProcessSteps • 1100 × 480',
      box: { top: '30%', left: '12%', width: '76%', height: '48%' },
      w: '100%', h: 'Auto', maxW: '1100'
    }
  };

  layerItems.forEach(item => {
    item.addEventListener('click', () => {
      layerItems.forEach(li => li.classList.remove('active'));
      item.classList.add('active');

      const layerKey = item.dataset.layer;
      const preset = layerPresets[layerKey];
      if (preset) {
        if (boxDimensionTag) boxDimensionTag.textContent = preset.dimension;
        if (layerHighlightBox) Object.assign(layerHighlightBox.style, preset.box);
        if (propWidthVal) propWidthVal.value = preset.w;
        if (propHeightVal) propHeightVal.value = preset.h;
        if (propMaxWidthVal) propMaxWidthVal.value = preset.maxW;
      }
    });
  });

  // --- 5. Interactive Multiplayer Cursor Simulation ---
  const canvasStage = document.getElementById('canvasStage');
  const devanshCursor = document.getElementById('devanshCursor');
  const rishabhCursor = document.getElementById('rishabhCursor');

  if (canvasStage && devanshCursor && rishabhCursor) {
    let mouseX = 0, mouseY = 0;
    let canvasRect = canvasStage.getBoundingClientRect();

    window.addEventListener('resize', () => {
      canvasRect = canvasStage.getBoundingClientRect();
    });

    canvasStage.addEventListener('mousemove', (e) => {
      mouseX = e.clientX - canvasRect.left;
      mouseY = e.clientY - canvasRect.top;

      // Rishabh's cursor follows user with subtle spring offset
      rishabhCursor.style.transform = `translate(${mouseX - 120}px, ${mouseY - 90}px)`;
      // Devansh's cursor reacts with subtle parallax
      devanshCursor.style.transform = `translate(${(canvasRect.width - mouseX) * 0.15}px, ${(canvasRect.height - mouseY) * 0.15}px)`;
    });

    canvasStage.addEventListener('mouseleave', () => {
      rishabhCursor.style.transform = 'translate(0, 0)';
      devanshCursor.style.transform = 'translate(0, 0)';
    });
  }

  // --- 6. Ambient Mode Toggle ---
  const ambientToggle = document.getElementById('ambientToggle');
  if (ambientToggle) {
    ambientToggle.addEventListener('click', () => {
      document.body.classList.toggle('ambient-dim');
      showToast(document.body.classList.contains('ambient-dim') ? 'Ambient Glow: Muted' : 'Ambient Glow: Active');
    });
  }

  // --- 7. Live Indian Standard Time (IST) Clock ---
  const liveClockDisplay = document.getElementById('liveClockDisplay');
  function updateISTClock() {
    if (!liveClockDisplay) return;
    const now = new Date();
    // Format in Asia/Kolkata timezone
    const options = {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    const timeString = new Intl.DateTimeFormat('en-US', options).format(now);
    liveClockDisplay.textContent = `${timeString} IST`;
  }
  updateISTClock();
  setInterval(updateISTClock, 1000);

  // --- 8. One-Click Email Copy ---
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const copyBtnText = document.getElementById('copyBtnText');
  const emailText = document.getElementById('emailText');

  if (copyEmailBtn && emailText) {
    copyEmailBtn.addEventListener('click', async () => {
      try {
        const email = emailText.textContent.trim();
        await navigator.clipboard.writeText(email);
        if (copyBtnText) copyBtnText.textContent = 'Copied!';
        showToast('Email address copied to clipboard');
        setTimeout(() => {
          if (copyBtnText) copyBtnText.textContent = 'Copy';
        }, 2500);
      } catch (err) {
        showToast('Failed to copy. Please select manually.');
      }
    });
  }

  // --- 9. Live CSS Copy in Inspector ---
  const copyCssBtn = document.getElementById('copyCssBtn');
  if (copyCssBtn && cssCodeSnippet) {
    copyCssBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(cssCodeSnippet.textContent);
        copyCssBtn.textContent = 'Copied!';
        showToast('Live CSS rule copied!');
        setTimeout(() => {
          copyCssBtn.textContent = 'Copy';
        }, 2000);
      } catch (e) {
        showToast('Unable to copy code.');
      }
    });
  }

  // --- 10. Case Study Modals ---
  const modalTriggers = document.querySelectorAll('[data-modal]');
  const modalBackdrops = document.querySelectorAll('.modal-backdrop');
  const modalCloseBtns = document.querySelectorAll('.modal-close-btn');

  modalTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = btn.dataset.modal;
      const targetModal = document.getElementById(modalId);
      if (targetModal) {
        targetModal.classList.add('open');
        targetModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeAllModals() {
    modalBackdrops.forEach(m => {
      m.classList.remove('open');
      m.setAttribute('aria-hidden', 'true');
    });
    document.body.style.overflow = '';
  }

  modalCloseBtns.forEach(btn => {
    btn.addEventListener('click', closeAllModals);
  });

  modalBackdrops.forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        closeAllModals();
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });

  // --- 11. Contact Form Submission Handling ---
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');
  const submitBtn = document.getElementById('submitBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('userName');
      const emailInput = document.getElementById('userEmail');
      const messageInput = document.getElementById('userMessage');

      if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
        formFeedback.className = 'form-feedback error';
        formFeedback.textContent = 'Please fill out all required fields.';
        return;
      }

      // Email format validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput.value.trim())) {
        formFeedback.className = 'form-feedback error';
        formFeedback.textContent = 'Please provide a valid email address.';
        return;
      }

      // Simulate clean submission
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.querySelector('span').textContent = 'Dispatching...';
      }

      setTimeout(() => {
        contactForm.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.querySelector('span').textContent = 'Send Message';
        }
        formFeedback.className = 'form-feedback success';
        formFeedback.textContent = 'Message transmitted successfully. Rishabh will reply within 24 hours.';
        showToast('Message sent! Looking forward to collaborating.');
      }, 1000);
    });
  }

  // --- 12. Mobile Menu Toggle ---
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // --- 13. Back to Top Button ---
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- 14. Scrollspy for Navigation Links ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });

  // --- Toast Notification Helper ---
  function showToast(msg) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg viewBox="0 0 16 16" width="14" height="14" fill="#0066cc">
        <circle cx="8" cy="8" r="7" />
        <path d="M5 8L7 10L11 6" stroke="#fff" stroke-width="1.5" fill="none"/>
      </svg>
      <span>${msg}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // Update footer year dynamically
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
});
