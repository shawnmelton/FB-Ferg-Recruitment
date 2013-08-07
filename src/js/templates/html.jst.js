this["JST"] = this["JST"] || {};

this["JST"]["src/js/templates/meetOurTeam.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div id="slider">\r\n';
 _.each(recruiters, function(recruiter) { ;
__p += '\r\n\t<div>\r\n\t\t<img src="' +
((__t = ( recruiter.url )) == null ? '' : __t) +
'" alt="' +
((__t = ( recruiter.name )) == null ? '' : __t) +
'">\r\n\t\t<h4>' +
((__t = ( recruiter.name )) == null ? '' : __t) +
' : ' +
((__t = ( recruiter.title )) == null ? '' : __t) +
', ' +
((__t = ( recruiter.location )) == null ? '' : __t) +
'</h4>\r\n\t</div>\r\n';
 }); ;
__p += '\r\n</div>';

}
return __p
};

this["JST"]["src/js/templates/twitterFeed.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h3><span>Twitter Feed</span></h3>\r\n<a class="twitter-timeline" href="' +
((__t = ( url )) == null ? '' : __t) +
'" data-widget-id="354403948402208768">Tweets by ' +
((__t = ( handle )) == null ? '' : __t) +
'</a>\r\n<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>';

}
return __p
};