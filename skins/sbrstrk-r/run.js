const users = [
    {
        name: 'Bluebudgie',
        uId: '16743093',
    },
    {
        name: 'Bluegamingftw',
        uId: '12387398',
    },
    {
        name: 'Byonick',
        uId: '12979064',
    },
    {
        name: 'Duckyboi',
        image: './img/avatar404.jpg',
        uId: '#',
    },
    {
        name: 'Hanoji',
        uId: '18707960',
    },
    {
        name: 'ikugoi',
        uId: '17533279',
    },
    {
        name: 'OniisanBaka',
        uId: '13780464',
    },
    {
        name: 'radiite',
        uId: '19304434',
    },
    {
        name: 'Soragaton',
        uId: '16060186',
    },
]





function generate(name) {
    const main = document.getElementById('content');
    const user = users.find(x => x.name.toLowerCase() == name.toLowerCase());
    if (user) {
        const titleDiv = document.createElement('div');
        titleDiv.id = 'rSkinName'
        titleDiv.classList.add('pageTitle')
        const titleLink = document.createElement('a');
        titleLink.href = 'https://osu.ppy.sh/u/' + user.uId;
        const h1 = document.createElement('h1');
        h1.id = 'skinNameLink'
        h1.innerText = user.name + "'s skins";
        titleLink.append(h1);
        titleDiv.append(titleLink);
        main.append(titleDiv);

        const grid = document.createElement('section');
        grid.className = 'itemGrid';
        main.append(grid)

        sbrstrk_rSkins.forEach(skin => {
            if (skin.players.includes(user.uId)) {
                const section = document.createElement('section');
                section.className = 'item';
                const itemname = document.createElement('h2');
                itemname.className = 'itemName'
                itemname.innerText = skin.name
                const a = document.createElement('a');
                a.href = skin.url;
                a.target = '_blank';
                a.className = 'dl';
                const img = document.createElement('img');
                img.src = '../img/sbrstrk-r/' + skin.image.replace('.jpg', '_preview.jpg');
                img.width = 400;
                img.height = 225;
                a.append(img);
                const modeIcons = document.createElement('div');
                modeIcons.className = 'itemModes'
                if (skin?.modes) {
                    for (const mode of skin.modes) {
                        const img = document.createElement('img');
                        img.src = '../img/modes/' + mode + '.png'
                        img.className = 'itemMode'
                        modeIcons.append(img);
                    }
                }
                section.append(itemname, a, modeIcons);
                grid.append(section);
            }
        });
    } else {
        const h2 = document.createElement('h2');
        h2.innerText = 'Could not find user labelled: ' + name;
        main.append(h2)
    }
}

function all() {
    const main = document.getElementById('main');
    users.forEach(user => {
        const sect = document.createElement('section');
        sect.classList.add('item', 'itemProfile');
        const playerLink = document.createElement('a');
        playerLink.className = 'itemAsLink';
        playerLink.href = 'https://osu.ppy.sh/u/' + user.uId
        const title = document.createElement('h2');
        title.classList.add('itemName', 'itemLongName', 'itemAsLink')
        title.innerText = user.name;
        const pageLink = document.createElement('a');
        pageLink.className = 'dl'
        pageLink.href = './' + user.name.toLowerCase() + '.html';
        const img = document.createElement('img');
        img.src = 'https://a.ppy.sh/' + user.uId;
        const v = '256';
        img.width = v;
        img.height = v;

        playerLink.append(title);
        pageLink.append(img);
        sect.append(playerLink, pageLink);
        main.append(sect);
    })
}