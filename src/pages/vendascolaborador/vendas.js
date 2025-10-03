const sidebar = document.getElementById('sidebar');
const toggleBtn = document.querySelector('.sidebar-toggle');

// Toggle sidebar
toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

// Fecha sidebar clicando fora (apenas mobile)
document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
        sidebar.classList.remove('open');
    }
});