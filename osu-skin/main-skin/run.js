function generatePage(id) {
    let doc = document.getElementsByTagName('main')[0];
    let skin = skins.find(skin => skin.id === id);
    let header = document.getElementsByTagName('header');
    header.item(0).innerHTML = `
<h1> ${skin.name}</h1>
<p >
${skin.date_start} --- ${skin.date_end}
</p>
`
    {
        const p1 = document.createElement("p");
        p1.style.fontSize = "50px";
        const a1 = document.createElement("a");
        a1.rel = "noopener noreferrer";
        a1.className = "dl";
        a1.href = skin.url;
        a1.innerText = "download link";
        p1.appendChild(a1);
        doc.appendChild(p1);
    }

    // add special preview image functionality
    const previewer = document.createElement('div');
    previewer.id = "previewDiv";

    const previewerButtonLink = document.createElement('a');
    previewerButtonLink.className = "dl previewButton";
    previewerButtonLink.innerText = "download";
    previewerButtonLink.rel = "noopener noreferrer";
    previewerButtonLink.target = "_blank";

    const previewSwitchers = document.createElement('div');
    previewSwitchers.className = 'imageSwitcher';
    const previewButtonPrevious = document.createElement('a');
    const previewButtonNext = document.createElement('a');
    previewButtonNext.href = "#";
    previewButtonPrevious.href = "#";
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
    doc.appendChild(previewer);

    const previewbg = document.createElement('div');
    previewbg.id = "previewOverlay";
    previewbg.style.display = 'none';
    doc.appendChild(previewbg);

    // create skin grid
    const skingrid = document.createElement('div');
    skingrid.className = "grid";

    // create youtube preview
    {
        const itemYoutubePreview = document.createElement('div');
        itemYoutubePreview.className = "item";
        const p1 = document.createElement("p");
        p1.style.color = "white";
        p1.id = "youtubePreview";
        p1.className = "itemName";
        p1.innerText = "Youtube Preview";
        const iframe1 = document.createElement('iframe');
        iframe1.width = "720";
        iframe1.height = "405";
        iframe1.src = skin.video_url;
        iframe1.title = "Skin video preview";
        iframe1.frameBorder = "0";
        iframe1.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe1.allowFullscreen = true;
        itemYoutubePreview.append(p1, iframe1);
        skingrid.append(itemYoutubePreview);
    }

    // create image list
    let previewIndex = 0;
    for (let i = 0; i < skin.images.length; i++) {
        const image = skin.images[i];
        const itemImage = document.createElement('div');
        itemImage.className = "item";
        const p1 = document.createElement('p');
        p1.style.color = "white";
        p1.id = image.name;
        p1.className = "itemName";
        p1.innerText = image.name;
        const img1 = document.createElement('img');
        img1.src = `../image/${image.image_url}`;
        img1.alt = "Skin screenshot - " + image.name;
        img1.width = "720";
        img1.height = "405";
        itemImage.append(p1, img1);

        img1.addEventListener('click', e => {
            previewIndex = skin.images.indexOf(image);
            createPreview(image);
        });
        skingrid.appendChild(itemImage);
    };

    let curprevimg = '';

    doc.appendChild(skingrid);
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
        curprevimg = `../image/${image.image_url}`
        previewimg.src = curprevimg;

        if (image.isGameplay) {
            previewerButtonLink.href = image.url;
        } else {
            previewerButtonLink.href = skin.url;
        }
        previewer.style.display = 'block';
        previewbg.style.display = 'block';
    }

}