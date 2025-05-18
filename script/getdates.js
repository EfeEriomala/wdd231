const today = new Date();

const year = document.querySelector("#currentyear");
year.innerHTML = today.getFullYear();

let myLastModElement = document.querySelector("#lastModified");
let myLastMod = new Date(document.lastModified);
myLastModElement.textContent = `Last Modified: ${myLastMod}`;