let lightdark = 'dark';

const defpages = [
    {
        name: 'Home',
        url: 'index.html',
        icon: 'dir.png',
        description: "Main page"
    },
    {
        name: 'Portfolio',
        url: 'portfolio.html',
        icon: 'page.png',
        description: "List of projects"
    },
    {
        name: 'Other',
        url: 'other.html',
        icon: 'page.png',
        description: "Specs, peripherals, etc."
    },
    {
        name: 'Search',
        url: 'search.html',
        icon: 'page.png',
        description: "Access all pages"
    },
    // skins
    {
        name: 'osu! Skins',
        url: 'skins',
        icon: 'dir.png',
        description: "osu! skins page"
    },
    {
        name: 'Main skins',
        url: 'skins/main',
        icon: 'dir.png',
        description: "Main skins page"
    },
    {
        name: 'Custom',
        url: 'skins/main/01.html',
        icon: 'page.png',
        description: "skin preview"
    },
    {
        name: 'Custom v2',
        url: 'skins/main/02.html',
        icon: 'page.png',
        description: "skin preview"
    },
    {
        name: 'Type X',
        url: 'skins/main/03.html',
        icon: 'page.png',
        description: "skin preview"
    },
    {
        name: 'Type Y',
        url: 'skins/main/04.html',
        icon: 'page.png',
        description: "skin preview"
    },
    {
        name: 'Type Z',
        url: 'skins/main/05.html',
        icon: 'page.png',
        description: "skin preview"
    },
    {
        name: 'SaberStrike 0',
        url: 'skins/main/06.html',
        icon: 'page.png',
        description: "skin preview"
    },
    {
        name: 'SaberStrike 1',
        url: 'skins/main/07.html',
        icon: 'page.png',
        description: "skin preview"
    },
    {
        name: 'sbr',
        url: 'skins/main/08.html',
        icon: 'page.png',
        description: "skin preview"
    },
    {
        name: 'prjct. sbr',
        url: 'skins/main/09.html',
        icon: 'page.png',
        description: "skin preview"
    },
    {
        name: 'SBR UD',
        url: 'skins/main/10.html',
        icon: 'page.png',
        description: "skin preview"
    },
    {
        name: 'SBR v11',
        url: 'skins/main/11.html',
        icon: 'page.png',
        description: "skin preview"
    },
    {
        name: 'sbrstrkkdwmdr v12',
        url: 'skins/main/12.html',
        icon: 'page.png',
        description: "skin preview"
    },
    {
        name: 'sbrstrkkdw v13',
        url: 'skins/main/13.html',
        icon: 'page.png',
        description: "skin preview"
    },
    {
        name: 'sbrstrkkdw v14',
        url: 'skins/main/14.html',
        icon: 'page.png',
        description: "skin preview"
    },
    {
        name: 'sbrstrkkdw v15',
        url: 'skins/main/15.html',
        icon: 'page.png',
        description: "skin preview"
    },
    {
        name: 'sbrstrk-r skins',
        url: 'skins/sbrstrk-r',
        icon: 'dir.png',
        description: "skins used on sbrstrk-r"
    },
    {
        name: 'BlueBudgie',
        url: 'skins/sbrstrk-r/bluebudgie.html',
        icon: 'page.png',
        description: "BlueBudgie skin list"
    },
    {
        name: 'Bluegamingftw',
        url: 'skins/sbrstrk-r/bluegamingftw.html',
        icon: 'page.png',
        description: "Bluegamingftw skin list"
    },
    {
        name: 'Byonick',
        url: 'skins/sbrstrk-r/byonick.html',
        icon: 'page.png',
        description: "Byonick skin list"
    },
    {
        name: 'Duckyboi',
        url: 'skins/sbrstrk-r/duckyboi.html',
        icon: 'page.png',
        description: "Duckyboi skin list"
    },
    {
        name: 'Hanoji',
        url: 'skins/sbrstrk-r/hanoji.html',
        icon: 'page.png',
        description: "Hanoji skin list"
    },
    {
        name: 'ikugoi',
        url: 'skins/sbrstrk-r/ikugoi.html',
        icon: 'page.png',
        description: "ikugoi skin list"
    },
    {
        name: 'OniisanBaka',
        url: 'skins/sbrstrk-r/oniisanbaka.html',
        icon: 'page.png',
        description: "OniisanBaka skin list"
    },
    {
        name: 'radiite',
        url: 'skins/sbrstrk-r/radiite.html',
        icon: 'page.png',
        description: "radiite skin list"
    },
    {
        name: 'Soragaton',
        url: 'skins/sbrstrk-r/soragaton.html',
        icon: 'page.png',
        description: "Soragaton skin list"
    },
    {
        name: 'Other skins',
        url: 'skins/other.html',
        icon: 'page.png',
        description: "Other skin list"
    },
    {
        name: 'Skin dump',
        url: 'skins/dump.html',
        icon: 'page.png',
        description: "dump of every skin I've ever used"
    },
    {
        name: 'Skin search',
        url: 'skins/search.html',
        icon: 'page.png',
        description: "Skin search page"
    },
    // projects
    {
        name: 'Projects',
        url: 'projects',
        icon: 'dir.png',
        description: "Project documentation"
    },
    {
        name: 'Conversions',
        url: 'projects/conversions',
        icon: 'page.png',
        description: "website for conversions"
    },
    {
        name: 'SSoB',
        url: 'projects/ssob_docs',
        icon: 'dir.png',
        description: "SSoB documentation"
    },
    {
        name: 'Commands',
        url: 'projects/ssob_docs/commands.html',
        icon: 'page.png',
        description: "SSoB command list"
    },
    {
        name: 'Types',
        url: 'projects/ssob_docs/types.html',
        icon: 'page.png',
        description: "SSoB options"
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
    let show = false;
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
        sideButtonImg.src = subs + `./img/icons/sidebarButton_${lightdark}.png`;
        sideButtonImg.id = 'sideButtonImg';
        sideButton.append(sideButtonImgOffset, sideButtonImg);
        sideButtonImg.draggable = false;
        sideButton.draggable = false;
        sidenav.append(sideButton);
    }
    let ctn = document.getElementById('content');
    ctn.style.left = sidenav.offsetWidth + 'px';
    show = displaySide(show, list, sidenav, true);
    const section = document.getElementById('hamburger');

    // set up hamburger
    {
        const item = document.createElement('div');
        item.className = 'socialItem';
        const img = document.createElement('img');
        img.src = subs + `./img/icons/hamburger_${lightdark}.png`;
        img.className = 'socialItemImg';
        item.append(img);
        item.draggable = false;
        img.draggable = false;
        item.addEventListener('click', () => {
            show = displaySide(show, list, sidenav);
        });
        section.append(item);
    }
    // light dark switch
    {
        const item = document.createElement('div');
        item.className = 'socialItem';
        const img = document.createElement('img');
        img.src = subs + `./img/icons/darklight_${lightdark}.png`;
        img.className = 'socialItemImg';
        item.append(img);
        item.draggable = false;
        img.draggable = false;
        item.addEventListener('click', () => {
            const allImages = document.getElementsByTagName('img')
            if (lightdark == 'light') {
                lightdark = 'dark';
                setLightDarkMode(allImages)
            } else {
                lightdark = 'light';
                setLightDarkMode(allImages)
            }
            cookieLightDark()
        });
        section.append(item);
    }
}

/**
 * 
 * @param {boolean} show 
 * @param {HTMLULElement} list 
 * @param {HTMLDivElement} sidebar
 * @param {boolean} isStart - if is when page first loads
 * @returns 
 */
function displaySide(show, list, sidebar, isStart) {
    let ctn = document.getElementById('content');
    let button = document.getElementById('sidebarButton');
    let big = sidebar.offsetWidth + 3;
    let r = document.querySelector(':root');
    if (isStart) {
        r.style.setProperty('--sidebarAnim', '0ms ease-in-out');
        setTimeout(() => {
            r.style.setProperty('--sidebarAnim', '500ms ease-in-out');
        }, 600);
    }
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
        img.src = subs + './img/social/' + social.icon.replace('.png', `_${lightdark}.png`);
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
    if (subs == '') {
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
    // main.style.marginLeft =
    //     'calc(' +
    //     document.getElementById('sidebar').offsetWidth + 'px - ' + document.getElementById('socialLinks').clientWidth + 'px + 30px)'
}

const footerItems = [
    {
        name: 'Email',
        url: 'mailto:sbrstrkkdwmdr@gmail.com',
    },
    {
        name: 'Credits',
        url: './CREDITS.html',
    },
    {
        name: 'License',
        url: 'https://github.com/sbrstrkkdwmdr/sbrstrkkdwmdr.github.io/blob/4fac27d29c8b3c96ff00f05a7aac99952fd135fc/LICENSE'
    },
]

function footer(level) {
    const main = document.querySelector('main');
    let subs = '';
    for (let i = 0; i < level; i++) {
        subs += '../';
    }
    if (subs == '') {
        subs = './'
    }
    const footer = document.createElement("footer");

    // gen socials but text format + credits and main pages 
    // +copyright
    const ul = document.createElement('ul');
    ul.id = "footerUl"
    footerItems.forEach((item) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.url;
        if (item.url.startsWith("./")) {
            a.href = subs + item.url;
        }
        a.innerText = item.name
        li.append(a);
        ul.append(li);
    })
    footer.append(ul);
    main.append(footer);

    return;
    // ---
    // https://stackoverflow.com/a/2146905
    let hasVScroll = document.body.scrollHeight > document.body.clientHeight;

    // Get the computed style of the body element
    let cStyle = document.body.currentStyle || window.getComputedStyle(document.body, "");

    // Check the overflow and overflowY properties for "auto" and "visible" values
    hasVScroll = cStyle.overflow == "visible"
        || cStyle.overflowY == "visible"
        || (hasVScroll && cStyle.overflow == "auto")
        || (hasVScroll && cStyle.overflowY == "auto");
    // ---

    if (hasVScroll || main.scrollHeight <= main.clientHeight) {
        main.removeChild(footer)
        let move = 0;
        for (let i = 0; i < main.children.length; i++) {
            move += main.children.item(i).clientHeight
        }
        main.append(footer);
        footer.style.marginTop = (main.clientHeight - move - footer.clientHeight) + 'px';
    }
}

/**
 * 
 * @param {HTMLImageElement[]} images 
 */
function setLightDarkMode(images) {
    const root_theme = document.querySelector(':root');

    root_theme.style.setProperty('--bg-main', `var(--${lightdark}-bg-main)`);
    root_theme.style.setProperty('--bg-title', `var(--${lightdark}-bg-title)`);
    root_theme.style.setProperty('--bg-aside', `var(--${lightdark}-bg-aside)`);
    root_theme.style.setProperty('--border', `var(--${lightdark}-border)`);
    root_theme.style.setProperty('--basic-text', `var(--${lightdark}-basic-text)`);
    root_theme.style.setProperty('--unimportant-text', `var(--${lightdark}-unimportant-text)`);
    root_theme.style.setProperty('--highlight', `var(--${lightdark}-highlight)`);
    root_theme.style.setProperty('--highlightAlt', `var(--${lightdark}-highlightAlt)`);

    root_theme.style.setProperty('--clrs-blue', `var(--${lightdark}-clrs-blue)`);
    root_theme.style.setProperty('--clrs-cyan', `var(--${lightdark}-clrs-cyan)`);
    root_theme.style.setProperty('--clrs-green', `var(--${lightdark}-clrs-green)`);
    root_theme.style.setProperty('--clrs-magenta', `var(--${lightdark}-clrs-magenta)`);
    root_theme.style.setProperty('--clrs-red', `var(--${lightdark}-clrs-red)`);
    root_theme.style.setProperty('--clrs-orange', `var(--${lightdark}-clrs-orange)`);
    root_theme.style.setProperty('--clrs-yellow', `var(--${lightdark}-clrs-yellow)`);

    for (const img of images) {
        if (img.src.includes('_dark.png')) {
            console.log(img.src)
            img.src = img.src.replace('_dark.png', `_${lightdark}.png`)
        }
        if (img.src.includes('_light.png')) {
            console.log(img.src)
            img.src = img.src.replace('_light.png', `_${lightdark}.png`)
        }
        if (img.src.includes('_dark.svg')) {
            console.log(img.src)
            img.src = img.src.replace('_dark.svg', `_${lightdark}.svg`)
        }
        if (img.src.includes('_light.svg')) {
            console.log(img.src)
            img.src = img.src.replace('_light.svg', `_${lightdark}.svg`)
        }
    }
}

function cookieLightDark() {
    document.cookie = "lightdark=" + lightdark
    console.log(document.cookie)
}

function getCookie(name) {
    let cookieArr = document.cookie.split(';')
    for (let i = 0; i < cookieArr.length; i++) {
        let cur = cookieArr[i].trim();
        if (cur.startsWith(name)) {
            return cur.split("=")[1];
        }
    }
    return '';
}

{
    let ldcookie = getCookie('lightdark');
    if (['light', 'dark'].includes(ldcookie)) {
        lightdark = ldcookie;
    }
    console.log(ldcookie)
    console.log(lightdark)

    setTimeout(() => {
        const allImages = document.getElementsByTagName('img')
        setLightDarkMode(allImages);
    }, 0);
}