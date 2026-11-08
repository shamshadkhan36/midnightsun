/* ==========================================================================
   MIDNIGHT SUN STUDIOS — COLOR GRADING COMPARISON SUITE
   Interactive Before (RAW / Log) vs After (Mastered Grade) Split Slider
   ========================================================================== */

(function () {
  const scenes = {
    landscape: {
      title: "Alpine Horizon (Log-C vs 35mm Master Grade)",
      rawUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
      gradedUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
      rawFilter: "grayscale(35%) contrast(65%) brightness(115%) saturate(45%)",
      gradedFilter: "contrast(125%) saturate(135%) brightness(95%) sepia(18%) hue-rotate(-8deg)",
      specs: "ARRI Alexa Mini LF • Log-C3 to Film Print Emulation • 2.39:1"
    },
    portrait: {
      title: "Chiaroscuro Narrative Portrait (Flat Redcode vs Warm Tonal Curve)",
      rawUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop",
      gradedUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop",
      rawFilter: "grayscale(40%) contrast(70%) brightness(120%) saturate(50%)",
      gradedFilter: "contrast(130%) saturate(120%) brightness(92%) sepia(22%)",
      specs: "RED V-Raptor 8K • Custom Skin-Tone Softness Matrix • ACEScc"
    },
    neon: {
      title: "Cybernetic Nightscape (Sony S-Log3 vs Teal & Amber Split Tone)",
      rawUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop",
      gradedUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop",
      rawFilter: "grayscale(30%) contrast(70%) brightness(110%) saturate(50%)",
      gradedFilter: "contrast(140%) saturate(150%) hue-rotate(15deg) brightness(88%)",
      specs: "Sony Venice 2 • Anamorphic Cine Glass • Teal-Orange Gamut"
    }
  };

  let currentSceneKey = "landscape";
  let isDragging = false;

  function initColorSlider() {
    const container = document.getElementById("colorComparisonContainer");
    const beforeWrapper = document.getElementById("comparisonBefore");
    const handle = document.getElementById("comparisonHandle");
    const sceneButtons = document.querySelectorAll("[data-grade-scene]");
    const sceneMetaText = document.getElementById("colorSceneSpecs");

    if (!container || !beforeWrapper || !handle) return;

    function setPosition(xPercent) {
      const clamped = Math.max(0, Math.min(100, xPercent));
      beforeWrapper.style.width = clamped + "%";
      handle.style.left = clamped + "%";
    }

    function onPointerMove(e) {
      if (!isDragging && e.type !== "touchmove") return;
      const rect = container.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const xPercent = ((clientX - rect.left) / rect.width) * 100;
      setPosition(xPercent);
    }

    function startDrag(e) {
      isDragging = true;
      onPointerMove(e);
    }

    function stopDrag() {
      isDragging = false;
    }

    container.addEventListener("mousedown", startDrag);
    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("mouseup", stopDrag);

    container.addEventListener("touchstart", (e) => {
      isDragging = true;
      onPointerMove(e);
    }, { passive: true });
    window.addEventListener("touchmove", onPointerMove, { passive: true });
    window.addEventListener("touchend", stopDrag);

    // Initial position 50%
    setPosition(50);

    // Switch scene
    sceneButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        sceneButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const key = btn.dataset.gradeScene;
        loadScene(key);
      });
    });

    function loadScene(key) {
      const scene = scenes[key] || scenes.landscape;
      currentSceneKey = key;

      const rawImg = document.getElementById("imgRaw");
      const gradedImg = document.getElementById("imgGraded");

      if (rawImg && gradedImg) {
        rawImg.style.backgroundImage = `url('${scene.rawUrl}')`;
        rawImg.style.filter = scene.rawFilter;
        gradedImg.style.backgroundImage = `url('${scene.gradedUrl}')`;
        gradedImg.style.filter = scene.gradedFilter;
      }

      if (sceneMetaText) {
        sceneMetaText.innerHTML = `<span class="text-gold font-semibold">${scene.title}</span> &nbsp;|&nbsp; <span>${scene.specs}</span>`;
      }

      // Smooth reset to 50%
      setPosition(50);
    }

    // Load initial scene
    loadScene("landscape");
  }

  // Initialize once DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initColorSlider);
  } else {
    initColorSlider();
  }
})();
