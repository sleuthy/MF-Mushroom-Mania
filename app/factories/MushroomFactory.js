"use strict";

app.factory("MushroomFactory", function($q, $http){

	let getMushrooms = () => {
		let items = [];
		return $q((resolve, reject) => {
			$http.get('https://mushroom-mania-7edc8.firebaseio.com/.json')
			.then((itemObject) => {
				let itemCollection = itemObject.data;
				console.log("itemCollection", itemCollection);
				resolve(itemCollection.mushrooms);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};

	return {getMushrooms};
});