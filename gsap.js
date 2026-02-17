gsap.from(".logo",{
  y:-40,
  opacity:0,
  duration:1
})

gsap.from(".menu span",{
  y:-40,
  opacity:0,
  stagger:0.15,
  duration:1
})

gsap.from(".heading",{
  y:100,
  opacity:0,
  duration:1.2,
  ease:"power3.out"
})

gsap.from(".subheading",{
  y:50,
  opacity:0,
  duration:1,
  delay:0.3
})

gsap.from(".cta",{
  scale:0,
  opacity:0,
  duration:0.8,
  delay:0.6
})

gsap.from(".card",{
  y:120,
  opacity:0,
  stagger:0.2,
  duration:1,
  delay:0.8
})

gsap.to(".card",{
  y:-15,
  repeat:-1,
  yoyo:true,
  stagger:0.2,
  duration:1.5,
  ease:"power1.inOut"
})

const cursor = document.querySelector(".cursor")

window.addEventListener("mousemove",(e)=>{
  gsap.to(cursor,{
    x:e.clientX-10,
    y:e.clientY-10,
    duration:0.2
  })
})
