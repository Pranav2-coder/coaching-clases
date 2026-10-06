/**
 * Main Application Script
 * ========================
 * Renders all UI sections from SITE_DATA.
 * No external frameworks — vanilla JS only.
 */

/* ── Lucide-style SVG icon map (inline, no external dependency) ── */
const ICONS = {
  'users':           '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  'clipboard-check': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg>',
  'user-check':      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>',
  'layers':          '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>',
  'target':          '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
  'graduation-cap':  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>',
  'lightbulb':       '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>',
  'clipboard-list':  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>',
  'calendar-check':  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="m9 16 2 2 4-4"/></svg>',
  'message-circle':  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>',
  'check':           '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  'check-circle':    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
  'chevron-down':    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',
  'chevron-right':   '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>',
  'chevron-left':    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',
  'x':               '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  'map-pin':         '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  'phone':           '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  'mail':            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
  'clock':           '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  'monitor':         '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>',
  'book-open':       '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
  'flask-conical':   '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16.5h10"/></svg>',
  'wifi':            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h.01"/><path d="M2 8.82a15 15 0 0 1 20 0"/><path d="M5 12.859a10 10 0 0 1 14 0"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/></svg>',
  'help-circle':     '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>',
  'arrow-right':     '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  'building':        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>',
};

function icon(name) {
  return ICONS[name] || '';
}


/* ── Helpers ── */
function $(sel, ctx = document) { return ctx.querySelector(sel); }
function $$(sel, ctx = document) { return [...ctx.querySelectorAll(sel)]; }

function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'className') node.className = v;
    else if (k === 'innerHTML') node.innerHTML = v;
    else if (k.startsWith('on')) node.addEventListener(k.slice(2).toLowerCase(), v);
    else node.setAttribute(k, v);
  }
  for (const c of children) {
    if (typeof c === 'string') node.appendChild(document.createTextNode(c));
    else if (c) node.appendChild(c);
  }
  return node;
}


/* ── Render: Navigation ── */
function renderNav() {
  const d = SITE_DATA;
  const header = $('#site-header');
  if (!header) return;

  const logoInitials = d.institute.name.replace(/[\[\]]/g, '').split(' ').map(w => w[0]).join('').slice(0, 3).toUpperCase();

  header.innerHTML = `
    <div class="container site-header__inner">
      <a href="index.html" class="site-header__logo" aria-label="${d.institute.name} — Home">
        <span class="site-header__logo-icon">${logoInitials}</span>
        <span>${d.institute.name}</span>
      </a>
      <nav class="site-nav" aria-label="Main navigation">
        ${d.nav.map(n => `<a href="${n.href}" class="site-nav__link">${n.label}</a>`).join('')}
        <a href="#enquiry" class="btn btn--primary btn--sm site-nav__cta">Enquire Now</a>
      </nav>
      <button class="hamburger" aria-label="Open menu" aria-expanded="false" id="hamburger-btn">
        <span class="hamburger__line"></span>
        <span class="hamburger__line"></span>
        <span class="hamburger__line"></span>
      </button>
    </div>
    <nav class="mobile-nav" id="mobile-nav" aria-label="Mobile navigation">
      ${d.nav.map(n => `<a href="${n.href}" class="mobile-nav__link">${n.label}</a>`).join('')}
      <a href="#enquiry" class="btn btn--primary btn--block mobile-nav__cta">Enquire Now</a>
    </nav>
  `;

  const btn = $('#hamburger-btn');
  const mobileNav = $('#mobile-nav');
  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', !open);
    mobileNav.classList.toggle('is-open', !open);
    document.body.style.overflow = open ? '' : 'hidden';
  });

  // Close mobile nav on link click
  $$('.mobile-nav__link', mobileNav).forEach(link => {
    link.addEventListener('click', () => {
      btn.setAttribute('aria-expanded', 'false');
      mobileNav.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  });
}


/* ── Render: Hero ── */
function renderHero() {
  const d = SITE_DATA;
  const section = $('#hero');
  if (!section) return;

  section.innerHTML = `
    <div class="container hero__grid">
      <div class="hero__content">
        <span class="hero__eyebrow">${d.institute.tagline}</span>
        <h1 class="hero__title">${d.institute.headline}</h1>
        <p class="hero__desc">${d.institute.description}</p>
        <div class="hero__actions">
          <a href="#courses" class="btn btn--primary">Explore Courses</a>
          <a href="#enquiry" class="btn btn--secondary">Enquire Now</a>
        </div>
      </div>
      <div class="hero__image">
        <img src="assets/images/hero-classroom.jpg" alt="Classroom teaching session at ${d.institute.name}" width="800" height="500" fetchpriority="high" loading="eager">
      </div>
    </div>
  `;
}


/* ── Render: Trust Strip ── */
function renderTrustStrip() {
  const d = SITE_DATA;
  const section = $('#trust-strip');
  if (!section) return;

  section.innerHTML = `
    <div class="container">
      <ul class="trust-strip__list" role="list">
        ${d.trustStrip.map(item => `
          <li class="trust-strip__item">
            ${icon(item.icon)}
            <span>${item.label}</span>
          </li>
        `).join('')}
      </ul>
    </div>
  `;
}


/* ── Render: About ── */
function renderAbout() {
  const d = SITE_DATA;
  const section = $('#about');
  if (!section) return;

  section.innerHTML = `
    <div class="container about__grid fade-up">
      <div class="about__image">
        <img src="${d.about.image}" alt="${d.about.imageAlt}" width="480" height="640" loading="lazy">
      </div>
      <div class="about__content">
        <span class="about__eyebrow">About Us</span>
        <h2 class="about__title">About ${d.institute.name}</h2>
        <div class="about__text">
          ${d.about.paragraphs.map(p => `<p>${p}</p>`).join('')}
        </div>
        <div class="about__highlights">
          ${d.about.highlights.map(h => `
            <div class="about__highlight">
              <div class="about__highlight-label">${h.label}</div>
              <div class="about__highlight-value">${h.value}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}


/* ── Render: Why Choose Us ── */
function renderWhyUs() {
  const d = SITE_DATA;
  const section = $('#why-us');
  if (!section) return;

  section.innerHTML = `
    <div class="container">
      <div class="section__header section__header--center fade-up">
        <span class="section__eyebrow">Why Us</span>
        <h2 class="section__title">Why Students Choose Us</h2>
        <p class="section__subtitle">Our approach combines experienced teaching, structured learning, and personal mentorship.</p>
      </div>
      <div class="why-us__grid">
        ${d.whyChooseUs.map(item => `
          <div class="why-us__card fade-up">
            <div class="why-us__icon">${icon(item.icon)}</div>
            <h3 class="why-us__card-title">${item.title}</h3>
            <p class="why-us__card-desc">${item.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}


/* ── Render: Courses ── */
function renderCourses() {
  const d = SITE_DATA;
  const section = $('#courses');
  if (!section) return;

  section.innerHTML = `
    <div class="container">
      <div class="section__header section__header--center fade-up">
        <span class="section__eyebrow">Programmes</span>
        <h2 class="section__title">Courses We Offer</h2>
        <p class="section__subtitle">Structured academic programmes designed for school board preparation and competitive examinations.</p>
      </div>
      <div class="courses__grid">
        ${d.courses.map(c => `
          <article class="course-card fade-up">
            <span class="course-card__board">${c.board}</span>
            <h3 class="course-card__title">${c.name}</h3>
            <div class="course-card__meta">
              <span class="course-card__meta-label">Class</span>
              <span class="course-card__meta-value">${c.classLevel}</span>
              <span class="course-card__meta-label">Duration</span>
              <span class="course-card__meta-value">${c.duration}</span>
              <span class="course-card__meta-label">Mode</span>
              <span class="course-card__meta-value">${c.mode}</span>
            </div>
            <div class="course-card__subjects">
              ${c.subjects.map(s => `<span class="course-card__subject">${s}</span>`).join('')}
            </div>
            <div class="course-card__features">
              ${c.features.map(f => `
                <div class="course-card__feature">${icon('check')}<span>${f}</span></div>
              `).join('')}
            </div>
            <div class="course-card__action">
              <a href="course-detail.html?id=${c.id}" class="btn btn--secondary btn--sm">View Course ${icon('arrow-right')}</a>
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  `;
}


/* ── Render: Faculty ── */
function renderFaculty() {
  const d = SITE_DATA;
  const section = $('#faculty');
  if (!section) return;

  section.innerHTML = `
    <div class="container">
      <div class="section__header section__header--center fade-up">
        <span class="section__eyebrow">Our Team</span>
        <h2 class="section__title">Meet Our Faculty</h2>
        <p class="section__subtitle">Dedicated educators committed to every student's academic growth.</p>
      </div>
      <div class="faculty__grid">
        ${d.faculty.map(f => `
          <article class="faculty-card fade-up">
            <div class="faculty-card__image">
              <img src="${f.image}" alt="${f.name} — ${f.subject} Faculty" width="480" height="360" loading="lazy">
            </div>
            <div class="faculty-card__body">
              <h3 class="faculty-card__name">${f.name}</h3>
              <div class="faculty-card__subject">${f.subject} Faculty</div>
              <div class="faculty-card__qual">${f.qualification} | ${f.experience}</div>
              <p class="faculty-card__bio">${f.bio}</p>
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  `;
}


/* ── Render: Results ── */
function renderResults() {
  const d = SITE_DATA;
  const section = $('#results');
  if (!section) return;

  let content;
  if (d.results.hasResults && d.results.toppers.length > 0) {
    content = `
      <div class="section__header section__header--center fade-up">
        <span class="section__eyebrow">Results</span>
        <h2 class="section__title">Student Achievements</h2>
      </div>
      <div class="results__toppers">
        ${d.results.toppers.map(t => `
          <div class="topper-card fade-up">
            <div class="topper-card__score">${t.achievement}</div>
            <div class="topper-card__name">${t.name}</div>
            <div class="topper-card__exam">${t.exam} — ${t.year}</div>
          </div>
        `).join('')}
      </div>
    `;
  } else {
    content = `
      <div class="section__header section__header--center fade-up">
        <span class="section__eyebrow">Our Philosophy</span>
        <h2 class="section__title">${d.results.heading}</h2>
      </div>
      <div class="results__placeholder fade-up">
        <p>${d.results.subheading}</p>
      </div>
    `;
  }

  section.innerHTML = `<div class="container">${content}</div>`;
}


/* ── Render: Testimonials ── */
function renderTestimonials() {
  const d = SITE_DATA;
  const section = $('#testimonials');
  if (!section) return;

  if (!d.testimonials.hasTestimonials || d.testimonials.items.length === 0) {
    section.style.display = 'none';
    return;
  }

  section.innerHTML = `
    <div class="container">
      <div class="section__header section__header--center fade-up">
        <span class="section__eyebrow">Testimonials</span>
        <h2 class="section__title">What Students & Parents Say</h2>
      </div>
      <div class="testimonials__grid">
        ${d.testimonials.items.map(t => `
          <div class="testimonial-card fade-up">
            <blockquote class="testimonial-card__quote">${t.quote}</blockquote>
            <div class="testimonial-card__author">${t.name}</div>
            <div class="testimonial-card__role">${t.role}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}


/* ── Render: Facilities ── */
function renderFacilities() {
  const d = SITE_DATA;
  const section = $('#facilities');
  if (!section) return;

  section.innerHTML = `
    <div class="container">
      <div class="section__header section__header--center fade-up">
        <span class="section__eyebrow">Infrastructure</span>
        <h2 class="section__title">Learning Environment</h2>
        <p class="section__subtitle">A well-equipped learning space designed for focused study and effective teaching.</p>
      </div>
      <div class="facilities__grid">
        ${d.facilities.map(f => `
          <div class="facility-item fade-up">
            <div class="facility-item__icon">${icon(f.icon)}</div>
            <div>
              <div class="facility-item__label">${f.label}</div>
              <div class="facility-item__desc">${f.desc}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}


/* ── Render: FAQ ── */
function renderFAQ() {
  const d = SITE_DATA;
  const section = $('#faq');
  if (!section) return;

  section.innerHTML = `
    <div class="container">
      <div class="section__header section__header--center fade-up">
        <span class="section__eyebrow">Questions</span>
        <h2 class="section__title">Frequently Asked Questions</h2>
      </div>
      <div class="faq__list fade-up">
        ${d.faq.map((item, i) => `
          <div class="faq__item" data-faq="${i}">
            <button class="faq__question" aria-expanded="false" aria-controls="faq-answer-${i}">
              <span>${item.q}</span>
              <span class="faq__question-icon">${icon('chevron-down')}</span>
            </button>
            <div class="faq__answer" id="faq-answer-${i}" role="region">
              <div class="faq__answer-inner">${item.a}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // FAQ accordion
  $$('.faq__question', section).forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq__item');
      const answer = item.querySelector('.faq__answer');
      const isOpen = item.classList.contains('is-open');

      // Close all
      $$('.faq__item', section).forEach(fi => {
        fi.classList.remove('is-open');
        fi.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
        fi.querySelector('.faq__answer').style.maxHeight = '0';
      });

      if (!isOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}


/* ── Render: CTA Section ── */
function renderCTA() {
  const d = SITE_DATA;
  const section = $('#cta-section');
  if (!section) return;

  section.innerHTML = `
    <div class="container">
      <h2 class="cta-section__title">Start Your Academic Journey With ${d.institute.name}</h2>
      <p class="cta-section__desc">Speak with our team to understand the right course, batch and preparation plan for your goals.</p>
      <div class="cta-section__actions">
        <a href="#enquiry" class="btn btn--primary">Enquire Now</a>
        <a href="tel:${d.contact.phone[0]}" class="btn btn--secondary">Call Now ${icon('phone')}</a>
      </div>
    </div>
  `;
}


/* ── Render: Enquiry Form ── */
function renderEnquiryForm() {
  const d = SITE_DATA;
  const section = $('#enquiry');
  if (!section) return;

  section.innerHTML = `
    <div class="container">
      <div class="section__header section__header--center fade-up">
        <span class="section__eyebrow">Get In Touch</span>
        <h2 class="section__title">Submit an Enquiry</h2>
        <p class="section__subtitle">Fill in your details and our academic team will get back to you.</p>
      </div>
      <form class="enquiry-form fade-up" id="enquiry-form" novalidate>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label" for="student-name">Student Name *</label>
            <input class="form-input" type="text" id="student-name" name="student_name" required autocomplete="name">
          </div>
          <div class="form-group">
            <label class="form-label" for="parent-name">Parent / Guardian Name *</label>
            <input class="form-input" type="text" id="parent-name" name="parent_name" required>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label" for="phone">Phone Number *</label>
            <input class="form-input" type="tel" id="phone" name="phone" required autocomplete="tel">
          </div>
          <div class="form-group">
            <label class="form-label" for="class-level">Class *</label>
            <select class="form-select" id="class-level" name="class_level" required>
              <option value="">Select Class</option>
              <option>Class 8</option>
              <option>Class 9</option>
              <option>Class 10</option>
              <option>Class 11</option>
              <option>Class 12</option>
              <option>Dropper</option>
            </select>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label" for="course">Course / Exam</label>
            <select class="form-select" id="course" name="course">
              <option value="">Select Course</option>
              ${d.courses.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}
            </select>
          </div>
          <div class="form-group">
            <label class="form-label" for="batch">Preferred Batch</label>
            <select class="form-select" id="batch" name="batch">
              <option value="">Select Batch</option>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label" for="message">Message</label>
          <textarea class="form-textarea" id="message" name="message" rows="4" placeholder="Any specific questions or requirements..."></textarea>
        </div>
        <button type="submit" class="btn btn--primary btn--block">Submit Enquiry</button>
      </form>
      <div class="form-success" id="form-success">
        <div class="form-success__icon">${icon('check-circle')}</div>
        <h3 class="form-success__title">Thank You</h3>
        <p class="form-success__msg">Our academic team will contact you shortly.</p>
      </div>
    </div>
  `;

  // Form handler
  const form = $('#enquiry-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // In production, send data to backend here
    form.style.display = 'none';
    $('#form-success').classList.add('is-visible');
  });
}


/* ── Render: Contact ── */
function renderContact() {
  const d = SITE_DATA;
  const section = $('#contact');
  if (!section) return;

  const addr = d.contact.address;
  const fullAddr = `${addr.line1}, ${addr.line2}, ${addr.city}, ${addr.state} — ${addr.pin}`;

  section.innerHTML = `
    <div class="container contact__grid fade-up">
      <div class="contact-info">
        <div class="section__header">
          <span class="section__eyebrow">Contact</span>
          <h2 class="section__title">Get In Touch</h2>
          <p class="section__subtitle">Visit us or reach out through any of the channels below.</p>
        </div>
        <div class="contact-info__item">
          <div class="contact-info__icon">${icon('map-pin')}</div>
          <div>
            <div class="contact-info__label">Address</div>
            <div class="contact-info__value">${fullAddr}</div>
          </div>
        </div>
        <div class="contact-info__item">
          <div class="contact-info__icon">${icon('phone')}</div>
          <div>
            <div class="contact-info__label">Phone</div>
            <div class="contact-info__value">${d.contact.phone.map(p => `<a href="tel:${p}">${p}</a>`).join('<br>')}</div>
          </div>
        </div>
        <div class="contact-info__item">
          <div class="contact-info__icon">${icon('mail')}</div>
          <div>
            <div class="contact-info__label">Email</div>
            <div class="contact-info__value"><a href="mailto:${d.contact.email}">${d.contact.email}</a></div>
          </div>
        </div>
        <div class="contact-info__item">
          <div class="contact-info__icon">${icon('clock')}</div>
          <div>
            <div class="contact-info__label">Working Hours</div>
            <div class="contact-info__value">
              Weekdays: ${d.contact.workingHours.weekdays}<br>
              Saturday: ${d.contact.workingHours.saturday}<br>
              Sunday: ${d.contact.workingHours.sunday}
            </div>
          </div>
        </div>
        ${d.contact.mapDirectionsUrl ? `<a href="${d.contact.mapDirectionsUrl}" target="_blank" rel="noopener" class="btn btn--secondary btn--sm">Get Directions ${icon('arrow-right')}</a>` : ''}
      </div>
      <div class="contact-map">
        ${d.contact.mapEmbedUrl
          ? `<iframe src="${d.contact.mapEmbedUrl}" width="100%" height="400" style="border:0; border-radius:8px;" allowfullscreen loading="lazy" title="Institute location on Google Maps"></iframe>`
          : `<div style="height:400px;background:var(--c-section-alt);border-radius:8px;display:flex;align-items:center;justify-content:center;color:var(--c-text-2);font-size:var(--fs-sm);">Google Maps embed will appear here</div>`
        }
      </div>
    </div>
  `;
}


/* ── Render: Footer ── */
function renderFooter() {
  const d = SITE_DATA;
  const footer = $('#site-footer');
  if (!footer) return;

  const addr = d.contact.address;

  footer.innerHTML = `
    <div class="container">
      <div class="footer__grid">
        <div>
          <div class="footer__brand-name">${d.institute.name}</div>
          <p class="footer__brand-desc">${d.institute.description.substring(0, 180)}...</p>
        </div>
        <div>
          <div class="footer__heading">Quick Links</div>
          <nav class="footer__links" aria-label="Footer navigation">
            ${d.nav.map(n => `<a href="${n.href}" class="footer__link">${n.label}</a>`).join('')}
          </nav>
        </div>
        <div>
          <div class="footer__heading">Contact</div>
          <div class="footer__contact-item">
            ${icon('map-pin')}
            <span>${addr.line1}, ${addr.line2}, ${addr.city}</span>
          </div>
          <div class="footer__contact-item">
            ${icon('phone')}
            <span>${d.contact.phone[0]}</span>
          </div>
          <div class="footer__contact-item">
            ${icon('mail')}
            <span>${d.contact.email}</span>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <span>&copy; ${d.legal.year} ${d.institute.name}. All Rights Reserved.</span>
        <div class="footer__legal">
          <a href="${d.legal.privacyUrl}">Privacy Policy</a>
          <a href="${d.legal.termsUrl}">Terms & Conditions</a>
          <a href="${d.legal.disclaimerUrl}">Disclaimer</a>
        </div>
      </div>
    </div>
  `;
}


/* ── Render: Sticky Mobile CTA ── */
function renderStickyMobileCTA() {
  const d = SITE_DATA;
  const el = $('#sticky-mobile-cta');
  if (!el) return;

  el.innerHTML = `
    <div class="sticky-mobile-cta__inner">
      <a href="tel:${d.contact.phone[0]}" class="btn btn--secondary btn--sm">Call Now</a>
      <a href="#enquiry" class="btn btn--primary btn--sm">Enquire Now</a>
    </div>
  `;
}


/* ── Scroll Animations ── */
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  $$('.fade-up').forEach(el => observer.observe(el));
}


/* ── Gallery Lightbox ── */
function initGalleryLightbox() {
  const lightbox = $('#lightbox');
  if (!lightbox) return;

  const galleryItems = $$('.gallery__item');
  if (galleryItems.length === 0) return;

  let currentIndex = 0;
  const images = galleryItems.map(item => ({
    src: item.querySelector('img').src,
    alt: item.querySelector('img').alt,
  }));

  function openLightbox(idx) {
    currentIndex = idx;
    const img = lightbox.querySelector('.lightbox__img');
    img.src = images[idx].src;
    img.alt = images[idx].alt;
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function navigate(dir) {
    currentIndex = (currentIndex + dir + images.length) % images.length;
    const img = lightbox.querySelector('.lightbox__img');
    img.src = images[currentIndex].src;
    img.alt = images[currentIndex].alt;
  }

  galleryItems.forEach((item, i) => {
    item.addEventListener('click', () => openLightbox(i));
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
    item.setAttribute('aria-label', `View image: ${item.querySelector('img').alt}`);
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(i); }
    });
  });

  lightbox.querySelector('.lightbox__close').addEventListener('click', closeLightbox);
  const prevBtn = lightbox.querySelector('.lightbox__nav--prev');
  const nextBtn = lightbox.querySelector('.lightbox__nav--next');
  if (prevBtn) prevBtn.addEventListener('click', () => navigate(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => navigate(1));

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
  });
}


/* ── Gallery Filters ── */
function initGalleryFilters() {
  const btns = $$('.gallery-filter-btn');
  const items = $$('.gallery__item');
  if (btns.length === 0) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.category;
      btns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      items.forEach(item => {
        if (cat === 'All' || item.dataset.category === cat) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}


/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderHero();
  renderTrustStrip();
  renderAbout();
  renderWhyUs();
  renderCourses();
  renderFaculty();
  renderResults();
  renderTestimonials();
  renderFacilities();
  renderFAQ();
  renderCTA();
  renderEnquiryForm();
  renderContact();
  renderFooter();
  renderStickyMobileCTA();

  // Init after render
  requestAnimationFrame(() => {
    initScrollAnimations();
    initGalleryLightbox();
    initGalleryFilters();
  });
});
