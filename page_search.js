function generate() {
    const main = document.querySelector("main");
    const title = document.createElement("h1");
    title.innerText = "Search"
    title.className = "pageTitle"
    const subtxt = document.createElement("p");
    subtxt.innerText = "Search for all pages on this site"
    subtxt.className = "pageTitleSubText"

    const inwrap = document.createElement('div');
    inwrap.style.textAlign = "center";

    const textin = document.createElement('input');
    textin.type = 'text';
    textin.addEventListener('input', e => {
        loadResults(e.target.value ?? null);
        console.log(e.target.value)
    });
    textin.className = 'genericSearch';
    textin.placeholder = "page"

    inwrap.append(textin)

    const results = document.createElement("ul");
    results.id = "searchRes";

    main.append(title, subtxt, inwrap, results)

    loadResults();
}

function loadResults(text) {
    text = text ? text.toLowerCase() : undefined;
    const results = text ?
        defpages.filter((x) => {
            let testX = (x.name + '_' + x.url.replace('.html', '')).toLowerCase();
            return testX.includes(text) || text.includes(testX);
        }) :
        defpages;

    const resDiv = document.getElementById("searchRes");
    resDiv.innerHTML = "";
    results.forEach(x => {
        const item = document.createElement("li");
        item.className = "searchItem"
        const a = document.createElement("a");
        a.href = x.url;
        // a.innerText = x.name;
        const container = document.createElement('div');
        const name = document.createElement("h3");
        name.innerText = x.name;
        const location = document.createElement('p');
        location.innerText = x.url/* .replace(".html", "") */.replaceAll("/", " / ");
        location.className = "searchItemLocation"
        container.append(name, location);
        if (x?.description) {
            const desc = document.createElement('p');
            desc.innerText = x.description
            desc.className = "searchItemDescription"
            container.append(desc);
        }
        const img = document.createElement('img');
        img.src = x.img ?? './img/icons/unknown_dark.png';
        img.className = 'searchImage'
        a.append(img, container);
        item.append(a);
        resDiv.append(item);
    });
}