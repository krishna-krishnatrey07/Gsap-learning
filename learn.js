gsap.from(".box", {
  y: -200,
  opacity: 0,
  duration: 1,
  ease: "bounce.out"
});

gsap.to(".box", {
  rotation: 360,
  duration: 2,
  repeat: -1,
  ease: "linear"
});
