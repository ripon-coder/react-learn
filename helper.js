export function stripHtml(html) {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  }
  
  export function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  }
  
  export function formatDateToDDMMYYYY(datetimeString) {
  const date = new Date(datetimeString);
  if (isNaN(date)) return ""; // invalid date handling

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // months are 0-based
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}
