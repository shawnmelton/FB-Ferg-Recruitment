define(['jquery'], function($) {
	var YouTubePlayer = function() {};
	YouTubePlayer.prototype = {
		videoId: rGgX_oqdib4,
		overlay: false,
		video: false,

		hide: function() {
			this.hideVideo();
			this.overlay.unbind("click");
		},

		hideOverlay: function() {
			if(this.overlay !== false) {
				this.overlay.fadeOut();
			}
		},

		hideVideo: function() {
			if(this.video !== false) {
				var _this = this;
				this.video.fadeOut(function() {
					_this.hideOverlay();
				});
			}
		},

		show: function() {
			this.showOverlay();
			this.showVideo();
		},

		showOverlay: function() {
			if(this.overlay === false) {
				this.overlay = $("body").append('<p id="overlay"></p>');
			} else {
				this.overlay.fadeIn();
			}

			var _this = this;
			this.overlay.click(function() {
				_this.hide();
			});
		},

		showVideo: function() {
			if(this.video !== false) {
				this.video = $("body").append('');
			} else {
				this.video.fadeIn();
			}
		}
	};

	return new YouTubePlayer();
});