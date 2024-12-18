/**
<nav>
<ul>
<li><a href="./skins/HOME.html">osu! skins</a></li>
<li><a href="./stuff.html">Other</a></li>
</ul> 
</nav>
 */
const navitems = [
    {
        name: 'Home',
        id: 'linkHome',
        url: './index.html',
    },
    {
        name: 'YouTube',
        id: 'linkYoutube',
        url: 'https://www.youtube.com/@sbrstrkkdw',
    },
    {
        name: 'Discord',
        id: 'linkDiscord',
        url: 'https://github.com/sbrstrkkdwmdr/',
    },
    {
        name: 'Github',
        id: 'linkGithub',
        url: 'mailto:sbrstrkkdwmdr@gmail.com',
    },
    {
        name: 'Email',
        id: 'linkEmail',
        url: 'mailto:sbrstrkkdwmdr@gmail.com',
    },
    {
        name: 'osu!',
        id: 'linkOsu',
        url: 'https://osu.ppy.sh/users/15222484',
    },
    {
        name: 'osu! skins',
        id: 'linkOsuskins',
        url: './skins/',
    },
    {
        name: 'Portfolio',
        id: 'linkPortfolio',
        url: './portfolio.html',
    },
    {
        name: 'Other',
        id: 'linkOther',
        url: './stuff.html',
    },
]


function activateNav(str) {
    const nav = document.getElementById('nav');
    const ul = document.createElement('ul');
    navitems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.url;
        a.innerText = item.name;
        a.id = item.id;
        if (item.id == str) {
            a.className = 'activeNavLink';
        }
        li.append(a);
        ul.append(li);
    });
    if (isMobileDevice()) {
        ul.style.display = 'none';
        const hamburger = document.createElement('img');
        hamburger.id = 'hamburgerButton';
        hamburger.src = './image/hamburger.png';
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