stuff = {
    YouTube: {
        link: "https://www.youtube.com/@sbrstrkkdw",
        img: {
            base: "image/yt.png",
            hover: "image/yt-h.png",
        },
    },
    Discord: {
        link: "https://discord.gg/3P7864BcRT",
        img: {
            base: "image/discord.png",
            hover: "image/discord-h.png",
        },
    },
    Github: {
        link: "https://github.com/sbrstrkkdwmdr/",
        img: {
            base: "image/git.png",
            hover: "image/git-h.png",
        },
    },
    Email: {
        link: "mailto:sbrstrkkdwmdr@gmail.com",
        img: {
            base: "image/mail.png",
            hover: "image/mail-h.png",
        },
    },
    'osu!': {
        link: "https://osu.ppy.sh/users/15222484",
        img: {
            base: "image/osu.png",
            hover: "image/osu-h.png",
        },
    },
    'my osu! skins': {
        link: "skins/",
        img: {
            base: "image/osusk.png",
            hover: "image/osusk-h.png",
        },
    },
    'specs n stuff': {
        link: "stuff.html",
        img: {
            base: "image/stuff.png",
            hover: "image/stuff-h.png",
        },
    },
}

function setupHomeLinks() {
    let thing = document.getElementById("home-links");
    let text = "";

    for (let key in stuff) {
        /**
            template
            <div style="display:inline-block">
                <p
                    style="margin-right:20px; margin-left:20px; font-size:20px; margin-bottom:4px; color:rgb(200, 200, 200)">
                    INSERT NAME</p>
                <p><a href="INSERT URL" target="_blank">
                <div class="mailpng">
                    <img src="BASE IMAGE" class=img-nh alt="png bottom" />
                    <img src="HOVER IMAGE" class=img-h alt="png top" />
                </div>
                </a></p>
            </div>
        */
        text += `
        <div class="link">
            <p>
                ${key}</p>
            <p><a href="${stuff[key].link}" target="_self">
            <div class="linkpng">
                <img src="${stuff[key].img.base}" class=img-nh alt="png bottom" />
                <img src="${stuff[key].img.hover}" class=img-h alt="png top" />
            </div>
            </a></p>
        </div>
        `;
    }
    console.log(thing);
    thing.innerHTML = text;
}

function createInfo() {
    const info = [
        'EN/JP',
        'Currently studying bachelors of computer science',
        'osu! player & anime enthusiast',
    ]

    const div = document.getElementById('abt');
    div.innerHTML =
        '<ul>' +
        info.map(x => `<li>${x}</li>`).join('') +
        '</ul>';
}

function setupPage() {
    setupHomeLinks();
    createInfo();
}

//above is for index.html