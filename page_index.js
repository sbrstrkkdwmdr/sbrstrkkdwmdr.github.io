function generate(){
    const ctn = document.getElementById('content');
    {
        const h1 = document.createElement('h1');
        h1.innerText = 'SaberStrike';
        h1.id = 'mainTitle'
        h1.classList.add('pageTitle');
        h1.classList.add('mainObject');
        ctn.append(h1);
    }
    {
        const img = document.createElement('img');
        img.width = 480;
        img.height = 480;
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
            img.addEventListener('mouseover', e => {
                img.src = './img/social/white/' + social.icon;
            });
            img.addEventListener('mouseout', e => {
                img.src = './img/social/' + social.icon;
            });
        })
        ctn.append(socialSection)
    }
}