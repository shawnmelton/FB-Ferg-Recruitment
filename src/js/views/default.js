define([
	"jquery",
	"underscore",
	"backbone",
	'libs/text!templates/default.html'
	], function($, _, Backbone, defaultHTML){
		var defaultView = Backbone.View.extend({
			el: "body > div",

			/**
			 * Reach out to API to pull in page content.
			 * If content is cached, then just pull cached data.
			 */
			render: function(){
				this.$el
					.html(_.template(defaultHTML, {}));
			}
		});
		
		return new defaultView;
	}
);