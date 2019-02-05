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

  // 1. Page Nav
  if ($('.page-nav-container').length) {
    $('.page-nav-container').switchPageNav();
  }

  // 10. Site (Content Guidelines) Nav
  if ($('.site-wrapper .site-nav-container').length) {
    $('.site-wrapper .site-nav-container').switchSiteNav();
  }

  // 2. Anchor Link Scroll
  $('a[href^="#"]').scrollto({ offset_lg: 38, offset_sm: 38 });

  // 3. Show in View
  if ($('.showOnView').length) {
    $('.showOnView').showOnView();
  }

  // 4. Banner Image Parallax

  // ******                                        ******
  // **    the plugin code is found in parallax.js     **
  // *****                                         ******

  if ($('.parallax').length) {
    $('.parallax').parallax({ offsetIntertia: -0.15 });
  }
  if ($('.parallaxFG-right').length) {
    $('.parallaxFG-right').parallaxFG({ offsetIntertia: 0.075, axis: 'x' });
  }
  if ($('.parallaxFG-left').length) {
    $('.parallaxFG-left').parallaxFG({ offsetIntertia: -0.075, axis: 'x' });
  }

  // 5. Video Popup

  // ******                                        ******
  // **  the plugin code is found in youtubeplayer.js  **
  // *****                                         ******

  // 6. Slick slider

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

  if ($('#rss-feed').length) {
    $('#rss-feed').rss_feed();
  }

  // 8. Anatomy of an extension
  if ($('#anatomy-of-an-extension-graphic').length) {
    $('#anatomy-of-an-extension-graphic').extenstionAnatomy();
  }

  // 9. Popups
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

  $.fn.switchPageNav = function(options) {
    var settings = $.extend(
      {
        breakpoint: 'atleast_medium',
      },
      options
    );

    var $container = this;
    var nav_all = $container.pageMenu();
    var nav_desk = null;
    var nav_mobile = null;

    function switchPageNav(obj, media) {
      // Set Desktop Nav
      if (media[settings.breakpoint] || media.fallback) {
        if (nav_mobile != null) {
          nav_mobile.kill();
          nav_mobile = null;
        }
        if (nav_desk == null) {
          nav_desk = $container.desktopPageMenu();
        }

        // Set Mobile Nav
      } else {
        if (nav_desk != null) {
          nav_desk.kill();
          nav_desk = null;
        }
        if (nav_mobile == null) {
          nav_mobile = $container.mobilePageMenu();
        }
      }
    }
    $.subscribe('breakpoints', switchPageNav);
  };

  // 1.a Mobile Menu

  $.fn.mobilePageMenu = function() {
    var $container = this;
    var $nav = $container.find('nav');
    var $jump = $container.find('.jump-link');
    var $links = $container.find('#page-nav-links');
    var open = $nav.hasClass('open');
    var $window = $(window);

    if (!open) {
      $links.velocity('slideUp', { duration: 0 });
    }

    $jump.on('click', function() {
      if (open) {
        $nav.removeClass('open');
        $links.velocity('slideUp');
      } else {
        $nav.addClass('open');
        $links.velocity('slideDown', {
          complete: function() {
            if (
              $nav.outerHeight() + $nav.offset().top >
              $window.height() + $window.scrollTop()
            ) {
              $nav.velocity('scroll', {
                duration: 900,
                offset: -($nav.outerHeight() - 16),
              });
            }
          },
        });
      }
      open = !open;
    });

    $.subscribe('scrollto', function(obj, anchor) {
      if (anchor.parent().attr('id') == 'page-nav-links') {
        $nav.removeClass('open');
        $links.velocity('slideUp');
        open = false;
      }
    });

    return {
      kill: function() {
        $jump.off('click');
        $nav.removeClass('open');
        $links.attr('style', '');
      },
    };
  };

  // 1.b Desktop Menu

  $.fn.desktopPageMenu = function() {
    var $container = this;
    var $anchors = $container.find('a[href^="#"]');

    var overflow_scroll = $anchors.overflow_x_scroll();

    return {
      kill: function() {
        overflow_scroll.kill();
      },
    };
  };

  // 1.c Persistant Menu

  $.fn.pageMenu = function() {
    var $window = $(window);
    var $container = this;
    var $anchors = $container.find('a[href^="#"]');

    $window.on('scroll.persistant', function() {
      if ($window.scrollTop() >= $container.offset().top) {
        $container.addClass('sticky');
      } else {
        $container.removeClass('sticky');
      }

      updateAnchorActive();
    });

    function updateAnchorActive() {
      var len = 0;
      $anchors.each(function() {
        var $self = $(this);
        var $el = $($self.attr('href'));
        if ($el.length && isInFocus($el, 0.75)) {
          $anchors.removeClass('active');
          $self.addClass('active');
          len++;
        }
      });
      if (!len) {
        $anchors.removeClass('active');
      }
    }
  };

  // 1.d Overflow X scroll
  // ------

  $.fn.overflow_x_scroll = function(options) {
    var $links = this;
    var $container = $links.parent();
    var $container_parent = $container.parent();
    $container.after('<div class="fwd"></div>');
    $container.before('<div class="bak"></div>');
    var track_w = w();
    var container_w = $container.outerWidth();
    var padding = 32;
    var btn_lock = false;

    function w() {
      var len = 0;
      $links.each(function() {
        len += $(this).outerWidth(true);
      });
      return len;
    }

    function update() {
      var position = $links.first().position();
      container_w = $container.outerWidth();
      track_w = w();

      if (track_w > container_w) {
        $container_parent.addClass('scrollable').removeClass('end start');
        if (position.left >= 0) {
          $container_parent.addClass('start');
        } else if (track_w + position.left <= container_w) {
          $container_parent.addClass('end');
        }
      } else {
        $container.attr('style', '');
        $container_parent.removeClass('scrollable end start');
      }
    }

    function scroll(dir) {
      if (!btn_lock) {
        btn_lock = true;
        var offset = 0;
        var $scroll_to = dir < 0 ? $links.first() : $links.last(); // default if loop below doesn't work out

        $links.each(function() {
          var $this = $(this);
          if (dir < 0 && $this.position().left < 0) {
            $scroll_to = $this;
            // } else if (dir < 0 && $this.position().left >= 0) {
            return false;
          } else if (
            dir > 0 &&
            $this.position().left + $this.outerWidth() >
              container_w - $links.first().position().left
          ) {
            $scroll_to = $this;
            return false;
          }
        });

        if (dir > 0 && $scroll_to != $links.last()) {
          offset -= padding;
        } else if (dir < 0 && $scroll_to != $links.first()) {
          offset -= padding;
        }

        if ($scroll_to) {
          $scroll_to.velocity('scroll', {
            container: $container,
            duration: 600,
            offset: offset,
            axis: 'x',
            easing: 'easeInOutSine',
            complete: function() {
              btn_lock = false;
            },
          });
        } else {
          btn_lock = false;
        }
      }
    }

    $container_parent.find('.fwd').on('click', function() {
      scroll(1);
    });

    $container_parent.find('.bak').on('click', function() {
      scroll(-1);
    });

    $container.on('scroll.xscroll', update);
    $(window)
      .on('resize.xscroll', update)
      .on('scroll.xscroll', update);
    setTimeout(update, 500);

    return {
      kill: function() {
        $container_parent
          .find('.fwd')
          .off('click')
          .remove();
        $container_parent
          .find('.bak')
          .off('click')
          .remove();
        $container.off('scroll.xscroll');
        $(window)
          .off('resize.xscroll')
          .off('scroll.xscroll');
        $container_parent.removeClass('scrollable end start');
      },
    };
  };

  // 10. Top Navigation : toggle mobile and desktop
  // ------

  $.fn.switchSiteNav = function(options) {
    var settings = $.extend(
      {
        breakpoint: 'atleast_medium',
      },
      options
    );

    var $container = this;
    var nav_all = $container.siteMenu();
    var nav_desk = null;
    var nav_mobile = null;

    function switchSiteNav(obj, media) {
      // Set Desktop Nav
      if (media[settings.breakpoint] || media.fallback) {
        if (nav_mobile != null) {
          nav_mobile.kill();
          nav_mobile = null;
        }
        if (nav_desk == null) {
          nav_desk = $container.desktopSiteMenu();
        }

        // Set Mobile Nav
      } else {
        if (nav_desk != null) {
          nav_desk.kill();
          nav_desk = null;
        }
        if (nav_mobile == null) {
          nav_mobile = $container.mobileSiteMenu();
        }
      }
    }
    $.subscribe('breakpoints', switchSiteNav);
  };

  // 10.a Mobile Menu

  $.fn.mobileSiteMenu = function() {
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

  $.fn.desktopSiteMenu = function() {
    return {
      kill: function() {},
    };
  };

  // 10.c Persistant Menu

  $.fn.siteMenu = function() {};

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
