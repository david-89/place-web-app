import React, {useEffect, useState} from 'react';
import Header from '../components/header';
import RestaurantDetails from '../components/restaurantDetails';
import {getRestaurant} from '../service/restaurantService';

const Dashboard = () => {
	const [restaurantName, setRestaurantName] = useState('');
	const [addressLine, setAddressLine] = useState('');
	const restaurantId = 'GXvPAor1ifNfpF0U5PTG0w';
	useEffect(() => {
		getRestaurant(restaurantId, (response) => {
			setRestaurantName(response.name);
			setAddressLine(response.address_line);
		});
	}, []);

	return (
		<React.Fragment>
			<Header title="Restaurant management UI" />
			<RestaurantDetails restaurantName={restaurantName} addressLine={addressLine} />
		</React.Fragment>
	);
};

export default Dashboard;
