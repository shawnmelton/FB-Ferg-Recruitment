define(['jquery', 'templates/html.jst', 'libs/sha1', 'libs/codebird'], function($, htmlJST, s1, codebird) {
	var TwitterFeed = function() {};
	TwitterFeed.prototype = {
		feedUrl: "https://twitter.com/FergusonCareers",
		feedHandle: "@FergusonCareers",
		el: $("#twitter-feed"),

		render: function() {
			var cb = new Codebird;
			cb.setConsumerKey("wVe1aHQXnSxIRDwjXMjjg", "w1f3tJzkzwwmUFWKN9GAutOG40vSidzc6MVYlP3EbE");
			cb.setToken("431035831-whH6J5UXuwFfytGLgxGIqYpYOxbdHk1KPRKjIvYN", "P5u91cg0NRqcgV7i6UpZ9IF90AiHnftSXNHWOY2BMN4");

			cb.__call(
			    "users_show",
			    { screen_name: 'FergusonCareers' },
			    function (reply) {
			    	console.log(reply);
			        // ...
			    },
			    true // this parameter required
			);

			/*this.el.html(JST['src/js/templates/twitterFeed.html']({
				handle: this.feedHandle,
				url: this.feedUrl
			}));*/
		}
	};

	return new TwitterFeed();
});