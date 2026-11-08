/* ==========================================================================
   MIDNIGHT SUN STUDIOS — PORTFOLIO DATA REPOSITORY
   Multidisciplinary filmmaking portfolio inspired by Raaj Dhoundiyal
   ========================================================================== */

const portfolioProjects = [
  {
    id: "solitary-horizon",
    title: "Solitary Horizon",
    tagline: "A haunting visual narrative set across the misty ridges of the Himalayas.",
    category: ["direction", "cinematography", "color-grading"],
    roles: ["Direction", "Cinematography", "Lead Colorist", "Screenplay"],
    client: "Midnight Sun Originals & Indie Wave",
    year: "2025",
    duration: "19 min 40 sec",
    laurels: "Winner — Best Cinematic Vision, Pune Independent Shorts 2025",
    coverImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
    fallbackCover: "linear-gradient(135deg, #111827 0%, #1e1b4b 50%, #451a03 100%)",
    synopsis: "Shot on location in remote Himalayan hamlets, 'Solitary Horizon' chronicles an aging cartographer who traverses untouched alpine ridges to map trails that exist only in memories. The visual palette blends natural fog, anamorphic lens flares, and calibrated golden hour tonalities to invoke deep existential nostalgia.",
    technicalSpecs: {
      camera: "ARRI Alexa Mini LF & Cooke Anamorphic /i Full Frame Plus",
      aspectRatio: "2.39:1 CinemaScope",
      grade: "DaVinci Resolve Studio 19 • ACEScc • P3-DCI Theatrical",
      sound: "Dolby Atmos 7.1.4 Immersive Audio"
    },
    gallery: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop"
    ],
    videoEmbed: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=0",
    videoSample: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    directorsNote: "Our mission was to let the mountain silences speak louder than dialogue. We filmed exclusively in natural morning twilight and candle-lit interiors, prioritizing organic optical texture over hyper-clean digital rendering."
  },
  {
    id: "echoes-of-echoes",
    title: "Nocturne: City of Monoliths",
    tagline: "High-octane neo-noir commercial film highlighting architectural precision and urban velocity.",
    category: ["commercials", "cinematography", "editing"],
    roles: ["Cinematography", "Lead Video Editor", "VFX Supervision"],
    client: "Aura Hypercars & Lumina Design",
    year: "2025",
    duration: "2 min 15 sec",
    laurels: "Official Selection — Berlin Commercial Film Festival 2025",
    coverImage: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop",
    fallbackCover: "linear-gradient(135deg, #09090b 0%, #1e293b 50%, #0369a1 100%)",
    synopsis: "A visceral journey through neon-drenched metropolis rainscapes, exploring reflections, aerodynamic silhouettes, and dynamic editorial rhythms. Built around precise match cuts, kinetic camera maneuvers, and custom optical halation.",
    technicalSpecs: {
      camera: "RED V-Raptor 8K VV & Atlas Orion Anamorphic Glass",
      aspectRatio: "2.39:1 Anamorphic",
      grade: "Custom Film Print Emulation (Kodak 2383 Inspired Curve)",
      sound: "5.1 Surround Mastered at 24-bit 96kHz"
    },
    gallery: [
      "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop"
    ],
    videoSample: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    directorsNote: "Every frame is timed to the heartbeat of synthetic percussion. The color grade pulls heavy teal into low-key shadows while guarding the amber sodium vapor highlights with surgical precision."
  },
  {
    id: "rooh-music-video",
    title: "Rooh (The Breath Within)",
    tagline: "Sensory music video celebrating folk mysticism, classical dance, and elemental fire.",
    category: ["music-video", "direction", "color-grading"],
    roles: ["Direction", "Lead Colorist", "Production Design"],
    client: "Sufi Beats & Global Soundscape Records",
    year: "2024",
    duration: "4 min 48 sec",
    laurels: "Over 8.5M Views Across Streaming Platforms • IFP Music Video Feature",
    coverImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop",
    fallbackCover: "linear-gradient(135deg, #18181b 0%, #7c2d12 60%, #b45309 100%)",
    synopsis: "Blending classical Kathak movements with ancient temple ruins and choreographed torchlight sequences. 'Rooh' captures the spiritual struggle between human restraint and ecstatic liberation, graded with deep earthen ochres, rich crimson velvets, and luminous candlelight.",
    technicalSpecs: {
      camera: "Sony FX9 Full-Frame & Angenieux Optimo Zooms",
      aspectRatio: "2.00:1 Univisium",
      grade: "DaVinci Resolve Studio • Dual HDR10 / Rec.709 Master",
      sound: "Stereo Audiophile 24-bit / Dolby Atmos Music"
    },
    gallery: [
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=800&auto=format&fit=crop"
    ],
    videoSample: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    directorsNote: "Directing 'Rooh' required capturing fluid choreography at 60fps and 120fps under fickle real firelight. The color grading balances warm embers with cool midnight blue sky tones."
  },
  {
    id: "the-shadow-merchant",
    title: "The Shadow Merchant",
    tagline: "Psychological drama short exploring guilt, memory manipulation, and vintage audio reels.",
    category: ["direction", "editing", "writing"],
    roles: ["Screenwriter", "Director", "Offline & Online Editor"],
    client: "CineGuild Independent Film Labs",
    year: "2024",
    duration: "16 min 12 sec",
    laurels: "Winner — Best Screenplay & Best Editing, Mumbai International Shorts 2024",
    coverImage: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop",
    fallbackCover: "linear-gradient(135deg, #020617 0%, #172554 50%, #1e1b4b 100%)",
    synopsis: "Set inside a decaying analog recording studio during a monsoon night, an estranged audio archivist discovers an uncataloged master tape bearing the voice of a disappeared relative. The film employs tactile editing rhythms, sound design leitmotifs, and claustrophobic interior compositions.",
    technicalSpecs: {
      camera: "ARRI Amira & Vintage Super Baltar Primes",
      aspectRatio: "1.66:1 European Theatrical",
      grade: "35mm Grain Structure Emulation & Bleach Bypass Highlights",
      sound: "Mono-to-Surround Experimental Sound Design"
    },
    gallery: [
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop"
    ],
    videoSample: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    directorsNote: "We wrote the script with the acoustic space in mind. The cut maintains tension through prolonged pregnant pauses followed by sharp sonic detonations."
  },
  {
    id: "vanguard-titanium",
    title: "Vanguard: Time Transcended",
    tagline: "Macro-cinematography and extreme detail showcasing luxury horology craftsmanship.",
    category: ["commercials", "cinematography", "color-grading"],
    roles: ["Cinematography", "Macro Camera Operator", "Colorist"],
    client: "Vanguard Timepieces Geneva",
    year: "2025",
    duration: "1 min 30 sec",
    laurels: "Featured in British Cinematographer Showcase 2025",
    coverImage: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
    fallbackCover: "linear-gradient(135deg, #1c1917 0%, #44403c 50%, #78716c 100%)",
    synopsis: "An exploration of micro-mechanics, sapphire crystals, and titanium bevels filmed with extreme macro optics and automated motion-control sliders. Light sweeps across brushed metal surfaces with poetic elegance.",
    technicalSpecs: {
      camera: "Phantom Flex 4K & Laowa 24mm T14 2X Periprobe Lens",
      aspectRatio: "16:9 UHD 4K",
      grade: "Spectral Separation Grade • Pure Metallic Contrast Curve",
      sound: "Tactile Foley & Sub-bass Clockwork Synthesis"
    },
    gallery: [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=800&auto=format&fit=crop"
    ],
    videoSample: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    directorsNote: "Macro cinematography forgives zero dust and zero camera shake. We built custom miniature lighting baffles to create that signature specular sheen along the bevels."
  },
  {
    id: "silent-currents",
    title: "Silent Currents",
    tagline: "Eco-documentary capturing the endangered sacred springs of Northern India.",
    category: ["direction", "cinematography", "editing"],
    roles: ["Co-Director", "Underwater Cinematography", "Documentary Editor"],
    client: "EarthScope Documentary Collective",
    year: "2024",
    duration: "24 min 00 sec",
    laurels: "Official Selection — Jackson Wild Media Awards & Delhi Eco Shorts",
    coverImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    fallbackCover: "linear-gradient(135deg, #022c22 0%, #064e3b 50%, #065f46 100%)",
    synopsis: "Investigating the vanishing subterranean aquifers that feed rural mountain communities. Featuring mesmerizing underwater imagery, aerial perspectives of glacial valleys, and heartfelt testimonials from Himalayan elders.",
    technicalSpecs: {
      camera: "RED Komodo 6K in Nauticam Housing + DJI Inspire 3 Drone",
      aspectRatio: "2.39:1 DCI",
      grade: "Naturalistic Water Spectral Balance & Deep Forest Greens",
      sound: "Ambisonic 3D Field Recording"
    },
    gallery: [
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop"
    ],
    videoSample: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
    directorsNote: "Capturing clean sub-surface water clarity in shifting alpine currents tested our physical limits. The final film stands as an urgent testament to ecological preservation."
  }
];

// Testimonials data
const studioTestimonials = [
  {
    quote: "Midnight Sun Studios brought an extraordinary cinematic voice to our brand campaign. Their command of anamorphic lighting and DaVinci Resolve grading elevated our project far above ordinary commercial work.",
    author: "Aditi Mathur",
    designation: "Executive Creative Director",
    company: "Ogilvy / Lumina Collective",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "Finding a team that seamlessly excels at both story pacing and technical post-production color science is exceedingly rare. Midnight Sun Studios is the true filmmaker's studio.",
    author: "Vikram Sengupta",
    designation: "National Award-Winning Film Producer",
    company: "Vanguard CineLabs",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "From the initial blank slate script draft to the final theatrical Dolby Vision grade, the dedication to visual poetry was relentless. Our music video crossed 8 million views with rave critical praise.",
    author: "Kabir Rawat",
    designation: "Music Director & Artist",
    company: "Sufi Beats Worldwide",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  }
];

// Export to window
window.portfolioProjects = portfolioProjects;
window.studioTestimonials = studioTestimonials;
