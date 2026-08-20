"use strict";
const langs = {
    'nav-github': { pt: 'GitHub', en: 'GitHub' },
    'nav-linkedin': { pt: 'LinkedIn', en: 'LinkedIn' },
    'nav-curriculo': { pt: 'Currículo', en: 'Resume' },
    'nav-curriculo-href': { pt: 'src/downloads/curriculum-pt-br.pdf', en: 'src/downloads/curriculum-english.pdf' },
    'section-projetos': { pt: 'Projetos', en: 'Projects' },
    'section-freelance': { pt: 'Trabalhos Freelance', en: 'Freelance Work' },
    'freelance-hint': { pt: 'Visitar site →', en: 'Visit site →' },
    'freelance-adv-desc': { pt: 'Landing page responsiva para escrit\u00f3rio de advocacia.', en: 'Responsive landing page for a law firm.' },
    'section-cursos': { pt: 'Cursos e Certificações', en: 'Courses & Certifications' },
    'section-experiencia': { pt: 'Experiência', en: 'Experience' },
    'section-skills': { pt: 'Habilidades', en: 'Skills' },
    'intro-headline': { pt: 'T\u00e9cnico de Infraestrutura & Desenvolvedor de Software', en: 'Infrastructure Technician & Software Developer' },
    'intro-text': { pt: 'T\u00e9cnico de Infraestrutura I na Semantix, atuando com monitora\u00e7\u00e3o de ambientes cr\u00edticos (Zabbix, Datadog, Grafana, Control-M) e SAP. Cursando An\u00e1lise e Desenvolvimento de Sistemas, com experi\u00eancia em desenvolvimento web e sistemas corporativos.', en: 'Infrastructure Technician I at Semantix, working with critical environment monitoring (Zabbix, Datadog, Grafana, Control-M) and SAP. Studying Systems Analysis and Development, with experience in web development and corporate systems.' },
    'projeto-bookcase-title': { pt: 'BookCase →', en: 'BookCase →' },
    'projeto-bookcase-desc': { pt: 'Sistema web para gerenciamento de sebos com cadastro de livros, controle de estoque e caixa.', en: 'Web system for used bookstore management with book registration, inventory and cash control.' },
    'projeto-adv-title': { pt: 'Maciel & Morais →', en: 'Maciel & Morais →' },
    'mcemorais': { pt: 'Maciel & Morais Advocacia →', en: 'Maciel & Morais Advocacia →' },
    'projeto-adv-desc': { pt: 'Landing page responsiva para escrit\u00f3rio de advocacia.', en: 'Responsive landing page for a law firm.' },
    'projeto-patio-title': { pt: 'Controle de p\u00e1tio →', en: 'Yard Control →' },
    'projeto-patio-desc': { pt: 'Sistema para controle e higieniza\u00e7\u00e3o de ve\u00edculos em quiosque Localiza.', en: 'System for vehicle fleet cleaning and control at a Localiza kiosk.' },
    'course1-title': { pt: 'CS50x Introduction to computer science', en: 'CS50x Introduction to computer science' },
    'course1-inst': { pt: 'Harvard University', en: 'Harvard University' },
    'course1-desc': { pt: 'Algoritmos, desenvolvimento full stack, C, Python, SQL, Javascript', en: 'Algorithms, full-stack development, C, Python, SQL, Javascript' },
    'course2-title': { pt: 'Zabbix Application and Network Monitoring', en: 'Zabbix Application and Network Monitoring' },
    'course2-inst': { pt: 'Udemy', en: 'Udemy' },
    'course2-desc': { pt: 'Zabbix, Administração de redes, Shell Script, Monitoração de rede e hosts', en: 'Zabbix, Network Administration, Shell Scripting, Network Monitoring, Host Monitoring' },
    'course3-title': { pt: 'Exploring SAP Cloud ERP', en: 'Exploring SAP Cloud ERP' },
    'course3-inst': { pt: 'SAP', en: 'SAP' },
    'course3-desc': { pt: 'SAP ERP, SAP S/4HANA', en: 'SAP ERP, SAP S/4HANA' },
    'exp1-company': { pt: 'Semantix', en: 'Semantix' },
    'exp1-period': { pt: '08/2026 — Atual', en: '08/2026 — Present' },
    'exp1-role': { pt: 'T\u00e9cnico de infraestrutura I bilingue', en: 'Bilingual Infrastructure Technician I' },
    'exp1-desc-1': { pt: 'Investiga\u00e7\u00e3o e resolu\u00e7\u00e3o de incidentes em ambiente de produ\u00e7\u00e3o', en: 'Incident investigation and resolution in production' },
    'exp1-desc-2': { pt: 'Monitora\u00e7\u00e3o de infraestrutura cr\u00edtica com Zabbix, Datadog, Grafana e Control-M', en: 'Critical infrastructure monitoring with Zabbix, Datadog, Grafana and Control-M' },
    'exp1-desc-3': { pt: 'Ambiente SAP', en: 'SAP environment' },
    'exp2-company': { pt: 'Solus Software', en: 'Solus Software' },
    'exp2-period': { pt: '11/2025 — 07/2026', en: '11/2025 — 07/2026' },
    'exp2-role': { pt: 'Analista de sistemas — Suporte t\u00e9cnico', en: 'Systems Analyst — Technical Support' },
    'exp2-desc-1': { pt: 'Sustenta\u00e7\u00e3o de sistemas corporativos e atendimento de chamados', en: 'Corporate system support and ticket handling' },
    'exp2-desc-2': { pt: 'Investiga\u00e7\u00e3o e resolu\u00e7\u00e3o de incidentes em ambiente de produ\u00e7\u00e3o', en: 'Incident investigation and resolution in production' },
    'exp2-desc-3': { pt: 'Corre\u00e7\u00e3o de falhas em aplica\u00e7\u00f5es, PLSQL, Delphi, PHP e JavaScript', en: 'Bug fixing in PL/SQL, Delphi, PHP and JavaScript applications' },
    'exp2-desc-4': { pt: 'Consultas e manuten\u00e7\u00e3o em banco de dados com PL/SQL', en: 'Database queries and maintenance with PL/SQL' },
    'exp2-desc-5': { pt: 'Valida\u00e7\u00e3o de corre\u00e7\u00f5es e testes de integra\u00e7\u00e3o', en: 'Fixes validation and integration testing' },
    'exp2-desc-6': { pt: 'Trabalho conjunto com equipes de desenvolvimento e QA', en: 'Collaboration with development and QA teams' },
    'author-name': { pt: 'Maicon Vieira', en: 'Maicon Vieira' },
    'author-github': { pt: 'GitHub', en: 'GitHub' },
    'author-linkedin': { pt: 'LinkedIn', en: 'LinkedIn' },
    'card-hint': { pt: 'Ver certificado →', en: 'View certificate →' },
    'section-artigos': { pt: 'Artigos', en: 'Articles' },
    'blog-teaser-text': { pt: 'Escrevo sobre infraestrutura, desenvolvimento e experiências práticas dos meus projetos.', en: 'I write about infrastructure, development and practical experiences from my projects.' },
    'blog-teaser-link': { pt: 'Ver todos os artigos →', en: 'See all articles →' },
};
function setLang(lang) {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (key && langs[key]) {
            el.textContent = langs[key][lang];
        }
    });
    document.querySelectorAll('[data-i18n-href]').forEach(el => {
        const key = el.dataset.i18nHref;
        if (key && langs[key]) {
            el.href = langs[key][lang];
        }
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    localStorage.setItem('lang', lang);
}
document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('lang') || 'pt';
    setLang(saved);
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLang(btn.dataset.lang));
    });
});
