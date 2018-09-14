(function() {
  // Parallax
  const hero = document.querySelector('.hero'),
        heroCircle = hero.querySelector('.circle'),
        heroH1 = hero.querySelector('h1'),
        heroH2 = hero.querySelector('h2'),
        heroH3 = hero.querySelector('h3'),
        mouse = { x: 0, y: 0 },
        cx = window.innerWidth / 2,
        cy = window.innerHeight / 2;
  
  let request = null, dx, dy;

  hero.addEventListener('mousemove', e => {
    mouse.x = e.pageX;
    mouse.y = e.pageY;

    cancelAnimationFrame(request);
    request = requestAnimationFrame(handleMouseMove);
  });

  const handleMouseMove = () => {
    dx = mouse.x - cx;
    dy = mouse.y - cy;

    TweenMax.to(heroCircle, 1, { transform: `translate(${-dx / 10}px, ${-dy / 10}px)`, ease: Power2.easeOut });
    TweenMax.to(heroH1, 1, { transform: `translate(${-dx / 75}px, ${-dy / 50}px)`, ease: Power2.easeOut });
    TweenMax.to(heroH2, 1, { transform: `translate(${-dx / 40}px, ${-dy / 35}px)`, ease: Power2.easeOut });
    TweenMax.to(heroH3, 1, { transform: `translate(${-dx / 25}px, ${-dy / 75}px)`, ease: Power2.easeOut });
  }

  // ScrollMagic
  const controller = new ScrollMagic.Controller();

  const parallaxSections = document.querySelectorAll('.parallax');

  parallaxSections.forEach(section => {
    const tl = new TimelineMax();
    tl.add(TweenMax.to(section.querySelector('.section__counter'), 1, { y: '+=250', ease: Power0.easeNone }));

    new ScrollMagic.Scene({
      triggerElement: section,
      duration: '200%',
      triggerHook: 'onEnter'
    })
    .setClassToggle('body', `${section.dataset.class}-active`)
    .setTween(tl)
    .addTo(controller);
  });

})();