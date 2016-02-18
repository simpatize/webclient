'use strict';

angular
	.module('webClient.places')
	.controller('PlacesController', PlacesController);

function PlacesController(PlacesService) {
	var self = this;

	self.search_text = "";
	self.places = [];

	self.search = function () {
		self.places = PlacesService.query(self.search_text);
	};
}