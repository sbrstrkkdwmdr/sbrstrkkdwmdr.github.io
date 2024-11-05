    /**
 <nav>
<ul>
<li><a href="./osu-skin/HOME.html">osu! skins</a></li>
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
        url: './osu-skin/HOME.html',
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
        if(item.id == str){
            a.className = 'activeNavLink';
        }
        li.append(a);
        ul.append(li);
    });
    nav.append(ul);
};