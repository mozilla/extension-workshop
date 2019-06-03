/*!
 * Glance Digital Custom JavaScript Programing
 * lance@glance.ca
 *
 */

jQuery(document).ready(function($) {
  // SETTINGS
  // ------------------

  // Velocty Easing
  // ------

  $.Velocity.defaults.easing = 'easeInOutQuart';

  // Device
  // ------

  var is_touch_device = 'ontouchstart' in document.documentElement;

  // PLUGINS
  // ------------------

  // 1. Site Nav

  if ($('.full-width .site-header, .side-bar .site-header').length) {
    $('.site-header').switchNav();
  }

  $('.has-children').each(function() {
    if ($(this).find('.is-active').length) {
      $(this).addClass('is-active');
    }
  });

  // 10. Site (Content Guidelines) Nav
  // ------

  if ($('.content-guidelines .site-nav-container').length) {
    $('.content-guidelines .site-nav-container').switchContentGuidelinesNav();
  }

  // 2. Anchor Link Scroll
  // ------

  $('a[href^="#"]').scrollto({ offset_lg: 38, offset_sm: 38 });

  // 3. Show in View
  // ------

  if ($('.showOnView').length) {
    $('.showOnView').showOnView();
  }

  // 4. Banner Image Parallax
  // ------

  // ******                                        ******
  // **    the plugin code is found in parallax.js     **
  // *****                                         ******

  if ($('.parallax').length) {
    $('.parallax').parallax({ offsetIntertia: -0.15 });
  }
  if ($('.parallaxFG').length) {
    $('.parallaxFG').parallaxFG({ offsetIntertia: 0.15 });
  }
  if ($('.parallaxFG-right').length) {
    $('.parallaxFG-right').parallaxFG({ offsetIntertia: 0.075, axis: 'x' });
  }
  if ($('.parallaxFG-left').length) {
    $('.parallaxFG-left').parallaxFG({ offsetIntertia: -0.075, axis: 'x' });
  }

  // 5. Video Popup
  // ------

  // ******                                        ******
  // **  the plugin code is found in youtubeplayer.js  **
  // *****                                         ******

  // 6. Slick slider
  // ------

  // ******                                        ******
  // **               external plugin                  **
  // *****                                         ******

  if ($('.mobile-slider .grid-container').length) {
    $('.mobile-slider .grid-container').slick({
      mobileFirst: true,
      dots: true,
      arrows: false,
      centerMode: true,
      centerPadding: '16px',
      slidesToShow: 1,
      responsive: [
        {
          breakpoint: 640,
          settings: 'unslick',
        },
      ],
    });
  }

  // 7. RSS Feed
  // ------

  if ($('#rss-feed').length) {
    $('#rss-feed').rss_feed();
  }

  // 8. Anatomy of an extension
  // ------

  if ($('#anatomy-of-an-extension-graphic').length) {
    $('#anatomy-of-an-extension-graphic').extenstionAnatomy();
  }

  // 9. Popups
  // ------

  if ($('.popup-action').length) {
    $('.popup-action').popups();
  }

  // Init Breakpoint Listeners
  // ------------------

  $(this).breakpoints();
});

// ------------------------------------------------------------------------------------------------------------------------------------------------
// PLUGINS

(function($) {
  // 1. Top Navigation : toggle mobile and desktop
  // ------

  $.fn.switchNav = function(options) {
    var settings = $.extend(
      {
        breakpoint: 'atleast_large',
      },
      options
    );

    var $top = this;
    var nav_all = $top.persistantMenu();
    var nav_desk = null;
    var nav_mobile = null;

    function switchNav(obj, media) {
      // Set Desktop Nav
      if (media[settings.breakpoint] || media.fallback) {
        if (nav_mobile != null) {
          nav_mobile.kill();
          nav_mobile = null;
        }
        if (nav_desk == null) {
          nav_desk = $top.desktopMenu();
        }

        // Set Mobile Nav
      } else {
        if (nav_desk != null) {
          nav_desk.kill();
          nav_desk = null;
        }
        if (nav_mobile == null) {
          nav_mobile = $top.mobileMenu();
        }
      }
    }
    $.subscribe('breakpoints', switchNav);
  };

  // 1.a Mobile Menu

  $.fn.mobileMenu = function() {
    var $body = $('body');
    var $container = this;
    var $nav = $container.find('.topNav');
    var $primaryDropdown = this.find('.hamburger');

    $nav.velocity('transition.slideUpOut', { duration: 0, display: 'none' });

    $primaryDropdown.on('click', function(e) {
      e.preventDefault();
      if ($body.hasClass('nav-open')) {
        $primaryDropdown
          .removeClass('is-active')
          .attr('aria-expanded', 'false');
        $body.removeClass('nav-open');
        $nav.velocity('transition.slideUpOut', {
          duration: 600,
          display: 'none',
        });
      } else {
        $primaryDropdown.addClass('is-active').attr('aria-expanded', 'true');
        $body.addClass('nav-open');
        $nav.velocity('transition.slideDownIn', {
          duration: 600,
          display: 'flex',
        });
      }
    });

    return {
      kill: function() {
        $primaryDropdown.off('click').removeClass('is-active');
        $nav.velocity('transition.slideDownIn', {
          duration: 0,
          display: 'flex',
          complete: function() {
            $nav.attr('style', '');
            $body.removeClass('nav-open');
          },
        });
      },
    };
  };

  // 1.b Desktop Menu

  $.fn.desktopMenu = function() {
    return {
      kill: function() {},
    };
  };

  // 1.c Persistant Menu

  $.fn.persistantMenu = function() {
    var $container = this;
    var $window = $(window);
    var scrollTop = $window.scrollTop();
    var stateMinimized = false;
    var lastScrollTop = 0;
    var sensitivity = 5;
    var trigger = 30;

    function scrollState() {
      scrollTop = $window.scrollTop();

      // downscroll
      if (scrollTop > trigger && scrollTop > lastScrollTop && !stateMinimized) {
        stateMinimized = true;
        $container.addClass('minimize').removeClass('minimize-down');

        // upscroll
      } else if (
        scrollTop > trigger &&
        scrollTop < lastScrollTop - sensitivity &&
        stateMinimized
      ) {
        stateMinimized = false;
        $container.removeClass('minimize').addClass('minimize-down');

        // top of page
      } else if (scrollTop < trigger) {
        stateMinimized = false;
        $container.removeClass('minimize minimize-down');
      }

      lastScrollTop = scrollTop;
    }

    $window.on('scroll', scrollState);
    scrollState();

    return {
      kill: function() {
        $container.removeClass('minimize');
        $window.off('scroll');
      },
    };
  };

  // 10. Content Guidelines Navigation
  // ------

  $.fn.switchContentGuidelinesNav = function(options) {
    var settings = $.extend(
      {
        breakpoint: 'atleast_medium',
      },
      options
    );

    var $container = this;
    var nav_desk = null;
    var nav_mobile = null;

    function switchContentGuidelinesNav(obj, media) {
      // Set Desktop Nav
      if (media[settings.breakpoint] || media.fallback) {
        if (nav_mobile != null) {
          nav_mobile.kill();
          nav_mobile = null;
        }
        if (nav_desk == null) {
          nav_desk = $container.desktopContentGuidelinesMenu();
        }

        // Set Mobile Nav
      } else {
        if (nav_desk != null) {
          nav_desk.kill();
          nav_desk = null;
        }
        if (nav_mobile == null) {
          nav_mobile = $container.mobileContentGuidelinesMenu();
        }
      }
    }
    $.subscribe('breakpoints', switchContentGuidelinesNav);
  };

  // 10.a Mobile Menu

  $.fn.mobileContentGuidelinesMenu = function() {
    var $container = this;
    var $nav = $container.find('nav');
    var $links = $container.find('p, li:not(.current)');
    var open = $nav.hasClass('open');
    var $window = $(window);

    $window.on('scroll.mobile', function() {
      if ($window.scrollTop() >= $container.offset().top) {
        $container.addClass('sticky');
      } else {
        $container.removeClass('sticky');
      }
    });

    if (!open) {
      $links.velocity('slideUp', { duration: 0 });
    }

    $nav.on('click', function() {
      if (open) {
        $nav.removeClass('open');
        $links.velocity('slideUp');
      } else {
        $nav.addClass('open');
        $links.velocity('slideDown', {
          complete: function() {
            // if ($nav.outerHeight() + $nav.offset().top > $window.height() + $window.scrollTop()) {
            //     $nav.velocity('scroll', {duration: 900, offset: -($nav.outerHeight() - 16)});
            // }
          },
        });
      }
      open = !open;
    });

    return {
      kill: function() {
        $nav.off('click');
        $nav.removeClass('open');
        $links.attr('style', '');
        $window.off('scroll.mobile');
      },
    };
  };

  // 10.b Desktop Menu

  $.fn.desktopContentGuidelinesMenu = function() {
    return {
      kill: function() {},
    };
  };

  // 2. Anchor scroll
  // ------

  $.fn.scrollto = function(options) {
    var settings = $.extend(
      {
        offset_lg: 0,
        offset_sm: 0,
        exclude: 'tabbed-link',
      },
      options
    );

    var offset = settings.offset_lg;

    $.subscribe('breakpoints', function(obj, media) {
      offset = media.small ? settings.offset_sm : settings.offset_lg;
    });

    this.on('click.scrollto', function(event) {
      var $anchor = $(this);
      var id = $anchor.attr('href').split('#')[1];

      if ($('#' + id).length && !$anchor.hasClass(settings.exclude)) {
        event.preventDefault();
        $.publish('scrollto', [$anchor]);
        var $el = $('#' + id);
        var top = id == 'top' ? $el.offset().top : $el.offset().top - offset;
        $('html').velocity('scroll', { duration: 900, offset: top });
      }
    });

    return this;
  };

  // 3. Show On Inview
  // ------

  $.fn.showOnView = function(options) {
    var settings = $.extend(
      {
        count: 'once',
        transitionDelay: 0,
        transitionIn: 'transition.slideUpIn',
        transitionOut: 'transition.slideDownOut',
        transitionSpeed: 500,
        transitionEasing: 'easeOutSine',
        display: null,
        staggerGroup: false,
        staggerIncrement: 100,
        breakpoint: 'atleast_medium',
      },
      options
    );

    var $window = $(window);
    var onLoad = true;
    var first = true;
    var active = false;
    var $elements = this;

    if (settings.staggerGroup && $(settings.staggerGroup).length) {
      var ar = settings.staggerGroup.split(' ');
      var $groups = $(ar[0]);
      $groups.each(function() {
        var increment = settings.staggerIncrement;
        var $els = $(this).find(ar[1]);
        $els.each(function() {
          $(this).data('onscrolldelay', increment);
          increment += settings.staggerIncrement;
        });
      });
    }

    $window.on('scroll.onLoad', function() {
      onLoad = false;
      $window.off('scroll.onLoad');
    });

    function activate() {
      $elements.each(function() {
        var $el = $(this);
        var delay =
          $el.data('onscrolldelay') !== undefined
            ? $el.data('onscrolldelay')
            : settings.transitionDelay;
        var onLoadDelay = $el.data('onloaddelay');
        var thisDelay;
        var thisDisplay =
          $el.data('display') !== undefined
            ? $el.data('display')
            : settings.display;
        if (settings.count == 'once') {
          $el.one('inview', function(event, isInView) {
            if (isInView) {
              thisDelay =
                onLoad && onLoadDelay != undefined ? onLoadDelay : delay;
              $el.velocity(settings.transitionIn, {
                delay: thisDelay,
                duration: settings.transitionSpeed,
                easing: settings.transitionEasing,
                display: thisDisplay,
              });
            }
          });
        } else if (settings.count == 'everytime') {
          $el.on('inview', function(event, isInView) {
            if (isInView) {
              thisDelay =
                onLoad && onLoadDelay != undefined ? onLoadDelay : delay;
              $el.velocity(settings.transitionIn, {
                delay: thisDelay,
                duration: settings.transitionSpeed,
                easing: settings.transitionEasing,
              });
            } else {
              $el.velocity(settings.transitionOut, {
                duration: settings.transitionSpeed,
                easing: settings.transitionEasing,
              });
            }
          });
        }
      });
    }

    $.subscribe('breakpoints', function(obj, media) {
      active =
        settings.breakpoint == null ||
        media[settings.breakpoint] ||
        media.fallback;
      if (active && first) {
        first = false;
        activate();
      }
    });
  };

  // 7. RSS Feed
  // ------

  $.fn.rss_feed = function(options) {
    var settings = $.extend(
      {
        container:
          '<a href="" class="cell small-12 large-4 tile tile-block-link no-img"><div class="block-link"></div></a>',
        breakpoint: 'atleast_large',
        num: 3,
      },
      options
    );

    var $container = this;

    $.get('https://blog.mozilla.org/addons/feed/', function(data) {
      var $xml = $(data); // DOMPurify.sanitize(data) doesn't work here because data is not html
      var i = settings.num;
      $xml.find('item').each(function() {
        if (i--) {
          var $this = $(this),
            item = {
              title: DOMPurify.sanitize($this.find('title').text()),
              link: DOMPurify.sanitize($this.find('link').text()),
              description: DOMPurify.sanitize($this.find('description').text()),
              pubDate: DOMPurify.sanitize($this.find('pubDate').text()),
            };

          var newDate = new Date(item.pubDate);
          var d = newDate.getDate();
          var m = newDate.getMonth();
          m += 1; // JavaScript months are 0-11
          var y = newDate.getFullYear();
          var formattedDate = y + '/' + pad(m, 2) + '/' + pad(d, 2);

          var $description_elements = $(item.description);

          var $cell = $(settings.container);
          var $cell_content = $cell.find('.block-link');

          $cell_content
            .append(
              $(
                '<h4>' +
                  item.title +
                  '</h4><p class="meta-date">' +
                  formattedDate +
                  '</p>'
              )
            )
            .append($description_elements);
          $description_elements.last().remove();

          var $link = $cell.find('p a:last-child');
          var link_label = $link.html();
          var link_url = $link.attr('href');
          $link.remove();

          $cell_content.append(
            $(
              '<p><span class="block-link-inline">' + link_label + '</span></p>'
            )
          );
          $cell.attr('href', link_url);

          $container.append($cell);
        } else {
          return false;
        }
      });

      $container.slick({
        mobileFirst: true,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: '16px',
        slidesToShow: 1,
        responsive: [
          {
            breakpoint: 640,
            settings: 'unslick',
          },
        ],
      });
    });

    return this;
  };

  // 8. Anatomy of an extenstion
  // ------

  $.fn.extenstionAnatomy = function(options) {
    var settings = $.extend(
      {
        control: $('#anatomy-control'),
      },
      options
    );
    var $this = this;
    var first = true;
    var timer1 = null;
    var timer2 = null;
    var $tile_interface = $('#interface');
    var $tile_content = $('#content');
    var $tile_background = $('#background');

    $tile_interface
      .on('mouseenter', function() {
        $tile_interface.addClass('hover');
      })
      .on('mouseleave', function() {
        $tile_interface.removeClass('hover');
      });

    $tile_content
      .on('mouseenter', function() {
        $tile_content.addClass('hover');
      })
      .on('mouseleave', function() {
        $tile_content.removeClass('hover');
      });

    $tile_background
      .on('mouseenter', function() {
        $tile_background.addClass('hover');
      })
      .on('mouseleave', function() {
        $tile_background.removeClass('hover');
      });

    $this.on('inview', function(event, isInView) {
      clearTimeout(timer1);
      clearTimeout(timer2);
      if (isInView) {
        var delay = first ? 700 : 100;
        timer1 = setTimeout(function() {
          $this.addClass('step-one');
          settings.control.addClass('step-one');
        }, delay);
        timer2 = setTimeout(function() {
          $this.addClass('step-two');
          settings.control.addClass('step-two');
        }, delay + 200);
        first = false;
      } else {
        $this.removeClass('step-one step-two');
        settings.control.removeClass('step-one step-two');
      }
    });

    settings.control
      .on('mouseenter', 'button', function() {
        var panel = $(this).data('panel');
        if (panel == 'anatomy-ui') {
          $tile_interface.addClass('hover');
        } else if (panel == 'anatomy-content') {
          $tile_content.addClass('hover');
        } else if (panel == 'anatomy-background') {
          $tile_background.addClass('hover');
        }
      })
      .on('mouseleave', 'button', function() {
        $tile_interface.removeClass('hover');
        $tile_content.removeClass('hover');
        $tile_background.removeClass('hover');
      });
  };

  // 9. Popups
  // ------

  $.fn.popups = function(options) {
    var settings = $.extend(
      {
        panels: '.popup-panel',
        offset_x: -220,
        offset_y: -55,
        padding_x: 0,
        padding_y: 80,
      },
      options
    );
    var $window = $(window);
    var $links = this;
    var $panels = $(settings.panels);

    $links.on('click', function() {
      var $link = $(this);
      var $panel = $('#' + $link.data('panel'));
      if ($panels.filter(':visible').length) {
        $panels.velocity('transition.slideDownOut', {
          duration: 300,
          complete: function() {
            openPopup($link, $panel);
          },
        });
      } else {
        openPopup($link, $panel);
      }
    });

    function openPopup($link, $panel) {
      if ($panel.length) {
        var x =
          $link.offset().left + settings.offset_x > settings.padding_x
            ? $link.offset().left + settings.offset_x
            : settings.padding_x;
        var y =
          $link.offset().top + settings.offset_y - $window.scrollTop() >
          settings.padding_y
            ? $link.offset().top + settings.offset_y - $window.scrollTop()
            : settings.padding_y;
        $panel.css({ top: y, left: x });
        $panel.velocity('transition.slideUpIn', { duration: 300 });
        $panel
          .find('button.close')
          .off('click')
          .on('click', function() {
            $panel.velocity('transition.slideDownOut', { duration: 300 });
          });
      }
    }
  };

  // Utilities
  // ------

  function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

  function decodeUrlParameter(str) {
    return decodeURIComponent((str + '').replace(/\+/g, '%20'));
  }

  function getUrlVars() {
    var vars = [],
      hash;
    var hashes = window.location.href
      .slice(window.location.href.indexOf('?') + 1)
      .split('&');
    for (var i = 0; i < hashes.length; i++) {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  }

  var aboveView = function(element) {
    return (
      $(window).scrollTop() >= element.offset().top + element.outerHeight()
    );
  };

  var belowFocus = function(element, focusMultipliers) {
    return (
      $(window).height() + $(window).scrollTop() <
      element.offset().top + $(window).height() * focusMultipliers
    );
  };

  var isInFocus = function(element, focusMultipliers) {
    return (
      aboveView(element) != true &&
      belowFocus(element, focusMultipliers) != true
    );
  };
})(jQuery);
