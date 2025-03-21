function generate() {
    const ctn = document.getElementById('content');
    {
        // const h1 = document.createElement('h1');
        // h1.innerText = 'SaberStrike';
        const img = document.createElement('img')
        img.src = 'img/logo_text.svg'
        img.id = 'mainTitle'
        // img.classList.add('pageTitle');
        img.classList.add('mainObject');
        ctn.append(img);
        img.draggable = false;
    }
    {
        const img = document.createElement('img');
        img.src = 'img/main.png'
        img.classList.add('mainObject')
        img.draggable = false;
        ctn.append(img);
    }
    {
        const socialSection = document.createElement('section');
        socialSection.id = 'socialSection';
        socials.forEach(social => {
            const item = document.createElement('a');
            item.className = 'indexSocialItem';
            item.href = social.url;
            const img = document.createElement('img');
            img.src = './img/social/' + social.icon.replace('.png', `_${lightdark}.png`);
            item.append(img)
            socialSection.append(item);
            // item.addEventListener('mouseover', e => {
            //     img.src = './img/social/white/' + social.icon;
            // });
            // item.addEventListener('mouseout', e => {
            //     img.src = './img/social/' + social.icon.replace('.png', `_${lightdark}.png`);
            // });
            item.draggable = false;
            img.draggable = false;
        })
        ctn.append(socialSection)
    }
    {
        const pages = [
            {
                name: 'osu! skins',
                img: './skins/img/main_preview.jpg',
                url: './skins',
                keepRatio: false,
                pixel: false,
            },
            {
                name: 'Portfolio',
                img: './img/icons/page.png',
                url: './portfolio.html',
                keepRatio: true,
                pixel: true,
            },
            {
                name: 'Other',
                img: './img/icons/page.png',
                url: './other.html',
                keepRatio: true,
                pixel: true,
            },
            {
                name: 'Search',
                img: './img/icons/search_dark.png',
                url: './search.html',
                keepRatio: true,
                pixel: false,
            }
        ]
        const pagesDiv = document.createElement('div');
        pagesDiv.classList.add('itemGrid');
        pages.forEach(page => {
            const a = document.createElement('a');
            a.href = page.url;
            const item = document.createElement('section');
            item.className = 'item';
            const h2 = document.createElement('h2');
            h2.className = 'itemName';
            h2.innerText = page.name;
            const img = document.createElement('img');
            img.src = page.img;
            img.className = "itemPreviewImage"
            if (page.keepRatio) {
                img.style.width = 'auto';
            }
            if (page.pixel) {
                img.style.imageRendering = 'pixelated'
            }
            item.append(h2, img);
            a.append(item);
            pagesDiv.append(a);
        })
        const margin = document.createElement('div');
        margin.style.marginTop = '250px';
        ctn.append(margin, pagesDiv)
    }
}