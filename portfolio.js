let doc = document.getElementsByTagName('main')[0];

// add special preview image functionality
// const previewer = document.createElement('div');
// previewer.id = "previewDiv";

// const previewerButtonLink = document.createElement('a');
// previewerButtonLink.className = "dl previewButton";
// previewerButtonLink.id = "dlButton";
// previewerButtonLink.innerText = "download";
// previewerButtonLink.rel = "noopener noreferrer";
// previewerButtonLink.target = "_blank";

// const previewSwitchers = document.createElement('div');
// previewSwitchers.className = 'imageSwitcher';
// const previewButtonPrevious = document.createElement('a');
// const previewButtonNext = document.createElement('a');
// previewButtonNext.innerHTML = "Next &raquo;";
// previewButtonPrevious.innerHTML = "&laquo; Prev";
// previewButtonPrevious.className = "previewButton";
// previewButtonPrevious.id = "previewPrevious";
// previewButtonNext.className = "previewButton";
// previewButtonNext.id = "previewNext";
// previewSwitchers.append(previewButtonPrevious, previewButtonNext);

// const previewimg = document.createElement('img');
// previewimg.className = 'previewImage'
// const previewDescription = document.createElement('p');
// const previewContent = document.createElement('div');
// previewContent.id = 'previewContent';
// previewContent.append(previewimg, previewDescription);

// previewer.append(previewerButtonLink, previewContent, previewSwitchers);
// previewer.style.display = 'none';
// doc.appendChild(previewer);

// const previewbg = document.createElement('div');
// previewbg.id = "previewOverlay";
// previewbg.style.display = 'none';
// doc.appendChild(previewbg);

const portfolioItems = [
    {
        name: 'SSoB',
        shortdescription: 'A simple Discord chatbot for osu!',
        description: 'A simple Discord chatbot for osu!\nVisit [here]() for a list of commands and other information.',
        img: './image/portfolio/ssob_ss.png',
        url: 'https://github.com/sbrstrkkdwmdr/sbrbot',
        pixelArt: false,
    },
    // { // uncomment when i've actually finished this lmfao
    //     name: 'ProjectBandana',
    //     shortdescription: 'A simple 2d game I\'ve been working on',
    //      description: 'A simple top-down 2d shooter.',
    //     img: './image/portfolio/projectbandana.png',
    //     url: 'https://www.youtube.com/playlist?list=PLbYkgKLVlgu-Pn0iwrOIO60E4CGjWUU0_',
    //     pixelArt: true,
    // },
    {
        name: 'WeatherAppTauri',
        shortdescription: 'A simple app built with Tauri to get weather data via open-meteo.',
        img: './image/portfolio/weatherapptauri.png',
        url: 'https://github.com/sbrstrkkdwmdr/weatherAppTauri',
        pixelArt: false,
    },
    {
        name: 'osu mod calculator',
        shortdescription: 'An NPM module that calculates and converts different osu! values',
        description: 'An NPM module that calculates and converts different osu! values. Currently supports AR conversions, OD conversions, accuracy calculation, mod parsing, mode parsing and more!',
        img: 'https://opengraph.githubassets.com/e61268d1fc262146e2c4b6c9cd69f3b4b93263e7b1fea6e85f6206492ae80499/sbrstrkkdwmdr/osumodcalculator',
        url: 'https://github.com/sbrstrkkdwmdr/osumodcalculator',
        pixelArt: false,
    },
    {
        name: 'COS20007',
        shortdescription: 'Portfolio for COS20007 (Object Oriented Programming)',
        img: 'https://avatars.githubusercontent.com/u/71379681?v=4',
        url: 'https://github.com/sbrstrkkdwmdr/cos20007',
        pixelArt: false,
    },
    {
        name: 'freeCodeCamp Certificates',
        shortdescription: 'Certificates I got from freeCodeCamp',
        img: 'https://avatars.githubusercontent.com/u/71379681?v=4',
        url: 'https://www.freecodecamp.org/sbrstrkkdwmdr#fcc-certifications',
        pixelArt: false,
        longName: true,
    }
]

function generatePortfolio() {
    const itemContainer = document.getElementById('items');
    portfolioItems.forEach(item => {
        const elem = document.createElement('div');
        const img = document.createElement('img');
        const title = document.createElement('h2');
        const info = document.createElement('p');

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
        info.innerText = item.shortdescription;
        const content = document.createElement('div');
        content.className = 'portfolioContent';

        content.append(img, info)
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

    // let previewIndex = 0;
    // previewbg.addEventListener('click', e => {
    //     previewer.style.display = 'none';
    //     previewbg.style.display = 'none';
    // });
    // previewButtonPrevious.addEventListener('click', e => {
    //     previewIndex--;
    //     if (previewIndex < 0) {
    //         previewIndex = portfolioItems.length - 1;
    //     }
    //     createPreview(portfolioItems[previewIndex]);
    // });
    // previewButtonNext.addEventListener('click', e => {
    //     previewIndex++;
    //     if (previewIndex >= portfolioItems.length) {
    //         previewIndex = 0;
    //     }
    //     createPreview(portfolioItems[previewIndex]);
    // });
    // previewimg.addEventListener('click', e => {
    //     window.open(curprevimg, '_blank')
    // });

    // function createPreview(item) {
    //     previewimg.src = item.img;
    //     previewerButtonLink.href = item.url;
    //     previewerButtonLink.innerText = item.name;
    //     previewDescription.innerText = item?.description ?? item?.shortdescription ?? '';

    //     previewer.style.display = 'block';
    //     previewbg.style.display = 'block';
    // }
}