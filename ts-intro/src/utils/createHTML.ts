export function skapaHTMLElement(e: string, content: string, classCSS: string, idCSS?: string) {
  const el = e === "img" ? (document.createElement(e) as HTMLImageElement) : document.createElement(e);
  if (el instanceof HTMLImageElement) {
    el.src = content;
  } else {
    el.textContent = content;
  }
  el.id = idCSS ? idCSS : classCSS;
  el.className = classCSS;
  return el;
}
