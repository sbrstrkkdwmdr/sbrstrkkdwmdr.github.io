function generate() {
    const ctn = document.getElementById('content');
    {
        // const h1 = document.createElement('h1');
        // h1.innerText = 'SaberStrike';
        const img = document.createElement('img')
        img.src = 'img/logo_text.svg'
        img.id = 'mainTitle'
        // img.classList.add('pageTitle');
        img.classList.add('mainObject');
        ctn.append(img);
        img.draggable = false;
    }
    {
        const img = document.createElement('img');
        img.src = 'img/main.png'
        img.classList.add('mainObject')
        img.draggable = false;
        ctn.append(img);
    }
    {
        const socialSection = document.createElement('section');
        socialSection.id = 'socialSection';
        socials.forEach(social => {
            const item = document.createElement('a');
            item.className = 'indexSocialItem';
            item.href = social.url;
            const img = document.createElement('img');
            img.src = './img/social/' + social.icon;
            item.append(img)
            socialSection.append(item);
            item.addEventListener('mouseover', e => {
                img.src = './img/social/white/' + social.icon;
            });
            item.addEventListener('mouseout', e => {
                img.src = './img/social/' + social.icon;
            });
            item.draggable = false;
            img.draggable = false;
        })
        ctn.append(socialSection)
    }
}