const skins = [
    {
        name: 'sbr『-hANOJI』',
        url: 'https://drive.google.com/file/d/171NdVkA-tmm43n8iqsRJeNQ0QCffj6ab/view?usp=sharing',
        img: 'sbr-hanoji.jpg',
        modes: ['osu', 'taiko', 'fruits', 'mania'],
    },
    {
        name: 'SaberStrike『Soragaton』',
        url: 'https://drive.google.com/file/d/1-pRLecUTaoUNXpHj1TLSMBayvWC09CT2/view?usp=sharing',
        img: 'sbr-sora.jpg',
        modes: ['osu', 'taiko', 'fruits', 'mania'],
    },
    {
        name: 'SaberStrike『0』 _-Levi-_ edit',
        url: 'https://drive.google.com/file/d/1Jomy1k00Q6VLqOQgq_ifgDy5MV_nMZje/view?usp=sharing',
        img: 'sbr-levi.jpg',
        modes: ['osu'],
    },
    {
        name: 'Saber\'s AMOGUS',
        url: 'https://www.reddit.com/r/OsuSkins/comments/m9vcti/amogus_skin/',
        img: 'amogus.jpg',
        modes: ['osu'],
    },
    {
        name: 'Kanojo Mizuhara',
        url: 'https://mega.nz/file/PVFgBbYB#LVnrsI1leThv8f35PDM7kt3yHgcwhD9WB2Wkq696aEQ',
        img: 'kanojo.jpg',
        modes: ['osu'],
    },
    {
        name: 'Koifish',
        url: 'https://drive.google.com/drive/u/1/folders/18t7KxG2scQgm43DW930cSmaUXbYEpCdK',
        img: 'koi.jpg',
        modes: ['osu'],
    },
    {
        name: 'Cark',
        url: 'https://drive.google.com/drive/u/1/folders/1OexvvV4Zshw3P3R1N0bS3sQD_WEhlQKv',
        img: 'cark.jpg',
        modes: ['osu'],
    },
]

function generate() {
    const ctn = document.getElementById('content');

    const main = document.createElement('div');
    main.classList.add('itemGrid');
    skins.forEach(skin => {
        const a = document.createElement('a');
        a.href = skin.url;
        const item = document.createElement('section');
        item.className = 'item';
        const h2 = document.createElement('h2');
        h2.className = 'itemName';
        h2.innerText = skin.name;
        const img = document.createElement('img');
        img.src = 'img/other/' + skin.img.replace('.jpg', '_preview.jpg');
        img.width = '400';
        img.height = '225';
        const modeIcons = document.createElement('div');
        modeIcons.className = 'itemModes'
        for (const mode of skin.modes) {
            const img = document.createElement('img');
            img.src = './img/modes/' + mode + '.png'
            img.className = 'itemMode'
            modeIcons.append(img);
        }

        item.append(h2, img, modeIcons);
        a.append(item);
        main.append(a);
    })
    ctn.append(main)

}