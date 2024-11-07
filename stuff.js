const peripherals = {
    Tablet: [
        {
            name: 'Gaomon S620',
            url: '',
            other: '',
        },
    ],
    Mouse: [
        {
            name: 'Steel Series Rival 3',
            url: 'https://steelseries.com/gaming-mice/rival-3',
            other: '',
        },
    ],
    Keyboard: [
        {
            name: 'Custom keyboard - ',
            url: '',
            other: '',
        },
        {
            name: 'Kailh FL MK870',
            url: 'https://www.aliexpress.com/item/1005003002307740.html',
            other: 'Hotswappable TKL',
        },
        {
            name: 'C3 Tangerine Switches',
            url: 'https://ilumkb.com/products/c3-tangerine-switch',
            other: '62g',
        },
        {
            name: 'E-YOOSO Double Shot PBT',
            url: 'https://www.amazon.com.au/Element-Translucent-Backlit-Mechanical-Keyboards/dp/B07JFMDR2K',
            other: 'Black&Grey',
        },
    ],
    Audio: [
        {
            name: 'Razer Nari',
            url: 'https://www.razer.com/au-en/gaming-headsets/razer-nari/RZ04-02680100-R3U1',
            other: '',
        },
        {
            name: 'NeeWer NW-800',
            url: '',
            other: '',
        },
        {
            name: 'Behringer U-Phoria UMC202HD',
            url: 'https://www.behringer.com/product.html?modelCode=0805-AAR',
            other: '',
        },
    ],
    Monitor: [
        {
            name: 'ViewSonic VX2458-P-MHD',
            url: 'https://www.viewsonic.com/au/products/lcd/VX2458-P-MHD.php',
            other: 'Main, 144hz, TN panel, 24"/60.96cm',
        },
        {
            name: 'LG 22MN430M-23ML44B',
            url: 'https://www.lg.com/us/monitors/lg-24ml44b-b-led-monitor',
            other: '75Hz, IPS panel, 23.8"/60.452cm',
        },
    ],
    Webcam: [
        {
            name: 'N5 HD 1080p',
            url: '',
            other: '',
        },
    ],
}

const pcparts = {
    CPU: [
        {
            name: 'AMD Ryzen 5 3600',
            url: 'https://www.amd.com/en/products/cpu/amd-ryzen-5-3600',
            other: '',
        },
    ],
    GPU: [
        {
            name: 'GTX 1660 Super (MSI)',
            url: 'https://www.msi.com/Graphics-Card/GeForce-GTX-1660-SUPER-GAMING-X',
            other: '',
        },
    ],
    Motherboard: [
        {
            name: 'Asus ROG STRIX X570-E',
            url: 'https://rog.asus.com/Motherboards/ROG-Strix/ROG-Strix-X570-E-Gaming-Model/',
            other: '',
        },
    ],
    RAM: [
        {
            name: 'G.SKILL Trident F4-3600C18D-16GTZR (2x8GB)',
            url: 'https://www.gskill.com/product/165/166/1562824288/F4-3600C18D-16GTZRTrident-Z-RGBDDR4-3600MHz-CL18-22-22-42-1.35V16GB-(2x8GB)',
            other: '',
        },
    ],
    Storage: [
        {
            name: 'CT1000P5SSD8',
            url: 'https://www.crucial.com/products/ssd/crucial-p5-ssd',
            other: '(1TB)',
        },
        {
            name: 'Samsung 860 EVO',
            url: 'https://www.samsung.com/semiconductor/minisite/ssd/product/consumer/860evo/',
            other: '(500GB)',
        },
        {
            name: 'Seagate BarraCuda',
            url: 'https://www.seagate.com/au/en/products/hard-drives/barracuda-hard-drive/',
            other: '(2TB)',
        },
    ],
    PSU: [
        {
            name: 'Corsair RM650',
            url: 'https://www.corsair.com/us/en/Categories/Products/Power-Supply-Units/rm-series-config/p/CP-9020054-NA',
            other: '',
        },
    ],
    Cooler: [
        {
            name: 'EK-AIO 240',
            url: 'https://www.ekwb.com/shop/ek-aio-240-d-rgb',
            other: '',
        },
    ],
    Case: [
        {
            name: 'NZXT H510',
            url: 'https://nzxt.com/product/h510',
            other: '',
        },
    ],
}

const software = {
    Recording: [
        {
            name: 'osr2mp4',
            url: 'https://github.com/uyitroa/osr2mp4-app/releases/tag/v0.3',
            other: '',
        },
        {
            name: 'OBS Studio',
            url: 'https://obsproject.com',
            other: '',
        },
        {
            name: 'danser',
            url: 'https://github.com/Wieku/danser-go/',
            other: '',
        },
        {
            name: 'Nvidia GeForce Experience',
            url: '',
            other: '',
        },
    ],
    'Video Editing': [
        {
            name: 'ffmpeg',
            url: 'https://github.com/BtbN/FFmpeg-Builds/releases',
            other: '',
        },
        {
            name: 'DaVinci Resolve 18',
            url: 'https://www.blackmagicdesign.com/products/davinciresolve',
            other: '',
        },
    ],
    'Drawing/Photo Editing': [
        {
            name: 'paint.net',
            url: 'https://www.getpaint.net',
            other: '',
        },
        {
            name: 'GIMP',
            url: 'https://www.gimp.org/',
            other: '',
        },
        {
            name: 'Krita',
            url: 'https://krita.org/en/',
            other: '',
        },
        {
            name: 'Inkscape',
            url: 'https://inkscape.org/',
            other: '',
        },
    ],
    'Tablet Drivers': [
        {
            name: 'OTD',
            url: 'https://github.com/OpenTabletDriver/OpenTabletDriver',
            other: 'Open Tablet Driver',
        },
    ],
    'PP Counters': [
        {
            name: 'danser built-in pp counter',
            url: '',
            other: '',
        },
        {
            name: 'Tosu',
            url: 'https://github.com/KotRikD/tosu/',
            other: '',
        },
    ],
    'IDE': [
        {
            name: 'Visual Studio Code',
            url: 'https://code.visualstudio.com/',
            other: '',
        },
        {
            name: 'Notepad++',
            url: 'https://notepad-plus-plus.org/downloads/',
            other: '',
        },
    ],
    Other: [
        {
            name: 'Streamelements',
            url: 'https://streamelements.com/',
            other: '',
        },
        {
            name: 'JKPS',
            url: 'https://osu.ppy.sh/community/forums/topics/1356687',
            other: 'Key Counter',
        },
    ],
}

const playstyle = {
    things: {
        Mouse: `Palm grip 
900 DPI
`,
        Tablet: `Pen grip, hover (switched from dragging 2022-02-26).
32x18mm
`,
        Keyboard: `Using keys Q and E.
Index+ring tapping.
Mostly full alt.
`,
    },
    image: [
        'image/tablet.jpg',
        'image/tablet2.jpg',
    ]
}

function main() {

    const periDiv = document.getElementById('periDiv');
    for (const [key, value] of Object.entries(peripherals)) {
        itemsLink(key, periDiv, value)
    }
    const pcDiv = document.getElementById('pcDiv');
    for (const [key, value] of Object.entries(pcparts)) {
        itemsLink(key, pcDiv, value)
    }
    const sofDiv = document.getElementById('sofDiv');
    for (const [key, value] of Object.entries(software)) {
        itemsLink(key, sofDiv, value)
    }
    const playDiv = document.getElementById('playDiv');
    for (const [key, value] of Object.entries(playstyle.things)) {
        const title = document.createElement('h3');
        title.innerHTML = key;
        playDiv.append(title);
        const x = document.createElement('li');
        x.innerHTML = value;
        playDiv.append(x);
    }
    (() => {
        const title = document.createElement('h3');
        title.innerHTML = 'Tablet Settings';
        playDiv.append(title);
    })();
    for (const image of playstyle.image) {
        const imeji = document.createElement('img');
        imeji.src = image;
        playDiv.append(imeji);
    }
}

/**
 * @param {string} name
 * @param {HTMLDivElement} elem 
 * @param {{
 * name: string,
 * url: string,
 * other: string,
 * }[]} items
 */
function itemsLink(name, elem, items) {
    const title = document.createElement('h3');
    title.innerHTML = name;
    elem.append(title);

    for (const item of items) {
        const x = document.createElement('li')
        if (item.url.length > 2) {
            const url = document.createElement('a');
            url.innerHTML = item.name;
            url.href = item.url;
            url.classList.add("itemLink")
            x.append(url);
        } else {
            x.innerHTML = item.name;
        }
        x.innerHTML += item.other.length > 1 ? ' ' + item.other : '';
        elem.append(x);
    }
}

onavitems = [
    {
        name: 'Peripherals',
        url: '#peripherals',
    },
    {
        name: 'PC Parts',
        url: '#pc',
    },
    {
        name: 'Setup',
        url: '#setup',
    },
    {
        name: 'Software',
        url: '#software',
    },
    {
        name: 'Playstyle',
        url: '#playstyle',
    },
]

function otherNav() {
    const nav = document.getElementById('nav');
    const ul = document.createElement('ul');

    // if (window.devicePixelRatio > 1) {
    //     const li = document.createElement('li');
    //     li.innerText = '---------'
    //     ul.append(li);
    // }
    if (window.devicePixelRatio <= 1) {
        onavitems.forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = item.url;
            a.innerText = item.name;
            li.append(a);
            ul.append(li);
        });
        nav.append(ul);
    }
    // if (window.devicePixelRatio > 1) {
    //     ul.style.display = 'none';
    //     const hamburger = document.getElementById('hamburgerButton');
    //     hamburger.addEventListener('click', e => {
    //         if (ul.style.display == 'none') {
    //             ul.style.display = 'block';
    //         } else {
    //             ul.style.display = 'none';
    //         }
    //     });
    //     nav.classList.add('mobileNav');
    //     nav.append(ul);
    // } 
};
otherNav();
main();
