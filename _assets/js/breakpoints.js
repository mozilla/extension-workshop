/**
 * --------------------------------------------------------------------
 * jQuery-Plugin breakpoints
 * Version: 2.0, 28.02.2014
 *
 * Broadcast Media Query Breakpoints
 *
 * by Lance Oliver Cummings, lance@glance.ca
 *
 * Requires jQuery Tiny Pub/Sub: https://gist.github.com/cowboy/661855
 *
 *
 * --------------------------------------------------------------------
 * Changelog:
 * v 1.0 20.09.2013
 * v 2.0 28.02.2014 -- added configurable breakpoints
 *
 * --------------------------------------------------------------------
 */

(function($) {
  $.fn.breakpoints = function(options) {
    var settings = $.extend(
      {
        matchMedia: Array(
          { label: 'small', match: '(max-width: 639px)' },
          {
            label: 'medium',
            match: '(min-width: 640px) and (max-width: 959px)',
          },
          { label: 'atleast_medium', match: '(min-width: 640px)' },
          {
            label: 'large',
            match: '(min-width: 960px) and (max-width: 1319px)',
          },
          { label: 'atleast_large', match: '(min-width: 960px)' }
        ),
      },
      options
    );

    var matches = new Array();

    if (window.matchMedia) {
      for (var i = 0; i < settings.matchMedia.length; i++) {
        var match = window.matchMedia(settings.matchMedia[i].match);
        match.addListener(breakpoint);
        matches.push({ match: match, label: settings.matchMedia[i].label });
      }
      breakpoint({ matches: true });
    } else {
      $.publish('breakpoints', [{ fallback: true }]);
    }

    // media query change
    // ------------------
    function breakpoint(mq) {
      if (mq.matches) {
        var media = {};
        for (var i = 0; i < matches.length; i++) {
          media[matches[i].label] = matches[i].match.matches;
        }
        $.publish('breakpoints', [media]);
      }
    }
  };
})(jQuery);
