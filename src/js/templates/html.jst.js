this["JST"] = this["JST"] || {};

this["JST"]["src/js/templates/eventsList.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<table id="events-list-table">\r\n\t';
 _.each(events, function(event) { ;
__p += '\r\n\t<tr' +
((__t = ( event.cls )) == null ? '' : __t) +
'>\r\n\t\t<td width="40%">' +
((__t = ( event.location )) == null ? '' : __t) +
'</td>\r\n\t\t<td width="35%">' +
((__t = ( event.title )) == null ? '' : __t) +
'</td>\r\n\t\t<td width="25%">' +
((__t = ( event.date )) == null ? '' : __t) +
'</td>\r\n\t</tr>\r\n\t';
 }); ;
__p += '\r\n</table>\r\n<div></div>';

}
return __p
};

this["JST"]["src/js/templates/importantLinks.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 _.each(articles, function(article) { ;
__p += '\r\n<article>\r\n\t<h4>' +
((__t = ( article.title )) == null ? '' : __t) +
'</h4>\r\n\t' +
((__t = ( article.content )) == null ? '' : __t) +
'\r\n\t<a href="' +
((__t = ( article.url )) == null ? '' : __t) +
'" target="_blank" class="upper">Learn More</a>\r\n</article>\r\n';
 }); ;


}
return __p
};

this["JST"]["src/js/templates/jobPostings.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<table id="job-postings">\r\n';
 _.each(posts, function(post) { ;
__p += '\r\n\t<tr>\r\n\t\t<td class="first">' +
((__t = ( post.title )) == null ? '' : __t) +
'</td>\r\n\t\t<td class="second">' +
((__t = ( post.content )) == null ? '' : __t) +
'</td>\r\n\t\t<td class="third">' +
((__t = ( post.date )) == null ? '' : __t) +
'</td>\r\n\t\t<td class="fourth"><a href="' +
((__t = ( post.url )) == null ? '' : __t) +
'" target="_blank">View Job</a></td>\r\n\t</tr>\r\n';
 }); ;
__p += '\r\n</table>';

}
return __p
};

this["JST"]["src/js/templates/meetOurTeam.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div id="slider">\r\n';
 _.each(recruiters, function(recruiter) { ;
__p += '\r\n\t<div>\r\n\t\t';
 _.each(recruiter.attachments, function(attachment) { ;
__p += '\r\n\t\t\t<img src="' +
((__t = ( attachment.url.replace("http:", "https:") )) == null ? '' : __t) +
'" alt="' +
((__t = ( recruiter.title )) == null ? '' : __t) +
'">\r\n\t\t';
 }); ;
__p += '\r\n\t\t<h4>' +
((__t = ( recruiter.title )) == null ? '' : __t) +
'</h4>\r\n\t</div>\r\n';
 }); ;
__p += '\r\n</div>';

}
return __p
};

this["JST"]["src/js/templates/oldTwitterFeed.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<a class="twitter-timeline" href="' +
((__t = ( url )) == null ? '' : __t) +
'" data-widget-id="354403948402208768">Tweets by ' +
((__t = ( handle )) == null ? '' : __t) +
'</a>\r\n<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>';

}
return __p
};

this["JST"]["src/js/templates/twitterFeed.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 _.each(tweets, function(tweet) { ;
__p += '\r\n<p>\r\n\t<small>' +
((__t = ( tweet.date )) == null ? '' : __t) +
'</small>\r\n\t' +
((__t = ( tweet.content )) == null ? '' : __t) +
'\r\n</p>\r\n';
 }); ;


}
return __p
};