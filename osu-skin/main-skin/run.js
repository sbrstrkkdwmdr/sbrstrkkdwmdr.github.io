function generatePage(id) {
    let doc = document.getElementById('main');
    let skin = skins.find(skin => skin.id === id);
    let header = document.getElementsByTagName('header');
    header.item(0).innerHTML = `
<h1> ${skin.name}</h1>
<p >
${skin.date_start} --- ${skin.date_end}
</p>
`
    let text = '';
    text += `
    <center>
    <p style="font-size:50px">
        <a rel="noopener noreferrer" class="dl" href="${skin.url}">
            download link
        </a></p>
        <div class=grid>
        <div style="display:inline-block" class="item">
        <p style="color:white" id="youtubePreview" class="itemName">YouTube Preview</p>
            <iframe width="720" height="405" src="${skin.video_url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        
`
    skin.images.forEach(image => {
        image.isGameplay ?
            text += `
<div style="display:inline-block" class="item">
<center>
    <p style="color:white" id="${image.name}" class="itemName">${image.name}</p>
</center>
<a rel="noopener noreferrer" class="a" href="${image.url}"
    target="_blank">
    <img src="../image/${image.image_url}" alt="image" width="720" height="405">
</a>
</div>
        ` :
            text += `
<div style="display:inline-block" class="item">
<center>
<p style="color:white" id="${image.name}" class="itemName">${image.name}</p>
</center>
<img src="../image/${image.image_url}" alt="image" width="720" height="405">
</div>
        `
    });
    text += '</div></center>'
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