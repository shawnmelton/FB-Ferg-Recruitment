define(['jquery', 'templates/html.jst', 'libs/sha1', 'libs/codebird'], function($, htmlJST, s1, codebird) {
	var TwitterFeed = function() {};
	TwitterFeed.prototype = {
		feedHandle: "FergusonCareers",
		el: $("#twitter-feed"),
		months: new Array(),

		/**
		 * Prepare tweet content.  Swap links in as well as hash tags.
		 */
		prepareContent: function(text, entities) {
			// Swap in links for urls.
			for(var index in entities.urls) {
				text = text.replace(entities.urls[index].url, '<a href="'+ entities.urls[index].expanded_url +'" target="_blank">'+ entities.urls[index].url +'</a>');
			}

			// Bold hash tags
			for(var index in entities.hashtags) {
				text = text.replace("#"+ entities.hashtags[index].text, '<a href="https://twitter.com/search?q=%23'+ entities.hashtags[index].text +'&src=hash" target="_blank">#'+ entities.hashtags[index].text +'</a>');
			}

			// Media parts
			for(var index in entities.media) {
				text = text.replace(entities.media[index].url, '<a href="'+ entities.media[index].expanded_url +'" target="_blank">'+ entities.media[index].display_url +'</a>');
			}

			// User mentions
			for(var index in entities.user_mentions) {
				text = text.replace("@"+ entities.user_mentions[index].screen_name, '<a href="https://twitter.com/'+ entities.user_mentions[index].screen_name +'" target="_blank">@'+ entities.user_mentions[index].screen_name +'</a>');
			}

			return text;
		},

		/**
		 * Prepare tweet date to proper format.
		 */
		prepareDate: function(date) {
			var d = new Date(date);
			var m = d.getMonth();
			if(m >= 0 && m <= 11) {
				return this.months[m] +" "+ d.getDate();
			} else {
				//Tue Aug 13 16:15:17 +0000 2013
				var matches = date.match(/^([a-z,A-Z]+) ([a-z,A-Z]+) (\d+) /);
				if(matches.length > 2) {
					return matches[2] +" "+ matches[3];
				}
			}

			return "Err";
		},

		/**
		 * Strip tweet of unnecessary information.  Convert pertinent data.
		 */
		prepareTweet: function(data) {
			return tweet = {
				date: this.prepareDate(data.created_at),
				content: this.prepareContent(data.text, data.entities)
			};
		},

		render: function() {
			this.setMonthsArray();

			var _this = this;
			var cb = new Codebird;
			cb.setConsumerKey("wVe1aHQXnSxIRDwjXMjjg", "w1f3tJzkzwwmUFWKN9GAutOG40vSidzc6MVYlP3EbE");
			cb.setToken("431035831-whH6J5UXuwFfytGLgxGIqYpYOxbdHk1KPRKjIvYN", "P5u91cg0NRqcgV7i6UpZ9IF90AiHnftSXNHWOY2BMN4");

			// Pull latest tweets from FergusonCareers
			cb.__call(
			    "statuses_userTimeline", {
			    	screen_name: this.feedHandle,
			    	count: 3
			    },
			    function (response) {
			    	if(response.httpstatus && response.httpstatus === 200) {
			    		var tweets = [];
			    		for(var index in response) {
			    			if(response[index].created_at) {
			    				tweets.push(_this.prepareTweet(response[index]));
			    			}
			    		}

			    		if(tweets.length) {
			    			_this.el.addClass("loaded");
			    			_this.el.append(JST['src/js/templates/twitterFeed.html']({
			    				tweets: tweets
			    			}));
			    		}
			    	}
			    },
				true
			);
		},

		/**
		 * Set the months array so we can use it to display the properly formatted month.
		 */
		setMonthsArray: function() {
			this.months[0] = "Jan";
			this.months[1] = "Feb";
			this.months[2] = "Mar";
			this.months[3] = "Apr";
			this.months[4] = "May";
			this.months[5] = "Jun";
			this.months[6] = "Jul";
			this.months[7] = "Aug";
			this.months[8] = "Sept";
			this.months[9] = "Oct";
			this.months[10] = "Nov";
			this.months[11] = "Dec";
		}
	};

	return new TwitterFeed();
});