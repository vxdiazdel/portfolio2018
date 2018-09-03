(function() {
  // Parallax
  const heroScene = document.getElementById('hero-scene');
  const heroParallax = new Parallax(heroScene);

  // ScrollMagic
  const controller = new ScrollMagic.Controller();
  new ScrollMagic.Scene({ 
    triggerElement: '#about-section',
    offset: 100,
  })
  .setClassToggle('#about-section', 'active')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#work-section',
    offset: 100,
  })
  .setClassToggle('#work-section', 'active')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#contact-section',
    offset: 100,
  })
  .setClassToggle('#contact-section', 'active')
  .addTo(controller);


})();