let x = {
    category: 'xyz',
    sources: [
        'xyz'
    ],
};
const items = [
    {
        category: 'Website colours',
        sources: [
            'Inspired by [Community Material Theme Ocean High Contrast](https://github.com/t3dotgg/vsc-material-but-i-wont-sue-you)',
        ],
    },
    {
        category: 'Logo',
        sources: [
            'English text - [Octapost NBP](https://online-fonts.com/fonts/octapost-nbp) by Nate Halley [CC BY SA](https://creativecommons.org/licenses/by-sa/4.0/deed.en)',
            'Japanese text - [KeiFont](https://www.freejapanesefont.com/kei-font-download/) | [JP](https://font.sumomo.ne.jp/font_1.html)',
            'Image - drawn by a friend',
        ],
    },
    {
        category: 'Top nav icons',
        sources: [
            '[Hamburger icons created by Lizel Arina - Flaticon](https://www.flaticon.com/free-icon/hamburger_7710488?term=hamburger&page=1&position=2&origin=search&related_id=7710488)',
            '[github logo](https://github.com/logos)',
            '[youtube logo](https://www.youtube.com/intl/ALL_au/howyoutubeworks/resources/brand-resources/#logos-icons-and-colors)',
            '[osu! logo](https://osu.ppy.sh/wiki/en/Brand_identity_guidelines)',
            '[Email icon by Freepik - Flaticon](https://www.flaticon.com/free-icon/email_542638?term=mail&page=1&position=4&origin=search&related_id=542638)',
        ],
    },
]
x = {
    category: 'xyz',
    data: [
        {
            name1: 'xyz',
            name2: 'xyz',
        },
        {
            name1: 'xyz',
            name2: 'xyz',
        },
    ]
}
const itemsTables = [
    {
        category: 'Portfolio language/framework icons',
        data: [
            {
                icon: 'Rust',
                source: '[Github](https://github.com/rust-lang/rust-artwork/blob/master/logo/rust-logo-blk.svg)',
                license: '[CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/)',
                changes: 'made stroke white',
            },
            {
                icon: 'Tauri',
                source: '[Github](https://github.com/tauri-apps/tauri-docs/blob/b1cdfa9d7c6d0b17dae60a90266ddced40a7b384/static/img/TAURI_LOGOPACK.zip)',
                license: '[MIT](https://github.com/tauri-apps/tauri-docs/blob/v2/LICENSE)',
                changes: 'width + height property removed',
            },
            {
                icon: 'TypeScript',
                source: '[Typescript](https://www.typescriptlang.org/branding/)',
                license: '[Apache 2.0](https://github.com/microsoft/TypeScript/blob/main/LICENSE.txt)',
                changes: '---',
            },
            {
                icon: 'Godot',
                source: '[Godot](https://godotengine.org/press/)',
                license: '[CC-BY-4.0](https://github.com/godotengine/godot-design/blob/master/LICENSE)',
                changes: '---',
            },
            {
                icon: 'NodeJS',
                source: '[NodeJS](https://nodejs.org/en/about/branding)',
                license: '[CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/)',
                changes: '---',
            },
            {
                icon: 'C#',
                source: '[Wikipedia](https://en.wikipedia.org/wiki/C_Sharp_%28programming_language%29#/media/File:C_Sharp_Logo_2023.svg)',
                license: '[MIT](https://github.com/dotnet/vscode-csharp/blob/main/LICENSE.txt)',
                changes: '---',
            },
        ]
    },
    {
        category: 'Code',
        data: [
            {
                source: '[Stack Overflow](https://stackoverflow.com/a/70524047)',
                license: '[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)',
                used: './page_credits.js (function mdToUrl)\n./projects/ssob_docs/index.js (function urlToHTML)',
            },
            {
                source: '[Stack Overflow](https://stackoverflow.com/a/11381730)',
                license: '[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)',
                used: './projects/ssob_docs/index.js (function isMobile)',
            },
            {
                source: '',
                license: '',
                used: '',
            },
        ]
    }
]

function generate() {
    const ctn = document.getElementById('content');
    const main = document.createElement('section');
    main.id = 'pagectn'

    items.forEach(item => {
        const div = document.createElement('div');
        const h3 = document.createElement('h3');
        h3.innerText = item.category
        const ul = document.createElement('ul');

        item.sources.forEach(source => {
            const li = document.createElement('li');
            li.innerHTML = mdToUrl(source)
            ul.append(li)
        });
        div.append(h3, ul)
        main.append(div);
    });
    itemsTables.forEach(item => {
        const div = document.createElement('div');
        const h3 = document.createElement('h3');
        h3.innerText = item.category
        const table = document.createElement('table');

        table.insertRow()
        let ti = 0;
        for (const name in item.data[0]) {
            table.rows[0].insertCell();
            table.rows[0].cells[ti].innerText = name.toUpperCase()
            ti++
        }
        let tj = 1;
        item.data.forEach(data => {
            table.insertRow()
            ti = 0
            for (const name in data) {
                table.rows[tj].insertCell();
                table.rows[tj].cells[ti].innerHTML = mdToUrl(data[name])
                ti++
            }
            tj++
        })

        div.append(h3, table)
        main.append(div);
    })
    ctn.append(main);
}

// https://stackoverflow.com/a/70524047
// CC BY 4.0 SA

function mdToUrl(str) {
    // if (str.includes('[') && str.includes('](') && str.includes(')')) {
    //     const int = str.split('[')[0]
    //     const fin = str.split(')')[1]
    //     const namae = str.split('[')[1].split(']')[0]
    //     const url = str.split('(')[1].split(')')[0]
    //     return `${int} <a class="highlightLink" href=${url}>${namae}</a> ${fin}`
    // }
    return str.replace(/^### (.*$)/gim, '<h3>$1</h3>') // h3 tag
        .replace(/^## (.*$)/gim, '<h2>$1</h2>') // h2 tag
        .replace(/^# (.*$)/gim, '<h1>$1</h1>') // h1 tag
        .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>') // bold text
        .replace(/\*(.*)\*/gim, '<i>$1</i>') // italic text
        .replace(/\r\n|\r|\n/gim, '<br>') // linebreaks
        .replace(/\[([^\[]+)\](\(([^)]*))\)/gim, '<a class="highlightLink" href="$3">$1</a>'); // anchor tags
    // return str;
}