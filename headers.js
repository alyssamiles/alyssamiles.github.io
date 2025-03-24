for (let title of document.getElementsByClassName('marquee-header'))
{
    let marqueeContent = document.createElement('div');
    marqueeContent.className = 'marquee-content';

    let svg = document.createElement('svg');
    svg.setAttribute('width', '100000000vw');
    svg.style.position = 'absolute';
    svg.id = 'background-svg';

    const defs = document.createElement('defs');

    let pattern = document.createElement('pattern');
    pattern.id = 'pattern';
    pattern.setAttribute('x', '0'); pattern.setAttribute('y', '0');
    pattern.setAttribute('width', title.dataset.width); pattern.setAttribute('height', '56');
    pattern.setAttribute('fill', 'gray'); pattern.setAttribute('patternUnits', 'userSpaceOnUse');

    let text = document.createElement('text');
    text.setAttribute('x', '0'); text.setAttribute('y', '38');
    text.id = 'background-text'; 
    text.style.fontSize = '36px';
    text.style.fontStyle = 'italic';

    let textContent = document.createTextNode(title.dataset.text);
    text.appendChild(textContent);

    let rect = document.createElement('rect');
    rect.id = 'background-rect';
    rect.setAttribute('x', '0'); rect.setAttribute('y', '0');
    rect.setAttribute('width', '100%'); rect.setAttribute('height', '37%');
    rect.setAttribute('fill', 'url(#pattern)');

    pattern.appendChild(text);
    defs.appendChild(pattern);

    svg.appendChild(defs);
    svg.appendChild(rect);

    marqueeContent.appendChild(svg);

    title.appendChild(marqueeContent);

    let h1 = document.createElement('h1');
    let h1Content = document.createTextNode(title.dataset.text);
    h1.appendChild(h1Content);

    marqueeContent.appendChild(h1);
}