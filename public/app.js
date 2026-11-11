const pages=[...document.querySelectorAll('.page')], nav=[...document.querySelectorAll('.nav')];
const titles={overview:'Visão geral',radios:'Minhas rádios',playlists:'Playlists',schedule:'Programação',identity:'Vinhetas e chamadas',settings:'Configurações'};
function showPage(id){pages.forEach(p=>p.classList.toggle('active',p.id===id));nav.forEach(n=>n.classList.toggle('active',n.dataset.page===id));document.getElementById('pageTitle').textContent=titles[id]||'Painel';document.getElementById('sidebar').classList.remove('open')}
nav.forEach(n=>n.addEventListener('click',()=>showPage(n.dataset.page)));
document.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>showPage(b.dataset.go)));
document.getElementById('menuBtn').addEventListener('click',()=>document.getElementById('sidebar').classList.toggle('open'));
const dialog=document.getElementById('configDialog');
document.querySelectorAll('[data-radio]').forEach(b=>b.addEventListener('click',()=>{document.getElementById('dialogTitle').textContent=b.dataset.radio==='vem'?'Web Rádio Vem Comigo Deus':'Radio Pop Gospel';dialog.showModal()}));
const select=document.getElementById('radioSelect'), input=document.getElementById('songFiles'), list=document.getElementById('songList'), title=document.getElementById('playlistTitle');
const songs={vem:[],pop:[]};
function renderSongs(){const key=select.value;title.textContent='Playlist — '+(key==='vem'?'Vem Comigo Deus':'Radio Pop Gospel');list.innerHTML='';if(!songs[key].length){list.innerHTML='<div class="empty">Nenhuma música adicionada nesta demonstração.<br>Use “Adicionar músicas” para montar uma lista de teste neste navegador.</div>';return;}songs[key].forEach((name,i)=>{const row=document.createElement('div');row.className='song';const label=document.createElement('span');label.textContent=(i+1)+'. '+name;const remove=document.createElement('button');remove.textContent='Remover';remove.className='outline-btn';remove.addEventListener('click',()=>{songs[key].splice(i,1);renderSongs()});row.append(label,remove);list.append(row)})}
select.addEventListener('change',renderSongs);input.addEventListener('change',()=>{const key=select.value;[...input.files].forEach(f=>songs[key].push(f.name));input.value='';renderSongs()});
renderSongs();
