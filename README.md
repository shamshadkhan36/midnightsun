# 🌅 Midnight Sun Studios

A cinematic portfolio website for **Midnight Sun Studios**, inspired by the visual language, multidisciplinary narrative storytelling, and color grading mastery of filmmaker **Raaj Dhoundiyal** ([raajdhoundiyal.com](https://www.raajdhoundiyal.com/)).

---

## ✨ Features & Architecture

1. **Cinematic Hero Experience**:
   - Tagline: *"A Journey From A Blank Slate To Extraordinary Cinema."*
   - Live interactive stats counters (Projects Delivered, Minutes Graded, Festival Laurels, Artistic Precision).
   - Instant **Watch 2026 Showreel** modal with high-definition video playback.

2. **Multidisciplinary Portfolio ("Selected Works")**:
   - Filterable by **All Works**, **Direction**, **Cinematography**, **Editing**, **Color Grading**, **Music Videos**, and **Commercials**.
   - Rich project cards displaying production roles, client, runtime, and aspect ratio.
   - Interactive **Project Details Modal** with synopses, technical camera/color blueprints (ARRI Alexa, Cooke Anamorphic, DaVinci Resolve Studio 19, Dolby Atmos), and behind-the-scenes production stills.

3. **Signature Feature: The Color Grading Lab**:
   - Interactive **Before (Camera RAW Sensor Log) vs. After (Final Master Grade)** split-screen slider.
   - 3 switchable grading scenes:
     1. *Alpine Horizon* (ARRI Log-C3 to 35mm Master Film Print)
     2. *Chiaroscuro Portrait* (Flat REDcode to Warm Tonal Curve)
     3. *Neo-Tokyo Night* (Sony S-Log3 to Teal & Amber Split Tone)
   - Real-time technical metadata readout (Color space, LUT curve, Aspect ratio).

4. **Comprehensive Services (The 6 Pillars)**:
   - **01. Direction & Visual Execution**
   - **02. Cinematography & Lighting**
   - **03. Video Editing & Montage**
   - **04. Master Color Grading**
   - **05. Writing & Creative Concept**
   - **06. Audio Finishing & Sound Design**

5. **Client Praise & Festival Laurels Wall**:
   - Testimonials from executive producers and creative directors.
   - Festival badges (IFP 50-Hour Challenge, Pune Short Film Festival, Zee Music, Mumbai Int'l Cine Labs).

6. **Interactive Project Discovery Brief & Contact**:
   - Interactive inquiry form with production category and budget selectors.
   - Client-side validation and glowing toast feedback notification.
   - Direct contact cards (Email, Studio Location, Consultation scheduling, and Social channels).

7. **Aesthetic & Technical Polish**:
   - Ultra-fast static performance (zero build friction, zero dependencies).
   - Subtle procedural film grain overlay.
   - Luminous ambient glows & glassmorphic cards.
   - Full keyboard accessibility (ESC to close modals).
   - Fully responsive for mobile, tablet, and ultra-wide displays.

---

## 🚀 How to Run & Preview

### Option 1: Direct Double Click
Simply open `index.html` in any modern web browser (Chrome, Edge, Safari, Firefox).

### Option 2: Local HTTP Server (Python)
```bash
python -m http.server 3000
```
Then visit [http://localhost:3000](http://localhost:3000) in your browser.

### Option 3: Node / npx serve
```bash
npx serve .
```

---

## 📁 Project Structure

```
midnightsunstudios/
├── index.html              # Main cinematic single-page application
├── css/
│   └── style.css           # Custom cinematic styling, grain, glows & slider
├── js/
│   ├── portfolio-data.js   # Structured project filmography & testimonials
│   ├── color-slider.js     # Interactive RAW vs Mastered split slider
│   ├── modal.js            # Video showreel & project drawer controller
│   └── main.js             # Navigation, rendering, filtering & inquiry form
└── README.md               # Documentation & setup instructions
```

---

## 🎨 Customizing Content

- **Add New Projects**: Open [`js/portfolio-data.js`](file:///c:/Users/Shamshad/Desktop/midnightsunstudios/js/portfolio-data.js) and add a new project object to `portfolioProjects`.
- **Change Studio Email**: Update `contact@midnightsunstudios.com` in [`index.html`](file:///c:/Users/Shamshad/Desktop/midnightsunstudios/index.html).
- **Update Color Lab Scenes**: Edit the `scenes` object in [`js/color-slider.js`](file:///c:/Users/Shamshad/Desktop/midnightsunstudios/js/color-slider.js).
