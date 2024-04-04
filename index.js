const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

function circle(xscale, yscale) {
  window.addEventListener("mousemove", function (e) {
    document.querySelector(
      ".minicircle"
    ).style.transform = `translate(${e.clientX}px,${e.clientY}px) scale(${xscale},${yscale})`;
  });
}
circle();
var timeout;
function circleReduce() {
  var xscale = 1;
  var yscale = 1;
  var xprev = 0;
  var yprev = 0;
  window.addEventListener("mousemove", function (e) {
    clearTimeout(timeout);

    xscale = gsap.utils.clamp(0.8, 1.2, e.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.2, e.clientY - yprev);

    xprev = e.clientX;
    yprev = e.clientY;

    circle(xscale, yscale);

    timeout = setTimeout(function () {
      document.querySelector(
        ".minicircle"
      ).style.transform = `translate(${e.clientX}px,${e.clientY}px) scale(1, 1)`;
    }, 100);
  });
}
circleReduce();

//page 1 gsap animation code
function animate() {
  var animate = gsap.timeline();
  animate.from("nav>a, nav>h4 ,.upper h1, .block h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 1,
  });
  animate.from(".chotiheading h4, .lower h3", {
    y: -100,
    opacity: 0,
    delay: 0.5,
    duration: 1,
  });
  animate.from(".footer, .sidecorner", {
    opacity: 0,
    duration: 1.5,
    delay: 0.5,
  });
}
animate();

document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;
  elem.addEventListener("mouseleave", function (e) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
    });
  });
  elem.addEventListener("mousemove", function (e) {
    var diff = e.clientY - elem.getBoundingClientRect().top;
    diffrot = e.clientX - rotate;
    rotate = e.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: e.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot),
    });
  });
  elem.addEventListener("mousemove", function (e) {
    gsap.to(elem.querySelector("h1"), {
      opacity: 0.3,
      x: 50,
    });
  });
  elem.addEventListener("mouseleave", function (e) {
    gsap.to(elem.querySelector("h1"), {
      opacity: 0.7,
      x: 0,
    });
  });
});

const time = document.querySelector(".footerleft #setdate");

setInterval(function () {
  let date = new Date();
  time.innerHTML = date.toLocaleTimeString();
}, 1000);
