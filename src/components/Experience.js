export function Experience() {
  return `
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
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
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
  `;
}
