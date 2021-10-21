import axios from 'axios';

export function getPlace(placeId, callback, errorCallback) {
	axios
		.get(`http://localhost:8080/places/${placeId}`)
		.then((response) => {
			callback(response.data);
		})
		.catch((error) => {
			errorCallback(error);
		});
}

export function getOpeningHours(placeId, callback, errorCallback) {
	axios
		.get(`http://localhost:8080/places/${placeId}/opening-hours`)
		.then((response) => {
			callback(response.data);
		})
		.catch((error) => {
			errorCallback(error);
		});
}
