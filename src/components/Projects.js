export function Projects() {
  return `
<section id="projects" style="padding:4rem 1.5rem 7rem;max-width:1280px;margin:0 auto;">
    <div style="margin-bottom:4rem;" class="reveal">
        <div class="section-eyebrow">Selected Work</div>
        <div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:1rem;">
            <h2 style="font-size:clamp(2.5rem,5vw,4.5rem);font-weight:800;letter-spacing:-.03em;line-height:1;">Projects</h2>
            <a href="https://github.com/W0lzard" target="_blank" style="color:var(--muted);font-size:.85rem;font-weight:600;text-decoration:none;border:1px solid var(--border);padding:.5rem 1.2rem;border-radius:99px;transition:border-color .2s,color .2s;" onmouseover="this.style.borderColor='rgba(0,0,0,.3)';this.style.color='var(--text)'" onmouseout="this.style.borderColor='var(--border)';this.style.color='var(--muted)'">View all on GitHub ↗</a>
        </div>
    </div>

    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem;">

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
  `;
}
