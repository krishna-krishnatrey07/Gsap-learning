let tl = gsap.timeline()

tl.to(".loader h1",{
y:-50,
opacity:0,
duration:1,
delay:1
})

tl.to(".loader",{
y:"-100%",
duration:1
})

tl.to(".navbar",{
opacity:1,
y:0,
duration:1
})

tl.to(".title",{
opacity:1,
y:-20,
duration:1
})

tl.to(".subtitle",{
opacity:1,
y:-10,
duration:1
})

tl.to(".btn",{
opacity:1,
scale:1.1,
duration:0.5
})

gsap.to(".c1",{
y:40,
duration:3,
repeat:-1,
yoyo:true
})

gsap.to(".c2",{
y:-30,
duration:4,
repeat:-1,
yoyo:true
})

gsap.to(".c3",{
x:30,
duration:5,
repeat:-1,
yoyo:true
})

document.querySelector(".btn").addEventListener("mouseenter",()=>{
gsap.to(".btn",{scale:1.2,duration:0.3})
})

document.querySelector(".btn").addEventListener("mouseleave",()=>{
gsap.to(".btn",{scale:1.1,duration:0.3})
})