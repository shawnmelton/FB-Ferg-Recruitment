define(['jquery', 'templates/html.jst', 'tools/domain'], function($, htmlJST, Domain) {
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
		loopInterval: null,

		addEvents: function() {
			var _this = this;
			this.prevBtn.click(function() {
				_this.stopLoop();
				_this.moveRight();
			});

			this.nextBtn.click(function() {
				_this.stopLoop();
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
		loadData: function() {
			this.recruiters.push({
				name: "Hollyn Griffith",
				title: "Recruiting Manager,",
				url: Domain.get() +"img/Hollyn-Griffith.jpg",
				location: "Central Region Recruiter"
			});

			this.recruiters.push({
				name: "Allison Stirrup",
				title: "Manager of Recruiting and Temp Staffing",
				url: Domain.get() +"img/Allison-Stirrup.jpg",
				location: ""
			});

			this.recruiters.push({
				name: "Krystle Costigan",
				title: "Southeast Recruiter",
				url: Domain.get() +"img/Krystle-Costigan.jpg",
				location: ""
			});

			this.recruiters.push({
				name: "Leslie Goldschmidt",
				title: "Western Recruiter",
				url: Domain.get() +"img/Leslie-Goldschmidt.jpg",
				location: ""
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
			} else if(this.loopInterval !== null) {
				this.currentIdx = 1;
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
			this.loadData();

			this.el.html(JST['src/js/templates/meetOurTeam.html']({
				recruiters: this.recruiters
			}));

			this.initSlider();
			this.toggleButtons();
			this.addEvents();
			this.startLoop();
		},

		/**
		 * Start cycling through recruiters.
		 */
		startLoop: function() {
			if(this.loopInterval === null) {
				var _this = this;
				this.loopInterval = setInterval(function() {
					_this.moveLeft();
				}, 5000);
			}
		},

		/**
		 * Stop cycling through the recruiters.
		 */
		stopLoop: function() {
			if(this.loopInterval !== null) {
				clearInterval(this.loopInterval);
				this.loopInterval = null;
			}
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