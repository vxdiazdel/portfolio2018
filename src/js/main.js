(function() {
  // Parallax
  const heroScene = document.getElementById('hero-scene');
  const heroParallax = new Parallax(heroScene);

  // ScrollMagic
  const controller = new ScrollMagic.Controller();
  new ScrollMagic.Scene({ 
    triggerElement: '#about-section',
    offset: 300
  })
  .setClassToggle('body', 'about-active')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#work-section',
  })
  .setClassToggle('body', 'work-active')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#contact-section',
  })
  .setClassToggle('body', 'contact-active')
  .addTo(controller);


})();