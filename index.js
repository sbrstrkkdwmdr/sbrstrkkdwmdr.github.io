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
        `[いとう かなこ 「fake me」 歌詞]
<br>
<br>そこはガラス貼りの　行き止まり
<br>ガラスの向こう側　そこに見える景色は
<br>目を閉じてる時に　見えるものと同じ
<br>
<br>叩き続ける心(しん)のリズムが　乱れ始めたなら
<br>弱気な声は逃げ場を失い　またこの場所に帰るだけ
<br>生きとし生ける全てのものが　怠惰な雑念に
<br>埋もれゆくなら　自分の存在も消せるかな?
<br>
<br>僕達のバイオリズムが　もし特別なものなら
<br>記憶のペテンも　裏切りの夢も　理にかなうように繋がる
<br>ねぇ、もしも時々見せる　キミのあの笑顔さえも
<br>張りぼてのように　崩れて行くなら　無痛に　Time goes on
<br>Everything　その目　Logical　誰の目?
<br>始まったプレイ
<br>
<br>「今」が何処にあるか　知ってるよ
<br>ホントは「今」なんて　存在せず
<br>「今」と呼んだ瞬間に　それは「過去」になるから
<br>
<br>どんな場面さえも　ゼロに等しいもの
<br>
<br>幾重にもなる階層世界　均衡を破って
<br>産み落とされた歪みの証明　翼さえも持たぬ悪魔
<br>星の並びが運命ならば　背きようもなくて
<br>現実的な　意識という残酷なパルス
<br>僕達に降りそそぐのは　雨のように優しいのに
<br>温もりの疑惑　欺きの言葉　革新的な構想
<br>ねぇ、「孤独」の意味の中に　淋しさを見つけられず
<br>閉じこめた思考　甘味な欲望　術なく　Time goes on
<br>Everything　その目　Logical　誰の目?
<br>始まったゲーム
<br>
<br>僕達のバイオリズムが　もし特別なものなら
<br>記憶のペテンも　裏切りの夢も　理にかなうように繋がる
<br>ねぇ、もしも時々見せる　キミのあの笑顔さえも
<br>張りぼてのように　崩れて行くなら　無痛に　Time goes on
<br>Everything　その目　Logical　誰の目?
<br>始まったプレイ`
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