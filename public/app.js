
// PAINEL CENTRAL CONECTA GOSPEL

const pages = [...document.querySelectorAll('.page')];
const nav = [...document.querySelectorAll('.nav-btn')];

const titles = {
  overview: 'Visão geral',
  radios: 'Minhas rádios',
  playlists: 'Playlists',
  schedule: 'Programação',
  identity: 'Identidade',
  settings: 'Configurações'
};

// Cadastro das três emissoras
const radios = {
  vem: {
    name: 'Vem Comigo Deus',
    site: '',
    stream: ''
  },
  pop: {
    name: 'Radio Pop Gospel',
    site: '',
    stream: ''
  },
  esme: {
    name: 'Rádio És-me Aqui',
    site: '',
    stream: 'https://servidor-es-me-aqui.onrender.com/stream'
  }
};

// Navegação
function showPage(id) {
  pages.forEach(page => {
    page.classList.toggle('active', page.id === id);
  });

  nav.forEach(button => {
    button.classList.toggle('active', button.dataset.page === id);
  });

  const heading = document.getElementById('pageTitle');
  if (heading) heading.textContent = titles[id] || 'Painel';

  const sidebar = document.getElementById('sidebar');
  if (sidebar) sidebar.classList.remove('open');
}

nav.forEach(button => {
  button.addEventListener('click', () => {
    showPage(button.dataset.page);
  });
});

document.querySelectorAll('[data-go]').forEach(button => {
  button.addEventListener('click', () => {
    showPage(button.dataset.go);
  });
});

// Menu para celular, caso exista
const menuBtn = document.getElementById('menuBtn');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    document.getElementById('sidebar')?.classList.toggle('open');
  });
}

// Configuração individual das rádios
const dialog = document.getElementById('configDialog');
const dialogTitle = document.getElementById('dialogTitle');
const siteUrl = document.getElementById('siteUrl');
const streamUrl = document.getElementById('streamUrl');

document.querySelectorAll('[data-radio]').forEach(button => {
  button.addEventListener('click', () => {
    const key = button.dataset.radio;
    const radio = radios[key];

    if (!radio || !dialog) return;

    dialogTitle.textContent = 'Configurar — ' + radio.name;
    siteUrl.value = radio.site;
    streamUrl.value = radio.stream;

    dialog.showModal();
  });
});

// Fechar configuração
const closeDialog = document.getElementById('closeDialog');

if (closeDialog && dialog) {
  closeDialog.addEventListener('click', () => {
    dialog.close();
  });
}

// Playlists independentes
const select = document.getElementById('radioSelect');
const songs = {
  vem: [],
  pop: [],
  esme: []
};

// Atualização do título, se o elemento existir
function renderSongs() {
  if (!select) return;

  const key = select.value;
  const radio = radios[key];

  const title = document.getElementById('playlistTitle');
  const list = document.getElementById('songList');

  if (title && radio) {
    title.textContent = 'Playlist — ' + radio.name;
  }

  if (!list) return;

  list.innerHTML = '';

  if (!songs[key] || songs[key].length === 0) {
    list.textContent = 'Nenhuma música adicionada ainda.';
    return;
  }

  songs[key].forEach((name, index) => {
    const row = document.createElement('div');
    row.className = 'song';

    const label = document.createElement('span');
    label.textContent = (index + 1) + '. ' + name;

    row.appendChild(label);
    list.appendChild(row);
  });
}

if (select) {
  select.addEventListener('change', renderSongs);
  renderSongs();
}

console.log('Painel Conecta Gospel iniciado com 3 rádios.');
