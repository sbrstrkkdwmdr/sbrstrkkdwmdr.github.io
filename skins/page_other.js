const skins = [
    {
        name: 'sbr『-hANOJI』',
        url: 'https://drive.google.com/file/d/171NdVkA-tmm43n8iqsRJeNQ0QCffj6ab/view?usp=sharing',
        img: 'sbr-hanoji.jpg'
    },
    {
        name: 'SaberStrike『Soragaton』',
        url: 'https://drive.google.com/file/d/1-pRLecUTaoUNXpHj1TLSMBayvWC09CT2/view?usp=sharing',
        img: 'sbr-sora.jpg'
    },
    {
        name: 'SaberStrike『0』 _-Levi-_ edit',
        url: 'https://drive.google.com/file/d/1Jomy1k00Q6VLqOQgq_ifgDy5MV_nMZje/view?usp=sharing',
        img: 'sbr-levi.jpg'
    },
    {
        name: 'Saber\'s AMOGUS',
        url: 'https://www.reddit.com/r/OsuSkins/comments/m9vcti/amogus_skin/',
        img: 'amogus.jpg'
    },
    {
        name: 'Kanojo Mizuhara',
        url: 'https://mega.nz/file/PVFgBbYB#LVnrsI1leThv8f35PDM7kt3yHgcwhD9WB2Wkq696aEQ',
        img: 'kanojo.jpg'
    },
    {
        name: 'Koifish',
        url: 'https://drive.google.com/drive/u/1/folders/18t7KxG2scQgm43DW930cSmaUXbYEpCdK',
        img: 'koi.jpg'
    },
    {
        name: 'Cark',
        url: 'https://drive.google.com/drive/u/1/folders/1OexvvV4Zshw3P3R1N0bS3sQD_WEhlQKv',
        img: 'cark.jpg'
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
        img.src = 'img/extra/' + skin.img.replace('.jpg', '_preview.jpg');
        img.width = '400';
        img.height = '225';

        item.append(h2, img);
        a.append(item);
        main.append(a);
    })
    ctn.append(main)

}