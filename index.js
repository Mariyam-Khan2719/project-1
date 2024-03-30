const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

function circle() {
  window.addEventListener("mousemove", function (e) {
    document.querySelector(
      ".minicircle"
    ).style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
  });
}
circle();
