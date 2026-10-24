/* Content is kept in data.js; these renderers are shared by both modes. */
(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  function h(tag, attrs = {}, ...children) {
    const node = document.createElement(tag);
    Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
    children.flat().forEach(child => { if (child != null) node.append(child); });
    return node;
  }
  const link = (label, href, className = '') => h('a', {href, class: className}, label);
  const external = (label, href) => h('a', {href, target: '_blank', rel: 'noopener noreferrer'}, label);
  let activeCategory = 'all';
  const categoryLabel = id => id === 'gfx' ? 'Graphics' : id === 'music' ? 'Music Tech' : id === 'apps' ? 'Apps & Data' : CATEGORIES.find(c => c.id === id)?.label || id;
  function openProject(p) {
    $('projectDetailTitle').textContent = p.title;
    $('projectDetailBody').replaceChildren(
      h('p', {class:'context'}, p.context), h('p', {}, p.description),
      h('h3', {}, 'Tools'), h('p', {}, p.skills.join(' · ')),
      ...(p.metrics?.length ? [h('h3', {}, 'Evaluation'), h('ul', {}, p.metrics.map(metric => h('li', {}, metric)))] : []),
      h('div', {class:'project-links'}, p.repo ? external('Code ↗', p.repo) : null, p.demo ? external('View project ↗', p.demo) : null));
    $('projectDetail').showModal();
  }
  function project(p) {
    const card = h('button', {class:'project-card', type:'button', 'aria-haspopup':'dialog', 'aria-label':`Read about ${p.title}`},
      h('img', {src:p.thumb, alt:'', width:60, height:60, loading:'lazy'}),
      h('span', {class:'project-card-copy'},
        h('span', {class:'project-type'}, p.context),
        h('span', {class:'project-name'}, p.title),
        h('span', {class:'project-summary'}, p.summary)),
      h('span', {class:'project-tags'}, p.cats.map(c => h('span', {class:'project-tag'}, categoryLabel(c)))));
    card.addEventListener('click', () => openProject(p));
    return card;
  }
  function renderProjectGrid() {
    const visible = PROJECTS.filter(p => activeCategory === 'all' || p.cats.includes(activeCategory));
    $('techProjectGrid').replaceChildren(...visible.map(project));
    document.querySelectorAll('.project-filter').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.category === activeCategory)));
    $('projectCount').textContent = `${visible.length} projects shown`;
  }
  function renderTechProjects() {
    const filters = h('div', {class:'project-filters', role:'group', 'aria-label':'Filter projects'});
    CATEGORIES.forEach(category => {
      const count = PROJECTS.filter(p => category.id === 'all' || p.cats.includes(category.id)).length;
      const button = h('button', {class:'project-filter', type:'button', 'data-category':category.id, 'aria-pressed':String(category.id === activeCategory), 'aria-controls':'techProjectGrid'},
        category.id === 'all' ? 'All Projects' : categoryLabel(category.id), h('span', {class:'category-count'}, String(count)));
      button.addEventListener('click', () => {activeCategory = category.id; renderProjectGrid();});
      filters.append(button);
    });
    $('projectContent').replaceChildren(filters, h('p', {id:'projectCount',class:'sr-only',role:'status'}), h('div', {id:'techProjectGrid',class:'tech-project-grid'}));
    renderProjectGrid();
  }
  function experience(entry) {
    return h('article', {class:'experience'}, h('div', {}, h('h3', {}, entry.org), h('p', {class:'when'}, entry.when)),
      h('div', {}, h('h3', {}, entry.role), h('ul', {}, entry.bullets.map(text => h('li', {}, text)))));
  }
  const musicSkills = [
    {group:'Production',items:['Ableton','Remixing','Mashups']},
    {group:'Composition',items:['Original music','Sound effects','Music for XR experiences']},
    {group:'Performance',items:['Piano','Orchestral ensemble','Video-game music']}
  ];
  function render(mode, announce = false) {
    const music = mode === 'music';
    document.documentElement.dataset.mode = mode;
    $('modeSwitch').setAttribute('aria-checked', String(music));
    document.querySelector('meta[name=theme-color]').content = music ? '#160e16' : '#091722';
    $('heroRole').textContent = music ? 'I’m a music producer.' : 'I’m an AI & software engineer.';
    $('heroIntro').textContent = music
      ? 'I make music as Illumidove — original pieces, remixes, and mashups. I also play piano, and I enjoy bringing sound and interactive visuals together.'
      : 'I’m a Computer Science B.S./M.S. graduate from RIT. I build software, explore applied AI, and enjoy figuring out how an idea becomes something people can use.';
    $('heroActions').replaceChildren(music ? link('Listen on YouTube ↗', PROFILE.youtube, 'button primary') : link('View resume ↗', PROFILE.resume, 'button primary'),link(music ? 'Explore my music ↓' : 'Explore my projects ↓', '#projects', 'text-link'));
    $('heroNote').textContent = music ? 'My engineering work is one switch away.' : 'Curious about my creative side? Try the Music switch.';
    $('projectsEyebrow').textContent = music ? 'Music / Projects' : 'Tech / Projects';
    $('projectsTitle').textContent = music ? 'Compositions, remixes & experiments' : 'Projects';
    $('projectsIntro').textContent = music ? 'From my Illumidove channel. Choose a track to listen on YouTube.' : 'Here are all of the projects I’ve worked on!';
    if (music) {
      $('projectContent').replaceChildren(...MUSIC_TRACKS.map((track, i) => h('article', {class:'track'},
        h('span', {class:'track-number','aria-hidden':'true'},String(i+1).padStart(2,'0')),
        h('div', {}, h('h3', {}, track.title), h('p', {}, track.note)),external('Listen ↗','https://www.youtube.com/watch?v='+track.id))));
    } else {
      renderTechProjects();
    }
    $('skillsTitle').textContent = music ? 'How I make music' : 'What I work with';
    $('skillsContent').replaceChildren(...(music ? musicSkills : SKILLS).map(s => h('div', {class:'skill-group'},h('h3', {}, s.group),h('p', {}, s.items.join(' · ')))));
    $('experienceTitle').textContent = music ? 'Performance & creative work' : 'Where I’ve contributed';
    const entries = EXPERIENCE.filter(e => music ? e.kind === 'music' : e.kind !== 'music');
    $('experienceContent').replaceChildren(...(!music ? [h('p', {class:'education'},'Rochester Institute of Technology · B.S. & M.S. in Computer Science · Aug 2021 – May 2026')] : []), ...entries.map(experience));
    if (music) $('experienceContent').append(experience({org:'XRLive: Under the Sea',when:'RIT · Frameless Symposium',role:'Composition & interactive visuals',bullets:['Composed the music and sound effects in Ableton for an underwater-themed interactive projection experience.','Created a fabric-movement effect in TouchDesigner using MediaPipe.']}));
    $('contactIntro').textContent = music ? 'Want to talk about music or creative projects? I’d love to hear from you.' : 'I’m interested in early-career opportunities in AI and software engineering.';
    $('contactLinks').replaceChildren(...(music ? [external('Illumidove on YouTube ↗', PROFILE.youtube)] : [external('GitHub ↗', PROFILE.github),external('LinkedIn ↗', PROFILE.linkedin),link('Resume (PDF) ↗', PROFILE.resume)]));
    if (announce) $('modeStatus').textContent = `${music ? 'Music' : 'Tech'} mode selected. Portfolio content updated.`;
  }
  // Every fresh visit starts in Tech. Do not persist the selected mode.
  $('projectDetailClose').addEventListener('click', () => $('projectDetail').close());
  render('tech');
  $('modeSwitch').addEventListener('click', () => render(document.documentElement.dataset.mode === 'tech' ? 'music' : 'tech', true));
  const navLinks = [...document.querySelectorAll('nav a')];
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(e => e.isIntersecting).sort((a,b) => a.boundingClientRect.top-b.boundingClientRect.top)[0];
    if (!visible) return;
    navLinks.forEach(a => { if (a.hash === '#' + visible.target.id) a.setAttribute('aria-current','location'); else a.removeAttribute('aria-current'); });
  }, {rootMargin:'-150px 0px -45% 0px'});
  document.querySelectorAll('main>section').forEach(section => observer.observe(section));
})();
