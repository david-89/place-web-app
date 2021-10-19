import React from 'react';

const RestaurantDetails = (props) => {
	return (
		<div>
			<h2>{props.restaurantName}</h2>
			<p>{props.addressLine}</p>
		</div>
	);
};

export default RestaurantDetails;
