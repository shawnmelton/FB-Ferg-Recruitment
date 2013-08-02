define(['jquery', 'templates/html.jst'], function($, htmlJST) {
	var TwitterFeed = function() {};
	TwitterFeed.prototype = {
		feedUrl: "https://twitter.com/FergusonCareers",
		feedHandle: "@FergusonCareers",
		el: $("#twitter-feed"),

		render: function() {
			this.el.html(JST['src/js/templates/twitterFeed.html']({
				handle: this.feedHandle,
				url: this.feedUrl
			}));
		}
	};

	return new TwitterFeed();
});