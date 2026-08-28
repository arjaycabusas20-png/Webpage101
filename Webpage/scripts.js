const headerAvatar = document.getElementById('header-avatar');
const avatar = document.getElementById('avatar');
const displayName = document.getElementById('display-name');
const headerName = document.getElementById('header-name');
const aboutBtn = document.getElementById('about-btn');

const DEFAULT_NAME = 'Arjay Cabusas';
if (displayName) displayName.textContent = DEFAULT_NAME;
if (headerName) headerName.textContent = DEFAULT_NAME;

function tryLoadLocalAvatar(filename){
  const img = new Image();
  img.onload = ()=>{
    if (avatar) avatar.style.background = `url(${filename}) center/cover no-repeat`;
    if (headerAvatar) headerAvatar.style.background = `url(${filename}) center/cover no-repeat`;
    if (avatar) avatar.textContent = '';
    if (headerAvatar) headerAvatar.textContent = '';
  };
  img.onerror = ()=>{};
  img.src = filename;
}

tryLoadLocalAvatar('me.jpg');
tryLoadLocalAvatar('me.jpg');

if (aboutBtn) {
  aboutBtn.addEventListener('click', ()=>{
    window.open('#', '_blank');
  });
}
