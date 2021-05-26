import Rellax from "rellax";
import { gsap } from "gsap";

const rellax = new Rellax(".rellax");

const logo = document.querySelector(".logo-container img");
const text = document.querySelectorAll(".banner-text .anim");
const icons = document.querySelectorAll(".icons .icon-anim");

window.addEventListener("load", () => {
  const TL = gsap.timeline({ paused: true });

  TL.to(logo, {
    duration: 2,
    autoAlpha: 1,
    y: 0,
    ease: "bounce.out",
  })
    .to(
      text,
      { duration: 1.5, stagger: 0.4, autoAlpha: 1, ease: "power2.out" },
      "-=0.75"
    )
    .to(
      icons,
      {
        duration: 0.4,
        stagger: 0.3,
        scale: 1,
        autoAlpha: 1,
        ease: "power2.out",
      },
      "-=0.75"
    );
  TL.play();
});
