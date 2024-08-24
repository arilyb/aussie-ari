(function($) {
    Drupal.behaviors.setColor = {
      attach: function (context, settings) {
        once('setColor', 'html').forEach(function (element) {

          // Loop over link buttons.
          $("div.m-reference").each(function() {
            // Get bgc.
            $.color = $(this).find(".a-link-bgc");

            // Remove color div from dom.
            $.color.remove();

            // Set bgc
            $(this).css("background", $.color.text());
        })
      })
    }
  };
})(jQuery);
