/**
 * HD Elektro & Tiefbau GmbH — Main JavaScript
 * Handles: scroll animations, stagger effects, nav behavior
 */

'use strict';

/* ── Intersection Observer for scroll animations ── */
const animateObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      animateObserver.unobserve(entry.target); // animate once
    }
  });
}, {
  threshold: 0.08,
  rootMargin: '0px 0px -40px 0px'
});

/* Apply stagger delays and observe */
document.querySelectorAll('[data-animate]').forEach((el, i) => {
  // Stagger within the same parent container
  const siblings = Array.from(el.parentElement.querySelectorAll('[data-animate]'));
  const siblingIndex = siblings.indexOf(el);
  const delay = Math.min(siblingIndex * 60, 360);
  el.style.transitionDelay = `${delay}ms`;
  animateObserver.observe(el);
});

/* ── Smooth scroll for anchor links ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const navHeight = document.querySelector('.navbar')?.offsetHeight || 80;
      const targetY = target.getBoundingClientRect().top + window.scrollY - navHeight - 24;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
  });
});

/* ── Active nav link for current page ── */
const currentPath = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link, .mobile-link').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPath || (currentPath === '' && href === 'index.html')) {
    link.setAttribute('aria-current', 'page');
  }
});

/* ── Performance: lazy load images that don't have loading attr ── */
if ('loading' in HTMLImageElement.prototype) {
  // Native lazy loading supported
} else {
  // Fallback for older browsers
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
        }
        imageObserver.unobserve(img);
      }
    });
  });
  lazyImages.forEach(img => imageObserver.observe(img));
}

/* ── Mobile menu: close on outside click ── */
document.addEventListener('click', (e) => {
  const menu = document.querySelector('.mobile-menu--open');
  const hamburger = document.querySelector('.hamburger');
  if (menu && !menu.contains(e.target) && !hamburger?.contains(e.target)) {
    // Alpine.js handles the state — dispatch a custom event
    document.dispatchEvent(new CustomEvent('close-mobile-menu'));
  }
});

/* ── Keyboard: close mobile menu on Escape ── */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const openMenu = document.querySelector('.mobile-menu--open');
    if (openMenu) {
      document.dispatchEvent(new CustomEvent('close-mobile-menu'));
    }
  }
});

/* ── Animate hero elements that have data-animate-hero ── */
// Hero animations are CSS-only (no JS needed — they use animation: slideUp)
// But we ensure they're visible if reduced-motion is preferred
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('[data-animate-hero]').forEach(el => {
    el.style.opacity = '1';
    el.style.animation = 'none';
  });
}

/* ── Preload critical font check ── */
document.fonts?.ready?.then(() => {
  document.documentElement.classList.add('fonts-loaded');
});

console.log('HD Elektro & Tiefbau GmbH — hd-ets.de');