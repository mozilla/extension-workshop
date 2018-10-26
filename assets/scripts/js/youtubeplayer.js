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
	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	
	// document ready
	// ------

	$(document).ready(function() {

		// whenever youtube callback was called = deferred resolved your custom function will be executed with YT as an argument
		YTdeferred.done(function(YT) {

			$(document).video_cta({yt_object: YT, cta: '.video-cta'});
			$(document).video_cta({yt_object: YT, cta: '.video-button'});
			$(document).video_cta({yt_object: YT, cta: '.video-link'});

		    if ($('.video-banner').length) {
				$('.video-banner').each(function() {
					$(this).video_banner({yt_object: YT});
				});
		    }

		});

	});


	// Call to action overlay video
	// ------

	$.fn.video_cta = function(options) {
		var settings = $.extend( {
            yt_object : null,
            container : '<div id="stdVideo"><div id="stdVideo-player"></div></div>',
            close : '<div id="stdVideo-close"></div>',
            cta : '.video-cta',
        }, options);

		var yt_player;
		var $container;
		var $close;
		var done = false;
		var playing = false;
		var is_ios = navigator.userAgent.match(/(iPod|iPhone|iPad)/) != null;
        var is_android = /(android)/i.test(navigator.userAgent);
        var mobileOS = is_ios || is_android;


		this.on('click', settings.cta, function(e) {
        	e.preventDefault();
        	var $link = $(this);
        	$link.addClass('loading');
        	loadVideo($link.data('id'));
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
		function onPlayerReady(event) {
			if (mobileOS) {
				openVideo();
			} else {
				yt_player.playVideo();	
			}
		}


		function loadVideo(id) {

			if (!done) {
				$container = $(settings.container);
				$close = $(settings.close);
				$container.appendTo($('body'));
				$close.appendTo($container);

				// creating a player: https://developers.google.com/youtube/iframe_api_reference#Getting_Started
				yt_player = new settings.yt_object.Player('stdVideo-player', {
					height: '390',
					width: '640',
					videoId: id,
					events: {
						'onReady': onPlayerReady,
						'onStateChange': onPlayerStateChange
					},
					playerVars: {
						controls: 1,
						enablejsapi: 1,
						loop: 0,
						showinfo: 0,
						modestbranding: 1,
			        }
				});

				done = true;

				$close.on('click', closeVideo);

			} else {

				yt_player.loadVideoById({'videoId': id});

			}
		}


		function openVideo() {
			playing = true;
			$container.addClass('playing');
			$(settings.cta).removeClass('loading');
		}


		function closeVideo() {
			yt_player.stopVideo();
			playing = false;
			$container.removeClass('playing');
		}

	}


	// Banner background video
	// ------

	$.fn.video_banner = function(options) {
		var settings = $.extend( {
            yt_object : null
        }, options);

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
				'onReady': onPlayerReady,
				'onStateChange': onPlayerStateChange
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
            }
		});

		// The API calls this function when the player is ready.
		function onPlayerReady(event) {
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
                $wrapper.css({"-webkit-transform" : "scale("+ scale +") translateY(-50%)", "transform" : "scale("+ scale +") translateY(-50%)"});
            } else {
            	$wrapper.attr('style','');
            }
        }

        $window.on('load resize', function() {
            videoSize();
        });

	}



})(jQuery);