Module.register("MMM-DarkenPhotos", {
	defaults: {
		
	},
	getStyles: function () {
		return ["darkenPhotos.css"];
	},
	start: function() {
		
	},
		
	getDom: function() {
		var element = document.createElement("div")
		element.className = "overlayPhotos"
		element.id = "OVERLAY_PHOTOS"
		return element
	},
})
