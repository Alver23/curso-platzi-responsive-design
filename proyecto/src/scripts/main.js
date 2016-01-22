(function(){
    var loadCss = require('./lib/loadCss');
    var onScroll = require('./lib/onScroll');
    var headerElem = document.querySelector('.header');
    headerElem.addEventListener('scroll',onScroll);
    document.addEventListener('DOMContentLoaded', onDOMLoad);
    function onDOMLoad(){
        loadCss('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css');
        loadCss('https://fonts.googleapis.com/css?family=Montserrat|Lato');
        var btnMenu = document.getElementById("btnMenu");
        var navBarMenu = document.getElementById("navBarMenu");
        btnMenu.addEventListener('click', onClickMenu);
        function onClickMenu(){
            navBarMenu.classList.toggle('header-menu-list--show');
        }
    }
}());