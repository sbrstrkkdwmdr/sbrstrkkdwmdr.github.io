let lastInput = "none";

function arrToAscii(string) {
    return string.replaceAll('<', '&lt').replaceAll('>', '&gt');
}

function generateCommands() {
    let gencmddiv = document.getElementById('generalcmd');
    let osucmddiv = document.getElementById('osucmd');
    let misccmddiv = document.getElementById('misccmd');
    let admincmddiv = document.getElementById('admincmd');
    let buttondiv = document.getElementById('buttondiv');

    toList(generalcommands, gencmddiv, 'generalcmd');
    toList(osucommands, osucmddiv, 'osucmd');
    toList(misccommands, misccmddiv, 'misccmd');
    toList(admincommands, admincmddiv, 'admincmd');
    toList(buttons, buttondiv, 'buttons');

}

/**
 * 
 * @param {generalcommands | buttons} commands 
 * @param {*} div 
 * @param {*} name 
 */
function toList(commands, div, name) {
    for (const command of commands) {
        let cmddiv = document.createElement('div')
        cmddiv.classList.add('commandButton')
        cmddiv.id = `${name}-${command.name}`
        cmddiv.innerHTML = command.name;
        cmddiv.dataset.allNames = [command.name].concat(command.aliases)
        cmddiv.addEventListener('click', () => {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
            const mainDiv = document.getElementById('commandDetails');
            if (name.includes('button')) {
                displayButton(command, mainDiv);
            } else {
                displayCommand(command, mainDiv);
            }
            for (const div of document.getElementsByClassName('commandButton')) {
                div.classList.remove('commandSelected');
            }
            cmddiv.classList.add('commandSelected');
        })
        div.appendChild(cmddiv);
    }
}

/**
 * 
 * @param {generalcommands[0]} cmd 
 */
function displayCommand(cmd, mainDiv) {
    document.getElementById("commandSelector").style.display = null
    mainDiv.innerHTML = '';
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    const title = document.createElement('h1');
    title.innerHTML = cmd.name;
    title.id = 'commandInfoTitle'
    title.classList.add("pageSecondaryTitle")
    // title.classList.add("secondTitleToLeft")
    mainDiv.append(title);

    const details = document.createElement('div');
    details.classList.add('divCommandDetails');

    const desc = document.createElement('p');
    desc.classList.add("keepPre");
    desc.classList.add("commandDesc");
    let descriptionText = fixCharacters(cmd.description)
    desc.innerHTML =
        descriptionText.includes('`') ?
            toInlineCode(descriptionText) : descriptionText;
    /* cmd.description.includes('http') ?
        urlToHTML(cmd.description) : cmd.description; */

    const usage = document.createElement('p');
    usage.classList.add("commandUsage");
    usage.innerHTML = '<h3 id="commandInfoSubTitle">Command:</h3>'
    const usageTitle = document.createElement('h3');
    usageTitle.id = 'commandInfoSubTitle';
    usage.append(usageTitle);
    if (cmd.usage) {
        const usediv = document.createElement('div');
        usediv.classList.add('codeblock');
        usediv.innerText = 'sbr-' + arrToAscii(cmd.usage);
        usage.append(usediv, document.createElement('br'), document.createElement('br'));
    }
    // if (cmd.slashusage) {
    //     const usediv = document.createElement('div');
    //     usediv.classList.add('codeblock');
    //     usediv.innerHTML = '/' + arrToAscii(cmd.slashusage);
    //     usage.append(usediv, document.createElement('br'), document.createElement('br'));
    // }
    if (cmd.linkUsage && cmd.linkUsage.length > 0) {
        for (const string of cmd.linkUsage) {
            const usediv = document.createElement('div');
            usediv.classList.add('codeblock');
            usediv.innerText = arrToAscii(string);
            usage.append(usediv, document.createElement('br'), document.createElement('br'));
        }
    }
    details.append(usage, desc);

    if (cmd.aliases.length > 0) {
        const aliasDiv = document.createElement('div');
        aliasDiv.classList.add('fullClear')
        const aliasName = document.createElement('h3');
        aliasName.innerText = 'Aliases: '
        aliasName.id = 'commandInfoSubTitle';
        aliasDiv.append(aliasName);
        for (const alias of cmd.aliases) {
            const div = document.createElement('div');
            div.classList.add('codeblock');
            div.innerText = alias;
            aliasDiv.append(div)
        }

        details.append(aliasDiv);
    }

    if (cmd?.examples?.length > 0) {
        const examplesDiv = document.createElement('div');
        examplesDiv.classList.add('fullClear')
        const exampleName = document.createElement('h3');
        exampleName.id = 'commandInfoSubTitle';
        exampleName.innerText = 'Examples: '
        examplesDiv.append(exampleName)
        const exampleTable = document.createElement('table');
        exampleTable.className = 'cmdexample'
        for (const example of cmd.examples) {
            const row = exampleTable.insertRow();
            const cell1 = row.insertCell();
            const cell2 = row.insertCell();
            cell1.classList.add('tdEx', 'extxt');
            cell1.innerText = example.text.replace('PREFIXMSG', 'sbr-');
            cell2.classList.add('tdEx', 'exdesc');
            cell2.innerText = example.description;
        }
        examplesDiv.append(exampleTable);
        details.append(examplesDiv);
    }

    if (cmd?.args?.length > 0) {
        const table = document.createElement('table');
        table.classList.add('table');
        table.insertRow();
        if (isMobile()) {
            table.rows[0].insertCell().innerText = 'Name';
            table.rows[0].insertCell().innerText = 'Type';
            table.rows[0].insertCell().innerText = 'Description';
            for (const option of cmd.args) {
                const row = table.insertRow();
                row.insertCell().innerText = option.name;
                row.insertCell().innerText = option.type;
                row.insertCell().innerHTML =
                    option.description.includes('[') && option.description.includes(']') ?
                        markdownURLtoHTML(option.description) + ', ' :
                        option.description.includes('http') ?
                            urlToHTML(option.description) :
                            option.description;
            }
        } else {
            table.rows[0].insertCell().innerText = 'Name';
            table.rows[0].insertCell().innerText = 'Type';
            table.rows[0].insertCell().innerText = 'Required';
            table.rows[0].insertCell().innerText = 'Description';
            table.rows[0].insertCell().innerText = 'Options';
            table.rows[0].insertCell().innerText = 'Default Value';
            for (const option of cmd.args) {
                const row = table.insertRow();
                row.insertCell().innerText = option.name;
                row.insertCell().innerText = option.type;
                row.insertCell().innerText = option.required;
                row.insertCell().innerHTML =
                    option.description.includes('[') && option.description.includes(']') ?
                        markdownURLtoHTML(option.description) + ', ' :
                        option.description.includes('http') ?
                            urlToHTML(option.description) :
                            option.description;
                row.insertCell().innerHTML = option?.options?.map(opt =>
                    opt?.includes('[') && opt?.includes(']') && opt?.includes('(') && opt?.includes(')') ?
                        markdownURLtoHTML(opt) : opt).join(', ') ?? null;
                row.insertCell().innerHTML = option.defaultValue;
            }
        }
        details.append(table);
    }
    mainDiv.append(details);
}
/**
 * 
 * @param {buttons[0]} button 
 */
function displayButton(button, mainDiv) {
    mainDiv.innerHTML = '';
    const title = document.createElement('h1');
    title.innerHTML = button.name;
    mainDiv.append(title);

    const details = document.createElement('div');
    details.classList.add('divCommandDetails')
    const desc = document.createElement('p');
    desc.innerHTML = button.description.includes('http') ?
        urlToHTML(button.description) : button.description;
    const emoji = document.createElement('img')
    emoji.src = button.emoji;
    emoji.alt = button.name;
    details.append(desc, emoji);
    mainDiv.append(details);
}

function markdownURLtoHTML(str) {
    const int = str.split('[')[0]
    const fin = str.split(')')[1]
    const namae = str.split('[')[1].split(']')[0]
    const url = str.split('(')[1].split(')')[0]
    return `${int} <a class="highlightLink" href=${encodeURI(url)}>${namae}</a> ${fin}`
}

/**
 * 
 * @param {string} str 
 * @returns 
 */
function urlToHTML(str) {
    return str.replace(/^### (.*$)/gim, '<h3>$1</h3>') // h3 tag
        .replace(/^## (.*$)/gim, '<h2>$1</h2>') // h2 tag
        .replace(/^# (.*$)/gim, '<h1>$1</h1>') // h1 tag
        .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>') // bold text
        .replace(/\*(.*)\*/gim, '<i>$1</i>') // italic text
        .replace(/\r\n|\r|\n/gim, '<br>') // linebreaks
        .replace(/\[([^\[]+)\](\(([^)]*))\)/gim, '<a class="highlightLink" href="$3">$1</a>'); // anchor tags
}

generateCommands();

//https://css-tricks.com/how-to-animate-the-details-element/
// NO LONGER USING DUE TO NEW PAGE LAYOUT
// class smoothOpen {
//     constructor(el) {
//         this.el = el;
//         this.summary = el.querySelector('summary');
//         this.content = el.querySelector('.divCommandDetails');

//         this.animation = null;
//         this.isClosing = false;
//         this.isExpanding = false;
//         this.summary.addEventListener('click', (e) => this.onClick(e));
//     }

//     onClick(e) {
//         e.preventDefault();
//         this.el.style.overflow = 'hidden';
//         if (this.isClosing || !this.el.open) {
//             this.open();
//         } else if (this.isExpanding || this.el.open) {
//             this.shrink();
//         }

//     }

//     shrink() {
//         this.isClosing = true;

//         const startHeight = `${this.el.offsetHeight}px`;
//         const endHeight = `${this.summary.offsetHeight}px`;

//         if (this.animation) {
//             this.animation.cancel();
//         }

//         this.animation = this.el.animate({
//             height: [startHeight, endHeight]
//         }, {
//             duration: 400,
//             easing: 'ease-out'
//         });

//         this.animation.onfinish = () => this.onAnimationFinish(false);
//         this.animation.oncancel = () => this.isClosing = false;
//     }

//     open() {
//         this.el.style.height = `${this.el.offsetHeight}px`;
//         this.el.open = true;
//         window.requestAnimationFrame(() => this.expand());
//     }

//     expand() {
//         this.isExpanding = true;
//         const startHeight = `${this.el.offsetHeight}px`;
//         const endHeight = `${this.summary.offsetHeight + this.content.offsetHeight}px`;

//         if (this.animation) {
//             this.animation.cancel();
//         }

//         this.animation = this.el.animate({
//             height: [startHeight, endHeight]
//         }, {
//             duration: 400,
//             easing: 'ease-out'
//         });
//         this.animation.onfinish = () => this.onAnimationFinish(true);
//         this.animation.oncancel = () => this.isExpanding = false;
//     }

//     onAnimationFinish(open) {
//         this.el.open = open;
//         this.animation = null;
//         this.isClosing = false;
//         this.isExpanding = false;
//         this.el.style.height = this.el.style.overflow = '';
//     }
// }

// document.querySelectorAll('details').forEach((el) => {
//     new smoothOpen(el);
// });

/**
 * @param {string} string 
 */
function toInlineCode(string) {
    let newArr = string.split('`');
    let newString = "";
    for (let i = 0; i < newArr.length - 1; i++) {
        if (i % 2 == 0) {
            newString += newArr[i] + "<span class=\"inlineCodeblock\">";
        } else {
            newString += newArr[i] + "</span>";
        }
    }
    return newString;
}

/**
 * @param {string} string 
 */
function fixCharacters(string) {
    return string.replaceAll('<', '&lt')
        .replaceAll('>', '&gt');
}
// document.getElementById("command-search").addEventListener("blur", (e) => {
//     document.getElementById("commandSelector").style.display = null
// })
document.getElementById("command-search").addEventListener("focus", (e) => {
    document.getElementById("commandSelector").style.display = "block"
})
document.getElementById("commandDetails").addEventListener("focus", (e) => {
    document.getElementById("commandSelector").style.display = null
})
document.getElementById("command-search").addEventListener("input", (e) => {
    const val = e.target.value.trim();
    if (val && val.length > 0) {
        lastInput = "search";
        document.getElementById("commandSelector").style.display = "block"
    } else {
        document.getElementById("commandSelector").style.display = null
    }
    const commands = document.getElementsByClassName("commandButton");
    for (var i = 0; i < commands.length; i++) {
        element = commands[i];
        if (['"', "'", "`", "="].some(x => val.includes(x)) && element.dataset.allNames.split(',').includes(val.replaceAll(/[\"\'\`\=]/g, ''))) {
            element.style.display = 'inherit';
        } else {
            if (val.includes(element.dataset.allNames) || element.dataset.allNames.includes(val)) {
                element.style.display = 'inherit';
            } else {
                element.style.display = 'none';
            }
        }
    }
});

// https://stackoverflow.com/a/11381730
function isMobile() {
    let check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}