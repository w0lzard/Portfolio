export function Skills() {
  return `
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
  `;
}
