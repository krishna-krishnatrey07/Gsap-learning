gsap.registerPlugin(ScrollTrigger);

gsap.to(".hero-title", {
opacity:1,
y:-20,
duration:1
});

gsap.to(".hero-sub", {
opacity:1,
y:-10,
duration:1,
delay:0.3
});

gsap.to(".hero-btn", {
opacity:1,
scale:1.1,
duration:0.8,
delay:0.6
});

gsap.utils.toArray(".card").forEach((card, i) => {
gsap.to(card, {
opacity:1,
y:0,
duration:1,
delay:i * 0.2,
scrollTrigger:{
trigger:card,
start:"top 80%"
}
});
});

gsap.to(".section-title", {
opacity:1,
y:-20,
duration:1,
scrollTrigger:{
trigger:".section-title",
start:"top 80%"
}
});

gsap.to(".footer", {
opacity:1,
duration:1,
scrollTrigger:{
trigger:".footer",
start:"top 90%"
}
});

gsap.from(".nav", {
y:-100,
opacity:0,
duration:1
});