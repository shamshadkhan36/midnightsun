/* ==========================================================================
   MIDNIGHT SUN STUDIOS — ALIENADDA THEME INTERACTION ENGINE
   Smooth Custom Cursor, Spatial Nodes Animation, Blur Reveals, Portfolio Grid
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initCustomCursor();
  initNavbar();
  initIntroTextAnimation();
  initSpatialProcessNodes();
  renderPortfolio("all");
  initFilterButtons();
  initContactForm();
  initStatsObserver();
  initMobileMenu();
});

/* --------------------------------------------------------------------------
   1. CUSTOM SMOOTH CURSOR (ALIENADDA IMPLEMENTATION)
   -------------------------------------------------------------------------- */
function initCustomCursor() {
  const cursor = document.getElementById("customCursor");
  const dot = document.getElementById("customCursorDot");
  if (!cursor || !dot) return;

  // Check if fine pointer (mouse)
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

  // Smooth lerp loop
  function renderCursor() {
    // Lerp for outer ring
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;
    cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;

    // Immediate or tight lerp for inner dot
    dotX += (mouseX - dotX) * 0.45;
    dotY += (mouseY - dotY) * 0.45;
    dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;

    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Expand cursor on interactive hoverables
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
   2. NAVBAR SCROLL
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
   3. INTRO STATEMENT BLUR-TO-FOCUS WORD ANIMATION (ALIENADDA SCENE)
   -------------------------------------------------------------------------- */
function initIntroTextAnimation() {
  const container = document.getElementById("introStatementText");
  if (!container) return;

  const words = container.querySelectorAll(".intro-word");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        words.forEach((word, index) => {
          setTimeout(() => {
            word.style.opacity = "1";
            word.style.filter = "blur(0px)";
            word.style.transform = "translateY(0)";
          }, index * 45);
        });
      }
    });
  }, { threshold: 0.3 });

  observer.observe(container);
}

/* --------------------------------------------------------------------------
   4. SPATIAL FLOATING PROCESS NODES (ALIENADDA SCULPTING PROCESS)
   -------------------------------------------------------------------------- */
function initSpatialProcessNodes() {
  const items = document.querySelectorAll(".process-item");
  if (!items.length) return;

  items.forEach((item, index) => {
    // Subtle organic floating motion
    const speed = 2.5 + (index % 3) * 0.8;
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
   5. PORTFOLIO GRID & RENDERING
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
      <div class="col-span-full py-16 text-center text-white/40 tracking-widest text-xs uppercase">
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
              <h3 class="text-xl md:text-2xl font-bold tracking-[0.2em] text-white uppercase group-hover:text-white transition-colors">
                ${project.title}
              </h3>
              <p class="text-xs text-white/60 line-clamp-1 mt-1 font-light tracking-wider italic">
                ${project.tagline}
              </p>
            </div>
          </div>
          <div class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 backdrop-blur-md rounded-full p-2.5 text-white border border-white/20">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M15 3h6v6M10 14L21 3M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
            </svg>
          </div>
        </div>
        <div class="p-4 bg-black flex justify-between items-center text-[10px] uppercase tracking-widest text-white/40 border-t border-white/5 font-mono">
          <span>${project.client}</span>
          <span class="text-white/70">${project.duration}</span>
        </div>
      </article>
    `;
  }).join("");
}

/* --------------------------------------------------------------------------
   6. CATEGORY FILTER BUTTONS
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
   7. CONTACT INQUIRY FORM
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
          <span>Enter The World</span>
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
    toast.style.borderColor = isError ? "rgba(239, 68, 68, 0.5)" : "rgba(255, 255, 255, 0.5)";
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 4500);
  }
}

/* --------------------------------------------------------------------------
   8. STATS COUNTERS
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
   9. MOBILE MENU
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
