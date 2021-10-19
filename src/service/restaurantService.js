import React from 'react';
import axios from 'axios';

export function getRestaurant(restaurantId, callback, errorCallback) {
	axios
		.get(`http://localhost:8080/restaurants/${restaurantId}`)
		.then((response) => {
			callback(response.data);
		})
		.catch((error) => {
			errorCallback(error);
		});
}

export function getOpeningHours(restaurantId, callback, errorCallback) {
	axios
		.get(`http://localhost:8080/restaurants/${restaurantId}/opening-hours`)
		.then((response) => {
			callback(response.data);
		})
		.catch((error) => {
			errorCallback(error);
		});
}
