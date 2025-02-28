function generate() {
    const ctn = document.getElementById('content');

    const main = document.createElement('div');
    main.classList.add('itemGrid');
    otherSkins.forEach(skin => {
        const a = document.createElement('a');
        a.href = skin.url;
        const item = document.createElement('section');
        item.className = 'item';
        const h2 = document.createElement('h2');
        h2.className = 'itemName';
        h2.innerText = skin.name;
        const img = document.createElement('img');
        img.src = 'img/other/' + skin.image.replace('.jpg', '_preview.jpg');
        img.className = "itemPreviewImage"
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