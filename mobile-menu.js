document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.createElement('button');
    menuButton.setAttribute('class', 'menu-toggle');
    menuButton.setAttribute('aria-label', 'Toggle menu');
    menuButton.innerHTML = '☰';

    const menuOverlay = document.createElement('div');
    menuOverlay.setAttribute('class', 'menu-overlay');
    menuOverlay.setAttribute('id', 'menu-overlay');
    menuOverlay.style.opacity = '0';

    const menuContent = document.createElement('div');
    menuContent.setAttribute('class', 'menu-content');

    const closeButton = document.createElement('button');
    closeButton.setAttribute('class', 'menu-close');
    closeButton.setAttribute('aria-label', 'Close menu');
    closeButton.innerHTML = '×';

    const menuList = document.createElement('ul');
    menuList.setAttribute('class', 'menu-list');

    const menuItems = [
        { text: 'Play Online', href: '#' },
        { text: 'Play On-site', href: '#' },
        { text: 'The story', href: '#' },
        { text: 'Contact Us', href: '#' }
    ];

    menuItems.forEach(function(item) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.setAttribute('href', item.href);
        a.textContent = item.text;
        li.appendChild(a);
        menuList.appendChild(li);
    });

    menuContent.appendChild(closeButton);
    menuContent.appendChild(menuList);
    menuOverlay.appendChild(menuContent);

    document.body.appendChild(menuButton);
    document.body.appendChild(menuOverlay);

    function toggleMenu() {
        if (menuOverlay.classList.contains('active')) {
            let opacity = 1;
            const fadeOut = setInterval(function() {
                opacity = opacity - 0.1;
                menuOverlay.style.opacity = opacity;
                if (opacity <= 0) {
                    clearInterval(fadeOut);
                    menuOverlay.classList.remove('active');
                    menuOverlay.style.display = 'none';
                }
            }, 30);
        } else {
            menuOverlay.style.display = 'flex';
            menuOverlay.classList.add('active');
            let opacity = 0;
            const fadeIn = setInterval(function() {
                opacity = opacity + 0.1;
                menuOverlay.style.opacity = opacity;
                if (opacity >= 1) {
                    clearInterval(fadeIn);
                }
            }, 30);
        }
        document.body.classList.toggle('menu-open');
    }

    menuButton.addEventListener('click', toggleMenu);
    closeButton.addEventListener('click', toggleMenu);

    menuOverlay.addEventListener('click', function(e) {
        if (e.target === menuOverlay) {
            toggleMenu();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && menuOverlay.classList.contains('active')) {
            toggleMenu();
        }
    });
});