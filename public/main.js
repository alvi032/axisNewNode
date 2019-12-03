/*function menuSlidesIn(){
    var checkbox = document.getElementById("btnControl")
    var menu = document.getElementById("menu-options")

    if(checkbox.checked == true){
        menu.style.left = "0%"
    }
    else{
        menu.style.left = "-100%"
    }
}*/

$(document).ready(function(){
    $('#btnControl').click(function(){
        $('#hamburger-icon').click(function(){
            $(this).toggleClass('open');
            $('#mobile-nav-ul').toggleClass('open-nav');
        });
    });
});

var slogan1 = document.getElementById("slogan1")
var slogan2 = document.getElementById("slogan2")
var slogan3 = document.getElementById("slogan3")
setTimeout(function(){
    slogan1.style.opacity = 100
}, 1000);
setTimeout(function(){
    slogan2.style.opacity = 100
}, 2000);
setTimeout(function(){
    slogan3.style.opacity = 100
}, 3000);