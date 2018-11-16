// @codekit-prepend "js/tinypubsub.js", "js/breakpoints.js", "js/velocity.js", "js/velocity.ui.js", "js/parallax.js", "js/parallaxFG.js", "js/inview.js", "js/youtubeplayer.js";

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


    // 1. Top Header Nav
    if ($('.page-nav-container').length) {
        $('.page-nav-container').switchNav();
    }


    // 2. Anchor Link Scroll
    $("a[href^='#']").scrollto({offset_lg: 38, offset_sm: 38});


    // 3. Show in View
    if ($('.showOnView').length) {
        $('.showOnView').showOnView();
    }


    // 4. Banner Image Parallax

    // ******                                        ******
    // ** the plugin code is found in parallax.js        **
    // *****                                         ******

    if ($('.parallax').length) {
        $('.parallax').parallax({offsetIntertia: -.15});
    }
    if ($('.parallaxFG-right').length) {
        $('.parallaxFG-right').parallaxFG({offsetIntertia: .075, axis: 'x'});
    }
    if ($('.parallaxFG-left').length) {
        $('.parallaxFG-left').parallaxFG({offsetIntertia: -.075, axis: 'x'});
    }


    // 5. Video Popup  

    // ******                                        ******
    // ** the plugin code is found in youtubeplayer.js   **
    // *****                                         ******


    // 6. Slick slider

    // ******                                        ******
    // ** the plugin code is found in /assets/slick/     **
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
                    breakpoint: 960,
                    settings: 'unslick'
                }
            ]
        });
    }



    // 7. RSS Feed

    // ******                                        ******
    // ** the code is found in rssfeed.js                **
    // ** it must be compiled with Browserfy:            **
    // ** $ browserify rssfeed.js -o rssfeed.pkg.js      **
    // *****                                         ******
    
    if ($('#rss-feed').length && $('#rss-feed-source').length) {
        $('#rss-feed').rss_feed({source: $('#rss-feed-source')});
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

    $.fn.switchNav = function(options) {
        var settings = $.extend( {
            breakpoint : 'atleast_medium'
        }, options);

        var $container = this;
        var nav_all = $container.allMenu();
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
                    nav_desk = $container.desktopMenu();
                }

            // Set Mobile Nav 
            } else {

                if (nav_desk != null) {
                    nav_desk.kill();
                    nav_desk = null;
                }
                if (nav_mobile == null) {
                    nav_mobile = $container.mobileMenu();
                }
            }
        }
        $.subscribe("breakpoints", switchNav);
    }


    // 1.a Mobile Menu

    $.fn.mobileMenu = function() {
        var $container = this;
        var $nav = $container.find('nav');
        var $jump = $container.find('.jump-link');
        var $links = $container.find('#page-nav-links');
        var open = $nav.hasClass('open');
        var $window = $(window);

        if (!open) {
            $links.velocity('slideUp', {duration: 0});
        }

        $jump.on('click', function() {
            if (open) {
                $nav.removeClass('open');
                $links.velocity('slideUp');
            } else {
                $nav.addClass('open');
                $links.velocity('slideDown', {complete: function() {

                    if ($nav.outerHeight() + $nav.offset().top > $window.height() + $window.scrollTop()) {
                        $nav.velocity('scroll', {duration: 900, offset: -($nav.outerHeight() - 16)});
                    }
                }});
            }
            open = !open;
        });

        $.subscribe("scrollto", function(obj, anchor) {

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
                $window.off('resize.mobileMenu');
            }
        };
    }


    // 1.b Desktop Menu

    $.fn.desktopMenu = function() {
        var $container = this;
        var $anchors = $container.find("a[href^='#']");

        var overflow_scroll = $anchors.overflow_x_scroll();

        return { 
            kill: function() {
                overflow_scroll.kill();
            } 
        };
    }


    // 1.c Persistant Menu

    $.fn.allMenu = function() {
        var $window = $(window);
        var $container = this;
        var $anchors = $container.find("a[href^='#']");

        $window.on('scroll.persistant', function() {
            if ($window.scrollTop() >= $container.offset().top ) {
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
              if ($el.length && isInFocus($el, .75)) {
                  $anchors.removeClass('active');
                  $self.addClass('active');
                  len++;
              }
            });
            if (!len) {$anchors.removeClass('active');}
        }
    }


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
                $container.attr('style','');
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
                    } else if (dir > 0 && $this.position().left + $this.outerWidth() > container_w - $links.first().position().left) {
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
                        }
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
        $(window).on('resize.xscroll', update).on('scroll.xscroll', update);
        setTimeout(update, 500);

        return { 
            kill: function() {
                $container_parent.find('.fwd').off('click').remove();
                $container_parent.find('.bak').off('click').remove();
                $container.off('scroll.xscroll');
                $(window).off('resize.xscroll').off('scroll.xscroll');
                $container_parent.removeClass('scrollable end start');
            } 
        };
    }



    // 2. Anchor scroll
    // ------

    $.fn.scrollto = function(options) {
        var settings = $.extend( {
            offset_lg : 0,
            offset_sm : 0,
            exclude : 'tabbed-link',
        }, options);
        
        var offset = settings.offset_lg;

        $.subscribe("breakpoints", function(obj, media) {
            offset = media.small ? settings.offset_sm : settings.offset_lg;
        });

        this.on('click.scrollto', function(event) {
            var $anchor = $(this);
            var id = $anchor.attr('href').split('#')[1];

            if ($('#'+id).length && !$anchor.hasClass(settings.exclude)) {
                event.preventDefault();
                $.publish("scrollto", [ $anchor ]);
                var $el = $('#'+id);
                var top = id == 'top' ? $el.offset().top : $el.offset().top - offset;
                $('html').velocity('scroll', {duration: 900, offset: top});
            }
        });

        return this;
    }



    // 3. Show On Inview
    // ------

    $.fn.showOnView = function(options) {
        var settings = $.extend( {
            count : 'once',
            transitionDelay : 0,
            transitionIn : 'transition.slideUpIn',
            transitionOut : 'transition.slideDownOut',
            transitionSpeed : 500,
            transitionEasing : "easeOutSine",
            display : null,
            staggerGroup : false,
            staggerIncrement : 100,
            breakpoint : 'atleast_medium',
        }, options);

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
                var delay = $el.data('onscrolldelay') !== undefined ? $el.data('onscrolldelay') : settings.transitionDelay;
                var onLoadDelay = $el.data('onloaddelay');
                var thisDelay;
                var thisDisplay = $el.data('display') !== undefined ? $el.data('display') : settings.display;
                if (settings.count == 'once') {

                    $el.one('inview', function(event, isInView) {
                        if (isInView) {
                            thisDelay = onLoad && onLoadDelay != undefined ? onLoadDelay : delay;
                            $el.velocity(settings.transitionIn, {delay: thisDelay, duration: settings.transitionSpeed, easing: settings.transitionEasing, display: thisDisplay});
                        }
                    });

                } else if (settings.count == 'everytime') {

                    $el.on('inview', function(event, isInView) {
                        if (isInView) {
                            thisDelay = onLoad && onLoadDelay != undefined ? onLoadDelay : delay;
                            $el.velocity(settings.transitionIn, {delay: thisDelay, duration: settings.transitionSpeed, easing: settings.transitionEasing});
                        } else {
                            $el.velocity(settings.transitionOut, {duration: settings.transitionSpeed, easing: settings.transitionEasing});
                        }
                    });

                }
                
            });
        }

        $.subscribe("breakpoints", function(obj, media) {
            active = settings.breakpoint == null || media[settings.breakpoint] || media.fallback;
            if (active && first) {
                first = false;
                activate();
            }
        });
    }



    // 7. RSS Feed
    // ------

    $.fn.rss_feed = function(options) {
        var settings = $.extend( {
            source : null,
            container : '<div class="cell small-12 large-4 tile no-link no-img"></div>',
            breakpoint : 'atleast_large',
        }, options);

        var $container = this;

        // console.log(settings.source.html()); // <h4 class="feed-item-title"><a href="https://blog.mozilla.org/addons/2018/10/26/firefox-chrome-and-the-future-of-trustworthy-extensions/" target="_blank">Firefox, Chrome and the Future of Trustworthy Extensions</a></h4><p class="feed-item-desc"></p><p>Browser extensions are wonderful. Nearly every day I come across a new Firefox extension that customizes my browser in some creative way I’d never even considered. Some provide amusement for a short time, while others have become indispensable to my … <a class="go" href="https://blog.mozilla.org/addons/2018/10/26/firefox-chrome-and-the-future-of-trustworthy-extensions/">Continue reading</a></p><p>The post <a rel="nofollow" href="https://blog.mozilla.org/addons/2018/10/26/firefox-chrome-and-the-future-of-trustworthy-extensions/">Firefox, Chrome and the Future of Trustworthy Extensions</a> appeared first on <a rel="nofollow" href="https://blog.mozilla.org/addons">Mozilla Add-ons Blog</a>.</p><p></p><h4 class="feed-item-title"><a href="https://blog.mozilla.org/addons/2018/10/15/apply-to-join-the-featured-extensions-advisory-board-2/" target="_blank">Apply to Join the Featured Extensions Advisory Board</a></h4><p class="feed-item-desc"></p><p>Do you love extensions? Do you have a keen sense of what makes a great extension? Want to help users discover extensions that will improve how they experience the web? If so, please consider applying to join our Featured Extensions … <a class="go" href="https://blog.mozilla.org/addons/2018/10/15/apply-to-join-the-featured-extensions-advisory-board-2/">Continue reading</a></p><p>The post <a rel="nofollow" href="https://blog.mozilla.org/addons/2018/10/15/apply-to-join-the-featured-extensions-advisory-board-2/">Apply to Join the Featured Extensions Advisory Board</a> appeared first on <a rel="nofollow" href="https://blog.mozilla.org/addons">Mozilla Add-ons Blog</a>.</p><p></p><h4 class="feed-item-title"><a href="https://blog.mozilla.org/addons/2018/10/01/octobers-featured-extensions-2/" target="_blank">October’s Featured Extensions</a></h4><p class="feed-item-desc"></p><p>Pick of the Month: Default Bookmark Folder by Teddy Gustiaux Do you keep multiple bookmark folders? This extension makes it simple to add new bookmarks to specific folders. “So useful and powerful. I no longer have to change bookmark locations … <a class="go" href="https://blog.mozilla.org/addons/2018/10/01/octobers-featured-extensions-2/">Continue reading</a></p><p>The post <a rel="nofollow" href="https://blog.mozilla.org/addons/2018/10/01/octobers-featured-extensions-2/">October’s Featured Extensions</a> appeared first on <a rel="nofollow" href="https://blog.mozilla.org/addons">Mozilla Add-ons Blog</a>.</p><p></p><div class="rss2html-note" style="float: right;"><a href="https://rss.bloople.net/" style="color: #000000;">Powered by rss2html</a></div><div class="rss2html-note-clear" style="clear: right; height: 0;"></div>
        var items = settings.source.html().split('<p></p>');
        $.each(items, function(i, item) {
            if (item.indexOf('rss2html-note') !== -1) {
                return true;
            }
            var elements = item.split('<p class="feed-item-desc"></p>');
            var title = elements[0];
            var description = elements[1];
            var title_elements = $($.parseHTML(title)).text();
            var $description_elements = $(description);
            var $cell = $(settings.container); // $container.find('.cell').eq(i);
            
            $cell.append($('<h4>'+title_elements+'</h4>')).append($description_elements);
            $description_elements.last().remove();

            $cell.append($('<p class="continue"></p>'));
            $cell.find('p a:last-child').appendTo($cell.find('.continue'));
            $container.append($cell);
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
                    breakpoint: 960,
                    settings: 'unslick'
                }
            ]
        });

        return this;
    }


    
    // 8. Anatomy of an extenstion
    // ------

    $.fn.extenstionAnatomy = function(options) {
        var settings = $.extend( {
            control: $('#anatomy-control'),
        }, options);
        var $this = this;
        var first = true;
        var timer1 = null;
        var timer2 = null;
        var $tile_interface = $('#interface');
        var $tile_content = $('#content');
        var $tile_background = $('#background');

        $tile_interface.on('mouseenter', function() {
            $tile_interface.addClass('hover');
        }).on('mouseleave', function() {
            $tile_interface.removeClass('hover');
        });

        $tile_content.on('mouseenter', function() {
            $tile_content.addClass('hover');
        }).on('mouseleave', function() {
            $tile_content.removeClass('hover');
        });

        $tile_background.on('mouseenter', function() {
            $tile_background.addClass('hover');
        }).on('mouseleave', function() {
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
                }, delay+200);
                first = false;
            } else {
                $this.removeClass('step-one step-two');
                settings.control.removeClass('step-one step-two');
            }
        });

        settings.control.on('mouseenter', 'button', function() {
            var panel = $(this).data('panel');
            if (panel == 'anatomy-ui') {
                $tile_interface.addClass('hover');
            } else if (panel == 'anatomy-content') {
                $tile_content.addClass('hover');
            } else if (panel == 'anatomy-background') {
                $tile_background.addClass('hover');
            }
        }).on('mouseleave', 'button', function() {
            $tile_interface.removeClass('hover');
            $tile_content.removeClass('hover');
            $tile_background.removeClass('hover');
        });
    }




    // 9. Popups
    // ------

    $.fn.popups = function (options) {
        var settings = $.extend( {
            panels    : '.popup-panel',
            offset_x  : -220,
            offset_y  : -110,
            padding_x : 0,
            padding_y : 80,
        }, options);
        var $window = $(window);
        var $links = this;
        var $panels = $(settings.panels);

        $links.on('click', function () {
            var $link = $(this);
            var $panel = $( '#' + $link.data('panel') );
            if ($panels.filter(':visible').length) {
                $panels.velocity('transition.expandOut', {duration: 300, complete: function() {
                    openPopup($link, $panel);
                }});
            } else {
                openPopup($link, $panel);
            }
        });

        function openPopup($link, $panel) {
            if ($panel.length) {
                var x = $link.offset().left + settings.offset_x > settings.padding_x ? $link.offset().left + settings.offset_x : settings.padding_x;
                var y = $link.offset().top + settings.offset_y - $window.scrollTop() > settings.padding_y ? $link.offset().top + settings.offset_y - $window.scrollTop() : settings.padding_y;
                $panel.css({top:y, left:x});
                $panel.velocity('transition.expandIn', {duration: 300});
                $panel.find('button.close').off('click').on('click', function() {
                    $panel.velocity('transition.expandOut', {duration: 300});
                });
            }
        }
    }





    // Utilities
    // ------

    function decodeUrlParameter(str) {
        return decodeURIComponent((str+'').replace(/\+/g, '%20'));
    }

    function getUrlVars() {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for(var i = 0; i < hashes.length; i++)
        {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    }

    var aboveView = function(element) {
        return $(window).scrollTop() >= element.offset().top + element.outerHeight();
    }

    var belowFocus = function(element, focusMultipliers) {
        return $(window).height() + $(window).scrollTop() < element.offset().top + $(window).height() * focusMultipliers;
    }
    
    var isInFocus = function(element, focusMultipliers) {
        return (aboveView(element)!=true && belowFocus(element, focusMultipliers)!=true);
    }

})(jQuery);