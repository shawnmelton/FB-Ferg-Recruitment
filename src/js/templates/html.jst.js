this["JST"] = this["JST"] || {};

this["JST"]["src/js/templates/eventsList.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<table id="events-list-table">\n\t';
 _.each(events, function(event) { ;
__p += '\n\t<tr' +
((__t = ( event.class )) == null ? '' : __t) +
'>\n\t\t<td width="40%">' +
((__t = ( event.location )) == null ? '' : __t) +
'</td>\n\t\t<td width="35%">' +
((__t = ( event.title )) == null ? '' : __t) +
'</td>\n\t\t<td width="25%">' +
((__t = ( event.date )) == null ? '' : __t) +
'</td>\n\t</tr>\n\t';
 }); ;
__p += '\n</table>';

}
return __p
};

this["JST"]["src/js/templates/importantLinks.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 _.each(articles, function(article) { ;
__p += '\n<article>\n\t<h4>' +
((__t = ( article.title )) == null ? '' : __t) +
'</h4>\n\t' +
((__t = ( article.content )) == null ? '' : __t) +
'\n\t<a href="' +
((__t = ( article.url )) == null ? '' : __t) +
'" target="_blank" class="upper">Learn More</a>\n</article>\n';
 }); ;


}
return __p
};

this["JST"]["src/js/templates/meetOurTeam.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div id="slider">\n';
 _.each(recruiters, function(recruiter) { ;
__p += '\n\t<div>\n\t\t<img src="' +
((__t = ( recruiter.url )) == null ? '' : __t) +
'" alt="' +
((__t = ( recruiter.name )) == null ? '' : __t) +
'">\n\t\t<h4>' +
((__t = ( recruiter.name )) == null ? '' : __t) +
' : ' +
((__t = ( recruiter.title )) == null ? '' : __t) +
', ' +
((__t = ( recruiter.location )) == null ? '' : __t) +
'</h4>\n\t</div>\n';
 }); ;
__p += '\n</div>';

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
'</a>\n<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>';

}
return __p
};

this["JST"]["src/js/templates/twitterFeed.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '';

}
return __p
};