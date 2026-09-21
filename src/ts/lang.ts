type Lang = 'pt' | 'en'

const langs: Record<string, Record<Lang, string>> = {
  'nav-blog':           { pt: 'Blog',                en: 'Blog' },
  'nav-github':         { pt: 'GitHub',              en: 'GitHub' },
  'nav-linkedin':       { pt: 'LinkedIn',            en: 'LinkedIn' },
  'nav-curriculo':      { pt: 'Currículo',           en: 'Resume' },
  'nav-curriculo-href': { pt: 'src/downloads/curriculum-pt-br.pdf', en: 'src/downloads/curriculum-english.pdf' },
  'section-projetos':   { pt: 'Projetos',            en: 'Projects' },
  'section-cursos':     { pt: 'Cursos e Certificações', en: 'Courses & Certifications' },
  'section-experiencia':{ pt: 'Experiência',         en: 'Experience' },
  'section-skills':     { pt: 'Habilidades',         en: 'Skills' },

  'intro-headline':     { pt: 'Desenvolvedor de Software & Infraestrutura', en: 'Software Developer & Infrastructure' },
  'intro-text':         { pt: 'Transito entre desenvolvimento e infraestrutura, com foco crescente em DevOps: construo sistemas web com Python, JavaScript, TypeScript, PHP e SQL, e mantenho ambientes críticos em produção como Técnico de Infraestrutura I na Semantix (Zabbix, Datadog, Grafana, Control-M, SAP). Cursando Análise e Desenvolvimento de Sistemas.', en: 'I move between development and infrastructure, with growing focus on DevOps: building web systems with Python, JavaScript, TypeScript, PHP and SQL, and keeping production environments running as a Technical Integrator Cloud Ops at Semantix (Zabbix, Datadog, Grafana, Control-M, SAP). Studying Systems Analysis and Development.' },
  'hero-cta-projects':  { pt: 'Ver Projetos →',       en: 'See Projects →' },
  'hero-cta-blog':      { pt: 'Ver Blog →',           en: 'Read the Blog →' },
  'hero-cta-exp':       { pt: 'Ver Experiência →',    en: 'See Experience →' },

  'section-sobre':      { pt: 'Sobre',                en: 'About' },
  'sobre-text-1':       { pt: 'Comecei mexendo com sistemas corporativos e suporte técnico, e fui puxando esse fio até virar alguém que tanto escreve código quanto mantém a infraestrutura em que ele roda — hoje faço as duas coisas, na Semantix e nos meus próprios projetos.', en: 'I started out working with corporate systems and technical support, and pulled that thread until I became someone who both writes code and maintains the infrastructure it runs on — today I do both, at Semantix and on my own projects.' },
  'sobre-text-2':       { pt: 'Gosto de entender o sistema de ponta a ponta: da linha de código ao servidor que a executa, do banco de dados ao monitoramento que avisa quando algo quebra. É essa visão completa que estou aprofundando conforme me aproximo de DevOps.', en: 'I like understanding the system end to end: from the line of code to the server running it, from the database to the monitoring that alerts when something breaks. That full picture is what I keep deepening as I move closer to DevOps.' },

  'section-evolucao':   { pt: 'Em evolução',          en: 'Currently growing into' },
  'growth-text':        { pt: 'Migrando aos poucos para DevOps — automatizando cada vez mais do meu próprio fluxo de infraestrutura e deploy.', en: 'Gradually moving toward DevOps — automating more of my own infrastructure and deployment workflow.' },

  'mcemorais':              { pt: 'Maciel & Morais Advocacia →', en: 'Maciel & Morais Advocacia →' },
  'mcemorais-desc':         { pt: 'Landing page responsiva para escritório de advocacia.', en: 'Responsive landing page for a law firm.' },
  'projeto-bookcase-title': { pt: 'BookCase →',      en: 'BookCase →' },
  'projeto-bookcase-desc':  { pt: 'Sistema web para gerenciamento de sebos com cadastro de livros, controle de estoque e caixa.', en: 'Web system for used bookstore management with book registration, inventory and cash control.' },
  'projeto-bookcase-case':  { pt: 'Ver case study →', en: 'Read the case study →' },
  'projeto-patio-title':    { pt: 'Controle de pátio →', en: 'Yard Control →' },
  'projeto-patio-desc':     { pt: 'Sistema para controle e higienização de veículos em quiosque Localiza.', en: 'System for vehicle fleet cleaning and control at a Localiza kiosk.' },

  'course1-title': { pt: 'CS50x Introduction to computer science', en: 'CS50x Introduction to computer science' },
  'course1-inst':  { pt: 'Harvard University',       en: 'Harvard University' },
  'course1-desc':  { pt: 'Algoritmos, desenvolvimento full stack, C, Python, SQL, Javascript', en: 'Algorithms, full-stack development, C, Python, SQL, Javascript' },
  'course2-title': { pt: 'Zabbix Application and Network Monitoring', en: 'Zabbix Application and Network Monitoring' },
  'course2-inst':  { pt: 'Udemy',                    en: 'Udemy' },
  'course2-desc':  { pt: 'Zabbix, Administração de redes, Shell Script, Monitoração de rede e hosts', en: 'Zabbix, Network Administration, Shell Scripting, Network Monitoring, Host Monitoring' },
  'course3-title': { pt: 'Exploring SAP Cloud ERP', en: 'Exploring SAP Cloud ERP' },
  'course3-inst':  { pt: 'SAP',                      en: 'SAP' },
  'course3-desc':  { pt: 'SAP ERP, SAP S/4HANA',     en: 'SAP ERP, SAP S/4HANA' },
  'course4-title': { pt: 'LFS101: Introduction to Linux', en: 'LFS101: Introduction to Linux' },
  'course4-inst':  { pt: 'Linux Foundation',         en: 'Linux Foundation' },
  'course4-desc':  { pt: 'Administração de sistemas, Bash Shell, segurança', en: 'System Administration, Bash Shell, security' },

  'exp1-company':  { pt: 'Semantix',                 en: 'Semantix' },
  'exp1-period':   { pt: '08/2026 — Atual',          en: '08/2026 — Present' },
  'exp1-role':     { pt: 'Técnico de infraestrutura I bilingue', en: 'Technical Integrator Cloud Ops' },
  'exp1-desc-1':   { pt: 'Investigação e resolução de incidentes em ambiente de produção', en: 'Incident investigation and resolution in production' },
  'exp1-desc-2':   { pt: 'Monitoração de infraestrutura crítica com Zabbix, Datadog, Grafana e Control-M', en: 'Critical infrastructure monitoring with Zabbix, Datadog, Grafana and Control-M' },
  'exp1-desc-3':   { pt: 'Ambiente SAP',             en: 'SAP environment' },
  'exp1-more-text':    { pt: 'Atuo na linha de frente do suporte a ambientes de produção críticos, cobrindo desde a triagem inicial de incidentes até a investigação de causa raiz em conjunto com times de aplicação e infraestrutura.', en: 'I work on the front line of support for critical production environments, covering everything from initial incident triage to root-cause investigation alongside application and infrastructure teams.' },
  'exp1-highlight-1':  { pt: 'Atuo em ambiente 100% bilíngue, documentando e comunicando incidentes em português e inglês para squads internacionais', en: 'Working in a fully bilingual environment, documenting and communicating incidents in Portuguese and English for international squads' },
  'exp1-highlight-2':  { pt: 'Ferramentas do dia a dia: Zabbix, Datadog, Grafana, Control-M e ambiente SAP', en: 'Day-to-day tools: Zabbix, Datadog, Grafana, Control-M and SAP environment' },
  'exp1-highlight-3':  { pt: '[complete: volume médio de incidentes ou chamados que você atende por mês]', en: '[fill in: average number of incidents/tickets you handle per month]' },
  'exp1-highlight-4':  { pt: '[complete: SLA ou tempo médio de resposta que você mantém]', en: '[fill in: SLA or average response time you maintain]' },

  'exp2-company':  { pt: 'Solus Software',           en: 'Solus Software' },
  'exp2-period':   { pt: '11/2025 — 07/2026',        en: '11/2025 — 07/2026' },
  'exp2-role':     { pt: 'Analista de sistemas — Suporte técnico', en: 'Systems Analyst — Technical Support' },
  'exp2-desc-1':   { pt: 'Sustentação de sistemas corporativos e atendimento de chamados', en: 'Corporate system support and ticket handling' },
  'exp2-desc-2':   { pt: 'Investigação e resolução de incidentes em ambiente de produção', en: 'Incident investigation and resolution in production' },
  'exp2-desc-3':   { pt: 'Correção de falhas em aplicações, PLSQL, Delphi, PHP e JavaScript', en: 'Bug fixing in PL/SQL, Delphi, PHP and JavaScript applications' },
  'exp2-desc-4':   { pt: 'Consultas e manutenção em banco de dados com PL/SQL', en: 'Database queries and maintenance with PL/SQL' },
  'exp2-desc-5':   { pt: 'Validação de correções e testes de integração', en: 'Fixes validation and integration testing' },
  'exp2-desc-6':   { pt: 'Trabalho conjunto com equipes de desenvolvimento e QA', en: 'Collaboration with development and QA teams' },
  'exp2-more-text':    { pt: 'Atuei na sustentação de sistemas corporativos internos, unindo suporte técnico direto ao usuário com correções de código em produção, sempre em conjunto com as equipes de desenvolvimento e QA.', en: 'I worked on supporting internal corporate systems, combining direct technical support with production code fixes, always alongside the development and QA teams.' },
  'exp2-highlight-1':  { pt: 'Corrigi falhas em produção em aplicações PL/SQL, Delphi, PHP e JavaScript', en: 'Fixed production issues in PL/SQL, Delphi, PHP and JavaScript applications' },
  'exp2-highlight-2':  { pt: 'Validação de correções e testes de integração em conjunto com a equipe de QA antes de cada deploy', en: 'Validated fixes and ran integration tests together with QA before each deploy' },
  'exp2-highlight-3':  { pt: '[complete: quantidade de chamados atendidos por mês ou período]', en: '[fill in: number of tickets handled per month or period]' },
  'exp2-highlight-4':  { pt: '[complete: algum resultado que você melhorou — tempo, taxa de resolução, etc.]', en: '[fill in: a result you improved — time, resolution rate, etc.]' },

  'exp-more-label':      { pt: 'Ver mais',            en: 'See more' },
  'exp-highlights-title':{ pt: 'Destaques',           en: 'Highlights' },

  'author-name':    { pt: 'Maicon Vieira',            en: 'Maicon Vieira' },
  'author-github':  { pt: 'GitHub',                   en: 'GitHub' },
  'author-linkedin':{ pt: 'LinkedIn',                 en: 'LinkedIn' },
  'card-hint':      { pt: 'Ver certificado →',        en: 'View certificate →' },

  'section-artigos':     { pt: 'Artigos',             en: 'Articles' },
  'blog-teaser-text':    { pt: 'Escrevo sobre infraestrutura, desenvolvimento e experiências práticas dos meus projetos.', en: 'I write about infrastructure, development and practical experiences from my projects.' },
  'blog-teaser-link':    { pt: 'Ver todos os artigos →', en: 'See all articles →' },
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

function initSkillBars(): void {
  document.querySelectorAll<HTMLElement>('.skill-bar').forEach(bar => {
    const pct = bar.dataset.pct ? Number(bar.dataset.pct) : 0
    const fill = bar.querySelector<HTMLElement>('.skill-bar-fill')
    const label = bar.querySelector<HTMLElement>('.skill-bar-pct')
    if (label) label.textContent = `${pct}%`
    if (fill) requestAnimationFrame(() => { fill.style.width = `${pct}%` })
  })
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = (localStorage.getItem('lang') as Lang) || 'pt'
  setLang(saved)
  initSkillBars()

  document.querySelectorAll<HTMLButtonElement>('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang as Lang))
  })
})
