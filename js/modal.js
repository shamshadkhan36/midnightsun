/* ==========================================================================
   MIDNIGHT SUN STUDIOS — MODAL & SHOWREEL INTERACTION CONTROLLER
   ========================================================================== */

(function () {
  const projectModalOverlay = document.getElementById("projectModalOverlay");
  const projectModalContent = document.getElementById("projectModalBody");
  const projectModalClose = document.getElementById("projectModalClose");

  const showreelModalOverlay = document.getElementById("showreelModalOverlay");
  const showreelModalClose = document.getElementById("showreelModalClose");
  const showreelVideo = document.getElementById("showreelVideoPlayer");
  const showreelTriggerBtn = document.getElementById("btnOpenShowreel");

  // Open Project Details Modal
  window.openProjectModal = function (projectId) {
    const project = (window.portfolioProjects || []).find(p => p.id === projectId);
    if (!project || !projectModalOverlay || !projectModalContent) return;

    const rolesHtml = project.roles.map(r => `<span class="project-role-tag">${r}</span>`).join("");
    
    let laurelsHtml = "";
    if (project.laurels) {
      laurelsHtml = `
        <div class="laurel-badge mb-4">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          <span>${project.laurels}</span>
        </div>
      `;
    }

    const galleryHtml = (project.gallery || []).map(img => `
      <div class="rounded-xl overflow-hidden border border-white/10 aspect-video">
        <img src="${img}" alt="Production still" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
      </div>
    `).join("");

    projectModalContent.innerHTML = `
      <div class="relative w-full aspect-video bg-black/80 rounded-t-xl overflow-hidden border-b border-white/10">
        <video 
          id="projectDetailVideo" 
          class="w-full h-full object-cover" 
          poster="${project.coverImage}" 
          controls 
          playsinline>
          <source src="${project.videoSample || ''}" type="video/mp4">
          Your browser does not support HTML5 video.
        </video>
      </div>

      <div class="p-6 md:p-8 space-y-6">
        <div>
          <div class="flex items-center gap-2 mb-3">
            <img src="assets/images/logo-v2.png" alt="Midnight Sun Studios" class="h-6 w-auto object-contain" />
            <span class="text-[9px] font-mono tracking-widest text-white/50 uppercase">Midnight Sun Studios Archive</span>
          </div>
          ${laurelsHtml}
          <div class="flex flex-wrap items-center gap-2 mb-2">
            ${rolesHtml}
          </div>
          <h2 class="text-2xl md:text-3xl font-heading text-white tracking-tight">${project.title}</h2>
          <p class="text-amber-400/90 text-sm md:text-base font-medium mt-1">${project.tagline}</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y border-white/10 text-xs md:text-sm">
          <div>
            <span class="text-gray-400 block mb-1">Client / Studio</span>
            <span class="text-white font-semibold">${project.client}</span>
          </div>
          <div>
            <span class="text-gray-400 block mb-1">Release Year</span>
            <span class="text-white font-semibold">${project.year}</span>
          </div>
          <div>
            <span class="text-gray-400 block mb-1">Runtime</span>
            <span class="text-white font-semibold">${project.duration}</span>
          </div>
          <div>
            <span class="text-gray-400 block mb-1">Format</span>
            <span class="text-white font-semibold">${project.technicalSpecs?.aspectRatio || '2.39:1 Anamorphic'}</span>
          </div>
        </div>

        <div class="space-y-3">
          <h3 class="text-lg font-heading text-white">Project Synopsis</h3>
          <p class="text-gray-300 text-sm md:text-base leading-relaxed">${project.synopsis}</p>
        </div>

        ${project.directorsNote ? `
          <div class="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-sm">
            <h4 class="text-amber-400 font-semibold mb-1 flex items-center gap-2">
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
              Director & Colorist's Vision Note
            </h4>
            <p class="text-gray-300 italic">"${project.directorsNote}"</p>
          </div>
        ` : ''}

        <!-- Technical Specs Breakdown -->
        <div class="p-5 rounded-xl bg-slate-900/60 border border-white/10">
          <h4 class="text-xs uppercase font-mono text-gray-400 tracking-wider mb-3">Cinematic & Post-Production Blueprint</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm">
            <div>
              <span class="text-gray-400">Camera & Optics:</span>
              <p class="text-white font-medium">${project.technicalSpecs?.camera || 'ARRI Alexa LF'}</p>
            </div>
            <div>
              <span class="text-gray-400">Color Science & LUT:</span>
              <p class="text-white font-medium">${project.technicalSpecs?.grade || 'DaVinci Resolve Studio 19'}</p>
            </div>
            <div>
              <span class="text-gray-400">Audio Mastering:</span>
              <p class="text-white font-medium">${project.technicalSpecs?.sound || 'Dolby Atmos Surround'}</p>
            </div>
            <div>
              <span class="text-gray-400">Delivery Master:</span>
              <p class="text-white font-medium">Apple ProRes 4444 XQ / DCI-P3 Theatrical</p>
            </div>
          </div>
        </div>

        <!-- Behind The Scenes Frame Stills -->
        <div class="space-y-3 pt-2">
          <h4 class="text-sm font-semibold text-gray-200">Production & Color Stills</h4>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            ${galleryHtml}
          </div>
        </div>

        <div class="pt-4 flex justify-between items-center border-t border-white/10">
          <button onclick="closeProjectModal()" class="btn-secondary text-xs px-5 py-2">
            ← Back to Works
          </button>
          <a href="#contact" onclick="closeProjectModal()" class="btn-primary text-xs px-5 py-2">
            Inquire About Similar Production
          </a>
        </div>
      </div>
    `;

    projectModalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  window.closeProjectModal = function () {
    if (!projectModalOverlay) return;
    const video = document.getElementById("projectDetailVideo");
    if (video) {
      video.pause();
    }
    projectModalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  };

  if (projectModalClose) {
    projectModalClose.addEventListener("click", window.closeProjectModal);
  }
  if (projectModalOverlay) {
    projectModalOverlay.addEventListener("click", (e) => {
      if (e.target === projectModalOverlay) window.closeProjectModal();
    });
  }

  // Showreel Modal Controls
  window.openShowreelModal = function () {
    if (!showreelModalOverlay) return;
    showreelModalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
    if (showreelVideo) {
      showreelVideo.play().catch(() => {});
    }
  };

  window.closeShowreelModal = function () {
    if (!showreelModalOverlay) return;
    if (showreelVideo) {
      showreelVideo.pause();
      showreelVideo.currentTime = 0;
    }
    showreelModalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  };

  if (showreelTriggerBtn) {
    showreelTriggerBtn.addEventListener("click", window.openShowreelModal);
  }
  if (showreelModalClose) {
    showreelModalClose.addEventListener("click", window.closeShowreelModal);
  }
  if (showreelModalOverlay) {
    showreelModalOverlay.addEventListener("click", (e) => {
      if (e.target === showreelModalOverlay) window.closeShowreelModal();
    });
  }

  // Keyboard Escape Handler
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      window.closeProjectModal();
      window.closeShowreelModal();
    }
  });
})();
