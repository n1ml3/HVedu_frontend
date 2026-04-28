$(document).ready(function () {
    const isRoot = !window.location.pathname.includes('/pages/');
    const prefix = isRoot ? '' : '../';

    // Load Navbar
    $("#navbar-placeholder").load(prefix + "components/navbar.html");
    // Load Footer
    $("#footer-placeholder").load(prefix + "components/footer.html");
});