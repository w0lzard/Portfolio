export function Hero() {
  return `
<section style="min-height:100vh;max-width:1280px;margin:0 auto;position:relative;" class="flex flex-col md:flex-row items-center py-24 md:py-32 px-6 gap-10 md:gap-16">

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

        <h1 style="font-size:clamp(2.5rem,8vw,6rem);font-weight:800;line-height:1.02;letter-spacing:-.03em;margin-bottom:2rem;">
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
        <div class="hero-word grid grid-cols-2 lg:flex gap-6 lg:gap-10" style="animation-delay:.7s;margin-top:3.5rem;padding-top:2.5rem;border-top:1px solid var(--border);">
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
  `;
}
