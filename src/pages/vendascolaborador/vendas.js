const sidebar = document.getElementById('sidebar');
const toggleBtn = document.querySelector('.sidebar-toggle');
const body = document.body;

// Função para abrir/fechar sidebar
toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    sidebar.classList.toggle('open');
    toggleBtn.classList.toggle('open'); // muda cor do botão

    // Desabilita scroll do body quando sidebar aberta no mobile
    if (window.innerWidth <= 480) {
        if (sidebar.classList.contains('open')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    }
});

// Fecha sidebar ao clicar fora (apenas mobile)
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 480) {
        if (sidebar.classList.contains('open') && !sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
            sidebar.classList.remove('open');
            toggleBtn.classList.remove('open');
            body.style.overflow = '';
        }
    }
});

// Fecha sidebar ao clicar em qualquer link (apenas mobile)
document.querySelectorAll('.sidebar-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 480) {
            sidebar.classList.remove('open');
            toggleBtn.classList.remove('open');
            body.style.overflow = '';
        }
    });
});

// Ajusta sidebar e toggle caso a tela seja redimensionada
window.addEventListener('resize', () => {
    if (window.innerWidth > 480) {
        sidebar.classList.remove('open');
        toggleBtn.classList.remove('open');
        body.style.overflow = '';
    }
});