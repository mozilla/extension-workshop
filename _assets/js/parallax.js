/**
 * --------------------------------------------------------------------
 * jQuery-Plugin parallax
 * Version: 3.0
 *
 * Parallax effect for background images
 *
 * by Lance Oliver Cummings, lance@glance.ca
 *
 *
 *
 * --------------------------------------------------------------------
 * Changelog:
 * v 1.0, 04.11.2013
 * v 2.0, 03.11.2014
 * v 3.0, 23.03.2016 -- fixed slideshow resize trigger
 *
 * --------------------------------------------------------------------
 */

(function($) {
  $.fn.parallax = function(settings) {
    var config = {
      container: '.slideshow',
      offsetIntertia: 0.15,
      offsetPosition: 0,
    };
    if (settings) $.extend(config, settings);

    var $window = $(window);
    var is_touch_device = 'ontouchstart' in document.documentElement;

    this.each(function() {
      $(this).parallaxBg({
        container: config.container,
        offsetIntertia: config.offsetIntertia,
        offsetPosition: config.offsetPosition,
        $window: $window,
        is_touch_device: is_touch_device,
      });
    })
      .closest(config.container)
      .on('transition_out', function(obj, $slide, $next, direction) {
        $next.trigger('resizecheck');
      });

    return this;
  };

  $.fn.parallaxBg = function(settings) {
    var config = {};
    if (settings) $.extend(config, settings);

    var $self = this;
    var id = $self.attr('id');
    var vertical_adjust = 0;
    var scale_height = 0;
    var bgHeight;
    var bgWidth;
    var is_small = false;
    var is_slideshow = $self.closest(config.container).length > 0;

    function resizecheck() {
      var containerHeight = $self.outerHeight();
      var containerWidth = $self.outerWidth();
      var travel =
        Math.round(
          Math.abs(config.$window.height() - containerHeight) *
            Math.abs(config.offsetIntertia),
        ) * 2;
      // console.log('travel: ' + travel);
      var safeHeight = containerHeight + travel;

      var ratio = bgHeight / bgWidth;
      scale_height =
        safeHeight / containerWidth > ratio
          ? safeHeight
          : containerWidth * ratio;
      vertical_adjust = (scale_height - containerHeight) / 2;

      scrollcheck();
    }

    function scrollcheck() {
      if (
        isInView($self, config.$window) &&
        !config.is_touch_device &&
        !is_small &&
        !(is_slideshow && !$self.hasClass('selected'))
      ) {
        if (!$self.hasClass('active')) {
          $self.addClass('active');
        }

        scrollBackground();

        $self.triggerHandler(
          'windowScroll',
          distanceFromView($self, config.$window),
        );
      } else {
        if ($self.hasClass('active')) {
          $self.removeClass('active');
        }
      }
    }

    function scrollBackground() {
      var bgPos =
        Math.round(
          -distanceFromView($self, config.$window) * config.offsetIntertia,
        ) -
        (vertical_adjust + config.offsetPosition);

      $self.css({
        'background-position': '50% ' + bgPos + 'px',
        'background-size': 'auto ' + scale_height + 'px',
      });
    }

    $self.getBackgroundSize(function(obj) {
      bgHeight = obj.height;
      bgWidth = obj.width;
      obj.self = null;

      config.$window.on('resize', resizecheck);
      config.$window.on('scroll', scrollcheck);
      resizecheck();
    });

    if (is_slideshow) {
      $self.on('resizecheck', function() {
        resizecheck();
      });
    }

    function checkMobile(obj, media) {
      $self.css('background-position', '');
      is_small = media.small;
    }
    $.subscribe('breakpoints', checkMobile);

    return this;
  };

  var distanceFromView = function($element, $window) {
    return $window.scrollTop() - $element.offset().top;
  };

  var aboveView = function($element, $window) {
    return (
      $window.scrollTop() >= $element.offset().top + $element.outerHeight()
    );
  };

  var belowView = function($element, $window) {
    return $window.height() + $window.scrollTop() < $element.offset().top;
  };

  var isInView = function($element, $window) {
    return (
      aboveView($element, $window) != true &&
      belowView($element, $window) != true &&
      $element.is(':visible')
    );
  };

  $.fn.getBackgroundSize = function(callback) {
    var urlRegex = /url\('*(.*?)'*\)/g;
    var url = this.css('background-image')
      .replace(urlRegex, '$1')
      .replace(/"/g, '');
    var img = new Image();

    img.onload = function() {
      callback({ width: this.width, height: this.height, self: this });
    };

    img.src = url;
  };
})(jQuery);
