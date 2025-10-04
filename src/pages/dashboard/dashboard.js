const sidebar = document.getElementById('sidebar');
const toggleBtn = document.querySelector('.sidebar-toggle');
const body = document.body;

toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    sidebar.classList.toggle('open');
    if (window.innerWidth <= 1024) {
        if (sidebar.classList.contains('open')) {
            body.style.overflow = 'hidden'; 
        } else {
            body.style.overflow = '';
        }
    }
});

document.addEventListener('click', (e) => {
    if (window.innerWidth <= 1024) { 
        if (sidebar.classList.contains('open') && !sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
            sidebar.classList.remove('open');
            body.style.overflow = '';
        }
    }
});

document.querySelectorAll('.sidebar-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 1024) {
            sidebar.classList.remove('open');
            body.style.overflow = '';
        }
    });
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        body.style.overflow = ''; 
        sidebar.classList.remove('open');
    }
});