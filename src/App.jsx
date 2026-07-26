import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { DiMsqlServer } from "react-icons/di";
import { FaGithub, FaJava, FaLinkedin } from "react-icons/fa6";
import {
  HiArrowTopRightOnSquare,
  HiArrowUpCircle,
  HiArrowRight,
  HiBars3,
  HiChevronLeft,
  HiChevronRight,
  HiDocumentText,
  HiPaperAirplane,
  HiXMark,
} from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import {
  SiC,
  SiCplusplus,
  SiCss,
  SiDassaultsystemes,
  SiDotnet,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiIntellijidea,
  SiJavascript,
  SiJira,
  SiJquery,
  SiLinktree,
  SiMysql,
  SiPython,
  SiWhatsapp,
} from "react-icons/si";
import {
  TbBrandVisualStudio,
  TbBrandVscode,
  TbChartHistogram,
  TbCode,
  TbBrandCSharp,
} from "react-icons/tb";

const translations = {
  en: {
    home: "home",
    about: "about",
    skills: "skills",
    projects: "projects",
    contact: "contact",
    heroGreeting: "Hi!",
    heroLead: "I'm",
    heroName: "Eduardo",
    heroRole: "Computer Engineering student and QA Intern.",
    heroProjects: "View projects",
    heroContact: "Contact me",
    aboutEyebrow: "a little about me",
    aboutHeadline: "Engineering, development and quality working together.",
    aboutIntro:
      "I’m Eduardo Melo, a Computer Engineering student and Software Quality intern at Obra Prima.",
    aboutDetails:
      "My background combines hands-on software development, a growing focus on testing and quality processes, and an international academic experience at NOVA FCT. I remain focused on growing in the technology field.",
    aboutPhotoCaption: "Exchange experience · NOVA FCT",
    aboutJourney: [
      {
        label: "2022 — present",
        title: "Computer Engineering",
        description:
          "A multidisciplinary education across hardware, software and problem solving.",
      },
      {
        label: "2024 — 2025",
        title: "Software Development",
        description:
          "Software Development Intern at Obra Prima, building my first professional experience in technology.",
      },
      {
        label: "2025 — 2026",
        title: "Exchange at NOVA FCT",
        description:
          "An academic experience in Portugal that broadened my technical and cultural perspective.",
      },
      {
        label: "2026 — present",
        title: "Software Quality",
        description:
          "QA Intern at Obra Prima, developing my experience with testing and product quality.",
      },
    ],
    tools: "tools and technologies",
    contactMe: "contact me",
    send: "Send",
    name: "your name",
    email: "your email",
    message: "your message",
    resume: "resume",
    backToTop: "back to top",
  },
  pt: {
    home: "início",
    about: "sobre",
    skills: "habilidades",
    projects: "projetos",
    contact: "contato",
    heroGreeting: "Olá!",
    heroLead: "Eu sou o",
    heroName: "Eduardo",
    heroRole: "Estudante de Engenharia de Computação e estagiário de QA.",
    heroProjects: "Ver projetos",
    heroContact: "Fale comigo",
    aboutEyebrow: "um pouco sobre mim",
    aboutHeadline: "Engenharia, desenvolvimento e qualidade trabalhando juntos.",
    aboutIntro:
      "Sou Eduardo Melo, estudante de Engenharia de Computação e estagiário de Qualidade de Software na Obra Prima.",
    aboutDetails:
      "Minha trajetória combina experiência prática com desenvolvimento de software, um foco crescente em testes e processos de qualidade e uma experiência acadêmica internacional na NOVA FCT. Continuo focado em crescer na área de tecnologia.",
    aboutPhotoCaption: "Experiência de intercâmbio · NOVA FCT",
    aboutJourney: [
      {
        label: "2022 — atual",
        title: "Engenharia de Computação",
        description:
          "Uma formação multidisciplinar entre hardware, software e resolução de problemas.",
      },
      {
        label: "2024 — 2025",
        title: "Desenvolvimento de Software",
        description:
          "Estágio em desenvolvimento na Obra Prima, construindo minha primeira experiência profissional em tecnologia.",
      },
      {
        label: "2025 — 2026",
        title: "Intercâmbio na NOVA FCT",
        description:
          "Uma experiência acadêmica em Portugal que ampliou minha visão técnica e cultural.",
      },
      {
        label: "2026 — atual",
        title: "Qualidade de Software",
        description:
          "Estágio em QA na Obra Prima, ampliando minha experiência com testes e qualidade de produto.",
      },
    ],
    tools: "tecnologias e ferramentas",
    contactMe: "entre em contato",
    send: "Enviar",
    name: "seu nome",
    email: "seu email",
    message: "sua mensagem",
    resume: "resumo",
    backToTop: "voltar para o topo",
  },
};

const technologies = [
  { icon: SiHtml5, name: "HTML", color: "#E34F26" },
  { icon: SiCss, name: "CSS", color: "#663399" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiJquery, name: "jQuery", color: "#0769AD" },
  { icon: FaJava, name: "Java", color: "#ED8B00" },
  { icon: SiC, name: "C", color: "#A8B9CC" },
  { icon: SiCplusplus, name: "C++", color: "#00599C" },
  { icon: TbBrandCSharp, name: "C#", color: "#512BD4" },
  { icon: SiPython, name: "Python", color: "#3776AB" },
  { icon: SiMysql, name: "MySQL", color: "#4479A1" },
  {
    icon: DiMsqlServer,
    name: "Microsoft SQL Server",
    color: "#CC2927",
  },
  { icon: TbChartHistogram, name: "Power BI", color: "#F2C811" },
  { icon: TbCode, name: "Visual Basic", color: "#512BD4" },
  { icon: SiGit, name: "Git", color: "#F05032" },
  { icon: SiGithub, name: "GitHub", color: "#FFFFFF" },
  { icon: SiJira, name: "Jira", color: "#0052CC" },
  {
    icon: TbBrandVisualStudio,
    name: "Visual Studio",
    color: "#5C2D91",
  },
  {
    icon: TbBrandVscode,
    name: "Visual Studio Code",
    color: "#007ACC",
  },
  { icon: SiDotnet, name: ".NET", color: "#512BD4" },
  { icon: SiIntellijidea, name: "IntelliJ IDEA", color: "#FE315D" },
  { icon: SiDassaultsystemes, name: "SolidWorks", color: "#E2231A" },
  { icon: SiFigma, name: "Figma", color: "#F24E1E" },
];

const projectIcons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  link: HiArrowTopRightOnSquare,
};

const projects = [
  {
    name: "Chopp Sul Araucária",
    className: "choppsul",
    links: [
      ["github", "https://github.com/edufmelo/Chopp-Sul-Araucaria"],
      [
        "linkedin",
        "https://www.linkedin.com/feed/update/urn:li:activity:7288667519589007360/",
      ],
      ["link", "https://choppsularaucaria.com.br"],
    ],
  },
  {
    name: "CleanCycle",
    className: "cleancycle",
    links: [
      [
        "linkedin",
        "https://www.linkedin.com/feed/update/urn:li:activity:7263222407316799488/",
      ],
    ],
  },
  {
    name: "2D Parametric Curves",
    className: "cgiOne",
    links: [
      [
        "linkedin",
        "https://www.linkedin.com/posts/eduardoferreirademelo_vers%C3%A3o-em-portugu%C3%AAs-pt-curvas-param%C3%A9tricas-activity-7412848497281888256-ZUD2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEqYHzQB26lDfpyP7i3L2VAIyJf99eJrwDQ",
      ],
      ["github", "https://github.com/edufmelo/2DParametricCurves-Proj1"],
    ],
  },
  {
    name: "Modelling And Projections",
    className: "cgiTwo",
    links: [
      [
        "linkedin",
        "https://www.linkedin.com/posts/eduardoferreirademelo_vers%C3%A3o-em-portugu%C3%AAs-pt-modelagem-hier%C3%A1rquica-activity-7412858740460199937-btve?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEqYHzQB26lDfpyP7i3L2VAIyJf99eJrwDQ",
      ],
      [
        "github",
        "https://github.com/henriquemmar/3DHierarchicalModellingAndProjections-Proj2",
      ],
    ],
  },
  {
    name: "Illumination And Shading",
    className: "cgiThree",
    links: [
      [
        "linkedin",
        "https://www.linkedin.com/posts/eduardoferreirademelo_vers%C3%A3o-em-portugu%C3%AAs-pt-ilumina%C3%A7%C3%A3o-e-activity-7412861939674001408-BROQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEqYHzQB26lDfpyP7i3L2VAIyJf99eJrwDQ",
      ],
      ["github", "https://github.com/edufmelo/IlluminationAndShading-Proj3"],
    ],
  },
];

const navigation = [
  ["home", "#"],
  ["about", "#about"],
  ["skills", "#skill"],
  ["projects", "#project"],
  ["contact", "#contact"],
];

function scrollToSection(event, href, onNavigate) {
  event.preventDefault();
  onNavigate?.();

  if (href === "#") {
    window.history.pushState(null, "", window.location.pathname);
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const section = document.querySelector(href);
  if (!section) return;

  const sectionTop = window.scrollY + section.getBoundingClientRect().top;
  const sectionHeight = section.offsetHeight;

  // Se a seção for menor que a tela, centraliza o bloco completo.
  // Se for maior, posiciona seu início para não esconder conteúdo.
  const centeredOffset =
    sectionHeight < window.innerHeight
      ? (window.innerHeight - sectionHeight) / 2
      : 0;

  window.history.pushState(null, "", href);
  window.scrollTo({
    top: Math.max(0, sectionTop - centeredOffset),
    behavior: "smooth",
  });
}

function Reveal({
  as: Component = "div",
  children,
  className = "",
  delay = 0,
  variant = "up",
  triggerEarly = false,
}) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return undefined;

    if (!("IntersectionObserver" in window)) {
      element.classList.add("is-visible");
      return undefined;
    }

    // Reinicia o efeito quando o elemento sai e volta para a tela.
    const observer = new IntersectionObserver(
      ([entry]) => {
        element.classList.toggle("is-visible", entry.isIntersecting);
      },
      {
        threshold: triggerEarly ? 0.01 : 0.16,
        rootMargin: triggerEarly ? "0px 0px 18% 0px" : "0px 0px -8% 0px",
      },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [triggerEarly]);

  return (
    <Component
      ref={elementRef}
      className={`reveal reveal--${variant} ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </Component>
  );
}

function LanguageSelector({ language, onChange, mobile = false }) {
  return (
    <div className={mobile ? "language-mobile" : "language"}>
      <p aria-label="Selecionar idioma">
        <button
          type="button"
          className={language === "en" ? "active" : ""}
          onClick={() => onChange("en")}
          aria-pressed={language === "en"}
        >
          en
        </button>
        <span aria-hidden="true"> | </span>
        <button
          type="button"
          className={language === "pt" ? "active" : ""}
          onClick={() => onChange("pt")}
          aria-pressed={language === "pt"}
        >
          pt
        </button>
      </p>
    </div>
  );
}

function Header({ language, onLanguageChange, text }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);

    function closeOnEscape(event) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("menu-open");
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  return (
    // MENU
    <header>
      <a className="logo" href="#" aria-label={text.home}>
        <img src="/assets/logo/white-logo-adjusted.png" alt="Eduardo Melo" />
      </a>

      <nav aria-label="Navegação principal">
        {navigation.map(([key, href]) => (
          <a
            key={key}
            href={href}
            onClick={(event) => scrollToSection(event, href)}
          >
            {text[key]}
          </a>
        ))}
      </nav>

      <LanguageSelector
        language={language}
        onChange={onLanguageChange}
      />

      {/* MENU MOBILE */}
      <div className="menu-mobile">
        <a className="logo-mobile" href="#" aria-label={text.home}>
          <img src="/assets/logo/white-logo-adjusted.png" alt="Eduardo Melo" />
        </a>

        <button
          type="button"
          className="hamburger-menu"
          aria-label="Abrir menu"
          aria-controls="nav-mobile"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <HiBars3 aria-hidden="true" />
        </button>

        <div
          id="nav-mobile"
          className={`mobile-nav${menuOpen ? " show" : ""}`}
          aria-hidden={!menuOpen}
        >
          <button
            type="button"
            className="close"
            aria-label="Fechar menu"
            onClick={() => setMenuOpen(false)}
            tabIndex={menuOpen ? 0 : -1}
          >
            <HiXMark aria-hidden="true" />
          </button>

          <ul>
            {navigation.map(([key, href]) => (
              <li key={key}>
                <a
                  className="nav-link"
                  href={href}
                  onClick={(event) =>
                    scrollToSection(event, href, () => setMenuOpen(false))
                  }
                  tabIndex={menuOpen ? 0 : -1}
                >
                  {text[key]}
                </a>
              </li>
            ))}
            <li>
              <LanguageSelector
                language={language}
                onChange={onLanguageChange}
                mobile
              />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

function TechnologyCarousel() {
  const [currentSlide, setCurrentSlide] = useState(2); // Começa no terceiro item
  const [translateX, setTranslateX] = useState(0);
  const wrapperRef = useRef(null);
  const itemRefs = useRef([]);
  const pointerStart = useRef(null);

  const updateCarousel = useCallback(() => {
    const wrapper = wrapperRef.current;
    const item = itemRefs.current[currentSlide];

    if (!wrapper || !item) return;

    // Centraliza o item usando as dimensões reais, inclusive após redimensionar.
    const itemCenter = item.offsetLeft + item.offsetWidth / 2;
    setTranslateX(wrapper.clientWidth / 2 - itemCenter);
  }, [currentSlide]);

  useLayoutEffect(() => {
    updateCarousel();

    const observer = new ResizeObserver(updateCarousel);
    if (wrapperRef.current) observer.observe(wrapperRef.current);
    itemRefs.current.forEach((item) => item && observer.observe(item));

    return () => observer.disconnect();
  }, [updateCarousel]);

  function nextSlider() {
    setCurrentSlide((current) => (current + 1) % technologies.length);
  }

  function prevSlider() {
    setCurrentSlide(
      (current) => (current - 1 + technologies.length) % technologies.length,
    );
  }

  function handleKeyDown(event) {
    if (event.key === "ArrowLeft") prevSlider();
    if (event.key === "ArrowRight") nextSlider();
  }

  function handlePointerDown(event) {
    pointerStart.current = event.clientX;
  }

  function handlePointerUp(event) {
    if (pointerStart.current === null) return;
    const distance = event.clientX - pointerStart.current;
    pointerStart.current = null;

    if (Math.abs(distance) < 35) return;
    if (distance > 0) prevSlider();
    else nextSlider();
  }

  return (
    <div
      className="carousel"
      role="region"
      aria-label="Tecnologias"
      tabIndex="0"
      onKeyDown={handleKeyDown}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={() => {
        pointerStart.current = null;
      }}
    >
      <button
        type="button"
        className="nav-btn"
        onClick={prevSlider}
        aria-label="Tecnologia anterior"
      >
        <HiChevronLeft aria-hidden="true" />
      </button>
      <div className="carousel-wrapper" ref={wrapperRef}>
        <div
          className="carousel-track"
          style={{ transform: `translate3d(${translateX}px, 0, 0)` }}
        >
          {technologies.map((technology, index) => {
            const Icon = technology.icon;
            const isActive = index === currentSlide;

            return (
              <span
                key={technology.name}
                ref={(element) => {
                  itemRefs.current[index] = element;
                }}
                title={technology.name}
                className={`slider${isActive ? " on" : ""}`}
                style={{ "--brand-color": technology.color }}
                aria-label={technology.name}
                aria-current={isActive ? "true" : undefined}
                role="img"
              >
                <Icon aria-hidden="true" />
              </span>
            );
          })}
        </div>
      </div>
      <button
        type="button"
        className="nav-btn"
        onClick={nextSlider}
        aria-label="Próxima tecnologia"
      >
        <HiChevronRight aria-hidden="true" />
      </button>
      <p className="carousel-label" aria-live="polite">
        {technologies[currentSlide].name}
      </p>
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <Reveal
      as="article"
      className={`card ${project.className}`}
      delay={(index % 2) * 110}
      variant="up"
    >
      <div className="description">
        <h2>{project.name}</h2>
        <div className="icons">
          {project.links.map(([type, href]) => {
            const Icon = projectIcons[type];

            return (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.name} no ${type}`}
              >
                <Icon className="project-icon" aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}

function App() {
  const [language, setLanguage] = useState("en");
  const text = translations[language];

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  }, [language]);

  return (
    <>
      <Header
        language={language}
        onLanguageChange={setLanguage}
        text={text}
      />

      <main>
        <section className="introduction">
          <div className="hero-shell">
            <Reveal className="hero-copy" variant="left">
              <p className="hero-greeting">{text.heroGreeting}</p>
              <h1>
                {text.heroLead} <span>{text.heroName}</span>,
              </h1>
              <h2>{text.heroRole}</h2>

              <div className="hero-actions">
                <a
                  className="hero-button hero-button-primary"
                  href="#project"
                  onClick={(event) => scrollToSection(event, "#project")}
                >
                  {text.heroProjects}
                  <HiArrowRight aria-hidden="true" />
                </a>
                <a
                  className="hero-button hero-button-secondary"
                  href="#contact"
                  onClick={(event) => scrollToSection(event, "#contact")}
                >
                  {text.heroContact}
                </a>
              </div>
            </Reveal>

            <Reveal
              className="hero-portrait hero-portrait--depth"
              variant="right"
              delay={120}
            >
              {/* Troque --depth por --cover para usar o círculo grande da primeira versão. */}
              <div className="hero-backdrop" aria-hidden="true">
                <div className="hero-circle" />
                <div className="hero-ring hero-ring-one" />
                <div className="hero-ring hero-ring-two" />
              </div>
              <div className="hero-photo-layer">
                <img
                  src="/assets/me/eduardo-melo-hero.webp"
                  alt="Eduardo Melo"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container">
            <div className="content">
              <Reveal className="section-heading" variant="down">
                <span aria-hidden="true">01</span>
                <h2 className="title">{text.about}</h2>
              </Reveal>

              <div className="about-me">
                <Reveal className="profile" variant="left" delay={80}>
                  <figure className="about-photo">
                    <img
                      src="/assets/me/eu_faculdade.webp"
                      alt="Eduardo Melo em frente à NOVA FCT"
                    />
                    <figcaption>
                      <span aria-hidden="true" />
                      {text.aboutPhotoCaption}
                    </figcaption>
                  </figure>
                </Reveal>

                <Reveal className="description" variant="right" delay={140}>
                  <p className="about-eyebrow">{text.aboutEyebrow}</p>
                  <h3>{text.aboutHeadline}</h3>
                  <div className="about-copy">
                    <p>{text.aboutIntro}</p>
                    <p>{text.aboutDetails}</p>
                  </div>

                  <div className="about-journey">
                    {text.aboutJourney.map((item, index) => (
                      <article
                        className={`about-journey-item ${
                          index === text.aboutJourney.length - 1
                            ? "is-current"
                            : ""
                        }`}
                        key={item.title}
                      >
                        <span className="about-marker" aria-hidden="true">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <p className="about-journey-label">{item.label}</p>
                          <h4>{item.title}</h4>
                          <p>{item.description}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section id="skill" className="skill">
          <div className="container">
            <div className="content">
              <Reveal className="section-heading" variant="down">
                <span aria-hidden="true">02</span>
                <h2 className="title">{text.tools}</h2>
              </Reveal>
              <Reveal className="carousel-reveal" delay={100}>
                <TechnologyCarousel />
              </Reveal>
            </div>
          </div>
        </section>

        <section id="project" className="project">
          <div className="container">
            <div className="content">
              <Reveal className="section-heading" variant="down">
                <span aria-hidden="true">03</span>
                <h2 className="title">{text.projects}</h2>
              </Reveal>

              <div className="projects">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={project.name}
                    project={project}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <div className="content">
              <Reveal className="section-heading" variant="down">
                <span aria-hidden="true">04</span>
                <h2 className="title">{text.contactMe}</h2>
              </Reveal>

              <Reveal delay={100}>
                <div className="contact-area">
                  <form
                    action="https://api.staticforms.xyz/submit"
                    method="post"
                    className="contact-form"
                  >
                    <div className="input">
                      <input
                        type="text"
                        name="name"
                        placeholder={text.name}
                        aria-label={text.name}
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder={text.email}
                        aria-label={text.email}
                        required
                      />
                    </div>

                    <textarea
                      name="message"
                      placeholder={text.message}
                      aria-label={text.message}
                      required
                    />

                    <input
                      type="hidden"
                      name="replyTo"
                      value="eduferreirademelo@outlook.com"
                    />
                    <input
                      type="hidden"
                      name="subject"
                      value="Contact me - eduferreirademelo@outlook.com"
                    />
                    <input
                      type="hidden"
                      name="accessKey"
                      value="421d8104-e070-4956-8846-d5d809b15d3f"
                    />
                    <input
                      type="hidden"
                      name="redirectTo"
                      value="https://edufmelo.com.br/sucess.html"
                    />

                    <div className="div-custom-button">
                      <button type="submit" className="custom-button">
                        <span className="send-button-content">
                          <HiPaperAirplane aria-hidden="true" />
                          <span>{text.send}</span>
                        </span>
                      </button>
                    </div>
                  </form>

                  <div className="div-icons-contact">
                    <a
                      href="https://wa.me/+5541992902456"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="WhatsApp"
                    >
                      <SiWhatsapp className="icons-contact" aria-hidden="true" />
                    </a>
                    <a
                      href="mailto:eduferreirademelo@outlook.com"
                      aria-label="E-mail"
                    >
                      <MdEmail className="icons-contact" aria-hidden="true" />
                    </a>
                    <a
                      href="https://linktr.ee/edufmelo"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Linktree"
                    >
                      <SiLinktree className="icons-contact" aria-hidden="true" />
                    </a>
                    <a
                      href="https://publuu.com/flip-book/803236/1771633"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Currículo"
                    >
                      <HiDocumentText
                        className="icons-contact"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer>
        <Reveal className="container" triggerEarly>
          <div className="dev">
            <h3>© Eduardo Melo {new Date().getFullYear()}.</h3>
          </div>

          <nav aria-label="Links externos">
            <a
              href="https://drive.google.com/file/d/1Xj9TrQ8viHjJFYcesYh4Jmv_Kn4mVJgb/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              {text.resume}
            </a>
            <a
              href="https://www.linkedin.com/in/eduardoferreirademelo/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin
            </a>
            <a
              href="https://github.com/edufmelo"
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>
            <a
              href="https://linktr.ee/edufmelo"
              target="_blank"
              rel="noreferrer"
            >
              linktree
            </a>
          </nav>

          <div className="totop">
            <h3 className="backToTop">{text.backToTop}</h3>
            <a
              href="#"
              aria-label={text.backToTop}
              onClick={(event) => scrollToSection(event, "#")}
            >
              <HiArrowUpCircle className="back-to-top-icon" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </footer>
    </>
  );
}

export default App;
