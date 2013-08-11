define([
	'jquery',
	'underscore',
	'backbone',
	'tools/eventsList',
	'tools/importantLinks',
	'tools/twitterFeed',
	'tools/recruitmentTeamSlider',
	'tools/youTubePlayer'
	], function($, _, Backbone, EventsList, ImportantLinks, TwitterFeed, RecruitmentTeamSlider, YouTubePlayer){
		var defaultView = Backbone.View.extend({
			el: "#content",

			render: function(){
				EventsList.init();
				ImportantLinks.init();
				TwitterFeed.render();
				RecruitmentTeamSlider.render();
				YouTubePlayer.listen($("#youtube > img"));
			}
		});
		
		return new defaultView;
	}
);