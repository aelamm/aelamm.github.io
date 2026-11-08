(() => {
  const cfg = window.PORTFOLIO_CONFIG || {};
  const valid = (v) => typeof v === 'string' && /^https:\/\//i.test(v.trim());
  const disable = (a, title) => {
    a.removeAttribute('href'); a.classList.add('disabled');
    a.setAttribute('aria-disabled','true'); a.title = title || 'Link not configured yet';
  };
  const bind = (a, url) => {
    if (valid(url)) { a.href=url; a.target='_blank'; a.rel='noopener noreferrer'; }
    else disable(a);
  };
  document.querySelectorAll('[data-project]').forEach(a => {
    const entry = (cfg.projects || {})[a.dataset.project] || {};
    bind(a,entry[a.dataset.kind]);
    if (!a.hasAttribute('href')) a.textContent = a.dataset.kind === 'demo' ? 'Demo coming soon' : 'Code link pending';
  });
  document.querySelectorAll('[data-link]').forEach(a => {
    const type = a.dataset.link;
    const url = type === 'email' && cfg.email ? `mailto:${cfg.email}` : cfg[type];
    if (type==='email' && cfg.email && cfg.email.includes('@')) a.href=url;
    else bind(a,url);
    if (!a.hasAttribute('href')) a.textContent = type === 'cv' ? 'CV pending' : type === 'email' ? 'Contact pending' : type === 'githubProfile' ? 'GitHub pending' : 'LinkedIn pending';
  });
  if (cfg.headline) document.getElementById('hero-headline').textContent = cfg.headline;
  document.getElementById('year').textContent = new Date().getFullYear();
  const toggle = document.querySelector('.menu-toggle'); const nav = document.getElementById('navigation');
  toggle.addEventListener('click',()=>{ const opening=!nav.classList.contains('open'); nav.classList.toggle('open',opening); toggle.setAttribute('aria-expanded',String(opening)); });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));
})();
