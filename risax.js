console.info("Your Using Risax");
document.title = "Risax App"

function Return(HTML) {
    var element = document.createElement("div");
    element.innerHTML = HTML;
    document.body.appendChild(element);
}

function Stylize(CSS) {
    const style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);
}

function ChangeTitle(titleName) {
    document.title = titleName;
}