function generate() {
    const ctn = document.getElementById('filterinput');
    const textin = document.createElement('input');
    textin.type = 'text';
    textin.addEventListener('input', e => {
        loadSkins(e.target.value ?? null);
    });
    textin.id = 'skinSearch';
    textin.placeholder = "skin name"
    ctn.append(textin);
    loadSkins();
}

/**
 * 
 * @param {string} filter 
 */
function loadSkins(filter) {
    const ctn = document.getElementById('skinshere');
    ctn.innerHTML = ''
    const main = document.createElement('div');
    main.classList.add('itemGrid');
    let skins = allSkins;
    if (true) {
        skins.sort((a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1;
            }
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
            }
            return 0;
        });
    }
    if (filter && filter.length > 0) {
        console.log(filter)
        filter = filter.toLowerCase()
        skins = skins.filter(x => {
            let test = (x.id + '_' + x.name).toLowerCase()
            if (test.includes(filter)) return true;
            if (filter.includes(test)) return true;
            if (filter == x.id) return true;
            if (filter == x.name) return true;
            if (x.modes.includes(filter.replace('std', 'osu'))) return true;
        });
        console.log(skins)
    }
    skins.forEach(skin => {
        const a = document.createElement('a');
        a.href = skin.url;
        const item = document.createElement('section');
        item.id = skin.id
        item.className = 'item';
        const h2 = document.createElement('h2');
        h2.className = 'itemName';
        h2.innerText = skin.name;
        const img = document.createElement('img');
        img.src = skin.image.includes('http') ? skin.image : 'img/dump/' + skin.image;
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
    ctn.append(main);
}