const title = document.title;
const icon = document.querySelector('link[rel="icon"]');

document.title = "Risax App";
icon.href = "./icon.png";

function Return (HTML) {
    document.body.innerHTML += HTML;
}

