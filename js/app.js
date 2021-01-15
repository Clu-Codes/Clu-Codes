const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const headerText = intro.querySelector('h1');
// END SECTION

const section = document.querySelector('section');
const end = section.querySelector('h1');

// SCROLLMAGIC
// const controller = new ScrollTrigger.Controller();

// const scene = new ScrollTrigger.Scene({
//     duration: 9000,
//     triggerElement: intro,
//     triggerHook: 0
// })
// .addIndicators()
// .setPin(intro)
// .addTo(controller);

gsap.registerPlugin(ScrollTrigger);

// Video Animation
let accelamount = 0.1; 
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
    scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
    delay =+ (scrollpos - delay) * accelamount;
 
    video.currentTime = scrollpos;
}, 33.3);