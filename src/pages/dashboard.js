import React, {useEffect, useState} from 'react';
import Header from '../components/header';
import RestaurantDetails from '../components/restaurantDetails';
import {getRestaurant, getOpeningHours} from '../service/restaurantService';
import {Button, Col, Form} from 'react-bootstrap';
import OpeningHoursCard from '../components/openingHoursCard';

const Dashboard = () => {
	const [restaurantName, setRestaurantName] = useState('');
	const [addressLine, setAddressLine] = useState('');
	const [showOpeningHours, setShowOpeningHours] = useState(false);
	const [openingHours, setOpeningHours] = useState('');
	const [restaurantId, setRestaurantId] = useState('');
	const [restaurantLoaded, setRestaurantLoaded] = useState(false);

	// ohGSnJtMIC5nPfYRi_HTAg

	// GXvPAor1ifNfpF0U5PTG0w

	const fetchAndShowOpeningHours = () => {
		if (!openingHours) {
			getOpeningHours(restaurantId, (response) => {
				setOpeningHours(response.openingHours);
			});
		}
		setShowOpeningHours(!showOpeningHours);
	};

	const fetchRestaurantDetails = () => {
		getRestaurant(
			restaurantId,
			(response) => {
				setRestaurantName(response.name);
				setAddressLine(response.addressLine);
				setRestaurantLoaded(true);
			},
			() => {
				setRestaurantLoaded(false);
			}
		);
	};

	/*useEffect(() => {
		getRestaurant(restaurantId, (response) => {
			setRestaurantName(response.name);
			setAddressLine(response.addressLine);
		});
	}, []);*/

	return (
		<React.Fragment>
			<Header title="Restaurant management UI" />

			<Form.Group className="m-0">
				<Form.Control
					rows="3"
					placeholder="Enter restaurant id"
					value={restaurantId}
					onChange={(e) => setRestaurantId(e.target.value)}
					type="text"
				/>
				<Button className="btnFormSend" variant="outline-success" onClick={() => fetchRestaurantDetails(restaurantId)}>
					Search
				</Button>
			</Form.Group>

			{restaurantLoaded ? (
				<React.Fragment>
					<RestaurantDetails restaurantName={restaurantName} addressLine={addressLine} />
					<Button onClick={() => fetchAndShowOpeningHours(restaurantId)}>Show opening hours</Button>
				</React.Fragment>
			) : null}
			{showOpeningHours ? <OpeningHoursCard openingHours={openingHours} /> : null}
		</React.Fragment>
	);
};

export default Dashboard;
