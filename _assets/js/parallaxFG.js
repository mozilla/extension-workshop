/**
 * --------------------------------------------------------------------
 * jQuery-Plugin parallaxFG
 * Version: 1.0
 *
 * Parallax effect for forground elements
 *
 * by Lance Oliver Cummings, lance@glance.ca
 *
 *
 *
 * --------------------------------------------------------------------
 * Changelog:
 * v 1.0, 04.05.2017
 *
 * --------------------------------------------------------------------
 */

(function($) {
  $.fn.parallaxFG = function(options) {
    var settings = $.extend(
      {
        offsetIntertia: 0.15,
        offsetPosition: 0,
        axis: 'y',
        transformStyles: 'none',
        breakpoint: true,
      },
      options
    );

    var $window = $(window);
    var $self = this;
    var axis = settings.axis == 'y' ? 'translateY' : 'translateX';
    var is_small = false;
    var transition_reset =
      settings.transformStyles && settings.transformStyles != 'none'
        ? settings.transformStyles +
          ' ' +
          axis +
          '(' +
          settings.offsetPosition +
          ')'
        : axis + '(' + settings.offsetPosition + ')';

    $window.on('changed.zf.mediaquery', resetPos);

    function scrollcheck() {
      if (is_small) {
        $self.removeClass('active');
        $self.css('transform', transition_reset);
      } else if (isInView()) {
        $self.addClass('active');
        scrollOffset();
      } else {
        $self.removeClass('active');
      }
    }

    function resetPos(event, name) {
      if (Foundation.MediaQuery.atLeast('medium')) {
        scrollOffset();
      } else {
        $self.removeClass('active');
        $self.css('transform', transition_reset);
      }
    }

    function scrollOffset() {
      var pos =
        Math.round(distanceFromView() * settings.offsetIntertia) +
        settings.offsetPosition;
      var transition =
        settings.transformStyles && settings.transformStyles != 'none'
          ? settings.transformStyles + ' ' + axis + '(' + pos + 'px)'
          : axis + '(' + pos + 'px)';
      $self.css('transform', transition);
    }

    function distanceFromView() {
      return $window.scrollTop() - $self.parent().offset().top;
    }

    function aboveView() {
      return $window.scrollTop() >= $self.offset().top + $self.outerHeight();
    }

    function belowView() {
      return $window.height() + $window.scrollTop() < $self.offset().top;
    }

    function isInView() {
      return aboveView() != true && belowView() != true && $self.is(':visible');
    }

    $window
      .on('scroll.parallax', scrollcheck)
      .on('resize.parallax', scrollcheck);

    if (!is_small) {
      scrollOffset();
    }

    function checkMobile(obj, media) {
      if (settings.breakpoint) {
        is_small = media.small;
      }
    }
    $.subscribe('breakpoints', checkMobile);

    return this;
  };
})(jQuery);
