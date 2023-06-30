const title = document.title;
const icon = document.querySelector('link[rel="icon"]');

document.title = "Risax App";
icon.href = "https://raw.githubusercontent.com/same-101/risax/main/icon.png";

function Return (HTML) {
    document.body.innerHTML += HTML;
}

