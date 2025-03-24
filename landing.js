function ease(i) { return Math.sin(Math.PI * i); }
function lerp(min, max, l) { return min + l * (max - min); }

let logo = document.getElementById('logo-img');
logo.style.paddingBottom = `${10}em`;
logo.style.opacity = '0';

let lerpVals = {
    logo: 1,
    topLeft: 0,
    topRight: 0,
    bottomLeft: 0,
    bottomRight: 0
}
const MIN = 5; const MAX = 0;

let logoID;
setTimeout(() => { logoID = setInterval('animateLogo()', 10); }, 150);

let tL = document.getElementById('tl-link');
tL.style.opacity = '0';
let tR = document.getElementById('tr-link');
tR.style.opacity = '0';
let bL = document.getElementById('bl-link');
bL.style.opacity = '0';
let bR = document.getElementById('br-link');
bR.style.opacity = '0';

let tlID;
let trID;
let blID;
let brtID;

setTimeout(() => { tlID = setInterval('animateTL()', 10) }, 450);
setTimeout(() => { trID = setInterval('animateTR()', 10) }, 650);
setTimeout(() => { blID = setInterval('animateBL()', 10) }, 850);
setTimeout(() => { brID = setInterval('animateBR()', 10) }, 1050);

function animateLogo()
{
    let lerpVal = ease(lerpVals.logo); lerpVals.logo -= 0.005;

    let math = lerp(MIN, MAX, lerpVal);

    logo.style.paddingBottom = `${math}em`;
    logo.style.opacity = `${1 - (math / MIN)}`;

    if (math == 0) clearInterval(logoID);
}

function animateTL()
{
    let lerpVal = ease(lerpVals.topLeft);  lerpVals.topLeft += 0.005;
    tL.style.opacity = `${lerpVal}`;

    if (lerpVal == 1) clearInterval(tlID);
}

function animateTR()
{
    let lerpVal = ease(lerpVals.topRight);  lerpVals.topRight += 0.005;
    tR.style.opacity = `${lerpVal}`;

    if (lerpVal == 1) clearInterval(trID);
}

function animateBL()
{
    let lerpVal = ease(lerpVals.bottomLeft);  lerpVals.bottomLeft += 0.005;
    bL.style.opacity = `${lerpVal}`;

    if (lerpVal == 1) clearInterval(blID);
}

function animateBR()
{
    let lerpVal = ease(lerpVals.bottomRight);  lerpVals.bottomRight += 0.005;
    bR.style.opacity = `${lerpVal}`;

    if (lerpVal == 1) clearInterval(brID);
}