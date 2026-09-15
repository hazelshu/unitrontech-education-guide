const el=(tag,cls,text)=>{const node=document.createElement(tag);if(cls)node.className=cls;if(text)node.textContent=text;return node;};
const nav=document.querySelector('.quick-nav');
const menu=el('button','nav-toggle','교육안내 목차 ☰');
menu.type='button';menu.setAttribute('aria-expanded','false');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');menu.setAttribute('aria-expanded',String(open));});
nav.prepend(menu);
nav.querySelectorAll('a').forEach((link,index)=>{link.id=`section-link-${index}`;link.addEventListener('click',()=>{nav.classList.remove('is-open');menu.setAttribute('aria-expanded','false');});});
menu.setAttribute('aria-controls',[...nav.querySelectorAll('a')].map(a=>a.id).join(' '));
const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(!entry.isIntersecting)continue;nav.querySelectorAll('a').forEach(a=>{if(a.hash===`#${entry.target.id}`)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}},{rootMargin:'-15% 0px -60% 0px'});
document.querySelectorAll('section[id]').forEach(section=>observer.observe(section));
for(const group of window.education.groups){const card=el('article','group-card');card.append(el('h3','group-name',`${group.name}그룹`));for(const [label,date,display,weekday] of group.dates){const row=el('div','date-row');row.append(el('span','day-label',label));const time=el('time','',display);time.dateTime=date;row.append(time,el('span','weekday',weekday));card.append(row);}card.append(el('p','group-hours','09:00 ~ 18:00'));document.querySelector('#groups').append(card);}
window.education.days.forEach((day,index)=>{const card=el('article','day-card');card.append(el('p','day-tag',`DAY 0${index+1} · ${index+1}일차`),el('h3','',day.title));const list=el('ol','lessons');list.start=index?9:1;day.items.forEach(item=>list.append(el('li','',item)));card.append(list);document.querySelector('#days').append(card);});
