define([], function() {
	var Domain = (function() {});
	Domain.prototype = {
		subfolder: null,

		get: function() {
			if(this.subfolder === null) {
				this.subfolder = (location.href.indexOf("ferguson-careers") !== -1) ? "ferguson-careers/" : "";
			}

			return "/"+ this.subfolder;
		}
	};

	return new Domain();
});