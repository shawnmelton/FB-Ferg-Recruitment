define(['jquery', 'underscore', 'libs/text!templates/meetOurTeam.html'], function($, _, teamHTML) {
	var RecruitmentTeamSlider = function() {};
	RecruitmentTeamSlider.prototype = {
		recruiters: [],
		el: $("#meet-our-team"),
		currentIdx: 1,

		addEvents: function() {
			var _this = this;
			$("#slider-prev").click(function() {
				_this.moveRight();
			});

			$("#slider-next").click(function() {
				_this.moveLeft();
			});
		},

		loadTestData: function() {
			this.recruiters.push({
				name: "John Doe",
				title: "Lead Recruiter",
				url: "/img/recruiter.png",
				phone: "757.555.1234"
			});

			this.recruiters.push({
				name: "Jane Doe",
				title: "Junior Recruiter",
				url: "/img/recruiter.png",
				phone: "757.555.0987"
			});
		},

		moveLeft: function() {
			if(this.currentIdx < this.recruiters.length) {
				this.currentIdx++;
			}
		},

		moveRight: function() {
			if(this.currentIdx > 1) {
				this.currentIdx--;
			}
		},

		render: function() {
			this.loadTestData();

			this.el.html(_.template(teamHTML, {
				recruiters: this.recruiters
			}));

			this.addEvents();
		}
	};

	return new RecruitmentTeamSlider();
});