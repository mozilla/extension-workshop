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

			$(document).video_cta({yt_object: YT, cta: '.video-link', close: null});

			$(document).video_cta({yt_object: YT, cta: 'a[title|="Open Popup Video"]', close: null, youtube_id_data: 'href', target: $('#video-popup')});

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
            cta : '.video-link',
            cta_container : '.video-cta',
            youtube_id_data : 'youtube_id',
            target_data : 'youtube_target',
            target : null,
        }, options);
		var $link = $(settings.cta);
		var $link_container = $link.closest(settings.cta_container);
		var yt_player;
		var $container;
		var $target = settings.target;
		var $close;
		var playing = false;
		var is_ios = navigator.userAgent.match(/(iPod|iPhone|iPad)/) != null;
        var is_android = /(android)/i.test(navigator.userAgent);
        var mobileOS = is_ios || is_android;

        if (settings.target) {
        	settings.target.find('.bg').on('click', closeVideo);
        }

		this.on('click', settings.cta, function(e) {
        	e.preventDefault();

        	if (playing) {
				closeVideo(fast=true);
			}

        	$link = $(this);
        	$link_container = $link.closest(settings.cta_container);
        	$target = settings.target == null ? $('#' + $link.data(settings.target_data)) : settings.target;
        	$link.addClass('loading');
        	$target.addClass('loading');
        	var id = settings.youtube_id_data == 'href' ? $link.attr('href') : $link.data(settings.youtube_id_data);
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
console.log('video state change: ' + event.data);
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
console.log('video ready');
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
console.log('load video');
			$container = $(settings.container);

			if (settings.close) {
				$close = $(settings.close);
				$close.appendTo($container);
				$close.on('click', closeVideo);
			}
			
			if (settings.target) {
				$container.appendTo($target.find('.cell'));
				$target.velocity('fadeIn');
			} else {
				$container.appendTo($target);
			}

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
			
		}


		function openVideo() {
console.log('open video');
			playing = true;
			$container.addClass('playing');
			$link_container.addClass('playing');
			$link.removeClass('loading');
			$target.removeClass('loading');
		}


		function closeVideo(fast=false) {
console.log('close video');

			yt_player.stopVideo();
			playing = false;
			$container.removeClass('playing');
			$link_container.removeClass('playing');
			if (settings.target) {$target.velocity('fadeOut');}
			if (fast) {
				yt_player = null;
				$container.remove();
			} else {
				setTimeout(function() {
					yt_player = null;
					$container.remove();
				},1000);
			}
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