function generatePage() {
    let grid = document.getElementsByClassName("itemGrid")[0];
    let sk = skins.slice().reverse();
    console.log('ha')
    sk.forEach(skin => {
        console.log(skin.id)
        if (skin.ignore) {

        } else {
            const section = document.createElement('section');
            section.className = 'item';
            const name = document.createElement('h2');
            name.className = 'itemName';
            name.innerText = skin.name
            const desc = document.createElement('p');
            desc.className = 'itemDescription'
            desc.innerText = skin.date_start + ' --- ' + skin.date_end;
            if (skin.desc) {
                desc.innerText += '<br>' + skin.desc;
            }
            const dl = document.createElement('a');
            dl.className = 'dl'
            dl.href = skin.url;
            dl.target = '_blank';
            dl.innerText = 'download';
            const div = document.createElement('div');
            div.style.display = 'inline-block';
            const skPage = document.createElement('a');
            skPage.href =
                !isNaN(skin.id) ?
                    'main-skins/' + skin.id + '.html' :
                    skin.url;
            skPage.target = '_self';
            const previewImg = document.createElement('img');
            previewImg.src = './image/' + skin.images[0].image_url;
            previewImg.alt = skin.name + ': ' + skin.images[0].name;
            previewImg.width = 720;
            previewImg.height = 405;

            skPage.append(previewImg)
            div.append(skPage)

            section.append(name, desc, dl, div);
            grid.append(section);
        }
    })
}

generatePage();