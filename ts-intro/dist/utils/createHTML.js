export function skapaHTMLElement(e, content, classCSS, idCSS) {
    const el = e === "img" ? document.createElement(e) : document.createElement(e);
    if (el instanceof HTMLImageElement) {
        el.src = content;
    }
    else {
        el.textContent = content;
    }
    el.id = idCSS ? idCSS : classCSS;
    el.className = classCSS;
    return el;
}
//# sourceMappingURL=createHTML.js.map