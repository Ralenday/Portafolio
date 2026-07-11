/* Datos de contacto para que se muestren en el HTML */
const PROFILE = {
  email: "ralendaykino@gmail.com",
  github: "https://github.com/Ralenday",
  linkedin: "https://www.linkedin.com/in/axel-ram%C3%ADrez-cardenas-561926276/",
  location: "San Luis Rio Colorado, Sonora, México"
};

// Cosasa que conozco
const SKILLS = [
  {
    category: "Frontend",
    items: ["JavaScript", "React", "HTML5", "CSS3", "TypeScript", "Vite"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Python", "REST APIs", "TypeScript"]
  },
  {
    category: "Bases de datos",
    items: ["SQLite", "MongoDB", "MySQL"]
  },
  {
    category: "Herramientas",
    items: ["Git", "Figma", "Vercel"]
  }
];

// Proyectos que realice
const PROJECTS = [
  {
    tag: "Proyecto para negocio",
    title: "El Buen Sazón",
    tagline: "Pagina informativa de Comida",
    description:
      "Pagina Web para Restaurante El Buen Sazón fue mi primer proyecto real con cliente. Desarrollé un sitio sencillo e informativo para promocionar y facilitar las ventas del restaurante. Aunque el negocio cerró posteriormente, esta experiencia me permitió tener mis primeros acercamientos con clientes reales, entender sus necesidades y dar mis primeros pasos como desarrollador web, marcando el inicio de mi camino con mucha ilusión y aprendizaje.",
    tech: ["JavaScript", "CSS", "HTML"],
    github: "https://github.com/Ralenday/Estadias",
    images: [
      { src: "assets/BSInicio.png" },
      { src: "assets/BSPlatillos.png" },
      { src: "assets/BSEspecialidad.png" }
    ]
  },
  {
    tag: "Colaboración",
    title: "Ticket Maestro",
    tagline: "Pagina de Eventos con maximo de 10k personas",
    description:
      "Ticket Maestro es una plataforma para la gestión y venta de boletos de eventos, desarrollada en equipo con tres compañeros como proyecto escolar. Emulamos el funcionamiento de un sistema real de ticketing, implementando compra de boletos, administración de eventos y organizadores, sistema de cobros y un control inteligente de cupos con protección contra sobreventa.",
    tech: ["React + Vite", "Tailwind", "SQL", "TypeScript"],
    github: "https://github.com/Lok-yo/ticket-maestro",
    images: [
      { src: "assets/InicioTM.png" },
      { src: "assets/CobroTM.png" },
      { src: "assets/AdminTM.png" }
    ]
  },
  {
    tag: "Proyecto personal",
    title: "Recetas8",
    tagline: "Cansado de no saber que cocinar con lo que tienes?",
    description:
      "Recetas8 es una aplicación web desarrollada junto a un compañero que genera cuatro sugerencias de recetas de cocina a partir de los ingredientes que el usuario proporciona. Utilizando inteligencia artificial, la plataforma analiza los ingredientes y propone platillos creativos y prácticos, siempre que se ingresen al menos cuatro ingredientes.",
    tech: ["JavaScript", "Express", "MySQL"],
    github: "https://github.com/Ralenday/Recetas8",
    images: [
      { src: "assets/R8Inicio.png" },
      { src: "assets/R8Ingredientes.png" },
      { src: "assets/R8Recetas.png" }
    ]
  }
];

// A futuro pondria acerca de trabajos, de momento solo tengo la escuela
const EXPERIENCE = [

  {
    period: "2023 - Presente",
    role: "Formación / Titulación",
    org: "https://utslrc.sonora.gob.mx/",
    description: "Actualmente soy estudiante de Ingeniería en Desarrollo y Gestión de Software. Me enfoco en proyectos escolares, personales y colaborativos que me permiten ganar experiencia práctica mientras avanzo en mi formación. Cada proyecto representa una oportunidad para aplicar lo aprendido, enfrentar nuevos retos y seguir enriqueciendo mis habilidades técnicas y profesionales con entusiasmo y dedicación."
  }
];

document.addEventListener("DOMContentLoaded", () => {
  applyProfileData();
  renderSkills();
  renderProjects();
  renderExperience();
  initNav();
  initRevealAnimations();
  initSignalTrack();
  initCarousels();
  document.getElementById("footerYear").textContent = new Date().getFullYear();
});

/* ---------- Datos de contacto ---------- */
function applyProfileData() {
  document.getElementById("emailLink").href = `mailto:${PROFILE.email}`;
  document.getElementById("emailValue").textContent = PROFILE.email;
  document.getElementById("linkedinLink").href = PROFILE.linkedin;
  document.getElementById("githubLink").href = PROFILE.github;
  document.getElementById("githubValue").textContent = PROFILE.github.replace("https://", "");
  document.getElementById("factLocation").textContent = PROFILE.location;
}

/* ---------- Render: Skills ---------- */
function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  grid.innerHTML = SKILLS.map((group, i) => `
    <div class="skill-card reveal reveal-stagger" style="--delay:${i * 0.08}s">
      <p class="skill-card-title">${group.category}</p>
      <div class="skill-tags">
        ${group.items.map(item => `<span class="skill-tag">${item}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

/* ---------- Render: Projects ---------- */
function renderProjects() {
  const list = document.getElementById("projectsList");
  list.innerHTML = PROJECTS.map((p, i) => `
    <article class="project-card reveal" data-project="${i}">
      <div class="project-media">
        <div class="carousel" data-carousel>
          <div class="carousel-track">
            ${p.images.map(img => `
              <div class="carousel-slide">
                ${img.src
                  ? `<img src="${img.src}" alt="${img.label || p.title}" draggable="false">`
                  : `<div class="carousel-slide-inner"><span>${img.label || p.title}</span></div>`}
              </div>
            `).join("")}
          </div>
          ${p.images.length > 1 ? `
            <button class="carousel-arrow prev" aria-label="Imagen anterior">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            <button class="carousel-arrow next" aria-label="Siguiente imagen">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            <div class="carousel-dots">
              ${p.images.map((_, di) => `<button class="carousel-dot ${di === 0 ? "active" : ""}" data-dot="${di}" aria-label="Ir a imagen ${di + 1}"></button>`).join("")}
            </div>
          ` : ""}
        </div>
      </div>
      <div class="project-body">
        <p class="project-tag">${p.tag}</p>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.tagline}</p>
        <div class="project-tech">
          ${p.tech.map(t => `<span class="skill-tag">${t}</span>`).join("")}
        </div>
        <button class="project-toggle" data-toggle>
          <span class="label">Ver detalles</span>
          <svg class="chevron" width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1l5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <div class="project-details" data-details>
          <div class="project-details-inner">
            <p>${p.description}</p>
            <div class="project-links">
              <a class="project-link github" href="${p.github}" target="_blank" rel="noopener">Ver en GitHub ↗</a>
              ${p.demo ? `<a class="project-link demo" href="${p.demo}" target="_blank" rel="noopener">Ver demo ↗</a>` : ""}
            </div>
          </div>
        </div>
      </div>
    </article>
  `).join("");

  // Acordeón de detalles
  list.querySelectorAll("[data-toggle]").forEach(btn => {
    btn.addEventListener("click", () => {
      const details = btn.parentElement.querySelector("[data-details]");
      const isOpen = btn.classList.toggle("open");
      details.style.maxHeight = isOpen ? details.scrollHeight + "px" : "0px";
      btn.querySelector(".label").textContent = isOpen ? "Ocultar detalles" : "Ver detalles";
    });
  });
}

/* ---------- Render: Experience ---------- */
function renderExperience() {
  const el = document.getElementById("timelineList");
  el.innerHTML = EXPERIENCE.map((e, i) => `
    <div class="timeline-item reveal reveal-stagger" style="--delay:${i * 0.1}s">
      <span class="timeline-period">${e.period}</span>
      <h3 class="timeline-role">${e.role}</h3>
      <span class="timeline-org">${e.org}</span>
      <p class="timeline-desc">${e.description}</p>
    </div>
  `).join("");
}

/* ---------- Nav: scroll state + mobile toggle ---------- */
function initNav() {
  const nav = document.getElementById("nav");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 20);
  }, { passive: true });

  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("open");
    links.classList.toggle("open");
  });
  links.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      toggle.classList.remove("open");
      links.classList.remove("open");
    });
  });
}

/* ---------- Reveal animations on scroll ---------- */
function initRevealAnimations() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });

  items.forEach(item => observer.observe(item));
}

/* ---------- Traza de señal: progreso de scroll + nodos activos ---------- */
function initSignalTrack() {
  const fill = document.getElementById("signalFill");
  const fillMobile = document.getElementById("signalFillMobile");
  const nodesContainer = document.getElementById("signalNodes");
  const sections = Array.from(document.querySelectorAll("main > section"));

  // Crear un nodo por sección, posicionado proporcionalmente
  function buildNodes() {
    nodesContainer.innerHTML = "";
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    sections.forEach(sec => {
      const node = document.createElement("div");
      node.className = "signal-node";
      const pct = Math.min(100, (sec.offsetTop / docHeight) * 100);
      node.style.top = pct + "%";
      node.dataset.section = sec.id;
      nodesContainer.appendChild(node);
    });
  }
  buildNodes();
  window.addEventListener("resize", debounce(buildNodes, 200));

  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    fill.style.height = pct + "%";
    fillMobile.style.width = pct + "%";
  }
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  // Nodo activo según sección visible
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const node = nodesContainer.querySelector(`[data-section="${entry.target.id}"]`);
      if (!node) return;
      if (entry.isIntersecting) {
        nodesContainer.querySelectorAll(".signal-node").forEach(n => n.classList.remove("active"));
        node.classList.add("active");
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(sec => sectionObserver.observe(sec));
}

/* ---------- Carruseles de proyectos ---------- */
function initCarousels() {
  const carousels = document.querySelectorAll("[data-carousel]");

  carousels.forEach(carousel => {
    const track = carousel.querySelector(".carousel-track");
    const slides = carousel.querySelectorAll(".carousel-slide");
    const prevBtn = carousel.querySelector(".prev");
    const nextBtn = carousel.querySelector(".next");
    const dots = carousel.querySelectorAll(".carousel-dot");

    if (slides.length <= 1) return; // Si solo hay una imagen, no hacer nada

    let currentIndex = 0;
    let dragOffsetPct = 0; // desplazamiento en vivo, en % del ancho del carrusel

    function render(withTransition = true) {
      track.style.transition = withTransition ? "" : "none";
      const pct = -(currentIndex * 100) + dragOffsetPct;
      track.style.transform = `translateX(${pct}%)`;
    }

    function goTo(index) {
      currentIndex = (index + slides.length) % slides.length;
      dragOffsetPct = 0;
      render(true);
      dots.forEach((dot, i) => dot.classList.toggle("active", i === currentIndex));
    }

    // Botones
    prevBtn?.addEventListener("click", () => goTo(currentIndex - 1));
    nextBtn?.addEventListener("click", () => goTo(currentIndex + 1));

    // Dots
    dots.forEach(dot => {
      dot.addEventListener("click", () => goTo(parseInt(dot.dataset.dot, 10)));
    });

    // Teclado (cuando el carrusel tiene el foco)
    carousel.setAttribute("tabindex", "0");
    carousel.addEventListener("keydown", e => {
      if (e.key === "ArrowLeft") { e.preventDefault(); goTo(currentIndex - 1); }
      if (e.key === "ArrowRight") { e.preventDefault(); goTo(currentIndex + 1); }
    });

    // Arrastre unificado (mouse + touch) vía Pointer Events, con seguimiento en vivo
    let isDragging = false;
    let dragStartX = 0;
    let carouselWidth = 1;

    function onPointerDown(e) {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      // No iniciar arrastre sobre las flechas o los puntos: si el carrusel
      // captura el puntero aquí, el click posterior se redirige al carrusel
      // y el botón nunca recibe su evento "click".
      if (e.target.closest(".carousel-arrow, .carousel-dot")) return;
      isDragging = true;
      dragStartX = e.clientX;
      carouselWidth = carousel.getBoundingClientRect().width || 1;
      carousel.classList.add("dragging");
      carousel.setPointerCapture?.(e.pointerId);
    }

    function onPointerMove(e) {
      if (!isDragging) return;
      const deltaX = e.clientX - dragStartX;
      let pct = (deltaX / carouselWidth) * 100;

      // Resistencia elástica en los extremos (no hay slides "clonados" para loop infinito en vivo)
      const atStart = currentIndex === 0 && pct > 0;
      const atEnd = currentIndex === slides.length - 1 && pct < 0;
      if (atStart || atEnd) pct *= 0.35;

      dragOffsetPct = pct;
      render(false);
    }

    function onPointerUp(e) {
      if (!isDragging) return;
      isDragging = false;
      carousel.classList.remove("dragging");
      carousel.releasePointerCapture?.(e.pointerId);

      const deltaX = e.clientX - dragStartX;
      const thresholdPx = Math.min(80, carouselWidth * 0.18);

      if (Math.abs(deltaX) > thresholdPx) {
        goTo(deltaX < 0 ? currentIndex + 1 : currentIndex - 1);
      } else {
        dragOffsetPct = 0;
        render(true);
      }
    }

    carousel.addEventListener("pointerdown", onPointerDown);
    carousel.addEventListener("pointermove", onPointerMove);
    carousel.addEventListener("pointerup", onPointerUp);
    carousel.addEventListener("pointercancel", onPointerUp);
    carousel.addEventListener("pointerleave", e => { if (isDragging) onPointerUp(e); });

    // Evita que el navegador arrastre la imagen como si fuera un enlace/archivo
    carousel.addEventListener("dragstart", e => e.preventDefault());

    // Recalcular el ancho si la ventana cambia de tamaño
    window.addEventListener("resize", debounce(() => render(false), 150));

    // Inicializar
    goTo(0);
  });
}

/* ---------- Utils ---------- */
function debounce(fn, wait) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), wait);
  };
}
