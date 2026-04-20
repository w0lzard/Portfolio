export function About() {
  return `
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
  `;
}
