// animations.js
// Smooth fade-in on page load

document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-in");

  fadeElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("visible");
    }, 300 + index * 250); // stagger animation
  });
});
/**
 * script.js — WOW Level B animations (clean, validated)
 * Smooth reveals, stagger, subtle parallax, logo breathing, particles, ripple
 */

(function () {
  "use strict";

  // Run only after DOM is ready
  document.addEventListener("DOMContentLoaded", () => {

    /* ============================
       1) Intersection reveal
       ============================ */
    const revealElements = document.querySelectorAll(".reveal");
    if (revealElements.length) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              // optional: stop observing after visible to save work
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      revealElements.forEach((el) => observer.observe(el));
    }

    /* ============================
       2) Staggered card reveal
       ============================ */
    function staggerCards(selector) {
      const cards = document.querySelectorAll(selector);
      cards.forEach((card, i) => {
        // keep existing CSS-friendly class, but add a tiny inline delay
        card.style.animationDelay = `${i * 0.12}s`;
        card.classList.add("stagger-reveal");
      });
    }

    staggerCards(".card");
    staggerCards(".trail-item");

    /* ============================
       3) Soft hero / banner parallax
       ============================ */
    // throttle scroll updates for performance
    let ticking = false;

    function onScrollParallax() {
      const scrolled = window.scrollY || window.pageYOffset;
      document.querySelectorAll(".hero, .page-banner").forEach((area) => {
        // protects against elements without backgroundPositionY support
        area.style.backgroundPositionY = `${-(scrolled * 0.2)}px`;
      });
      ticking = false;
    }

    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(onScrollParallax);
        ticking = true;
      }
    }, { passive: true });

    /* ============================
       4) Logo breathing
       ============================ */
    const logo = document.querySelector(".logo-left img, .header-logo");
    if (logo) {
      // use CSS class toggle for subtle effect
      setInterval(() => {
        logo.classList.toggle("breathing");
      }, 1800);
    }

    /* ============================
       5) Leaf particle drift (lightweight)
       ============================ */
    function createLeafParticles() {
      // only create once and only if hero / categories exist
      const areas = document.querySelectorAll(".hero, .categories");
      if (!areas.length) return;

      areas.forEach((area) => {
        // position area relative if it's not already positioned to contain absolute leaves
        const computed = window.getComputedStyle(area);
        if (computed.position === "static") {
          area.style.position = "relative";
        }

        // small number for performance
        const count = 10;
        for (let i = 0; i < count; i++) {
          const leaf = document.createElement("div");
          leaf.className = "leaf";
          leaf.style.left = `${Math.random() * 100}%`;
          leaf.style.top = `${-10 - Math.random() * 20}px`;
          leaf.style.opacity = (Math.random() * 0.6 + 0.15).toString();
          leaf.style.animationDuration = `${6 + Math.random() * 6}s`;
          leaf.style.animationDelay = `${Math.random() * 5}s`;
          area.appendChild(leaf);

          // cleanup after animation completes to avoid DOM bloat
          (function (el) {
            setTimeout(() => {
              if (el && el.parentNode) el.parentNode.removeChild(el);
            }, 16000); // longer than max animationDuration
          })(leaf);
        }
      });
    }

    createLeafParticles();

    /* ============================
       6) Button ripple effect
       ============================ */
    document.addEventListener("click", (e) => {
      const btn = e.target.closest("button, .btn, .btn-secondary, a.btn, .btn");
      if (!btn) return;

      // ensure positioned parent for absolute ripple
      const style = window.getComputedStyle(btn);
      if (style.position === "static") btn.style.position = "relative";

      const ripple = document.createElement("span");
      ripple.className = "ripple";
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 1.6;
      ripple.style.width = ripple.style.height = `${size}px`;

      ripple.style.left = `${e.clientX - rect.left}px`;
      ripple.style.top = `${e.clientY - rect.top}px`;

      btn.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 700);
    });

    /* ============================
       7) Optional: small interactive hover glow for trail cards
       ============================ */
    document.querySelectorAll(".trail-card, .card, .trail-item").forEach((el) => {
      el.addEventListener("mouseenter", () => el.classList.add("hovered"));
      el.addEventListener("mouseleave", () => el.classList.remove("hovered"));
    });

    // end DOMContentLoaded listener
  }); // DOMContentLoaded end
})(); // IIFE end
