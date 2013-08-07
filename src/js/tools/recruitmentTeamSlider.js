define(['jquery', 'templates/html.jst'], function($, htmlJST) {
	var RecruitmentTeamSlider = function() {};
	RecruitmentTeamSlider.prototype = {
		recruiters: [],
		el: $("#meet-our-team > div"),
		slider: false,
		currentIdx: 1,
		stepWidth: 238,
		animationSpeed: 600,
		nextBtn: $("#slider-next"),
		prevBtn: $("#slider-prev"),

		addEvents: function() {
			var _this = this;
			this.prevBtn.click(function() {
				_this.moveRight();
			});

			this.nextBtn.click(function() {
				_this.moveLeft();
			});
		},

		/**
		 * Define the width of the slider.  Make sure that we add extra width just in case.
		 */
		initSlider: function() {
			this.slider = $("#slider");
			this.slider.css("width", ((this.recruiters.length + 1) * this.stepWidth) +"px");
		},

		/**
		 * Remove this once we get real data.
		 */
		loadTestData: function() {
			this.recruiters.push({
				name: "John Doe",
				title: "Lead Recruiter",
				url: "/img/recruiter.png",
				location: "Chesapeake, VA"
			});

			this.recruiters.push({
				name: "Jane Doe",
				title: "Junior Recruiter",
				url: "/img/recruiter.png",
				location: "Norfolk, VA"
			});
		},

		move: function() {
			this.slider.animate({
				left: ((this.currentIdx - 1) * this.stepWidth * -1) +"px"
			}, this.animationSpeed);

			this.toggleButtons();
		},

		moveLeft: function() {
			if(this.currentIdx < this.recruiters.length) {
				this.currentIdx++;
				this.move();
			}
		},

		moveRight: function() {
			if(this.currentIdx > 1) {
				this.currentIdx--;
				this.move();
			}
		},

		render: function() {
			this.loadTestData();

			this.el.html(JST['src/js/templates/meetOurTeam.html']({
				recruiters: this.recruiters
			}));

			this.initSlider();
			this.toggleButtons();
			this.addEvents();
		},

		/**
		 * Based on whether or not we can move that direction, toggle on/off buttons.
		 */
		toggleButtons: function() {
			if(this.currentIdx == 1) {
				this.prevBtn.addClass("disabled");
			} else if(this.prevBtn.hasClass("disabled")) {
				this.prevBtn.removeClass("disabled");
			}

			if(this.currentIdx == this.recruiters.length) {
				this.nextBtn.addClass("disabled");
			} else if(this.prevBtn.hasClass("disabled")) {
				this.nextBtn.removeClass("disabled");
			}
		}
	};

	return new RecruitmentTeamSlider();
});