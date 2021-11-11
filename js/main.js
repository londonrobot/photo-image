(() => {
  document.addEventListener('DOMContentLoaded', () => {

    let menus = [".social", ".menu__right"];
    let open = gsap.timeline();

    open.from(".menu", {duration: .5, delay: 0, ease: "power1", opacity: 0, y: 500})
      .from(".menu__top", {duration: .5, delay: 0, ease: "power1",  opacity: 0, y: -150})
      .from(".nav__list", {duration: .3, delay: 0, ease: "power1", y: 150, opacity: 0})
      .from(menus, {duration: .3, delay: 0, ease: "power1", y: 150, opacity: 0});
    open.reverse();

    // burger menu
    document.querySelector(".burger").addEventListener('click', () => {
      open.play();
      document.querySelector(".menu").style.display = 'block';
    })

    document.querySelector(".close").addEventListener('click', () => {
      open.reverse();
    });

    // hero animation
    gsap.from(".hero__descr", {
      duration: 0.7,
      opacity: 0,
      delay: 1,
      ease: "power1",
    });

    let heroDownElements = [".hero__title", ".hero__btn"];

    gsap.from(heroDownElements, {
      duration: 0.7,
      delay: 0.5,
      ease: "power1",
      y: 50,
      opacity: 0,
    });

    let opacityElems = [".photos-wrap img", ".photos__author"];

    gsap.from(opacityElems, {
      duration: 2,
      opacity: 0,
      delay: 1.7,
      stagger: 0.3,
      ease: "power1",
    });

  });
})();
