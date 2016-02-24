/*
	Leaflet-grayscaleoverlay - Apply this layer to your map to put a grayscale
	(c) 2016, Chris Wiggins
*/

(function(factory) {
	// Packaging/modules magic dance
	var L;
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['leaflet'], factory);
	} else if (typeof module !== 'undefined') {
		// Node/CommonJS
		L = require('leaflet');
		module.exports = factory(L);
	} else {
		// Browser globals
		if (typeof window.L === 'undefined') {
			throw new Error('Leaflet must be loaded first');
		}
		factory(window.L);
	}
})(function(L) {

	L.GrayscaleOverlay = L.Class.extend({
		initialize: function (latlng) {
		},

		onAdd: function (map) {
			var tilePane = map.getPanes().tilePane;
			
			if(!L.DomUtil.hasClass(tilePane, 'grayscale-overlay')){
				L.DomUtil.addClass(tilePane, 'grayscale-overlay');
			}
		},

		onRemove: function (map) {
			var tilePane = map.getPanes().tilePane
			L.DomUtil.removeClass(tilePane, 'grayscale-overlay');
		},

		_reset: function () {
			L.DomUtil.removeClass(tilePane, 'grayscale-overlay');
		}
	});

	return L.GrayscaleOverlay;
});