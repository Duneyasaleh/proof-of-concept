// read more function

function readMoreFunction() {
  var moreText = document.getElementById("read-more-text");
  var btnText = document.getElementById("read-more-button");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "lees meer"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Minder"; 
    moreText.style.display = "inline";
  }
}



gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".home-page-show",
    scrub: 0.5,
    snap: 1 / (sections.length - 1),
    start: "top",
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "bottom",
    // markers: true  als je wilt weten waar is de start en end 
  }
});

