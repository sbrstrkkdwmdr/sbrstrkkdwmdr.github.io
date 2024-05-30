function generatePage(id) {
    let doc = document.getElementById('main');
    let skin = skins.find(skin => skin.id === id);
    let text = '';
    text += `
    <h2 style="font-size:80px; margin-bottom:4px; color:rgb(200, 200, 200)">${skin.name}</h2>
    <p style="color:rgb(200,200,200)">
    ${skin.date_start} --- ${skin.date_end}
    </p>
    <p style="font-size:50px">
        <a rel="noopener noreferrer" class="a" href="${skin.url}">
            download link
        </a></p>
        <div style="display:inline-block">
            <iframe width="880" height="495" src="${skin.video_url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
`
    skin.images.forEach(image => {
        image.isGameplay ?
            text += `
<div style="display:inline-block">
<center>
    <p style="color:white" id="${image.name}">${image.name}</p>
</center>
<a rel="noopener noreferrer" class="a" href="${image.url}"
    target="_blank">
    <img src="../image/${image.image_url}" alt="image" width="880" height="495">
</a>
</div>
        ` :
            text += `
<div style="display:inline-block">
<center>
<p style="color:white" id="${image.name}">${image.name}</p>
</center>
<img src="../image/${image.image_url}" alt="image" width="880" height="495">
</div>
        `
    });
    doc.innerHTML = text;

    // let sourceDoc = document.getElementById("sources");
    // if (skin?.sources) {
    //     let table = document.createElement("div");
    //     let tableTxt = `<table class="table">`;
    //     let arr = skin?.sources.sort((a, b) => b.name - a.name);
    //     for (const thingy of arr) {
    //         tableTxt += `<tr>
    //         <td>${thingy.name}</td>`
    //         tableTxt += `<td>${thingy.links.map(x =>
    //             x.url && x.url.length > 0 ?
    //                 `<a class="a" href="${x.url}">${x.name}</a>` :
    //                 `${x.name}`
    //         )}</td></tr>`
    //     }
    //     tableTxt += `</table>`
    //     table.innerHTML = tableTxt
    //     sourceDoc.appendChild(table);
    // }
}