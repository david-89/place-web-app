import React, {useEffect, useState} from 'react';
import Header from '../components/header';
import RestaurantDetails from '../components/restaurantDetails';
import {getRestaurant, getOpeningHours} from '../service/restaurantService';
import {Button, Col} from 'react-bootstrap';
import OpeningHoursCard from '../components/openingHoursCard';

const Dashboard = () => {
	const [restaurantName, setRestaurantName] = useState('');
	const [addressLine, setAddressLine] = useState('');
	const [showOpeningHours, setShowOpeningHours] = useState(false);
	const [openingHours, setOpeningHours] = useState('');
	const restaurantId = 'GXvPAor1ifNfpF0U5PTG0w';

	const fetchAndShowOpeningHours = () => {
		if (!openingHours) {
			getOpeningHours(restaurantId, (response) => {
				setOpeningHours(response.openingHours);
			});
		}
		setShowOpeningHours(!showOpeningHours);
	};

	useEffect(() => {
		getRestaurant(restaurantId, (response) => {
			setRestaurantName(response.name);
			setAddressLine(response.addressLine);
		});
	}, []);

	return (
		<React.Fragment>
			<Header title="Restaurant management UI" />
			<RestaurantDetails restaurantName={restaurantName} addressLine={addressLine} />
			<Button onClick={() => fetchAndShowOpeningHours(restaurantId)}>Show opening hours</Button>
			{showOpeningHours ? <OpeningHoursCard openingHours={openingHours} /> : null}
		</React.Fragment>
	);
};

export default Dashboard;
