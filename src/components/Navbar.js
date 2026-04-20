export function Navbar() {
  return `
<nav id="navbar">
    <div style="max-width:1280px;margin:0 auto;padding:1.2rem 1.5rem;display:flex;justify-content:space-between;align-items:center;">
        <a href="#" style="font-family:'Syne',sans-serif;font-weight:800;font-size:1.15rem;color:var(--text);text-decoration:none;letter-spacing:-.01em;">
            KPS<span style="color:var(--accent);">.</span>
        </a>
        <div style="display:flex;gap:2rem;align-items:center;" class="hidden md:flex">
            <a href="#about" class="nav-link">About</a>
            <a href="#projects" class="nav-link">Projects</a>
            <a href="#experience" class="nav-link">Experience</a>
            <a href="#skills" class="nav-link">Skills</a>
        </div>
        <div style="display:flex;align-items:center;gap:1.5rem;">
            <button id="theme-toggle" aria-label="Toggle Dark Mode" style="background:none;border:none;cursor:pointer;color:var(--text);display:flex;align-items:center;justify-content:center;transition:transform .2s;opacity:0.8;" onmouseover="this.style.opacity='1';this.style.transform='scale(1.1)'" onmouseout="this.style.opacity='0.8';this.style.transform='none'">
                <!-- Sun/Moon Icon -->
                <svg id="theme-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
            </button>
            <a href="mailto:kpsingh2004@outlook.com" class="nav-pill">Hire Me ↗</a>
        </div>
    </div>
</nav>
  `;
}
