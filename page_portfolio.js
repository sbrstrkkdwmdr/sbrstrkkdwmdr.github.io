const bsrc = "./img/used/"
const used = {
    cs: {
        name: 'C#',
        src: bsrc + "cs.svg"
    },
    gd: {
        name: 'Godot',
        src: bsrc + "godot.svg"
    },
    njs: {
        name: 'NodeJS',
        src: bsrc + "nodejs.svg"
    },
    rs: {
        name: 'Rust',
        src: bsrc + "rust.svg"
    },
    tauri: {
        name: 'Tauri',
        src: bsrc + "tauri.svg"
    },
    ts: {
        name: 'Typescript',
        src: bsrc + "typescript.svg"
    },
}

const portfolioItems = [
    {
        name: 'SSoB',
        img: './img/portfolio/ssob_ss.png',
        url: 'https://github.com/sbrstrkkdwmdr/sbrbot',
        used: [used.ts, used.njs],
        pixelArt: false,
    },
    {
        name: 'ProjectBandana',
        img: './img/portfolio/projectbandana.png',
        url: 'https://www.youtube.com/playlist?list=PLbYkgKLVlgu-Pn0iwrOIO60E4CGjWUU0_',
        used: [used.gd],
        pixelArt: true,
    },
    {
        name: 'WeatherAppTauri',
        img: './img/portfolio/weatherapptauri.png',
        url: 'https://github.com/sbrstrkkdwmdr/weatherAppTauri',
        used: [used.ts, used.tauri],
        pixelArt: false,
    },
    {
        name: 'Conversions',
        img: 'https://opengraph.githubassets.com/d2551cf853591db8238ef4be1a9b8c66da4419fafbe56f569d7274b595e6548b/sbrstrkkdwmdr/conversions',
        url: 'https://github.com/sbrstrkkdwmdr/conversions',
        used: [used.rs],
        pixelArt: false,
    },
    {
        name: 'osu mod calculator',
        img: 'https://opengraph.githubassets.com/e61268d1fc262146e2c4b6c9cd69f3b4b93263e7b1fea6e85f6206492ae80499/sbrstrkkdwmdr/osumodcalculator',
        url: 'https://github.com/sbrstrkkdwmdr/osumodcalculator',
        used: [used.ts],
        pixelArt: false,
    },
    {
        name: 'COS20007',
        img: 'https://avatars.githubusercontent.com/u/71379681?v=4',
        url: 'https://github.com/sbrstrkkdwmdr/cos20007',
        used: [used.cs],
        pixelArt: false,
    },
    {
        name: 'fCC Certificates',
        img: 'https://avatars.githubusercontent.com/u/71379681?v=4',
        url: 'https://www.freecodecamp.org/sbrstrkkdwmdr#fcc-certifications',
        pixelArt: false,
        longName: true,
    }
]

function generatePortfolio() {
    const ctn = document.getElementById('content');
    {
        const h1 = document.createElement('h1');
        h1.innerText = 'Portfolio';
        h1.classList.add('pageTitle');
        const p = document.createElement('p');
        p.innerText = 'A list of projects that I have worked on/am currently working on';
        p.classList.add('pageTitleSubText');
        ctn.append(h1, p);
    }

    const itemContainer = document.createElement('section')
    itemContainer.id = 'items';
    portfolioItems.forEach(item => {
        const elem = document.createElement('div');
        const img = document.createElement('img');
        const title = document.createElement('h2');

        elem.className = 'portfolioItem'
        img.src = item.img;
        if (item.pixelArt) {
            img.classList.add('pixelArt')
        }
        title.innerText = item.name;
        title.className = 'portfolioName';
        if (item.longName) {
            title.classList.add('portfolioNameLong')
        }
        const content = document.createElement('div');
        content.className = 'portfolioContent';

        content.append(img)
        if (item.used && item.used.length > 0) {
            const temp = document.createElement('div');
            item.used.forEach((thing) => {
                const div = document.createElement("div");
                div.className = "tooltipContainer"
                const img = document.createElement("img");
                img.src = thing.src
                const tooltip = document.createElement("span");
                tooltip.className = "tooltipText"
                tooltip.innerHTML = thing.name;
                div.append(img, tooltip)
                temp.append(div)
            })
            temp.className = "usedStuff"
            content.append(temp);
        }
        elem.append(title, content)
        // elem.addEventListener('click', e => {
        //     previewIndex = portfolioItems.indexOf(item);
        //     createPreview(item)
        // })
        const a = document.createElement('a');
        a.href = item.url;
        a.append(elem);
        itemContainer.append(a);
    });
    ctn.append(itemContainer);
}