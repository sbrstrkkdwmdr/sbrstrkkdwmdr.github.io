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
        link: "osu-skin/HOME.html",
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
        <div style="display:inline-block">
            <p
                style="margin-right:20px; margin-left:20px; font-size:20px; margin-bottom:4px; color:rgb(200, 200, 200)">
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
        'I don\'t know what to put here so here\'s the romaji lyrics to fake me',
        `
        <br>Uchuu no hate no koto shitteru yo
        <br>Soko wa GARASU bari no ikidomari
        <br>GARASU no mukou gawa soko ni mieru keshiki wa
        <br>Me wo tojiteru toki ni mieru mono to onaji
        <br>
        <br>Hataki tsudzukeru shin no RIZUMU ga midare hajimeta nara
        <br>Yowaki na koe wa nigeba wo ushinai mata kono basho ni kaeru dake
        <br>Iki to shi ikeru subete no mono ga taida na zatsunen ni
        <br>Umore yuku nara jibun no sonzai mo keseru kana?
        <br>
        <br>Boku-tachi no BAIO RIZUMU ga moshi tokubetsu na mono nara
        <br>Kioku no PETEN mo uragiri no yume mo ri ni kanau you ni tsunagaru
        <br>Nee, moshimo tokidoki miseru kimi no ano egao sae mo
        <br>Haribote no you ni kuzurete iku nara mutsuu ni Time goes on
        <br>Everything sono me Logical dare no me?
        <br>Hajimatta PUREI
        <br>
        <br>"ima" ga doko ni aru ka shitteru yo
        <br>Honto wa "ima" nante sonzai sezu
        <br>"ima" to yonda toki ni sore wa "kako" ni naru kara
        <br>Donna bamen sae mo zero ni hitoshii mono
        <br>
        <br>Ikuenimo naru kaisou sekai kinkou wo yabutte
        <br>Umiotosareta hizumi no shoumei tsubasa sae mo motanu akuma
        <br>Hoshi no narabi ga unmei naraba somuki you mo nakute
        <br>Genjitsu teki na ishiki to iu zankoku na PARUSU
        <br>Boku-tachi ni furisosogu no wa ame no you ni yasashii no ni
        <br>Nukumori no giwaku azamuki no kotoba kakushin teki na kousou
        <br>Nee, "kodoku" no imi no naka ni sabishisa wo mitsukerarezu
        <br>Tojikometa shikou amami na yokubou sube naku Time goes on
        <br>Everything sono me Logical dare no me?
        <br>Hajimatta GEEMU
        <br>
        <br>Boku-tachi no BAIO RIZUMU ga moshi tokubetsu na mono nara
        <br>Kioku no PETEN mo uragiri no yume mo ri ni kanau you ni tsunagaru
        <br>Nee, moshimo tokidoki miseru kimi no ano egao sae mo
        <br>Haribote no you ni kuzurete iku nara mutsuu ni Time goes on
        <br>Everything sono me Logical dare no me?
        <br>Hajimatta PUREI`
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