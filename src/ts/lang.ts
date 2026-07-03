type Lang = 'pt' | 'en'

const langs: Record<string, Record<Lang, string>> = {
  'nav-github':         { pt: 'GitHub',              en: 'GitHub' },
  'nav-linkedin':       { pt: 'LinkedIn',            en: 'LinkedIn' },
  'nav-curriculo':      { pt: 'Currículo',           en: 'Resume' },
  'nav-curriculo-href': { pt: 'src/downloads/curriculum-pt-br.pdf', en: 'src/downloads/curriculum-english.pdf' },
  'section-projetos':   { pt: 'Projetos',            en: 'Projects' },
  'section-cursos':     { pt: 'Cursos e Certificações', en: 'Courses & Certifications' },
  'section-experiencia':{ pt: 'Experiência',         en: 'Experience' },
  'section-skills':     { pt: 'Habilidades',         en: 'Skills' },

  'intro-headline':     { pt: 'Desenvolvedor de Software', en: 'Software Developer' },
  'intro-text':         { pt: 'Cursando An\u00e1lise e Desenvolvimento de Sistemas \u00b7 Experi\u00eancia com sistemas corporativos, suporte t\u00e9cnico e desenvolvimento web. Buscando oportunidades como desenvolvedor.', en: 'Studying Systems Analysis and Development \u00b7 Experience with corporate systems, technical support and web development. Seeking opportunities as a developer.' },

  'projeto-bookcase-title': { pt: 'BookCase →',      en: 'BookCase →' },
  'projeto-bookcase-desc':  { pt: 'Sistema web para gerenciamento de sebos com cadastro de livros, controle de estoque e caixa.', en: 'Web system for used bookstore management with book registration, inventory and cash control.' },
  'projeto-adv-title':      { pt: 'Maciel & Morais →', en: 'Maciel & Morais →' },
  'projeto-adv-desc':       { pt: 'Landing page responsiva para escrit\u00f3rio de advocacia.', en: 'Responsive landing page for a law firm.' },
  'projeto-patio-title':    { pt: 'Controle de p\u00e1tio →', en: 'Yard Control →' },
  'projeto-patio-desc':     { pt: 'Sistema para controle e higieniza\u00e7\u00e3o de ve\u00edculos em quiosque Localiza.', en: 'System for vehicle fleet cleaning and control at a Localiza kiosk.' },

  'course1-title': { pt: 'CS50x Introduction to computer science', en: 'CS50x Introduction to computer science' },
  'course1-inst':  { pt: 'Harvard University',       en: 'Harvard University' },
  'course1-desc':  { pt: 'Algoritmos, desenvolvimento full stack, C, Python, SQL, Javascript', en: 'Algorithms, full-stack development, C, Python, SQL, Javascript' },

  'exp1-company':  { pt: 'Solus Software',           en: 'Solus Software' },
  'exp1-period':   { pt: '11/2025 — 07/2026',       en: '11/2025 — 07/2026' },
  'exp1-role':     { pt: 'Analista de sistemas — Suporte t\u00e9cnico', en: 'Systems Analyst — Technical Support' },
  'exp1-desc-1':   { pt: 'Sustenta\u00e7\u00e3o de sistemas corporativos e atendimento de chamados', en: 'Corporate system support and ticket handling' },
  'exp1-desc-2':   { pt: 'Investiga\u00e7\u00e3o e resolu\u00e7\u00e3o de incidentes em ambiente de produ\u00e7\u00e3o', en: 'Incident investigation and resolution in production' },
  'exp1-desc-3':   { pt: 'Corre\u00e7\u00e3o de falhas em aplica\u00e7\u00f5es Delphi, PHP e JavaScript', en: 'Bug fixing in Delphi, PHP and JavaScript applications' },
  'exp1-desc-4':   { pt: 'Consultas e manuten\u00e7\u00e3o em banco de dados com PL/SQL', en: 'Database queries and maintenance with PL/SQL' },
  'exp1-desc-5':   { pt: 'Valida\u00e7\u00e3o de corre\u00e7\u00f5es e testes de integra\u00e7\u00e3o', en: 'Fixes validation and integration testing' },
  'exp1-desc-6':   { pt: 'Trabalho conjunto com equipes de desenvolvimento e QA', en: 'Collaboration with development and QA teams' },

  'author-name':    { pt: 'Maicon Vieira',            en: 'Maicon Vieira' },
  'author-github':  { pt: 'GitHub',                   en: 'GitHub' },
  'author-linkedin':{ pt: 'LinkedIn',                 en: 'LinkedIn' },
  'card-hint':     { pt: 'Ver certificado →',         en: 'View certificate →' },
}

function setLang(lang: Lang): void {
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'

  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n
    if (key && langs[key]) {
      el.textContent = langs[key][lang]
    }
  })

  document.querySelectorAll<HTMLAnchorElement>('[data-i18n-href]').forEach(el => {
    const key = el.dataset.i18nHref
    if (key && langs[key]) {
      el.href = langs[key][lang]
    }
  })

  document.querySelectorAll<HTMLButtonElement>('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang)
  })

  localStorage.setItem('lang', lang)
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = (localStorage.getItem('lang') as Lang) || 'pt'
  setLang(saved)

  document.querySelectorAll<HTMLButtonElement>('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang as Lang))
  })
})
