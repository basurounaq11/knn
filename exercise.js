//
var exercise = {};

// kNN parameters
roomsMin = 1;
roomsMax = 10;
areaMin = 250;
areaMax = 1700;
roomsRange = roomsMax-roomsMin;
areaRange  = areaMax-areaMin;

exercise.measureDistances = function(rooms,area){
	// ------------------------
	// YOUR CODE
	// ------------------------
	data.forEach(function (residence){
		var deltaRooms = residence.rooms - rooms;
		deltaRooms = deltaRooms/roomsRange;

		var deltaArea = residence.area - area;
		deltaArea = deltaArea/areaRange;

		residence.distance = Math.sqrt(Math.pow(deltaRooms, 2) + Math.pow(deltaArea, 2));
	});	
};

exercise.sortByDistance = function () {
	// ------------------------
	// YOUR CODE
	// ------------------------
	data.sort(function (a,b){
		return a.distance - b.distance;
	});	
};

exercise.guessType = function(k){
	// ------------------------
	// YOUR CODE
	// ------------------------	

	/*
		// data format you need to return
		var guess = {type : "house", count : 2};
		return guess;
	*/

	var types = {apartment: 0, house: 0, flat: 0};
	var nn = data.slice(0,k);

	nn.forEach(function(item){
		if(item.type == 'apartment'){
			types.apartment += 1;
		} else if(item.type == 'house'){
			types.house += 1;
		} else if (item.type == 'flat'){
			types.flat += 1;
		}
	});

	var type = Object.keys(types).reduce(function(a,b){
		return types[a] > types[b] ? a : b;
	});

	return {type: type, count: types[type]};
};

// share work
module.exports = exercise;