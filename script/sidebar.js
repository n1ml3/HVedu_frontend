$(document).ready(function () {
    // Sidebar Toggle Logic
    const toggleBtn = $('.sidebar-toggle-btn');
    const sidebar = $('.sidebar-column');
    const overlay = $('.sidebar-overlay');
    const body = $('body');

    function toggleSidebar() {
        sidebar.toggleClass('active');
        overlay.toggleClass('active');
        body.toggleClass('sidebar-open');
    }

    if (toggleBtn.length && sidebar.length) {
        toggleBtn.on('click', toggleSidebar);
        overlay.on('click', toggleSidebar);
    }
});
