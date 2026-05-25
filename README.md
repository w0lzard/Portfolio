# ✨ Kshitiz Pratap Singh — Portfolio

Welcome to the source code repository of my personal portfolio website. This is a highly polished, interactive, and modern single-page portfolio built with **Vite**, **ES6 JavaScript Modules**, and **Custom Vanilla CSS** enhanced with **Tailwind CSS**. It is designed with clean architecture principles to be lightweight, modular, and extremely performant.

🌐 **Live Demo:** [Portfolio on GitHub Pages / Vercel] *(Or your live deployment URL)*

---

## 🚀 Key Features

*   **⚡ Modern Module-based Architecture:** Decoupled UI components built as ES6 JavaScript templates inside the `src/components` folder for clean maintainability and fast compilation.
*   **🌓 Smooth Wave Theme Toggle (View Transitions):** Interactive Light/Dark mode transitions using a circular ripple clip-path animation powered by the modern **CSS View Transitions API** (with elegant fallbacks).
*   **🖱️ Custom Fluid Cursor:** A dynamic lagging follower cursor system that morphs size and opacity when hovering over interactive elements.
*   **🌌 Physics-Based Particles Background:** Fully customized HTML5 canvas interactive background that responds to light and dark theme configurations.
*   **📊 Animated Skill Metrics:** Scroll-triggered IntersectionObserver skill bars that dynamically slide and scale to reflect coding proficiency.
*   **📱 Fully Fluid & Responsive:** Utilizes modern CSS custom properties, grid layouts, and fluid typography (`clamp()`) to deliver a breathtaking experience across mobile, tablet, and desktop screens.

---

## 🛠️ Technology Stack

*   **Core:** [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML), [JavaScript (ES6 Modules)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
*   **Styles:** [Vanilla CSS3 Custom Properties (Variables)](https://developer.mozilla.org/en-US/docs/Web/CSS), [Tailwind CSS](https://tailwindcss.com/) (Layout utility helpers)
*   **Fonts:** [Syne](https://fonts.google.com/specimen/Syne) & [DM Sans](https://fonts.google.com/specimen/DM+Sans) (Google Fonts)
*   **Tooling & Bundler:** [Vite 5](https://vitejs.dev/)

---

## 📂 Codebase structure

```text
├── dist/                     # Optimized production builds
├── src/
│   ├── components/           # Modular UI Components
│   │   ├── About.js          # Biography and statistics
│   │   ├── Contact.js        # Contact details & social media links
│   │   ├── Experience.js     # Professional internship & volunteer history
│   │   ├── Footer.js         # Page footer copyright
│   │   ├── Hero.js           # Bold landing section & statistics
│   │   ├── Marquee.js        # Infinite scrolling tech marquee
│   │   ├── Navbar.js         # Navigation header and dark mode toggle button
│   │   ├── Particles.js      # Physics particle animation engine
│   │   ├── Projects.js       # Featured project showcases (Dokusho, Obsidian Ledger, etc.)
│   │   └── Skills.js         # Skill categorization and bar layout
│   │
│   ├── styles/
│   │   └── global.css        # The complete UI Design System tokens (Colors, animations, cursors, inputs)
│   │
│   └── main.js               # Main application shell, state managers, and entrypoint
│
├── index.html                # HTML entry document (Tailwind initialization)
├── package.json              # Script runners and dependencies
└── vite.config.js            # Vite bundler configurations
```

---

## 🛠️ Getting Started

Follow these steps to run the portfolio website locally on your computer.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (v18 or higher recommended) installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/w0lzard/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   *Your site will be running at `http://localhost:5173`.*

4. **Build the production bundle:**
   ```bash
   npm run build
   ```
   *This compiles optimized HTML, JS, and CSS code into the `dist/` directory, ready to be deployed to GitHub Pages, Netlify, Vercel, or Firebase.*

---

## 🧑‍💻 About the Developer

I'm **Kshitiz Pratap Singh** (also known as **W0lzard**), a 3rd-year B.Tech Computer Science and Engineering student at **UNSIET, Jaunpur** (graduating Class of 2027), residing in **Gorakhpur, Uttar Pradesh, India**.

*   **Specialization:** Kotlin Multiplatform (KMP), Compose Multiplatform, Android Development, Clean Architecture, and polished UI/UX development.
*   **Key Projects:**
    *   **Dokusho:** Android, iOS, and Desktop book discovery application built with Kotlin Multiplatform, Room KMP, Koin, Ktor, and MVVM.
    *   **Obsidian Ledger:** An offline-first personal expense tracker app built on Kotlin Multiplatform with SQLDelight and Supabase synchronization.
    *   **Quizlet & Quotopia:** Dual production Android applications developed during my internship at CodeAlpha, serving over 500+ users.
*   **Social Links:**
    *   GitHub: [@W0lzard](https://github.com/W0lzard)
    *   LinkedIn: [Kshitiz Pratap Singh](https://www.linkedin.com/) *(Optional: insert your real LinkedIn URL if desired)*

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE) (or whatever license you prefer to assign). Feel free to customize and use this template for your own developer portfolio.
