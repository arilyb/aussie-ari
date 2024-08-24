(function($) {
    Drupal.behaviors.myBehavior = {
      attach: function (context, settings) {
        once('myBehavior', 'html').forEach(function (element) {
          console.log('hello world');

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
