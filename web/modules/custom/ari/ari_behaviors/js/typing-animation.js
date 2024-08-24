(function($) {
    Drupal.behaviors.typingAnimationBehavior = {
      attach: function (context, settings) {
        once('typingAnimationBehavior', 'html').forEach(function (element) {

          // Typing animation for homepage.
          var strings = $('span.a-animate').text().split('|');
          $('span.a-animate').text("");
          var typed = new Typed('span.a-animate', {
            strings: strings,
            typeSpeed: 80,
            backSpeed: 80,
            showCursor: false,
            loop: true,
            loopCount: Infinity,
          });
      })
    }
  };
})(jQuery);
