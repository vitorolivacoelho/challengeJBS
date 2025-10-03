const toggleButton = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const sidebarHeader = document.querySelector('.sidebar-header');

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('open');        // abre/fecha sidebar
    toggleButton.classList.toggle('open');   // muda fundo e cor do botão
    sidebarHeader.classList.toggle('hide-text'); // esconde ou mostra o "Menu"
});
