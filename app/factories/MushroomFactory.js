"use strict";

app.factory("MushroomFactory", function($q, $http){
  let getMushrooms = () => {
    let items = [];
    return $q((resolve,reject) => {
      $http.get('https://mushroom-mania-7edc8.firebaseio.com/.json')
      .then((itemObject) => {
        let itemCollection = itemObject.data;
        let mushroomCollection = itemCollection.mushrooms;
        console.log("itemCollection", mushroomCollection);
        for (let item in mushroomCollection) {
          let currentShroom = mushroomCollection[item];
          items.push(currentShroom);
        }
        console.log("items Array", items);
        resolve(items);
      })
      .catch((error) => {
        reject(error);
      });
    });
  };
  return {getMushrooms};
});