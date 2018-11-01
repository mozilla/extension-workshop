// @codekit-prepend "js/tinypubsub.js", "js/breakpoints.js", "js/velocity.js", "js/velocity.ui.js", "js/parallax.js", "js/inview.js", "js/youtubeplayer.js";

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
    $("a[href^='#']").scrollto({offset_lg: 50, offset_sm: 50});


    // 3. Show in View
    if ($('.showOnView').length) {
        $('.showOnView').showOnView();
    }


    // 4. Banner Image Parallax

    // ******                                        ******
    // ** the plugin code is found in parallax.js        **
    // *****                                         ******

    if ($('.parallax').length) {
        $('.parallax').parallax({offsetIntertia: -.2});
    }


    // 5. Video Popup  

    // ******                                        ******
    // ** the plugin code is found in youtubeplayer.js   **
    // *****                                         ******


    // 6. Slick slider

    // ******                                        ******
    // ** the plugin code is found in /assets/slick/     **
    // *****                                         ******

    if ($('.slider.mobile').length) {
        $('.slider.mobile').slick({
            mobileFirst: true,
            dots: true,
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1,
            responsive: [
                {
                    breakpoint: 760,
                    settings: 'unslick'
                }
            ]
        });
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
            breakpoint : 'atleast_large'
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

        return {
            kill: function() {}
        };
    }


    // 1.b Desktop Menu

    $.fn.desktopMenu = function() {
        var $container = this;

        return { 
            kill: function() { } 
        };
    }


    // 1.c Persistant Menu

    $.fn.allMenu = function() {
        var $window = $(window);
        var $container = this;

        $window.on('scroll.persistant', function() {
            if ($window.scrollTop() >= $container.offset().top ) {
                $container.addClass('sticky');
            } else {
                $container.removeClass('sticky');
            }
        });
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
            var id = $(this).attr('href').split('#')[1];

            if ($('#'+id).length && !$(this).hasClass(settings.exclude)) {
                event.preventDefault();
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