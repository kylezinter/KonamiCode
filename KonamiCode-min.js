var Konami=function(){var e="",t="38384040373937396665",n,r;n=function(n){e+=n;e.length===22&&(e=e.slice(2));t===e&&alert("The konami code hit!")};r=function(){function e(e){var t=""+(e.keyCode?e.keyCode:e.which);n(t)}document.addEventListener("keydown",e,!1)};var i={init:function(){r()}};return i}();Konami.init();