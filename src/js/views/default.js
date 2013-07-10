define([
	'jquery',
	'underscore',
	'backbone',
	'tools/twitterFeed',
	'tools/recruitmentTeamSlider',
	'tools/youTubePlayer'
	], function($, _, Backbone, TwitterFeed, RecruitmentTeamSlider, YouTubePlayer){
		var defaultView = Backbone.View.extend({
			el: "#content",

			render: function(){
				TwitterFeed.render();
				RecruitmentTeamSlider.render();
				YouTubePlayer.listen($("#youtube > img"));
			}
		});
		
		return new defaultView;
	}
);