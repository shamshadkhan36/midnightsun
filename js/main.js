/* ==========================================================================
   MIDNIGHT SUN STUDIOS — MAIN APPLICATION CONTROLLER
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  renderPortfolio("all");
  initFilterButtons();
  renderTestimonials();
  initContactForm();
  initStatsObserver();
  initMobileMenu();
});

/* Navbar Scrolled State */
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

/* Mobile Drawer */
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

/* Render Portfolio Grid */
function renderPortfolio(filterCategory = "all") {
  const container = document.getElementById("portfolioGrid");
  if (!container) return;

  const projects = window.portfolioProjects || [];
  const filtered = filterCategory === "all" 
    ? projects 
    : projects.filter(p => p.category.includes(filterCategory));

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center text-gray-400">
        <p class="text-lg">No projects match this category at present.</p>
        <button onclick="renderPortfolio('all')" class="mt-4 btn-secondary text-xs">View All Works</button>
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
              <h3 class="text-xl font-heading text-white tracking-tight group-hover:text-amber-400 transition-colors">
                ${project.title}
              </h3>
              <p class="text-xs text-gray-300 line-clamp-1 mt-1 font-normal">
                ${project.tagline}
              </p>
            </div>
          </div>
          <div class="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-md rounded-full p-2 text-amber-400">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M15 3h6v6M10 14L21 3M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
            </svg>
          </div>
        </div>
        <div class="p-4 bg-[#0d0f19] flex justify-between items-center text-xs text-gray-400 border-t border-white/5">
          <span>${project.client}</span>
          <span class="font-mono text-amber-400/90">${project.duration}</span>
        </div>
      </article>
    `;
  }).join("");
}

/* Category Filter Buttons */
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

/* Render Testimonials */
function renderTestimonials() {
  const container = document.getElementById("testimonialsGrid");
  if (!container) return;

  const list = window.studioTestimonials || [];
  container.innerHTML = list.map(item => `
    <div class="glass-card p-6 md:p-8 flex flex-col justify-between">
      <div class="space-y-4">
        <div class="flex text-amber-400 gap-1">
          ${Array(5).fill('<svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>').join('')}
        </div>
        <p class="text-gray-300 text-sm md:text-base italic leading-relaxed">
          "${item.quote}"
        </p>
      </div>
      <div class="flex items-center gap-3 pt-6 border-t border-white/5 mt-6">
        <img src="${item.avatar}" alt="${item.author}" class="w-12 h-12 rounded-full object-cover border border-amber-400/30" loading="lazy" />
        <div>
          <h4 class="text-white font-medium text-sm">${item.author}</h4>
          <p class="text-xs text-amber-400/80 font-normal">${item.designation}</p>
          <p class="text-[11px] text-gray-500">${item.company}</p>
        </div>
      </div>
    </div>
  `).join("");
}

/* Contact Form Submission */
function initContactForm() {
  const form = document.getElementById("inquiryForm");
  const toast = document.getElementById("feedbackToast");
  const toastMessage = document.getElementById("toastMessage");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("senderName")?.value || "";
    const email = document.getElementById("senderEmail")?.value || "";
    const service = document.getElementById("projectType")?.value || "film";
    const budget = document.getElementById("projectBudget")?.value || "Flexible";
    const message = document.getElementById("senderMessage")?.value || "";

    if (!name.trim() || !email.trim()) {
      showToast("Please provide your name and a valid email address.", true);
      return;
    }

    const submitBtn = form.querySelector("button[type='submit']");
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerText = "Dispatching Vision Brief...";
    }

    setTimeout(() => {
      form.reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `
          <span>Send Production Inquiry</span>
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <line x1="22" y1="2" x2="11" y2="13"/>
            <polygon points="22 2 15 22 11 13 2 9 22 2"/>
          </svg>
        `;
      }
      showToast(`Thank you, ${name}! Midnight Sun Studios has received your inquiry. We will contact you within 24 hours.`, false);
    }, 1000);
  });

  function showToast(text, isError = false) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = text;
    toast.style.borderColor = isError ? "var(--accent-crimson)" : "var(--accent-gold)";
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 4500);
  }
}

/* Stats Counter Animation */
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
