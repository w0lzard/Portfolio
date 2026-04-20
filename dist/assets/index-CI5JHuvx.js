(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(t){if(t.ep)return;t.ep=!0;const a=r(t);fetch(t.href,a)}})();function u(){return`
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
  `}function b(){return`
<section style="min-height:100vh;display:flex;align-items:center;padding:8rem 1.5rem 5rem;max-width:1280px;margin:0 auto;position:relative;gap:4rem;" class="flex-col md:flex-row">

    <!-- Glow blobs -->
    <div class="glow-blob" style="width:600px;height:600px;background:rgba(0,0,0,.03);top:-100px;left:-200px;"></div>
    <div class="glow-blob" style="width:400px;height:400px;background:rgba(0,0,0,.03);bottom:0;right:-100px;"></div>

    <!-- Left copy -->
    <div style="flex:1;position:relative;z-index:1;">
        <div style="margin-bottom:1.8rem;">
            <div class="hero-label">
                <span class="dot"></span>
                Available for Internships & Freelance
            </div>
        </div>

        <h1 style="font-size:clamp(3rem,6.5vw,6rem);font-weight:800;line-height:1.02;letter-spacing:-.03em;margin-bottom:2rem;">
            <span class="hero-word" style="animation-delay:.1s;display:block;">Multiplatform</span>
            <span class="hero-word" style="animation-delay:.22s;display:block;color:var(--accent);">App Developer</span>
            <span class="hero-word" style="animation-delay:.34s;display:block;font-style:italic;font-family:'DM Sans',sans-serif;font-weight:300;font-size:.55em;color:var(--muted);">from Gorakhpur, Uttar Pradesh, India.</span>
        </h1>

        <p class="hero-word" style="animation-delay:.46s;max-width:480px;font-size:1.05rem;color:var(--muted);line-height:1.7;margin-bottom:2.5rem;">
            Building cross-platform mobile experiences for Android &amp; iOS from a single Kotlin codebase — with Clean Architecture, MVI, and a love for polished UX.
        </p>

        <div class="hero-word" style="animation-delay:.58s;display:flex;gap:1rem;flex-wrap:wrap;">
            <a href="#projects" style="background:var(--accent);color:var(--accent-fg);padding:.8rem 1.8rem;border-radius:99px;font-family:'Syne',sans-serif;font-weight:700;font-size:.9rem;text-decoration:none;transition:opacity .2s,transform .2s;display:inline-block;" onmouseover="this.style.opacity='.85';this.style.transform='translateY(-2px)'" onmouseout="this.style.opacity='1';this.style.transform='none'">
                View Projects ↓
            </a>
            <a href="https://github.com/W0lzard" target="_blank" style="border:1px solid var(--border);color:var(--text);padding:.8rem 1.8rem;border-radius:99px;font-family:'Syne',sans-serif;font-weight:700;font-size:.9rem;text-decoration:none;transition:border-color .2s,transform .2s;display:inline-block;" onmouseover="this.style.borderColor='rgba(0,0,0,.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='var(--border)';this.style.transform='none'">
                GitHub ↗
            </a>
        </div>

        <!-- Quick stats row -->
        <div class="hero-word" style="animation-delay:.7s;display:flex;gap:2.5rem;margin-top:3.5rem;padding-top:2.5rem;border-top:1px solid var(--border);">
            <div>
                <div style="font-family:'Syne',sans-serif;font-size:1.8rem;font-weight:800;color:var(--accent);">2</div>
                <div style="font-size:.78rem;color:var(--muted);margin-top:.2rem;letter-spacing:.04em;">KMP Apps</div>
            </div>
            <div>
                <div style="font-family:'Syne',sans-serif;font-size:1.8rem;font-weight:800;color:var(--accent);">500+</div>
                <div style="font-size:.78rem;color:var(--muted);margin-top:.2rem;letter-spacing:.04em;">Users Served</div>
            </div>
            <div>
                <div style="font-family:'Syne',sans-serif;font-size:1.8rem;font-weight:800;color:var(--accent);">3</div>
                <div style="font-size:.78rem;color:var(--muted);margin-top:.2rem;letter-spacing:.04em;">Platforms</div>
            </div>
            <div>
                <div style="font-family:'Syne',sans-serif;font-size:1.8rem;font-weight:800;color:var(--accent);">2×</div>
                <div style="font-size:.78rem;color:var(--muted);margin-top:.2rem;letter-spacing:.04em;">Hackathon Organizer</div>
            </div>
        </div>
    </div>

    <!-- Right image grid -->
    <div class="hero-img-grid" style="flex:0 0 340px;position:relative;z-index:1;" id="heroImgGrid">
        <img src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=400&q=80" alt="Android development" class="tall" style="height:320px;">
        <img src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=400&q=80" alt="Mobile UI" style="height:154px;">
        <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&q=80" alt="Coding" style="height:154px;">
    </div>
</section>
  `}function w(){return`
<div style="border-top:1px solid var(--border);border-bottom:1px solid var(--border);padding:1.4rem 0;background:var(--surface);overflow:hidden;">
    <div class="marquee-track" style="gap:3rem;">
        <!-- set 1 -->
        <span style="color:var(--text);font-family:'Syne',sans-serif;font-weight:700;font-size:1.05rem;white-space:nowrap;">Kotlin</span>
        <span style="color:var(--accent);font-size:1.2rem;">✦</span>
        <span style="color:var(--text);font-family:'Syne',sans-serif;font-weight:700;font-size:1.05rem;white-space:nowrap;">Kotlin Multiplatform</span>
        <span style="color:var(--accent);font-size:1.2rem;">✦</span>
        <span style="color:var(--text);font-family:'Syne',sans-serif;font-weight:700;font-size:1.05rem;white-space:nowrap;">Jetpack Compose</span>
        <span style="color:var(--accent);font-size:1.2rem;">✦</span>
        <span style="color:var(--text);font-family:'Syne',sans-serif;font-weight:700;font-size:1.05rem;white-space:nowrap;">Clean Architecture</span>
        <span style="color:var(--accent);font-size:1.2rem;">✦</span>
        <span style="color:var(--text);font-family:'Syne',sans-serif;font-weight:700;font-size:1.05rem;white-space:nowrap;">MVI</span>
        <span style="color:var(--accent);font-size:1.2rem;">✦</span>
        <span style="color:var(--text);font-family:'Syne',sans-serif;font-weight:700;font-size:1.05rem;white-space:nowrap;">Ktor</span>
        <span style="color:var(--accent);font-size:1.2rem;">✦</span>
        <span style="color:var(--text);font-family:'Syne',sans-serif;font-weight:700;font-size:1.05rem;white-space:nowrap;">SQLDelight</span>
        <span style="color:var(--accent);font-size:1.2rem;">✦</span>
        <span style="color:var(--text);font-family:'Syne',sans-serif;font-weight:700;font-size:1.05rem;white-space:nowrap;">ML Kit</span>
        <span style="color:var(--accent);font-size:1.2rem;">✦</span>
        <span style="color:var(--text);font-family:'Syne',sans-serif;font-weight:700;font-size:1.05rem;white-space:nowrap;">SKIE</span>
        <span style="color:var(--accent);font-size:1.2rem;">✦</span>
        <!-- set 2 (duplicate) -->
        <span style="color:var(--text);font-family:'Syne',sans-serif;font-weight:700;font-size:1.05rem;white-space:nowrap;">Kotlin</span>
        <span style="color:var(--accent);font-size:1.2rem;">✦</span>
        <span style="color:var(--text);font-family:'Syne',sans-serif;font-weight:700;font-size:1.05rem;white-space:nowrap;">Kotlin Multiplatform</span>
        <span style="color:var(--accent);font-size:1.2rem;">✦</span>
        <span style="color:var(--text);font-family:'Syne',sans-serif;font-weight:700;font-size:1.05rem;white-space:nowrap;">Jetpack Compose</span>
        <span style="color:var(--accent);font-size:1.2rem;">✦</span>
        <span style="color:var(--text);font-family:'Syne',sans-serif;font-weight:700;font-size:1.05rem;white-space:nowrap;">Clean Architecture</span>
        <span style="color:var(--accent);font-size:1.2rem;">✦</span>
        <span style="color:var(--text);font-family:'Syne',sans-serif;font-weight:700;font-size:1.05rem;white-space:nowrap;">MVI</span>
        <span style="color:var(--accent);font-size:1.2rem;">✦</span>
        <span style="color:var(--text);font-family:'Syne',sans-serif;font-weight:700;font-size:1.05rem;white-space:nowrap;">Ktor</span>
        <span style="color:var(--accent);font-size:1.2rem;">✦</span>
        <span style="color:var(--text);font-family:'Syne',sans-serif;font-weight:700;font-size:1.05rem;white-space:nowrap;">SQLDelight</span>
        <span style="color:var(--accent);font-size:1.2rem;">✦</span>
        <span style="color:var(--text);font-family:'Syne',sans-serif;font-weight:700;font-size:1.05rem;white-space:nowrap;">ML Kit</span>
        <span style="color:var(--accent);font-size:1.2rem;">✦</span>
        <span style="color:var(--text);font-family:'Syne',sans-serif;font-weight:700;font-size:1.05rem;white-space:nowrap;">SKIE</span>
        <span style="color:var(--accent);font-size:1.2rem;">✦</span>
    </div>
</div>
  `}function x(){return`
<section id="about" style="padding:7rem 1.5rem;max-width:1280px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center;" class="reveal">
    <!-- Left: image -->
    <div style="position:relative;">
        <div style="border-radius:20px;overflow:hidden;aspect-ratio:4/5;position:relative;">
            <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=700&q=85" alt="Developer at work" style="width:100%;height:100%;object-fit:cover;">
            <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(255,255,255,.8) 0%,transparent 50%);"></div>
            <div style="position:absolute;bottom:1.5rem;left:1.5rem;">
                <div class="avail-badge">● Open to Opportunities</div>
            </div>
        </div>
        <!-- floating badge -->
        <div style="position:absolute;top:1.5rem;right:-1.5rem;background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:1rem 1.4rem;text-align:center;box-shadow:0 20px 40px rgba(0,0,0,.1);" class="hidden md:block">
            <div style="font-family:'Syne',sans-serif;font-size:2rem;font-weight:800;color:var(--accent);">B.Tech</div>
            <div style="font-size:.72rem;color:var(--muted);margin-top:.2rem;letter-spacing:.05em;text-transform:uppercase;">CSE · 2027</div>
        </div>
    </div>

    <!-- Right: bio -->
    <div>
        <div class="section-eyebrow">About Me</div>
        <h2 style="font-size:clamp(2.2rem,4vw,3.5rem);font-weight:800;line-height:1.1;letter-spacing:-.03em;margin-bottom:1.8rem;">
            A developer who <em style="font-style:italic;color:var(--accent);">bridges</em> Android & iOS
        </h2>
        <p style="color:var(--muted);line-height:1.8;margin-bottom:1.4rem;font-size:1rem;">
            I'm a 3rd-year B.Tech CSE student at UNSIET, Jaunpur. I specialize in <strong style="color:var(--text);">Kotlin Multiplatform (KMP)</strong> — sharing business logic, ViewModels, and even UI across Android, iOS, and Desktop from one codebase.
        </p>
        <p style="color:var(--muted);line-height:1.8;margin-bottom:2.5rem;font-size:1rem;">
            I've built production-ready apps using <strong style="color:var(--text);">Clean Architecture</strong>, barcode scanning with ML Kit + AVFoundation, offline-first data with Room & SQLDelight, and seamless iOS interop with SKIE. I also organise hackathons and contribute to IEEE events at my institute.
        </p>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
            <div class="stat-box">
                <div style="font-family:'Syne',sans-serif;font-size:2.4rem;font-weight:800;color:var(--accent);">60%</div>
                <div style="font-size:.78rem;color:var(--muted);margin-top:.4rem;letter-spacing:.04em;">Network Requests Reduced<br>(Quotopia caching)</div>
            </div>
            <div class="stat-box">
                <div style="font-family:'Syne',sans-serif;font-size:2.4rem;font-weight:800;color:var(--accent);">25%</div>
                <div style="font-size:.78rem;color:var(--muted);margin-top:.4rem;letter-spacing:.04em;">Quiz Abandonment Reduced<br>(Quizlet app)</div>
            </div>
            <div class="stat-box">
                <div style="font-family:'Syne',sans-serif;font-size:2.4rem;font-weight:800;color:var(--accent);">50+</div>
                <div style="font-size:.78rem;color:var(--muted);margin-top:.4rem;letter-spacing:.04em;">Hackathon Participants<br>Coordinated</div>
            </div>
            <div class="stat-box">
                <div style="font-family:'Syne',sans-serif;font-size:2.4rem;font-weight:800;color:var(--accent);">3</div>
                <div style="font-size:.78rem;color:var(--muted);margin-top:.4rem;letter-spacing:.04em;">Platforms from<br>One Codebase</div>
            </div>
        </div>
    </div>
</section>
  `}function z(){return`
<section id="projects" style="padding:4rem 1.5rem 7rem;max-width:1280px;margin:0 auto;">
    <div style="margin-bottom:4rem;" class="reveal">
        <div class="section-eyebrow">Selected Work</div>
        <div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:1rem;">
            <h2 style="font-size:clamp(2.5rem,5vw,4.5rem);font-weight:800;letter-spacing:-.03em;line-height:1;">Projects</h2>
            <a href="https://github.com/W0lzard" target="_blank" style="color:var(--muted);font-size:.85rem;font-weight:600;text-decoration:none;border:1px solid var(--border);padding:.5rem 1.2rem;border-radius:99px;transition:border-color .2s,color .2s;" onmouseover="this.style.borderColor='rgba(0,0,0,.3)';this.style.color='var(--text)'" onmouseout="this.style.borderColor='var(--border)';this.style.color='var(--muted)'">View all on GitHub ↗</a>
        </div>
    </div>

    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:1.5rem;">

        <!-- Dokusho -->
        <div class="project-card reveal reveal-delay-1">
            <div style="overflow:hidden;position:relative;">
                <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=700&q=80" alt="Dokusho book app" class="project-thumb">
                <div style="position:absolute;top:1rem;left:1rem;display:flex;gap:.5rem;">
                    <span class="tag accent">KMP</span>
                    <span class="tag">Open Source</span>
                </div>
            </div>
            <div style="padding:2rem;flex:1;display:flex;flex-direction:column;">
                <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:1rem;">
                    <div>
                        <h3 style="font-size:1.6rem;font-weight:800;letter-spacing:-.02em;margin-bottom:.4rem;">Dokusho</h3>
                        <p style="font-size:.82rem;color:var(--muted);font-weight:500;">Android · iOS · Desktop</p>
                    </div>
                    <a href="https://github.com/w0lzard/Dokusho" target="_blank" style="width:40px;height:40px;border:1px solid var(--border);border-radius:50%;display:flex;align-items:center;justify-content:center;color:var(--muted);text-decoration:none;font-size:1rem;transition:all .2s;flex-shrink:0;" onmouseover="this.style.borderColor='var(--accent)';this.style.color='var(--accent)'" onmouseout="this.style.borderColor='var(--border)';this.style.color='var(--muted)'">↗</a>
                </div>
                <p style="color:var(--muted);line-height:1.7;font-size:.9rem;margin-bottom:1.5rem;flex:1;">
                    Cross-platform book discovery app sharing UI &amp; business logic across Android, iOS, and Desktop from a single Kotlin codebase. Integrated Open Library API via Ktor with real-time query debouncing and offline-persistent favorites using Room KMP.
                </p>
                <div style="display:flex;flex-wrap:wrap;gap:.5rem;">
                    <span class="tag">Compose Multiplatform</span>
                    <span class="tag">Ktor</span>
                    <span class="tag">Room</span>
                    <span class="tag">Koin</span>
                    <span class="tag">Coil 3</span>
                    <span class="tag">MVVM</span>
                </div>
            </div>
        </div>

        <!-- Obsidian Ledger -->
        <div class="project-card reveal reveal-delay-2">
            <div style="overflow:hidden;position:relative;">
                <img src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=700&q=80" alt="Obsidian Ledger finance app" class="project-thumb">
                <div style="position:absolute;top:1rem;left:1rem;display:flex;gap:.5rem;">
                    <span class="tag accent">KMP</span>
                    <span class="tag">Open Source</span>
                </div>
            </div>
            <div style="padding:2rem;flex:1;display:flex;flex-direction:column;">
                <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:1rem;">
                    <div>
                        <h3 style="font-size:1.6rem;font-weight:800;letter-spacing:-.02em;margin-bottom:.4rem;">Obsidian Ledger</h3>
                        <p style="font-size:.82rem;color:var(--muted);font-weight:500;">Android · iOS</p>
                    </div>
                    <a href="https://github.com/w0lzard/Obsidian-Ledger" target="_blank" style="width:40px;height:40px;border:1px solid var(--border);border-radius:50%;display:flex;align-items:center;justify-content:center;color:var(--muted);text-decoration:none;font-size:1rem;transition:all .2s;flex-shrink:0;" onmouseover="this.style.borderColor='var(--accent)';this.style.color='var(--accent)'" onmouseout="this.style.borderColor='var(--border)';this.style.color='var(--muted)'">↗</a>
                </div>
                <p style="color:var(--muted);line-height:1.7;font-size:.9rem;margin-bottom:1.5rem;flex:1;">
                    Offline-first personal finance manager built with Kotlin Multiplatform. Track expenses and monitor budgets in a dark UI shared across Android and iOS. Features Supabase sync-ready architecture and SQLDelight local storage.
                </p>
                <div style="display:flex;flex-wrap:wrap;gap:.5rem;">
                    <span class="tag">Compose Multiplatform</span>
                    <span class="tag">SQLDelight</span>
                    <span class="tag">Supabase</span>
                </div>
            </div>
        </div>

        <!-- Quizlet + Quotopia combined card -->
        <div class="project-card reveal reveal-delay-3" style="grid-column: span 1;">
            <div style="overflow:hidden;position:relative;">
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700&q=80" alt="Intern projects" class="project-thumb">
                <div style="position:absolute;top:1rem;left:1rem;">
                    <span class="tag" style="background:rgba(10,10,10,.05);color:var(--accent);border-color:rgba(10,10,10,.1);">Internship · CodeAlpha</span>
                </div>
            </div>
            <div style="padding:2rem;">
                <h3 style="font-size:1.6rem;font-weight:800;letter-spacing:-.02em;margin-bottom:.3rem;">Quizlet &amp; Quotopia</h3>
                <p style="font-size:.82rem;color:var(--muted);font-weight:500;margin-bottom:1.2rem;">Android · Java · Sept – Oct 2025</p>
                <p style="color:var(--muted);line-height:1.7;font-size:.9rem;margin-bottom:1.5rem;">
                    Two production Android apps built during CodeAlpha internship. Quizlet supported 500+ concurrent users with countdown timers and instant scoring. Quotopia reduced network requests by 60% through REST API caching and offline favorites.
                </p>
                <div style="display:flex;flex-wrap:wrap;gap:.5rem;">
                    <span class="tag">Android</span>
                    <span class="tag">Java</span>
                    <span class="tag">MySQL</span>
                    <span class="tag">REST API</span>
                    <span class="tag">Local DB</span>
                </div>
            </div>
        </div>

    </div>
</section>
  `}function k(){return`
<section id="experience" style="padding:4rem 1.5rem 7rem;max-width:1280px;margin:0 auto;">
    <div style="max-width:800px;margin:0 auto;">
        <div class="reveal">
            <div class="section-eyebrow">Career</div>
            <h2 style="font-size:clamp(2.5rem,5vw,4.5rem);font-weight:800;letter-spacing:-.03em;margin-bottom:4rem;">Experience</h2>
        </div>

        <!-- CodeAlpha -->
        <div style="position:relative;padding-left:2.5rem;margin-bottom:4rem;" class="reveal">
            <div class="timeline-line"></div>
            <div class="timeline-dot"></div>
            <div style="background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:2rem 2.5rem;">
                <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:.5rem;margin-bottom:.6rem;">
                    <div style="display:flex;align-items:center;gap:1rem;">
                        <div style="width:44px;height:44px;background:var(--surface2);border-radius:10px;display:flex;align-items:center;justify-content:center;font-family:'Syne',sans-serif;font-weight:800;font-size:.85rem;color:var(--accent);">CA</div>
                        <div>
                            <h3 style="font-size:1.3rem;font-weight:800;letter-spacing:-.01em;">CodeAlpha</h3>
                            <p style="font-size:.82rem;color:var(--muted);">Software Development Intern · Remote</p>
                        </div>
                    </div>
                    <span style="font-size:.78rem;color:var(--muted);background:var(--surface2);padding:.3rem .9rem;border-radius:99px;border:1px solid var(--border);height:fit-content;">Sept 2025 – Oct 2025</span>
                </div>
                <div style="margin-top:1.5rem;display:grid;grid-template-columns:1fr 1fr;gap:1.2rem;">
                    <div style="background:var(--surface2);border-radius:12px;padding:1.2rem;">
                        <h5 style="font-weight:700;font-size:.95rem;margin-bottom:.5rem;color:var(--text);">Quizlet Learning Platform</h5>
                        <p style="font-size:.82rem;color:var(--muted);line-height:1.6;">Engineered quiz app supporting 500+ concurrent users with CRUD operations, real-time countdown timers, and instant scoring — reducing quiz abandonment by 25–30%.</p>
                    </div>
                    <div style="background:var(--surface2);border-radius:12px;padding:1.2rem;">
                        <h5 style="font-weight:700;font-size:.95rem;margin-bottom:.5rem;color:var(--text);">Quotopia Quotes App</h5>
                        <p style="font-size:.82rem;color:var(--muted);line-height:1.6;">Built quotes app with category filtering, search, and persistent offline favorites. REST API caching strategy reduced network requests by 60% and improved responsiveness.</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Hackathon -->
        <div style="position:relative;padding-left:2.5rem;margin-bottom:4rem;" class="reveal">
            <div class="timeline-line" style="background:linear-gradient(to bottom, var(--accent2), transparent);"></div>
            <div class="timeline-dot" style="background:var(--accent2);box-shadow:0 0 12px rgba(75,85,99,0.3);"></div>
            <div style="background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:2rem 2.5rem;">
                <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:.5rem;margin-bottom:.6rem;">
                    <div style="display:flex;align-items:center;gap:1rem;">
                        <div style="width:44px;height:44px;background:rgba(10,10,10,.05);border:1px solid rgba(10,10,10,.1);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:1.2rem;">🏆</div>
                        <div>
                            <h3 style="font-size:1.3rem;font-weight:800;letter-spacing:-.01em;">Smart India Hackathon Organizer</h3>
                            <p style="font-size:.82rem;color:var(--muted);">UNSIET, Jaunpur</p>
                        </div>
                    </div>
                    <span style="font-size:.78rem;color:var(--muted);background:var(--surface2);padding:.3rem .9rem;border-radius:99px;border:1px solid var(--border);height:fit-content;">2024 & 2025</span>
                </div>
                <p style="font-size:.88rem;color:var(--muted);line-height:1.7;margin-top:1rem;">Coordinated planning, team evaluations, and logistics for 50+ participants across two consecutive years of internal hackathons. Also volunteered at CodeVerse'25 &amp; IEEE Data Analytics Workshop 2025.</p>
            </div>
        </div>
    </div>
</section>
  `}function S(){return`
<section id="skills" style="padding:4rem 1.5rem 7rem;max-width:1280px;margin:0 auto;">
    <div class="reveal" style="margin-bottom:4rem;">
        <div class="section-eyebrow">Expertise</div>
        <h2 style="font-size:clamp(2.5rem,5vw,4.5rem);font-weight:800;letter-spacing:-.03em;">Core Skills</h2>
    </div>

    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem;">

        <!-- Languages -->
        <div style="background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:2rem;" class="reveal">
            <h3 style="font-size:.75rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--accent);margin-bottom:1.5rem;">Languages</h3>
            <div style="display:flex;flex-direction:column;gap:1.2rem;" class="skill-group">
                <div><div style="display:flex;justify-content:space-between;margin-bottom:.5rem;"><span style="font-weight:600;font-size:.9rem;">Kotlin</span><span style="font-size:.8rem;color:var(--muted);">Expert</span></div><div class="skill-bar-bg"><div class="skill-bar-fill" data-width="0.92"></div></div></div>
                <div><div style="display:flex;justify-content:space-between;margin-bottom:.5rem;"><span style="font-weight:600;font-size:.9rem;">Java</span><span style="font-size:.8rem;color:var(--muted);">Advanced</span></div><div class="skill-bar-bg"><div class="skill-bar-fill" data-width="0.78"></div></div></div>
                <div><div style="display:flex;justify-content:space-between;margin-bottom:.5rem;"><span style="font-weight:600;font-size:.9rem;">Python / C++</span><span style="font-size:.8rem;color:var(--muted);">Familiar</span></div><div class="skill-bar-bg"><div class="skill-bar-fill" data-width="0.55"></div></div></div>
            </div>
        </div>

        <!-- Mobile -->
        <div style="background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:2rem;" class="reveal reveal-delay-1">
            <h3 style="font-size:.75rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--accent);margin-bottom:1.5rem;">Mobile</h3>
            <div style="display:flex;flex-direction:column;gap:1.2rem;" class="skill-group">
                <div><div style="display:flex;justify-content:space-between;margin-bottom:.5rem;"><span style="font-weight:600;font-size:.9rem;">Android SDK</span><span style="font-size:.8rem;color:var(--muted);">Expert</span></div><div class="skill-bar-bg"><div class="skill-bar-fill" data-width="0.9"></div></div></div>
                <div><div style="display:flex;justify-content:space-between;margin-bottom:.5rem;"><span style="font-weight:600;font-size:.9rem;">Kotlin Multiplatform</span><span style="font-size:.8rem;color:var(--muted);">Advanced</span></div><div class="skill-bar-bg"><div class="skill-bar-fill" data-width="0.82"></div></div></div>
                <div><div style="display:flex;justify-content:space-between;margin-bottom:.5rem;"><span style="font-weight:600;font-size:.9rem;">Jetpack Compose</span><span style="font-size:.8rem;color:var(--muted);">Advanced</span></div><div class="skill-bar-bg"><div class="skill-bar-fill" data-width="0.85"></div></div></div>
            </div>
        </div>

        <!-- Architecture & Tools -->
        <div style="background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:2rem;" class="reveal reveal-delay-2">
            <h3 style="font-size:.75rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--accent);margin-bottom:1.5rem;">Architecture & Tools</h3>
            <div style="display:flex;flex-wrap:wrap;gap:.6rem;">
                <span class="tag">Clean Architecture</span>
                <span class="tag">MVVM</span>
                <span class="tag">MVI</span>
                <span class="tag">Repository Pattern</span>
                <span class="tag">Offline-First</span>
                <span class="tag">Ktor</span>
                <span class="tag">Room</span>
                <span class="tag">SQLDelight</span>
                <span class="tag">Koin</span>
                <span class="tag">ML Kit</span>
                <span class="tag">CameraX</span>
                <span class="tag">SKIE</span>
                <span class="tag">Coroutines</span>
                <span class="tag">Flow</span>
                <span class="tag">Git</span>
                <span class="tag">Firebase</span>
                <span class="tag">REST APIs</span>
                <span class="tag">Linux</span>
            </div>
        </div>

    </div>

    <!-- Education banner -->
    <div style="margin-top:1.5rem;background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:2rem 2.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" class="reveal">
        <div style="display:flex;align-items:center;gap:1.5rem;">
            <div style="width:52px;height:52px;background:rgba(10,10,10,.05);border:1px solid rgba(10,10,10,.1);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.5rem;">🎓</div>
            <div>
                <h4 style="font-size:1.1rem;font-weight:800;letter-spacing:-.01em;">B.Tech in Computer Science & Engineering</h4>
                <p style="font-size:.85rem;color:var(--muted);margin-top:.2rem;">Uma Nath Singh Institute of Engineering &amp; Technology, Jaunpur · 2023 – 2027</p>
            </div>
        </div>
        <div class="avail-badge">Expected Graduation: 2027</div>
    </div>
</section>
  `}function A(){return`
<section id="contact" style="padding:4rem 1.5rem 7rem;max-width:1280px;margin:0 auto;">
    <div style="max-width:800px;margin:0 auto;">
        <div class="reveal" style="text-align:center;margin-bottom:4rem;">
            <div class="section-eyebrow" style="justify-content:center;display:flex;">Get in Touch</div>
            <h2 style="font-size:clamp(3rem,7vw,6rem);font-weight:800;letter-spacing:-.04em;line-height:1.05;margin-bottom:1.5rem;">
                Let's build<br><em style="font-style:italic;color:var(--accent);">something.</em>
            </h2>
            <p style="color:var(--muted);font-size:1.05rem;max-width:480px;margin:0 auto;line-height:1.7;">
                I'm open to internships, freelance projects, and collaboration. Drop a message — I usually respond within 24 hours.
            </p>
        </div>

        <div style="display:flex;flex-direction:column;gap:1rem;" class="reveal">
            <a href="mailto:kpsingh2004@outlook.com" class="contact-link">
                <div class="icon-box">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div style="flex:1;">
                    <div style="font-size:.72rem;color:var(--muted);letter-spacing:.08em;text-transform:uppercase;margin-bottom:.2rem;">Email (Outlook)</div>
                    <div>kpsingh2004@outlook.com</div>
                </div>
                <span style="color:var(--accent);font-size:1.2rem;">→</span>
            </a>

            <a href="https://mail.google.com/mail/?view=cm&to=kpsingh2004@outlook.com&su=Portfolio%20Inquiry" target="_blank" class="contact-link">
                <div class="icon-box" style="background:rgba(234,67,53,.05);border:1px solid rgba(234,67,53,.15);">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6Z" stroke="#EA4335" stroke-width="1.5"/><path d="M2 6L12 13L22 6" stroke="#EA4335" stroke-width="1.5" stroke-linecap="round"/></svg>
                </div>
                <div style="flex:1;">
                    <div style="font-size:.72rem;color:var(--muted);letter-spacing:.08em;text-transform:uppercase;margin-bottom:.2rem;">Open in Gmail</div>
                    <div>Send via Gmail → kpsingh2004@outlook.com</div>
                </div>
                <span style="color:#EA4335;font-size:1.2rem;">→</span>
            </a>

            <a href="https://github.com/W0lzard" target="_blank" class="contact-link">
                <div class="icon-box">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                </div>
                <div style="flex:1;">
                    <div style="font-size:.72rem;color:var(--muted);letter-spacing:.08em;text-transform:uppercase;margin-bottom:.2rem;">GitHub</div>
                    <div>github.com/W0lzard</div>
                </div>
                <span style="color:var(--accent);font-size:1.2rem;">→</span>
            </a>

            <a href="https://www.linkedin.com/in/kpsingh21" target="_blank" class="contact-link">
                <div class="icon-box" style="background:rgba(10,102,194,.05);border:1px solid rgba(10,102,194,.15);">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#0A66C2"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </div>
                <div style="flex:1;">
                    <div style="font-size:.72rem;color:var(--muted);letter-spacing:.08em;text-transform:uppercase;margin-bottom:.2rem;">LinkedIn</div>
                    <div>linkedin.com/in/kpsingh21</div>
                </div>
                <span style="color:#0A66C2;font-size:1.2rem;">→</span>
            </a>
        </div>
    </div>
</section>
  `}function M(){return`
<footer>
    <p style="color:var(--muted);font-size:.82rem;letter-spacing:.06em;">
        © 2026 Kshitiz Pratap Singh · Built with HTML, CSS &amp; ☕ · <span style="color:var(--accent);">Open to opportunities</span>
    </p>
</footer>
  `}const f=localStorage.getItem("theme"),E=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;(f==="dark"||!f&&E)&&document.documentElement.setAttribute("data-theme","dark");document.querySelector("#app").innerHTML=`

<!-- Custom Cursor -->
<div class="cursor" id="cursor"></div>
<div class="cursor-follower" id="cursor-follower"></div>

  ${u()}
  ${b()}
  ${w()}
  ${x()}
  ${z()}
  ${k()}
  ${S()}
  ${A()}
  ${M()}

`;const o=document.getElementById("cursor"),n=document.getElementById("cursor-follower");let m=0,v=0,c=0,p=0;document.addEventListener("mousemove",e=>{m=e.clientX,v=e.clientY,o.style.left=m+"px",o.style.top=v+"px"});(function e(){c+=(m-c)*.12,p+=(v-p)*.12,n.style.left=c+"px",n.style.top=p+"px",requestAnimationFrame(e)})();document.querySelectorAll("a,button").forEach(e=>{e.addEventListener("mouseenter",()=>{o.style.width="6px",o.style.height="6px",n.style.width="54px",n.style.height="54px"}),e.addEventListener("mouseleave",()=>{o.style.width="10px",o.style.height="10px",n.style.width="36px",n.style.height="36px"})});const C=document.getElementById("navbar");window.addEventListener("scroll",()=>{C.classList.toggle("scrolled",window.scrollY>30)});const h=new IntersectionObserver(e=>{e.forEach(s=>{s.isIntersecting&&(s.target.classList.add("visible"),h.unobserve(s.target))})},{threshold:.12});document.querySelectorAll(".reveal").forEach(e=>h.observe(e));const y=new IntersectionObserver(e=>{e.forEach(s=>{s.isIntersecting&&(s.target.querySelectorAll(".skill-bar-fill").forEach(r=>{r.style.transform=`scaleX(${r.dataset.width})`,r.classList.add("animated")}),y.unobserve(s.target))})},{threshold:.3});document.querySelectorAll(".skill-group").forEach(e=>y.observe(e));const I=document.getElementById("theme-toggle"),g=document.querySelector("#theme-icon path");function d(e){e?g.setAttribute("d","M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"):g.setAttribute("d","M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z")}d(document.documentElement.getAttribute("data-theme")==="dark");I.addEventListener("click",e=>{const s=document.documentElement.getAttribute("data-theme")==="dark";if(!document.startViewTransition){document.documentElement.classList.add("theme-transitioning"),s?(document.documentElement.removeAttribute("data-theme"),localStorage.setItem("theme","light"),d(!1)):(document.documentElement.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark"),d(!0)),setTimeout(()=>document.documentElement.classList.remove("theme-transitioning"),400);return}const r=e.clientX,i=e.clientY,t=Math.hypot(Math.max(r,innerWidth-r),Math.max(i,innerHeight-i));document.startViewTransition(()=>{s?(document.documentElement.removeAttribute("data-theme"),localStorage.setItem("theme","light"),d(!1)):(document.documentElement.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark"),d(!0))}).ready.then(()=>{const l=[`circle(0px at ${r}px ${i}px)`,`circle(${t}px at ${r}px ${i}px)`];document.documentElement.animate({clipPath:l},{duration:500,easing:"ease-in-out",pseudoElement:"::view-transition-new(root)"})})});
