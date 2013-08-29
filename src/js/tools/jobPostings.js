define(['jquery', 'templates/html.jst', 'tools/domain'], function($, htmlJST, Domain) {
	var JobPostings = (function() {});
	JobPostings.prototype = {
		el: $("#openings > div"),

		/**
		 * Mark odd rows with class
		 */
		addAlternatingRowColors: function() {
			var count = 1;
			$("#job-postings tr").each(function() {
				if(count % 2 == 0) {
					$(this).addClass("odd");
				}

				count++;
			});
		},

		render: function() {
			var _this = this;

			$.getJSON(Domain.get() +"content/", {
				json: "get_posts",
				category_name: "job-postings",
				order: "DESC",
				orderby: "date",
				date_format: "M d, Y"
			}, function(response) {
				if(response.status && response.status === "ok" && response.posts) {
					_this.el.append(JST['src/js/templates/jobPostings.html']({
						posts: response.posts
					}));

					_this.addAlternatingRowColors();
				}
			});
		}
	};

	return new JobPostings();
});