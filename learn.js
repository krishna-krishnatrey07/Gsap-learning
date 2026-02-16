gsap.from(".logo",{
  y:-50,
  opacity:0,
  duration:1
})

gsap.from("li",{
  y:-50,
  opacity:0,
  duration:1,
  stagger:0.2
})

gsap.from(".title",{
  y:100,
  opacity:0,
  duration:1
})

gsap.from(".subtitle",{
  y:50,
  opacity:0,
  duration:1,
  delay:0.3
})

gsap.from(".btn",{
  scale:0,
  opacity:0,
  duration:0.8,
  delay:0.6
})

gsap.from(".box",{
  y:100,
  opacity:0,
  duration:1,
  stagger:0.3,
  delay:1
})

gsap.to(".box",{
  y:-20,
  repeat:-1,
  yoyo:true,
  duration:1.5,
  stagger:0.2,
  ease:"power1.inOut"
})
