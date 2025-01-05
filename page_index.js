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
    }
    {
        const img = document.createElement('img');
        img.width = 400;
        img.height = 400;
        img.src = 'img/main.png'
        img.classList.add('mainObject')
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
        })
        ctn.append(socialSection)
    }
}