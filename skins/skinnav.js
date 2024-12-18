const navitems = [
    {
        name: 'Home',
        id: 'linkHome',
        url: '../index.html',
    },
    {
        name: 'All skins',
        id: 'linkAllSkins',
        url: './',
    },
    {
        name: 'Main skins',
        id: 'linkMainSkins',
        url: './main-skins.html',
    },
    {
        name: 'Mixed skins',
        id: 'linkMixedSkins',
        url: './mixed-skins.html',
    },
    {
        name: 'Other skins',
        id: 'linkOtherSkins',
        url: './extra-skins.html',
    },
    {
        name: 'sbrstrk-r skins',
        id: 'linkSbrstrk-rSkins',
        url: './sbrstrk-r.html',
    },
]


function activateNav(str, isSubpage) {
    const nav = document.getElementById('nav');
    const ul = document.createElement('ul');
    navitems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = isSubpage ? '../' + item.url : item.url;
        a.innerText = item.name;
        a.id = item.id;
        if (item.id == str) {
            a.className = 'activeNavLink';
        }
        if (item.id == str && isSubpage) {
            a.className = 'subActiveNavLink';
        }
        li.append(a);
        ul.append(li);
    });
    if (isMobileDevice()) {
        ul.style.display = 'none';
        const hamburger = document.createElement('img');
        hamburger.id = 'hamburgerButton';
        hamburger.src = (isSubpage ? '../' : '') +  '../image/hamburger.png';
        hamburger.addEventListener('click', e => {
            if (ul.style.display == 'none') {
                ul.style.display = 'block';
            } else {
                ul.style.display = 'none';
            }
        });
        nav.classList.add('mobileNav');
        nav.append(hamburger, ul);
    } else {
        nav.append(ul)
    }
};

// https://medium.com/geekculture/detecting-mobile-vs-desktop-browsers-in-javascript-ad46e8d23ce5
function isMobileDevice(){
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return window.devicePixelRatio > 1
    // && ('ontouchstart' in window || navigator.maxTouchPoints > 0)
    && (window.innerWidth < 768 || screen.width < 768)
    && regex.test(navigator.userAgent);
}