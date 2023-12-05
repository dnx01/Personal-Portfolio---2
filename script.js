console.log('Owner: DNZ');
console.log('Owner Website: https://dnz-z.xyz/');
var link = document.createElement("link");
link.rel = "stylesheet";
link.href = "styles.css";
document.head.appendChild(link);
console.log('Style loaded');

var fontImport = document.createElement("link");
fontImport.rel = "preconnect";
fontImport.href = "https://fonts.gstatic.com";
document.head.appendChild(fontImport);
console.log('Font preconnect loaded');

var fontStylesheet = document.createElement("link");
fontStylesheet.rel = "stylesheet";
fontStylesheet.href = "https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap";
document.head.appendChild(fontStylesheet);
console.log('Font Text loaded');

document.addEventListener("DOMContentLoaded", function () {
    var content = document.getElementById("content");
    var loader = document.querySelector(".loader-container");

    setTimeout(function () {
        loader.style.display = "none";
        content.style.display = "block";

        var items = document.querySelectorAll('.box .item');
        items.forEach(function (item, index) {
            setTimeout(function () {
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, (items.length - index) * 200);
        });
    }, 4000);
});

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".navbar a");

    links.forEach(function (link) {
        link.addEventListener("click", smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        window.scroll({
            top: targetElement.offsetTop - document.querySelector(".navbar").offsetHeight,
            behavior: "smooth"
        });
    }
});
