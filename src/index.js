import Rellax from 'rellax';
import { gsap } from "gsap";

const rellax = new Rellax(".rellax");

const logo = document.querySelector('.logo-container svg');
const text = document.querySelectorAll(".banner-text .anim");
const icons = document.querySelectorAll('.icons .icon-anim');

window.addEventListener('load', () => {
    const TL = gsap.timeline({paused: true});

    TL
    .from(logo,{duration: 3,stagger:0.3,opacity: 0, ease: "power2.out"})
    .from(text,{duration: 2, stagger:0.3 ,opacity: 0, ease: "power2.out"},'-=2')
    .from(icons,{duration: 0.4, stagger:0.3 ,scale:0, ease:"power2.out"},'-=1');
    
    TL.play();
})