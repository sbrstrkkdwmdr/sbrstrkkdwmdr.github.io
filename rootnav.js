
const defpages = [
    {
        name: 'Home',
        url: 'index.html',
        icon: 'dir.png',
    },
    {
        name: 'Portfolio',
        url: 'portfolio.html',
        icon: 'page.png',
    },
    {
        name: 'Other',
        url: 'other.html',
        icon: 'page.png',
    },
    // skins
    {
        name: 'osu! Skins',
        url: 'skins',
        icon: 'dir.png',
    },
    {
        name: 'Main skins',
        url: 'skins/main',
        icon: 'dir.png',
    },
    {
        name: 'Custom',
        url: 'skins/main/01.html',
        icon: 'page.png',
    },
    {
        name: 'Custom v2',
        url: 'skins/main/02.html',
        icon: 'page.png',
    },
    {
        name: 'Type X',
        url: 'skins/main/03.html',
        icon: 'page.png',
    },
    {
        name: 'Type Y',
        url: 'skins/main/04.html',
        icon: 'page.png',
    },
    {
        name: 'Type Z',
        url: 'skins/main/05.html',
        icon: 'page.png',
    },
    {
        name: 'SaberStrike 0',
        url: 'skins/main/06.html',
        icon: 'page.png',
    },
    {
        name: 'SaberStrike 1',
        url: 'skins/main/07.html',
        icon: 'page.png',
    },
    {
        name: 'sbr',
        url: 'skins/main/08.html',
        icon: 'page.png',
    },
    {
        name: 'prjct. sbr',
        url: 'skins/main/09.html',
        icon: 'page.png',
    },
    {
        name: 'SBR UD',
        url: 'skins/main/10.html',
        icon: 'page.png',
    },
    {
        name: 'SBR v11',
        url: 'skins/main/11.html',
        icon: 'page.png',
    },
    {
        name: 'sbrstrkkdwmdr v12',
        url: 'skins/main/12.html',
        icon: 'page.png',
    },
    {
        name: 'sbrstrkkdw v13',
        url: 'skins/main/13.html',
        icon: 'page.png',
    },
    {
        name: 'sbrstrkkdw v14',
        url: 'skins/main/14.html',
        icon: 'page.png',
    },
    {
        name: 'sbrstrkkdw v15',
        url: 'skins/main/15.html',
        icon: 'page.png',
    },
    {
        name: 'sbrstrk-r skins',
        url: 'skins/sbrstrk-r',
        icon: 'dir.png',
    },
    {
        name: 'BlueBudgie',
        url: 'skins/sbrstrk-r/bluebudgie.html',
        icon: 'page.png',
    },
    {
        name: 'Bluegamingftw',
        url: 'skins/sbrstrk-r/bluegamingftw.html',
        icon: 'page.png',
    },
    {
        name: 'Byonick',
        url: 'skins/sbrstrk-r/byonick.html',
        icon: 'page.png',
    },
    {
        name: 'Duckyboi',
        url: 'skins/sbrstrk-r/duckyboi.html',
        icon: 'page.png',
    },
    {
        name: 'Hanoji',
        url: 'skins/sbrstrk-r/hanoji.html',
        icon: 'page.png',
    },
    {
        name: 'ikugoi',
        url: 'skins/sbrstrk-r/ikugoi.html',
        icon: 'page.png',
    },
    {
        name: 'OniisanBaka',
        url: 'skins/sbrstrk-r/oniisanbaka.html',
        icon: 'page.png',
    },
    {
        name: 'radiite',
        url: 'skins/sbrstrk-r/radiite.html',
        icon: 'page.png',
    },
    {
        name: 'Soragaton',
        url: 'skins/sbrstrk-r/soragaton.html',
        icon: 'page.png',
    },
    {
        name: 'Other skins',
        url: 'skins/other.html',
        icon: 'page.png',
    },
    // projects
    {
        name: 'Projects',
        url: 'projects',
        icon: 'dir.png',
    },
    {
        name: 'Conversions',
        url: 'projects/conversions',
        icon: 'page.png',
    },
    {
        name: 'SSoB',
        url: 'projects/ssob_docs',
        icon: 'dir.png',
    },
    {
        name: 'Commands',
        url: 'projects/ssob_docs/commands.html',
        icon: 'page.png',
    },
    {
        name: 'Types',
        url: 'projects/ssob_docs/types.html',
        icon: 'page.png',
    },
]

/**
 * @param {number} level 
 * @param {string} cd 
 * @param {string} cur 
 */
function genSideNav(level, cd, cur) {
    const sidenav = document.getElementById('sidebar');
    const list = document.createElement('ul');
    list.id = 'sidenavList';
    sidenav.append(list)
    let subs = '';
    for (let i = 0; i < level; i++) {
        subs += '../';
    }
    let pages = defpages;
    if (cd) {
        pages = defpages.slice().filter(x => x.url.startsWith(cd)
            && (x.url.split('/').length < level + 2 ||
                (x.url.split('/').length <= level + 2 && x.url.endsWith('index.html')))
        );
    } else {
        pages = defpages.slice().filter(x =>
            !x.url.includes('/')
            || (x.url.includes('/') && x.url.split('/').length <= 2 && x.url.includes('index.html'))
        );
    }
    if (level > 0) {
        const aWrap = document.createElement('a');
        const item = document.createElement('li');
        item.className = 'sidebarItem';
        aWrap.href = '../';
        const img = document.createElement('img');
        img.src = subs + './img/icons/exit.png'
        const text = document.createElement('span');
        text.innerText = '';
        item.append(img, text);
        aWrap.append(item);
        list.append(aWrap);
    }
    pages.forEach(page => {
        const aWrap = document.createElement('a');
        const item = document.createElement('li');
        item.classList.add('sidebarItem');
        aWrap.href = subs + page.url;
        if (page.url == cur) {
            page.icon = page.icon.includes('dir') ? 'dir_current.png' : 'page_current.png';
            item.classList.add('sidebarItemActive');
        } else if (page.url == cd + '/index.html' || page.url == 'index.html' || page.url == cd) {
            page.icon = page.icon.includes('dir') ? 'dir_index.png' : 'page_index.png';
        }
        const img = document.createElement('img');
        img.src = subs + './img/icons/' + page.icon;
        const text = document.createElement('span');
        text.innerText = page.name;
        if (page.url.split('/').length > level && !(page.url == cd + '/index.html' || page.url == 'index.html')) {
            item.classList.add('sidebarChildItem')
        }
        text.classList.add('mono');
        item.append(img, text);
        item.draggable = false;
        aWrap.draggable = false;
        aWrap.append(item);
        list.append(aWrap);
    });
}

function genSideButton(level) {
    let show = true;
    const sidenav = document.getElementById('sidebar');
    let list = document.getElementById('sidenavList');
    let subs = '';
    for (let i = 0; i < level; i++) {
        subs += '../';
    }
    if (devicePixelRatio > 1) {
        show = false
    }
    {
        const sideButton = document.createElement('div');
        sideButton.id = 'sidebarButton'
        sideButton.addEventListener('click', () => {
            show = displaySide(show, list, sidenav);
        });
        const sideButtonImgOffset = document.createElement('span');
        sideButtonImgOffset.id = 'sideButtonImgOffset'
        const sideButtonImg = document.createElement('img');
        sideButtonImg.src = subs + './img/icons/sidebarButton.png';
        sideButtonImg.id = 'sideButtonImg';
        sideButton.append(sideButtonImgOffset, sideButtonImg);
        sideButtonImg.draggable = false;
        sideButton.draggable = false;
        sidenav.append(sideButton);
    }
    let ctn = document.getElementById('content');
    ctn.style.left = sidenav.offsetWidth + 'px';
    show = displaySide(show, list, sidenav);
}

/**
 * 
 * @param {boolean} show 
 * @param {HTMLULElement} list 
 * @param {HTMLDivElement} sidebar
 * @returns 
 */
function displaySide(show, list, sidebar) {
    let ctn = document.getElementById('content');
    let button = document.getElementById('sidebarButton');
    let big = sidebar.offsetWidth + 3;
    if (show) {
        sidebar.style.transform = `translateX(0)`
        ctn.style.transform = `translateX(0)`
        ctn.style.width = `calc(98vw - ${big + button.offsetWidth}px)`
    } else {
        let t = big - sidebar.offsetWidth + button.offsetWidth + button.offsetWidth;
        sidebar.style.transform = `translateX(-${list.clientWidth}px)`
        ctn.style.transform = `translateX(-${list.clientWidth}px)`
        ctn.style.width = `calc(98vw - ${t}px)`
    }
    return !show;
}

/**
 * @param {number} level 
 * @param {string} cd 
 * @param {string} cur 
 */
function genPage(level, cd, cur) {
    genSideNav(level, cd, cur);
    genSocials(level);
    genTitle(level, cur);
    genSideButton(level);
}

const socials = [
    {
        icon: 'github.png',
        url: 'https://github.com/sbrstrkkdwmdr',
    },
    {
        icon: 'youtube.png',
        url: 'https://www.youtube.com/@sbrstrkkdwmdr',
    },
    {
        icon: 'osu.png',
        url: 'https://osu.ppy.sh/u/15222484',
    },
    {
        icon: 'mail.png',
        url: 'mailto:sbrstrkkdwmdr@gmail.com'
    }
]

/**
 * @param {number} level 
 */
function genSocials(level) {
    const section = document.getElementById('socialLinks');
    let subs = '';
    for (let i = 0; i < level; i++) {
        subs += '../';
    }
    socials.forEach(social => {
        const item = document.createElement('a');
        item.className = 'socialItem';
        item.href = social.url;
        const img = document.createElement('img');
        img.src = subs + './img/social/' + social.icon;
        img.className = 'socialItemImg';
        item.append(img)
        item.draggable = false;
        img.draggable = false;
        section.append(item);
    })
}

/**
 * @param {number} level 
 * @param {string} cur 
 */
function genTitle(level, cur) {
    const main = document.getElementById('addressBar');
    let subs = '';
    for (let i = 0; i < level; i++) {
        subs += '../';
    }
    if (subs == ''){
        subs = './'
    }
    let arr = [
        {
            text: 'HOME',
            url: subs
        }
    ];
    if (cur.includes('/')) {
        const split = cur.split('/');
        for (let i = 0; i < split.length; i++) {
            arr.push({
                text: split[i],
                url: subs + split.slice(0, i + 1).join('/')
            })
        }
    } else {
        arr.push({
            text: cur,
            url: subs + cur
        });
    }
    arr = arr.filter(x => x.text != 'index.html');
    arr.forEach(url => {
        if (url.text != 'HOME') {
            const slash = document.createElement('span');
            slash.innerText = '/';
            slash.classList.add('mono');
            main.append(slash)
        }
        const item = document.createElement('a');
        item.innerText = url.text.replace('.html', '');
        item.href = url.url;
        item.classList.add('mono');
        item.draggable = false;
        main.append(item);
    });
    main.style.marginLeft =
        'calc(' +
        document.getElementById('sidebar').offsetWidth + 'px - ' + document.getElementById('socialLinks').clientWidth + 'px + 30px)'
}