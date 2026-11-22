/* ==========================================================================
   MIDNIGHT SUN STUDIOS — ALIENADDA SCROLL BLUR & SMOOTH SCROLL ENGINE
   Lenis Momentum Scrolling, GSAP ScrollTrigger Blur-on-Scroll, Custom Cursor
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initLenisSmoothScroll();
  initCustomCursor();
  initNavbar();
  renderPortfolio("all");
  initFilterButtons();
  initAlienaddaScrollBlurAnimations();
  initSpatialProcessNodes();
  initContactForm();
  initStatsObserver();
  initMobileMenu();
});

/* --------------------------------------------------------------------------
   1. LENIS SMOOTH MOMENTUM SCROLLING (ALIENADDA LERP INERTIA)
   -------------------------------------------------------------------------- */
let lenis = null;
function initLenisSmoothScroll() {
  if (typeof Lenis !== "undefined") {
    try {
      lenis = new Lenis({
        lerp: 0.08,
        duration: 1.4,
        smoothWheel: true,
        smoothTouch: false,
      });

      if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add((time) => {
          lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
      } else {
        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      }
    } catch (err) {
      console.warn("Lenis init fallback:", err);
    }
  }
}

/* --------------------------------------------------------------------------
   2. ALIENADDA SCROLL BLUR ANIMATIONS (GSAP SCROLLTRIGGER)
   -------------------------------------------------------------------------- */
function initAlienaddaScrollBlurAnimations() {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    initScrollBlurFallback();
    return;
  }

  // 1. Hero Section Scroll Blur Out (Alienadda Hero.tsx scrub blur)
  const heroContent = document.querySelector(".hero-content-wrapper");
  const heroBg = document.querySelector(".hero-fullframe-bg");
  
  if (heroContent) {
    gsap.to(heroContent, {
      scrollTrigger: {
        trigger: "#home",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      opacity: 0,
      y: 90,
      scale: 0.88,
      filter: "blur(16px)",
      ease: "none",
    });
  }

  if (heroBg) {
    gsap.to(heroBg, {
      scrollTrigger: {
        trigger: "#home",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      scale: 1.15,
      filter: "blur(22px) brightness(50%)",
      ease: "none",
    });
  }

  // 2. Intro Statement Word-by-Word Blur Reveal (Alienadda Intro.tsx)
  const words = document.querySelectorAll(".intro-word");
  if (words.length) {
    gsap.fromTo(words,
      { opacity: 0.1, y: 25, filter: "blur(10px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#intro",
          start: "top 75%",
          end: "bottom 30%",
          toggleActions: "play reverse play reverse",
        }
      }
    );
  }

  // 3. About Section Portrait & Content Blur-to-Focus (Alienadda About.tsx)
  const portrait = document.getElementById("aboutPortrait");
  if (portrait) {
    gsap.fromTo(portrait,
      { opacity: 0.2, scale: 1.15, filter: "blur(20px)" },
      {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        scrollTrigger: {
          trigger: "#about",
          start: "top 75%",
          end: "center center",
          scrub: 1,
        }
      }
    );
  }

  const aboutText = document.querySelector("#about .z-10");
  if (aboutText) {
    gsap.fromTo(aboutText,
      { opacity: 0.2, y: 40, filter: "blur(12px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        scrollTrigger: {
          trigger: "#about",
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        }
      }
    );
  }

  // 4. Services Section Cards Blur Scrub
  const serviceCards = document.querySelectorAll("#services .glass-card");
  serviceCards.forEach((card) => {
    gsap.fromTo(card,
      { opacity: 0.2, y: 50, filter: "blur(14px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        scrollTrigger: {
          trigger: card,
          start: "top 88%",
          end: "top 55%",
          scrub: 1,
        }
      }
    );
  });

  // 5. The Sculpting Process Spatial Nodes Blur (Alienadda Process.tsx)
  const processItems = gsap.utils.toArray(".process-item");
  processItems.forEach((item) => {
    gsap.fromTo(item,
      { opacity: 0, scale: 0.85, filter: "blur(14px)" },
      {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        scrollTrigger: {
          trigger: "#process",
          start: "top 75%",
          end: "bottom 35%",
          toggleActions: "play reverse play reverse",
        }
      }
    );
  });

  // 6. Portfolio Cards Blur Scrub (Alienadda Projects.tsx)
  initPortfolioCardsBlur();

  // 7. Color Lab Container Blur Scrub
  const colorContainer = document.getElementById("colorComparisonContainer");
  if (colorContainer) {
    gsap.fromTo(colorContainer,
      { opacity: 0.3, scale: 0.95, filter: "blur(16px)" },
      {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        scrollTrigger: {
          trigger: colorContainer,
          start: "top 85%",
          end: "top 50%",
          scrub: 1,
        }
      }
    );
  }

  // 8. Contact Section Enter The World Blur Reveal (Alienadda Contact.tsx)
  const contactTargets = document.querySelectorAll("#contact .text-center, #contact .glass-card");
  contactTargets.forEach((target) => {
    gsap.fromTo(target,
      { opacity: 0.2, y: 40, filter: "blur(16px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        scrollTrigger: {
          trigger: target,
          start: "top 85%",
          end: "top 45%",
          scrub: 1,
        }
      }
    );
  });
}

function initPortfolioCardsBlur() {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;
  const cards = document.querySelectorAll("#portfolioGrid .project-card");
  cards.forEach((card) => {
    gsap.fromTo(card,
      { opacity: 0.25, y: 50, filter: "blur(14px)", scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        scale: 1,
        scrollTrigger: {
          trigger: card,
          start: "top 88%",
          end: "top 55%",
          scrub: 1,
        }
      }
    );
  });
}

/* Fallback if GSAP is offline */
function initScrollBlurFallback() {
  const elements = document.querySelectorAll(".hero-content-wrapper, .intro-word, #aboutPortrait, #services .glass-card, #portfolioGrid .project-card, .process-item");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.filter = "blur(0px)";
        entry.target.style.opacity = "1";
        entry.target.style.transform = "none";
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
}

/* --------------------------------------------------------------------------
   3. CUSTOM SMOOTH CURSOR (ALIENADDA MIX-BLEND-DIFFERENCE)
   -------------------------------------------------------------------------- */
function initCustomCursor() {
  const cursor = document.getElementById("customCursor");
  const dot = document.getElementById("customCursorDot");
  if (!cursor || !dot) return;

  if (!window.matchMedia("(pointer: fine)").matches) {
    cursor.style.display = "none";
    dot.style.display = "none";
    return;
  }

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let cursorX = mouseX;
  let cursorY = mouseY;
  let dotX = mouseX;
  let dotY = mouseY;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  function renderCursor() {
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;
    cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;

    dotX += (mouseX - dotX) * 0.45;
    dotY += (mouseY - dotY) * 0.45;
    dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;

    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  const hoverTargets = 'a, button, input, select, textarea, [role="button"], .project-card, .process-item, .filter-btn, .comparison-container';
  
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(hoverTargets)) {
      cursor.classList.add("cursor-hover");
    }
  });

  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(hoverTargets)) {
      cursor.classList.remove("cursor-hover");
    }
  });
}

/* --------------------------------------------------------------------------
   4. NAVBAR SCROLL
   -------------------------------------------------------------------------- */
function initNavbar() {
  const navbar = document.getElementById("mainNavbar");
  if (!navbar) return;

  const onScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* --------------------------------------------------------------------------
   5. SPATIAL FLOATING PROCESS NODES (ALIENADDA PROCESS.TSX)
   -------------------------------------------------------------------------- */
function initSpatialProcessNodes() {
  const items = document.querySelectorAll(".process-item");
  if (!items.length) return;

  items.forEach((item, index) => {
    const speed = 2.2 + (index % 3) * 0.7;
    const distance = 8 + (index % 4) * 3;
    
    let time = index * 40;
    function animateNode() {
      time += 0.02;
      const offsetY = Math.sin(time * speed) * distance;
      const offsetX = Math.cos(time * (speed * 0.7)) * (distance * 0.5);
      item.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
      requestAnimationFrame(animateNode);
    }
    requestAnimationFrame(animateNode);
  });
}

/* --------------------------------------------------------------------------
   6. PORTFOLIO GRID & RENDERING
   -------------------------------------------------------------------------- */
function renderPortfolio(filterCategory = "all") {
  const container = document.getElementById("portfolioGrid");
  if (!container) return;

  const projects = window.portfolioProjects || [];
  const filtered = filterCategory === "all" 
    ? projects 
    : projects.filter(p => p.category.includes(filterCategory));

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center text-white/40 tracking-widest text-xs uppercase font-mono">
        <p>No projects match this category at present.</p>
        <button onclick="renderPortfolio('all')" class="mt-4 btn-secondary text-[10px]">View All</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(project => {
    const rolesMarkup = project.roles.map(r => `<span class="project-role-tag">${r}</span>`).join("");
    
    return `
      <article class="project-card group" onclick="openProjectModal('${project.id}')" tabindex="0" role="button" aria-label="View ${project.title} details">
        <div class="img-container">
          <img 
            src="${project.coverImage}" 
            alt="${project.title} - Midnight Sun Studios" 
            loading="lazy"
            onerror="this.onerror=null; this.parentElement.style.background='${project.fallbackCover}'; this.style.display='none';" 
          />
          <div class="overlay">
            <div class="w-full">
              <div class="flex flex-wrap items-center mb-1">
                ${rolesMarkup}
              </div>
              <h3 class="text-xl md:text-2xl font-black tracking-[0.2em] text-white uppercase group-hover:text-amber-300 transition-colors">
                ${project.title}
              </h3>
              <p class="text-xs text-white/70 line-clamp-1 mt-1 font-light tracking-wider italic">
                ${project.tagline}
              </p>
            </div>
          </div>
          <div class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 backdrop-blur-md rounded-full p-2.5 text-amber-400 border border-amber-400/30">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M15 3h6v6M10 14L21 3M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
            </svg>
          </div>
        </div>
        <div class="p-4 bg-[#030611] flex justify-between items-center text-[10px] uppercase tracking-widest text-white/50 border-t border-white/5 font-mono">
          <span>${project.client}</span>
          <span class="text-amber-400/90">${project.duration}</span>
        </div>
      </article>
    `;
  }).join("");

  // Re-initialize blur scrub for newly injected cards
  setTimeout(() => {
    initPortfolioCardsBlur();
  }, 100);
}

/* --------------------------------------------------------------------------
   7. CATEGORY FILTER BUTTONS
   -------------------------------------------------------------------------- */
function initFilterButtons() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.dataset.filter || "all";
      renderPortfolio(category);
    });
  });
}

/* --------------------------------------------------------------------------
   8. CONTACT FORM
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById("inquiryForm");
  const toast = document.getElementById("feedbackToast");
  const toastMessage = document.getElementById("toastMessage");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("senderName")?.value || "";
    const email = document.getElementById("senderEmail")?.value || "";

    if (!name.trim() || !email.trim()) {
      showToast("Please provide your name and email.", true);
      return;
    }

    const submitBtn = form.querySelector("button[type='submit']");
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerText = "TRANSMITTING TO STUDIO...";
    }

    setTimeout(() => {
      form.reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `
          <span>Send Production Inquiry</span>
          <svg class="w-3.5 h-3.5 ml-2 inline-block" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        `;
      }
      showToast(`Vision brief received from ${name}. We will connect shortly.`, false);
    }, 1000);
  });

  function showToast(text, isError = false) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = text;
    toast.style.borderColor = isError ? "rgba(239, 68, 68, 0.6)" : "var(--accent-gold)";
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 4500);
  }
}

/* --------------------------------------------------------------------------
   9. STATS OBSERVER
   -------------------------------------------------------------------------- */
function initStatsObserver() {
  const statNumbers = document.querySelectorAll(".counter-number");
  if (!statNumbers.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const targetVal = parseInt(el.getAttribute("data-target") || "0", 10);
        animateCounter(el, targetVal);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(stat => observer.observe(stat));

  function animateCounter(element, target) {
    let current = 0;
    const duration = 1800;
    const stepTime = 25;
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target + (element.dataset.suffix || "");
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current) + (element.dataset.suffix || "");
      }
    }, stepTime);
  }
}

/* --------------------------------------------------------------------------
   10. MOBILE MENU
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const menuBtn = document.getElementById("mobileMenuBtn");
  const closeBtn = document.getElementById("mobileMenuClose");
  const drawer = document.getElementById("mobileDrawer");
  const backdrop = document.getElementById("drawerBackdrop");
  const links = document.querySelectorAll(".mobile-nav-link");

  if (!menuBtn || !drawer || !backdrop) return;

  const openDrawer = () => {
    drawer.classList.add("open");
    backdrop.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  const closeDrawer = () => {
    drawer.classList.remove("open");
    backdrop.classList.remove("active");
    document.body.style.overflow = "";
  };

  menuBtn.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  backdrop.addEventListener("click", closeDrawer);

  links.forEach(link => {
    link.addEventListener("click", closeDrawer);
  });
}
