const whFactor = 25
const width = 16 * whFactor;
const height = 9 * whFactor;

function showSkin(id) {

    let doc = document.getElementById('skin');
    let skin = mainSkins.find(skin => skin.id === id);
    /*     let header = document.getElementsByTagName('header');
        header.item(0).innerHTML = `
    <h1> ${skin.name}</h1>
    <p >
    ${skin.date_start} --- ${skin.date_end}
    </p>
    ` */
    // main page set up
    {
        const h1 = document.createElement('h1');
        h1.innerText = skin.name;
        h1.className = 'pageTitle'
        const modeIcons = document.createElement('div');
        modeIcons.className = 'itemModes'
        for (const mode of skin.modes) {
            const img = document.createElement('img');
            img.src = '../img/modes/' + mode + '.png'
            img.className = 'itemMode'
            modeIcons.append(img);
        }
        const subtxt = document.createElement('p');
        subtxt.innerText = skin.date_start + ' --- ' + skin.date_end;
        if (skin.description) {
            subtxt.innerText += '\n' + skin.description;
        }
        subtxt.className = 'pageTitleSubText'
        const titleDiv = document.createElement('div');
        titleDiv.id = 'skinName';
        titleDiv.className = 'pageTitle'
        titleDiv.append(h1, modeIcons, subtxt);
        doc.append(titleDiv);

        const p1 = document.createElement("p");
        p1.id = 'mainDlContainer'
        const a1 = document.createElement("a");
        a1.rel = "noopener noreferrer";
        a1.className = "dl mainDownload";
        a1.href = skin.url;
        a1.innerText = "download link";
        p1.appendChild(a1);
        doc.appendChild(p1);
    }

    // create skin grid
    const skingrid = document.createElement('div');
    skingrid.className = "itemGrid";

    // create youtube preview
    {
        const itemYoutubePreview = document.createElement('section');
        itemYoutubePreview.className = "item";
        const p1 = document.createElement("p");
        p1.id = "youtubePreview";
        p1.className = "itemName";
        p1.innerText = "Youtube Preview";
        const iframe1 = document.createElement('iframe');
        iframe1.width = width;
        iframe1.height = height;
        iframe1.src = skin.video_url;
        iframe1.title = "Skin video preview";
        // iframe1.frameBorder = "0";
        iframe1.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe1.allowFullscreen = true;
        itemYoutubePreview.append(p1, iframe1);
        skingrid.append(itemYoutubePreview);
    }

    // create image list
    let previewIndex = 0;
    for (let i = 0; i < skin.images.length; i++) {
        const image = skin.images[i];
        const itemImage = document.createElement('section');
        itemImage.className = "item";
        const p1 = document.createElement('p');
        p1.id = image.name;
        p1.className = "itemName";
        p1.innerText = image.name;
        const img1 = document.createElement('img');
        img1.src = `../img/${image.image_url.replace('.jpg', '_preview.jpg')}`;
        img1.alt = "Skin screenshot - " + image.name;
        img1.width = width;
        img1.height = height;
        itemImage.append(p1, img1);

        img1.addEventListener('click', e => {
            previewIndex = skin.images.indexOf(image);
            createPreview(image);
        });
        skingrid.appendChild(itemImage);
    };
    doc.appendChild(skingrid);

    let curprevimg = '';

    // add special preview image functionality
    const previewer = document.createElement('div');
    previewer.id = "previewDiv";

    const previewerButtonLink = document.createElement('a');
    previewerButtonLink.className = "dl previewButton";
    previewerButtonLink.id = "dlButton";
    previewerButtonLink.innerText = "download";
    previewerButtonLink.rel = "noopener noreferrer";
    previewerButtonLink.target = "_blank";

    const previewSwitchers = document.createElement('div');
    previewSwitchers.className = 'imageSwitcher';
    const previewButtonPrevious = document.createElement('a');
    const previewButtonNext = document.createElement('a');
    previewButtonNext.innerHTML = "Next &raquo;";
    previewButtonPrevious.innerHTML = "&laquo; Prev";
    previewButtonPrevious.className = "previewButton";
    previewButtonPrevious.id = "previewPrevious";
    previewButtonNext.className = "previewButton";
    previewButtonNext.id = "previewNext";
    previewSwitchers.append(previewButtonPrevious, previewButtonNext);

    const previewimg = document.createElement('img');
    previewimg.width = 960;
    previewimg.height = 540;
    previewer.append(previewerButtonLink, previewimg, previewSwitchers);
    previewer.style.display = 'none';

    const previewbg = document.createElement('div');
    previewbg.id = "previewOverlay";
    previewbg.style.display = 'none';

    const mainBody = document.getElementsByTagName('body')[0]
    mainBody.append(previewer, previewbg);

    previewbg.addEventListener('click', e => {
        previewer.style.display = 'none';
        previewbg.style.display = 'none';
    });
    previewButtonPrevious.addEventListener('click', e => {
        previewIndex--;
        if (previewIndex < 0) {
            previewIndex = skin.images.length - 1;
        }
        createPreview(skin.images[previewIndex]);
    });
    previewButtonNext.addEventListener('click', e => {
        previewIndex++;
        if (previewIndex >= skin.images.length) {
            previewIndex = 0;
        }
        createPreview(skin.images[previewIndex]);
    });
    previewimg.addEventListener('click', e => {
        window.open(curprevimg, '_blank')
    });
    function createPreview(image) {
        curprevimg = `../img/${image.image_url}`
        previewimg.src = curprevimg;

        if (image.isGameplayVariant) {
            previewerButtonLink.href = image.url;
            previewerButtonLink.innerText = "download \"" + image.name + '"';
        } else {
            previewerButtonLink.href = image.url ?? skin.url;
            previewerButtonLink.innerText = "download skin";
        }
        previewer.style.display = 'block';
        previewbg.style.display = 'block';
    }

    if (skin.sources) {
        const div = document.getElementById('sources');
        const header = document.createElement('h2');
        header.innerText = 'Sources';
        div.append(header);
        skin.sources.forEach(category => {
            const sourceCat = document.createElement('div');
            const catName = document.createElement('h3');
            catName.innerText = category.name;
            const table = document.createElement('table');
            table.className = 'sourcetable';
            category.items.forEach(item => {
                const row = document.createElement('tr');
                const name = document.createElement('td');
                name.innerHTML = item.name;
                const desc = document.createElement('td');
                desc.innerHTML = item.desc.replaceAll('\n', '<br>');
                row.append(name, desc);
                table.append(row);
            })
            sourceCat.append(catName, table);
            div.append(sourceCat);
        });
    }
}

function genList() {
    let grid = document.getElementsByClassName("itemGrid")[0];
    let sk = mainSkins.slice().reverse();
    sk.forEach(skin => {
        if (skin.ignore) {

        } else {
            const section = document.createElement('section');
            section.className = 'item';
            const name = document.createElement('h2');
            name.className = 'itemName';
            name.innerText = skin.name
            const modeIcons = document.createElement('div');
            modeIcons.className = 'itemModes'
            for (const mode of skin.modes) {
                const img = document.createElement('img');
                img.src = '../img/modes/' + mode + '.png'
                img.className = 'itemMode'
                modeIcons.append(img);
            }
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
                    './' + skin.id + '.html' :
                    skin.url;
            skPage.target = '_self';
            const previewImg = document.createElement('img');
            previewImg.src = '../img/' + skin.images[0].image_url.replace('.jpg', '_preview.jpg');
            previewImg.alt = skin.name + ': ' + skin.images[0].name;
            previewImg.width = width;
            previewImg.height = height;

            skPage.append(previewImg)
            div.append(skPage)

            section.append(name, desc, dl, div, modeIcons);
            grid.append(section);
        }
    })
}

function image(text) {
    return {
        fullsize: text.replace('.jpg', '_full.jpg'),
        preview: text.replace('.jpg', '_preview.jpg')
    }
}