import React from 'react';
import {Col} from 'react-bootstrap';
import {Rating} from 'react-simple-star-rating';

const RestaurantDetails = (props) => {
	return (
		<React.Fragment>
			<Col xs={6} className="col-md-offset-3 mb-4">
				<h2>{props.restaurantName}</h2>
				<p className="fs-4">{props.addressLine}</p>
				<Rating ratingValue={props.averageRating} stars={5} transition={true} />
			</Col>
		</React.Fragment>
	);
};

export default RestaurantDetails;
