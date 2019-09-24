(function($) {
  // create deferred object
  // ------

  var YTdeferred = $.Deferred();
  window.onYouTubeIframeAPIReady = function() {
    // resolve when youtube callback is called passing YT as a parameter
    YTdeferred.resolve(window.YT);
  };

  // async scripts
  // ------

  var tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // document ready
  // ------

  $(document).ready(function() {
    // whenever youtube callback was called = deferred resolved your custom function will be executed with YT as an argument
    YTdeferred.done(function(YT) {
      $(document).video_cta({
        yt_object: YT,
        cta: '.video-link, a[title|="Open Popup Video"], .video-popup a',
        default_target: $('#video-popup'),
      });

      if ($('.video-banner').length) {
        $('.video-banner').each(function() {
          $(this).video_banner({ yt_object: YT });
        });
      }
    });
  });

  // Call to action overlay video
  // ------

  $.fn.video_cta = function(options) {
    var settings = $.extend(
      {
        yt_object: null,
        container: '<div id="stdVideo"><div id="stdVideo-player"></div></div>',
        container_id: 'stdVideo-player',
        close: '#stdVideo-close',
        cta: '.video-link',
        cta_container: '.video-cta',
        youtube_id_data: 'youtube_id',
        target_data: 'youtube_target',
        default_target: null,
      },
      options
    );
    var $link = $(settings.cta);
    var $link_container = $link.closest(settings.cta_container);
    var yt_player;
    var $container;
    var $target = settings.default_target;
    var playing = false;
    var is_ios = navigator.userAgent.match(/(iPod|iPhone|iPad)/) != null;
    var is_android = /(android)/i.test(navigator.userAgent);
    var mobileOS = is_ios || is_android;

    if (settings.default_target.length) {
      settings.default_target.find('.bg').on('click', closeVideo);
    }

    $('body')
      // Deregister to avoiding multiple bindings.
      .off('keyup.escCloseVideo')
      .on('keyup.escCloseVideo', function(e) {
        if (e.originalEvent.keyCode === 27 && closeVideo) {
          closeVideo();
        }
      });

    if ($(settings.close).length) {
      $(settings.close).on('click', closeVideo);
    }

    this.on('click', settings.cta, function(e) {
      e.preventDefault();

      if ($('#' + settings.container_id).length && playing) {
        closeVideo({ fast: true });
      }

      $link = $(this);
      $link_container = $link.closest(settings.cta_container);
      $target = $('#' + $link.data(settings.target_data)).length
        ? $('#' + $link.data(settings.target_data))
        : settings.default_target;
      $link.addClass('loading');
      $target.addClass('loading');
      var id =
        typeof $link.data(settings.youtube_id_data) !== typeof undefined &&
        $link.data(settings.youtube_id_data) !== false
          ? $link.data(settings.youtube_id_data)
          : $link.attr('href');
      loadVideo(id);
    });

    // The API calls this function when the player state changes
    /*
			ENDED
			PLAYING
			PAUSED
			BUFFERING
			CUED
		*/
    function onPlayerStateChange(event) {
      // Open video player when playing
      if (event.data == settings.yt_object.PlayerState.PLAYING && !playing) {
        openVideo();

        //  Close video when ended
      } else if (event.data == settings.yt_object.PlayerState.ENDED) {
        closeVideo();
      }
    }

    // The API calls this function when the player is ready.
    function onPlayerReady() {
      if (playing) {
        closeVideo();
      }

      if (mobileOS) {
        openVideo();
      } else {
        yt_player.playVideo();
      }
    }

    function loadVideo(id) {
      $container = $(settings.container);

      // if (settings.close) {
      // $close = $(settings.close);
      // $close.appendTo($container);
      // $close.on('click', closeVideo);
      // }

      if ($('#' + $link.data(settings.target_data)).length) {
        // if custom target
        $container.appendTo($target);
      } else {
        // if default player
        $container.appendTo($target.find('.cell'));
        $target.velocity('fadeIn');
      }

      // creating a player: https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      yt_player = new settings.yt_object.Player(settings.container_id, {
        height: '390',
        width: '640',
        videoId: id,
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
        playerVars: {
          controls: 1,
          enablejsapi: 1,
          loop: 0,
          showinfo: 0,
          modestbranding: 1,
        },
      });
    }

    function openVideo() {
      playing = true;
      $container.addClass('playing');
      $link_container.addClass('playing');
      $link.removeClass('loading');
      $target.removeClass('loading');
    }

    function closeVideo(options) {
      // Bail if yt_player is falsey or required
      // methods not present.
      if (!yt_player || !yt_player.stopVideo) {
        return;
      }

      var v = $.extend(
        {
          fast: false,
        },
        options
      );

      yt_player.stopVideo();
      playing = false;
      $container.removeClass('playing');
      $link_container.removeClass('playing');
      if (!$('#' + $link.data(settings.target_data)).length) {
        $target.velocity('fadeOut');
      }
      if (v.fast) {
        yt_player = null;
        $container.remove();
      } else {
        setTimeout(function() {
          yt_player = null;
          $container.remove();
        }, 1000);
      }
    }
  };

  // Banner background video
  // ------

  $.fn.video_banner = function(options) {
    var settings = $.extend(
      {
        yt_object: null,
      },
      options
    );

    var $player = this;
    var $container = $player.parent();
    var $wrapper = $container.parent();
    var $banner = $wrapper.parent();
    var $window = $(window);
    var element_id = $player.attr('id');
    var video_id = $player.data('youtube_id');
    var started = false;

    var player = new settings.yt_object.Player(element_id, {
      height: '390',
      width: '640',
      videoId: video_id,
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
      playerVars: {
        autoplay: 1,
        controls: 0,
        autohide: 1,
        wmode: 'opaque',
        mute: 1,
        showinfo: 0,
        modestbranding: 1,
        loop: 1,
        enablejsapi: 1,
        playlist: video_id,
      },
    });

    // The API calls this function when the player is ready.
    function onPlayerReady() {
      player.mute();
    }

    // The API calls this function when the player's state changes.
    function onPlayerStateChange(event) {
      if (event.data == settings.yt_object.PlayerState.PLAYING && !started) {
        $wrapper.addClass('playing');
        started = true;
      }
    }

    function videoSize() {
      var windowHeight = $banner.outerHeight();
      var videoHeight = $wrapper.outerHeight();
      var scale = windowHeight / videoHeight;

      if (videoHeight < windowHeight) {
        $wrapper.css({
          '-webkit-transform': 'scale(' + scale + ') translateY(-50%)',
          transform: 'scale(' + scale + ') translateY(-50%)',
        });
      } else {
        $wrapper.attr('style', '');
      }
    }

    $window.on('load resize', function() {
      videoSize();
    });
  };
})(jQuery);
