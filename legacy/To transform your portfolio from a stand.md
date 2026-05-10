To transform your portfolio from a standard dev site into a high-end "AI Engineer Art Piece," you need to move away from static grids and toward **dynamic, generative, and terminal-inspired aesthetics.**

Here is a comprehensive prompt you can paste into **Cursor (using Composer / Ctrl+I)** to overhaul the front end.

---

## The Cursor Prompt

> **Context:** I want to overhaul the UI/UX of my portfolio to look like a high-end, "Art-meets-Tech" AI Engineer landing page. It currently feels too "standard."
> **The Goal:** Create a dark, cinematic, immersive experience that feels like a futuristic AI interface (think *Iron Man's HUD* meets *Stripe's* elegance).
> **Please apply these specific UI changes:**
> 1. **Background - Generative Art:** Replace the static background with a subtle, interactive **p5.js or Three.js particle field** or a "Neural Network" constellation that reacts to mouse movement.
> 2. **Typography:** Use a high-contrast combination of a brutalist mono font (like `JetBrains Mono`) for data/labels and a premium serif (like `PP Editorial New`) or sleek sans-serif (like `Geist`) for headings.
> 3. **Glassmorphism & Glow:** Implement deep glassmorphism for cards. Give them a very subtle "inner glow" and use **radial gradients** for the background highlights instead of flat colors.
> 4. **Terminal Aesthetics:** Wrap the "About" section in a stylized, interactive terminal window with a blinking cursor and "typing" animation effects for the JSON data.
> 5. **Micro-Interactions:** >     * Add a **magnetic effect** to the Call-to-Action buttons.
> * Add a **glitch effect** or "scanline" overlay that appears briefly when hovering over project images.
> * Use **Framer Motion** for staggered "reveal" animations as I scroll down.
> 
> 
> 6. **Color Palette:** Stick to a "Midnight" theme: `#050505` background, with accents in **Electric Violet** or **Cyan Hyper-link**, using low-opacity borders (`rgba(255,255,255,0.1)`).
> 7. **Data Visualization:** For the "Skills" section, replace the standard progress bars with something more technical, like **radar charts** or "Power levels" that look like system diagnostics.
> 
> 
> **Tech Stack Constraint:** Keep using the current framework (Tailwind CSS + React/Next.js). Use Lucide-react for icons but give them a subtle "glow" filter via CSS.

---

## 3 Specific Tips to "AI-ify" the Look

While Cursor works on the code, consider these manual tweaks to boost the "AI Engineer" vibe:

* **Custom Cursor:** Implement a custom SVG cursor (a small ring or crosshair) that expands when hovering over clickable elements. This immediately makes a site feel like a "web app" rather than a "page."
* **The "Agent" Section:** Since you specialize in AI Agents, create a "Live Terminal" component where users can type a question, and a mock "Agent" logs its thought process (e.g., `> Thinking...`, `> Accessing Vector DB...`, `> Formulating Response...`).
* **ASCII Art:** Add a hidden or subtle piece of ASCII art in the footer or the console log to show you’re deep into the "Self-Hosted/Linux" culture.

**Current Tech Check:** Your site is already clean and uses a good stack. The main thing missing is **depth** (layers, shadows, and movement). Applying the "Glassmorphism" and "Generative Background" instructions above will solve that "boring" feeling immediately.