define(['jquery', 'underscore', 'libs/text!templates/twitterFeed.html'], function($, _, feedHTML) {
	var TwitterFeed = function() {};
	TwitterFeed.prototype = {
		feedUrl: "https://twitter.com/FergusonCareers",
		feedHandle: "@FergusonCareers",
		el: $("#twitter-feed"),

		render: function() {
			this.el.html(_.template(feedHTML, {
				handle: this.feedHandle,
				url: this.feedUrl
			}))
		}
	};

	return new TwitterFeed();
});