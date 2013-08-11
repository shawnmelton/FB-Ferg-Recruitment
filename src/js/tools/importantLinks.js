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
				json: "get_posts",
				category_name: "important-link"
			}, function(response) {
				if(response.status && response.status === "ok" && response.posts) {
					_this.el.append(JST['src/js/templates/importantLinks.html']({
						articles: response.posts
					}));
				}
			});
		},

		/*clearLinks: function() {
			this.el.find("article").remove();
		},*/

		init: function() {
			this.build();
		}
	};

	return new ImportantLinks();
});