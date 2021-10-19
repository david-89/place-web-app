import React from 'react';

const RestaurantDetails = (props) => {
	return (
		<React.Fragment>
			<div>
				<h2>{props.restaurantName}</h2>
				<p>{props.addressLine}</p>
			</div>
		</React.Fragment>
	);
};

export default RestaurantDetails;
