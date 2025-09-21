function navAnimation(){
  const nav=document.querySelector("nav");
const tl=gsap.timeline({paused:true});
tl.to("#nav-bottom",{
  height:"21vh",
  duration:0.5,
})
.set(".nav-part2 h5",{display:"block"})
.from(".nav-part2 h5 span",{
  y:25,
  opacity:0,
  stagger:{amount:0.5},
  duration:0.4,
 
});
nav.addEventListener("mouseenter",()=>tl.play());
nav.addEventListener("mouseleave",()=>tl.reverse());
}
navAnimation();