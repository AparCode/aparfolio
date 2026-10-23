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
  function project(p) {
    return h('article', {class:'project'},
      h('div', {class:'project-top'}, h('img', {src:p.thumb, alt:'', width:55, height:55, loading:'lazy'}),
        h('div', {}, h('p', {class:'context'}, p.context), h('h3', {}, p.title))),
      h('p', {}, p.summary),
      h('details', {}, h('summary', {}, 'About this project'), h('p', {}, p.description),
        h('p', {}, 'Tools: ' + p.skills.join(', ')),
        ...(p.metrics?.length ? [h('ul', {}, p.metrics.map(metric => h('li', {}, typeof metric === 'string' ? metric : JSON.stringify(metric))))] : [])),
      h('div', {class:'project-links'}, p.repo ? external('Code ↗', p.repo) : null, p.demo ? external('View project ↗', p.demo) : null));
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
    $('projectsTitle').textContent = music ? 'Compositions, remixes & experiments' : 'Things I’ve built';
    $('projectsIntro').textContent = music ? 'From my Illumidove channel. Choose a track to listen on YouTube.' : 'A selection of my work in AI, software, and interactive experiences.';
    if (music) {
      $('projectContent').replaceChildren(...MUSIC_TRACKS.map((track, i) => h('article', {class:'track'},
        h('span', {class:'track-number','aria-hidden':'true'},String(i+1).padStart(2,'0')),
        h('div', {}, h('h3', {}, track.title), h('p', {}, track.note)),external('Listen ↗','https://www.youtube.com/watch?v='+track.id))));
    } else {
      const featured = FEATURED.map(f => PROJECTS.find(p => p.id === f.id)).filter(Boolean);
      const rest = PROJECTS.filter(p => !featured.includes(p));
      $('projectContent').replaceChildren(h('div', {class:'project-grid'}, featured.map(project)),
        h('details', {class:'all-projects'}, h('summary', {}, `More projects (${rest.length})`), h('div', {class:'project-grid'}, rest.map(project))));
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
