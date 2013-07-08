define([
	'jquery',
	'underscore',
	'backbone',
	'views/default'
	], function($, _, Backbone, defaultView){
		var AppRouter = Backbone.Router.extend({
			initialize: function() {
				this.route(/^(demo\/){0,1}.*/, 'showDefault');
			},

			showDefault: function() {
				defaultView.render();
			}
		});
		
		var initialize = function(){
			appRouter = new AppRouter();

			var usePushState = !!(window.history && window.history.pushState);
			Backbone.history.start({
				pushState: usePushState,
				hashChange: usePushState
			});
		};
		
		return {
			initialize: initialize
		};
	}
);