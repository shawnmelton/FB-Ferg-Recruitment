define(['jquery'], function($) {
	var ImportantLinks = (function() {});
	ImportantLinks.prototype = {
		el: $("#links"),

		/**
		 * Build the important links list based on data from content API.
		 */
		build: function() {
			var _this = this;
			$.getJSON("/content/", {
				json: "get_posts"
			}, function(response) {
				if(response.status && response.status === "ok" && response.posts) {
					_this.el.html(JST['src/js/templates/importantLinks.html']({
						articles: response.posts
					}));

					_this.setTable();
				}
			});
		},

		clearLinks: function() {
			this.el.find("article").remove();
		},

		init: function() {
			this.build();
		},

		refresh: function() {
			this.clearLinks();
			this.build();
		}

	};

	return new ImportantLinks();
});