define(['jquery'], function($) {
	var YouTubePlayer = function() {};
	YouTubePlayer.prototype = {
		videoEl: false,
		videoId: "lUhRPviJD1s",
		overlayEl: false,

		/**
		 * Bind the escape key to hide the video.
		 */
		addEscapeEvent: function() {
			var _this = this;
			$(document).keydown(function(event) {
				if(event.which == 27) {
					_this.hidePlayer();
				}
			});
		},

		hidePlayer: function() {
			this.removeEscapeEvent();
			this.hideVideo();
			this.overlayEl.unbind("click");
		},

		hideOverlay: function() {
			this.overlayEl.fadeOut();
		},

		hideVideo: function() {
			var _this = this;
			this.videoEl.css("display", "none");
			this.hideOverlay();
			this.videoEl.remove();
			this.videoEl = false;
		},

		/**
		 * Listen for user to click the video thumbnail before we fire off video.
		 */
		listen: function(button) {
			var _this = this;
			button.click(function() {
				_this.showPlayer();
			});
		},

		/**
		 * Unbind the escape key event.
		 */
		removeEscapeEvent: function() {
			$(document).unbind("keydown");
		},

		showPlayer: function() {
			this.showOverlay();
			this.showVideo();
			this.addEscapeEvent();
		},

		showOverlay: function() {
			if(this.overlayEl === false) {
				this.overlayEl = $('<p id="ytp-overlay"></p>');
				$("body").append(this.overlayEl);
			}

			this.overlayEl.fadeIn();
			
			var _this = this;
			this.overlayEl.click(function() {
				_this.hidePlayer();
			});
		},

		showVideo: function() {
			if(this.videoEl === false) {
				this.videoEl = $('<section id="ytp-video"><iframe width="750" height="422" frameborder="0" allowfullscreen="1" src="https://www.youtube.com/embed/'+ this.videoId +'?autoplay=1">Your browser does not support iframes.  Please enable this feature to take advantage of the all the features of this app.</iframe></section>');
				$("body").append(this.videoEl);
			}

			this.videoEl.fadeIn();
		}
	};

	return new YouTubePlayer();
});