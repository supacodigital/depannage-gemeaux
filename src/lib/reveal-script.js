// Scripts inline du système d'apparition au scroll (voir globals.css).
//
// Ils tournent dès la lecture du HTML, sans attendre le JavaScript de React :
// sur un mobile lent, aucun contenu ne reste masqué pendant le chargement.
// Écrits en ES5 minimal, car ils sont injectés tels quels dans la page.

// Dans <head> : active le masquage (classe .js) et définit window.__reveal().
// - Les éléments qui entrent dans l'écran apparaissent avec une animation.
// - Ceux déjà dépassés (au-dessus de l'écran) sont affichés directement.
export const REVEAL_SETUP = `(function(){
document.documentElement.classList.add("js");
var io=null;
window.__reveal=function(){
var els=document.querySelectorAll("[data-reveal]:not([data-revealed])"),i;
if(!("IntersectionObserver" in window)){for(i=0;i<els.length;i++)els[i].setAttribute("data-revealed","");return;}
if(io)io.disconnect();
io=new IntersectionObserver(function(entries){
for(var j=0;j<entries.length;j++){var e=entries[j];
if(e.isIntersecting||e.boundingClientRect.bottom<0){e.target.setAttribute("data-revealed","");io.unobserve(e.target);}}
},{rootMargin:"0px 0px -8% 0px"});
for(i=0;i<els.length;i++)io.observe(els[i]);
};
})();`;

// En fin de <body> : tout le contenu de la page est lu, on lance l'observation.
export const REVEAL_START = `window.__reveal&&window.__reveal();`;
