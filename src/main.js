// Theme initialization mapped to HTML root before paint
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
}

import { Navbar } from './components/Navbar.js';
import { Hero } from './components/Hero.js';
import { Marquee } from './components/Marquee.js';
import { About } from './components/About.js';
import { Projects } from './components/Projects.js';
import { Experience } from './components/Experience.js';
import { Skills } from './components/Skills.js';
import { Contact } from './components/Contact.js';
import { Footer } from './components/Footer.js';


document.querySelector('#app').innerHTML = `

<!-- Custom Cursor -->
<div class="cursor" id="cursor"></div>
<div class="cursor-follower" id="cursor-follower"></div>

  ${Navbar()}
  ${Hero()}
  ${Marquee()}
  ${About()}
  ${Projects()}
  ${Experience()}
  ${Skills()}
  ${Contact()}
  ${Footer()}

`;


// Cursor
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');
    let mx = 0, my = 0, fx = 0, fy = 0;
    document.addEventListener('mousemove', e => {
        mx = e.clientX; my = e.clientY;
        cursor.style.left = mx + 'px';
        cursor.style.top = my + 'px';
    });
    (function animFollower() {
        fx += (mx - fx) * 0.12;
        fy += (my - fy) * 0.12;
        follower.style.left = fx + 'px';
        follower.style.top = fy + 'px';
        requestAnimationFrame(animFollower);
    })();
    document.querySelectorAll('a,button').forEach(el => {
        el.addEventListener('mouseenter', () => { cursor.style.width='6px'; cursor.style.height='6px'; follower.style.width='54px'; follower.style.height='54px'; });
        el.addEventListener('mouseleave', () => { cursor.style.width='10px'; cursor.style.height='10px'; follower.style.width='36px'; follower.style.height='36px'; });
    });

    // Navbar scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 30);
    });

    // Scroll reveal
    const io = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));

    // Skill bars
    const barIO = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
                    bar.style.transform = `scaleX(${bar.dataset.width})`;
                    bar.classList.add('animated');
                });
                barIO.unobserve(e.target);
            }
        });
    }, { threshold: 0.3 });
    document.querySelectorAll('.skill-group').forEach(g => barIO.observe(g));

    // Theme Toggle Logic
    const themeBtn = document.getElementById('theme-toggle');
    const themeIconPath = document.querySelector('#theme-icon path');

    function updateThemeIcon(isDark) {
        if (isDark) {
            // Sun icon for switching back to light mode
            themeIconPath.setAttribute('d', 'M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z');
        } else {
            // Moon icon for switching to dark mode
            themeIconPath.setAttribute('d', 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z');
        }
    }

    // Initialize icon based on current state
    updateThemeIcon(document.documentElement.getAttribute('data-theme') === 'dark');

    themeBtn.addEventListener('click', (e) => {
        const isCurrentlyDark = document.documentElement.getAttribute('data-theme') === 'dark';
        
        // Fallback for browsers without View Transitions
        if (!document.startViewTransition) {
            document.documentElement.classList.add('theme-transitioning');
            if (isCurrentlyDark) {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
                updateThemeIcon(false);
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                updateThemeIcon(true);
            }
            setTimeout(() => document.documentElement.classList.remove('theme-transitioning'), 400);
            return;
        }

        // Get click position for ripple origin
        const x = e.clientX;
        const y = e.clientY;
        const endRadius = Math.hypot(
            Math.max(x, innerWidth - x),
            Math.max(y, innerHeight - y)
        );

        const transition = document.startViewTransition(() => {
            if (isCurrentlyDark) {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
                updateThemeIcon(false);
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                updateThemeIcon(true);
            }
        });

        transition.ready.then(() => {
            const clipPath = [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${endRadius}px at ${x}px ${y}px)`
            ];
            
            document.documentElement.animate(
                {
                    clipPath: clipPath,
                },
                {
                    duration: 500,
                    easing: 'ease-in-out',
                    pseudoElement: '::view-transition-new(root)',
                }
            );
        });
    });