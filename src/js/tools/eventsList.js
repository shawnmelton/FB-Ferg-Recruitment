define(['jquery', 'templates/html.jst', 'tools/domain'], function($, htmlJST, Domain) {
	var EventsList = (function() {});
	EventsList.prototype = {
		el: $("#events-list > div"),
		headings: $("#events-list-headings th"),
		buttons: $("#events-list > p > a"),
		orderField: "thetime",
		orderDirAsc: true,
		moveInterval: null,
		moveStep: 2,
		table: null,
		tableHeight: 0,
		tableWrapperHeight: 280,

		/**
		 * Listen for list heading clicks to sort columns.
		 */
		addHeadingEvents: function() {
			var _this = this;
			this.headings.click(function() {
				_this.onHeadingClick($(this));	
			});
		},

		/**
		 * Listen for clicks on movement buttons. (Up and Down)
		 */
		addMovementEvents: function() {
			var _this = this;
			this.buttons.mouseover(function() {
				_this.startMoving(($(this).find("span").html() === "Up"));
			});

			this.buttons.mouseout(function() {
				_this.stopMoving();
			});
		},

		/**
		 * Build the table full of events based on data from content API.
		 */
		build: function() {
			var _this = this;
			$.getJSON(Domain.get() +"content/", {
				json: "get_events",
				field: this.orderField,
				dir: (this.orderDirAsc ? "asc" : "desc"),
				count: 1000,
				r: Math.floor((Math.random()*1000)+1)
			}, function(response) {
				if(response.status && response.status === "ok" && response.events) {
					_this.el.html(JST['src/js/templates/eventsList.html']({
						events: response.events
					}));

					_this.setTable();
					FB.Canvas.setSize();
				}
			});
		},

		/**
		 * Remove the sorting column arrow.
		 */
		clearHeadingDirClass: function() {
			var sortClass = (this.orderDirAsc ? "asc" : "desc");
			$("th."+ sortClass).removeClass(sortClass);
		},

		/**
		 * Initialize this tool.
		 */
		init: function() {
			this.build();
			this.setHeadingClass();
			this.addHeadingEvents();
			this.addMovementEvents();

			this.tableWrapperHeight = this.el.height();
		},

		/**
		 * Move the list in a specified direction.
		 * @param boolean.  True, then move up.  Otherwise move down.
		 */
		move: function(moveUp) {
			if(this.table == null || this.tableHeight < this.tableWrapperHeight) {
				return;
			}
			
			var currentTop = parseInt(this.table.css("top").replace("px", ""));
			var newTop = 0;

			// We have reached the top.
			if(moveUp && (currentTop + this.moveStep >= 0)) {
				this.stopMoving();
			} else if(moveUp) {
				newTop = currentTop + this.moveStep;
			} else if(!moveUp && ((currentTop + this.tableHeight) - this.moveStep) <= this.tableWrapperHeight) {
				newTop = this.tableWrapperHeight - this.tableHeight;
				this.stopMoving();
			} else { // Move Down
				newTop = currentTop - this.moveStep;
			}

			this.table.css("top", newTop +"px");
		},

		/**
		 * Handle what happens when the user clicks on the column heading.
		 * Sort table by that column.
		 */
		onHeadingClick: function(target) {
			this.clearHeadingDirClass();
			if(target.attr("class") === this.orderField) {
				this.orderDirAsc = !this.orderDirAsc;
			} else {
				this.orderDirAsc = true;
				this.orderField = target.attr("class");
			}

			this.refresh();
			this.setHeadingClass();
		},

		/**
		 * Refresh the table and all its records.
		 */
		refresh: function() {
			this.el.html('<p></p>');
			this.unsetTable();
			this.build();
		},

		/**
		 * Add a class to the heading used for sorting so that we can indicate sorting direction to user.
		 */
		setHeadingClass: function() {
			$("th."+ this.orderField).addClass(this.orderDirAsc ? "asc" : "desc");
		},

		/**
		 * Set table information based on the data that was just loaded.
		 */
		setTable: function() {
			this.table = $("#events-list-table");
			this.tableHeight = this.table.height();
		},

		/**
		 * Start moving the list in a certain direction.
		 */
		startMoving: function(moveUp) {
			this.stopMoving();

			var _this = this;
			this.moveInterval = setInterval(function() {
				_this.move(moveUp);
			}, 25);
		},

		/**
		 * Stop the list from moving.
		 */
		stopMoving: function() {
			if(this.moveInterval !== null) {
				clearInterval(this.moveInterval);
			}
		},

		unsetTable: function() {
			this.table = null;
			this.tableHeight = 0;
		}
	};

	return new EventsList();
});