
function toggleMenu() {
    var menu = document.getElementById('menu');
    var content = document.getElementById('main-content');
    if (menu.style.display === "block") {
        menu.style.display = "none";
        content.style.marginLeft = "0";
    } else {
        menu.style.display = "block";
        content.style.marginLeft = "300px"; 
    }
}

let baseMenuWidth = 200;
let root = document.documentElement;
function toggleMenu() {
    var menu = document.getElementById("main_menu");
    var content = document.getElementById("content");
    if (menu.style.left === "0px") {
        menu.style.left = "-100%";
        content.style.marginLeft = "0px";
    } else {
        menu.style.left = "0";
        content.style.marginLeft = "300px";

    }

}
function openNav(e) {
    root.style.setProperty('--menu-width', baseMenuWidth + "px"); 
    e.stopPropagation(); 
}

function closeNav() {
    root.style.setProperty('--menu-width', "0px"); 
}


function openProducts(e) {
    document.querySelector('#products').style.display = "";
    document.querySelector('#home').style.display = "none";
    e.stopPropagation();
}

function openHome(e) {
    document.querySelector('#home').style.display = "";
    document.querySelector('#products').style.display = "none";
    e.stopPropagation();
}

document.addEventListener('DOMContentLoaded', function () {    
    document.querySelector('#hamburger').addEventListener('click', openNav);
    document.querySelector('body').addEventListener('click', closeNav);
    document.querySelector('#productslink').addEventListener('click', openProducts);
    document.querySelector('#homelink').addEventListener('click', openHome);
});
document.getElementById('image-container').addEventListener('scroll', function() {
    document.getElementById('image').src = '../Fotos für Webseite/Winter1.jpg';
    document.getElementById('info').textContent = 'New information';
});

