'use strict';

angular
	.module('webClient.places')
	.controller('PlacesController', PlacesController);

function PlacesController(PlacesService) {

	this.selectedType = {};
	this.places = [];

	var self = this;

	this.search = function () {
		self.places = PlacesService.query({type: self.selectedType.name});
	};
}