import React from 'react';
import {Col} from 'react-bootstrap';
import StarRating from 'react-bootstrap-star-rating';

const RestaurantDetails = (props) => {
	return (
		<React.Fragment>
			<Col xs={6} className="col-md-offset-3 mb-4">
				<h2>{props.restaurantName}</h2>
				<p className="fs-4">{props.addressLine}</p>
				<StarRating name="react-star-rating" caption="Rate this component!" totalStars={5} />
			</Col>
		</React.Fragment>
	);
};

export default RestaurantDetails;
