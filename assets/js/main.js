// 1. AOS - FIRST thing, no conditions
if (typeof AOS !== 'undefined') {
    AOS.init({
        once: true,
        offset: 50,
        duration: 800,
        easing: 'ease-out-cubic',
    });
}

// Hero decoration charts (immediate, no observer needed)
document.addEventListener('DOMContentLoaded', () => {
    try {
        const heroBar = document.getElementById('heroBarChart');
        if (heroBar && typeof Chart !== 'undefined') {
            new Chart(heroBar.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: ['Manual', 'Excel', 'ISO Digital'],
                    datasets: [{
                        data: [15, 8, 0.5],
                        backgroundColor: ['rgba(139,92,246,0.5)', 'rgba(100,116,139,0.5)', 'rgba(6,182,212,0.7)'],
                        borderColor: ['#8b5cf6', '#94a3b8', '#06b6d4'],
                        borderWidth: 2,
                        borderRadius: 6,
                    }]
                },
                options: {
                    responsive: true, maintainAspectRatio: false,
                    plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => c.parsed.y + ' días' } } },
                    scales: {
                        y: { beginAtZero: true, grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#64748b', font: { size: 10 } } },
                        x: { grid: { display: false }, ticks: { color: '#e2e8f0', font: { size: 10, weight: 'bold' } } }
                    },
                    animation: { duration: 2000, easing: 'easeOutQuart' }
                }
            });
        }
    } catch(e) { console.warn('Hero bar chart failed', e); }

    try {
        const heroDonut = document.getElementById('heroDonutChart');
        if (heroDonut && typeof Chart !== 'undefined') {
            new Chart(heroDonut.getContext('2d'), {
                type: 'doughnut',
                data: {
                    labels: ['Íntegro', 'Gaps'],
                    datasets: [{ data: [100, 0], backgroundColor: ['rgba(6,182,212,0.8)', 'rgba(255,255,255,0.05)'], borderWidth: 0, hoverOffset: 4 }]
                },
                options: {
                    responsive: true, maintainAspectRatio: false,
                    cutout: '75%',
                    plugins: { legend: { display: false } },
                    animation: { duration: 2500, easing: 'easeOutQuart' }
                }
            });
        }
    } catch(e) { console.warn('Hero donut chart failed', e); }

    // 2. Vanilla Tilt — safe wrapper
    try {
        if (typeof VanillaTilt !== 'undefined') {
            VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
                max: 5, speed: 400, glare: true, "max-glare": 0.1, perspective: 1000
            });
        }
    } catch(e) { console.warn('VanillaTilt init failed', e); }

    // 3. tsParticles — safe wrapper
    try {
        if (typeof tsParticles !== 'undefined') {
            tsParticles.load("tsparticles", {
                fpsLimit: 60,
                particles: {
                    number: { value: 55, density: { enable: true, value_area: 800 } },
                    color: { value: ["#06b6d4", "#8b5cf6"] },
                    links: { enable: true, distance: 150, color: "#ffffff", opacity: 0.08, width: 1 },
                    shape: { type: "circle" },
                    opacity: { value: 0.4, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
                    size: { value: 3, random: true },
                    move: { enable: true, speed: 0.8, direction: "none", out_mode: "out" }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: { enable: true, mode: "grab" },
                        onclick: { enable: true, mode: "push" },
                        resize: true
                    },
                    modes: {
                        grab: { distance: 180, line_linked: { opacity: 0.4 } },
                        push: { particles_nb: 3 }
                    }
                },
                retina_detect: true
            });
        }
    } catch(e) { console.warn('tsParticles init failed', e); }

    // 4. Chart.js — safe wrapper
    try {
        const canvas = document.getElementById('performanceChart');
        if (canvas && typeof Chart !== 'undefined') {
            const ctx = canvas.getContext('2d');

            const purpleGradient = ctx.createLinearGradient(0, 0, 0, 400);
            purpleGradient.addColorStop(0, 'rgba(139, 92, 246, 0.6)');
            purpleGradient.addColorStop(1, 'rgba(139, 92, 246, 0.05)');

            const grayGradient = ctx.createLinearGradient(0, 0, 0, 400);
            grayGradient.addColorStop(0, 'rgba(100, 116, 139, 0.5)');
            grayGradient.addColorStop(1, 'rgba(100, 116, 139, 0.05)');

            const cyanGradient = ctx.createLinearGradient(0, 0, 0, 400);
            cyanGradient.addColorStop(0, 'rgba(6, 182, 212, 0.6)');
            cyanGradient.addColorStop(1, 'rgba(6, 182, 212, 0.01)');

            const config = {
                type: 'bar',
                data: {
                    labels: ['Manual (Antes)', 'Excel (Transición)', 'ISO 11620 Digital'],
                    datasets: [{
                        label: 'Días requeridos',
                        data: [15, 8, 0.5],
                        backgroundColor: [purpleGradient, grayGradient, cyanGradient],
                        borderColor: ['#8b5cf6', '#94a3b8', '#06b6d4'],
                        borderWidth: 2,
                        borderRadius: 8,
                        barPercentage: 0.6,
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    color: '#94a3b8',
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            backgroundColor: 'rgba(2, 6, 23, 0.9)',
                            titleFont: { size: 14, family: 'Montserrat' },
                            bodyFont: { size: 12, family: 'Inter' },
                            padding: 12,
                            borderColor: '#06b6d4',
                            borderWidth: 1,
                            displayColors: false,
                            callbacks: { label: (ctx) => ctx.parsed.y + ' Días Requeridos' }
                        }
                    },
                    scales: {
                        y: { beginAtZero: true, grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#64748b' } },
                        x: { grid: { display: false }, ticks: { color: '#e2e8f0', font: { family: 'Montserrat', weight: 'bold' } } }
                    },
                    animation: { duration: 2000, easing: 'easeOutQuart' }
                }
            };

            const obs = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    new Chart(ctx, config);
                    obs.disconnect();
                }
            }, { threshold: 0.3 });
            obs.observe(canvas);
        }
    } catch(e) { console.warn('Chart.js init failed', e); }

});
