export function stripHtml(html) {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  }
  
  export function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  }
  