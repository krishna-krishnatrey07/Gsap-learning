gsap.to("#box",{
    x:1000,
    duration:1.5,
    delay:1,
    backgroundColor: "yellow",
    rotate:90,
    borderRadius:'50%',
    scale:0.5,
    yoyo:true
})

gsap.from("h1",{
    y:100,
    delay:1,
    duration:0.9,
    opacity:0,
    stagger:0.2
})