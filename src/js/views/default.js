define([
	'jquery',
	'underscore',
	'backbone',
	'tools/twitterFeed',
	'tools/recruitmentTeamSlider'
	], function($, _, Backbone, TwitterFeed, RecruitmentTeamSlider){
		var defaultView = Backbone.View.extend({
			el: "#content",

			addTwitterFeed: function() {
				TwitterFeed.render();
			},

			addRecruitmentTeamSlider: function() {
				RecruitmentTeamSlider.render();
			},

			render: function(){
				this.addTwitterFeed();
				this.addRecruitmentTeamSlider();
			}
		});
		
		return new defaultView;
	}
);