document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.createElement('button');
    menuButton.setAttribute('class', 'hamburger');
    menuButton.setAttribute('aria-label', 'Toggle menu');

    const menuOverlay = document.createElement('div');
    menuOverlay.setAttribute('class', 'mobile-menu');
    menuOverlay.setAttribute('id', 'menu-overlay');
    menuOverlay.style.opacity = '0';

    const menuContent = document.createElement('nav');
    menuContent.setAttribute('class', 'mobile-menu__nav');

    const menuList = document.createElement('ul');
    menuList.setAttribute('class', 'mobile-menu__list');

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
        a.setAttribute('class', 'mobile-menu__link');
        a.textContent = item.text;
        li.appendChild(a);
        menuList.appendChild(li);
    });

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
                    menuButton.classList.remove('open');
                }
            }, 30);
        } else {
            menuOverlay.classList.add('active');
            menuButton.classList.add('open');
            let opacity = 0;
            const fadeIn = setInterval(function() {
                opacity = opacity + 0.1;
                menuOverlay.style.opacity = opacity;
                if (opacity >= 1) {
                    clearInterval(fadeIn);
                }
            }, 30);
        }
    }

    menuButton.addEventListener('click', toggleMenu);

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