document.addEventListener('DOMContentLoaded', function () {
    const navigationContainer = document.getElementById('navigation');
    const footerContainer = document.getElementById('footer');
    const navigationURL = 'navigation.html';
    const footerURL = 'footer.html';

    fetch(navigationURL)
        .then(response => response.text())
        .then(html => navigationContainer.innerHTML = html);

    fetch(footerURL)
        .then(response => response.text())
        .then(html => footerContainer.innerHTML = html);
});