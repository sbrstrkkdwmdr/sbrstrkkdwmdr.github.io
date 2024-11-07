const portfolioItems = [
    {
        name: 'SSoB',
        description: 'A simple Discord chatbot for osu! ',
        img: './image/portfolio/ssob_ss.png',
        url: 'https://github.com/sbrstrkkdwmdr/sbrbot',
        pixelArt: false,
    },
    // { // uncomment when i've actually finished this lmfao
    //     name: 'ProjectBandana',
    //     description: 'A simple 2d game I\'ve been working on',
    //     img: './image/portfolio/projectbandana.png',
    //     url: 'https://www.youtube.com/playlist?list=PLbYkgKLVlgu-Pn0iwrOIO60E4CGjWUU0_',
    //     pixelArt: true,
    // },
    {
        name: 'WeatherAppTauri',
        description: 'A simple app built with Tauri to get weather data via open-meteo.',
        img: './image/portfolio/weatherapptauri.png',
        url: 'https://github.com/sbrstrkkdwmdr/weatherAppTauri',
        pixelArt: false,
    },
    {
        name: 'osu mod calculator',
        description: 'An NPM module that calculates and converts different values in osu!',
        img: 'https://opengraph.githubassets.com/e61268d1fc262146e2c4b6c9cd69f3b4b93263e7b1fea6e85f6206492ae80499/sbrstrkkdwmdr/osumodcalculator',
        url: 'https://github.com/sbrstrkkdwmdr/osumodcalculator',
        pixelArt: false,
    },
    {
        name: 'freeCodeCamp Certificates',
        description: 'Certificates I got from freeCodeCamp',
        img: 'https://avatars.githubusercontent.com/u/71379681?v=4',
        url: 'https://www.freecodecamp.org/sbrstrkkdwmdr#fcc-certifications',
        pixelArt: false,
        longName: true,
    }
    // {
    //     name: 'COS20007',
    //     description: 'Portfolio for COS20007 (Object Oriented Programming)',
    //     img: './image/portfolio/xxx.png',
    //     url: 'https://github.com/sbrstrkkdwmdr/cos20007',
    //     pixelArt: false,
    // },
]

function generatePortfolio() {
    const itemContainer = document.getElementById('items');
    portfolioItems.forEach(item => {
        const elem = document.createElement('div');
        const img = document.createElement('img');
        const title = document.createElement('h2');
        const info = document.createElement('p');
        const url = document.createElement('a');

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
        info.innerText = item.description;
        url.href = item.url;
        url.target = '_blank';
        const content = document.createElement('div');
        content.className = 'portfolioContent';

        content.append(img, info)
        elem.append(title, content)
        url.append(elem)
        itemContainer.append(url);
    });
}