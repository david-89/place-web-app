import React, {useState} from 'react';
import Header from '../components/header';
import RestaurantDetails from '../components/restaurantDetails';
import {getRestaurant, getOpeningHours} from '../service/restaurantService';
import {Button, Col, Form, Row, Container} from 'react-bootstrap';
import OpeningHoursCard from '../components/openingHoursCard';
import ErrorComponent from '../components/errorComponent';

const Dashboard = () => {
	const [restaurantName, setRestaurantName] = useState('');
	const [addressLine, setAddressLine] = useState('');
	const [averageRating, setAverageRating] = useState('');
	const [showOpeningHours, setShowOpeningHours] = useState(false);
	const [openingHours, setOpeningHours] = useState('');
	const [restaurantId, setRestaurantId] = useState('');
	const [restaurantSearchErrorMessage, setRestaurantSearchErrorMessage] = useState('');
	const [restaurantLoaded, setRestaurantLoaded] = useState(false);

	const fetchAndShowOpeningHours = () => {
		getOpeningHours(
			restaurantId,
			(response) => {
				setOpeningHours(response.openingHours);
			},
			() => {}
		);
		setShowOpeningHours(!showOpeningHours);
	};

	const fetchRestaurantDetails = () => {
		getRestaurant(
			restaurantId,
			(response) => {
				setRestaurantName(response.name);
				setAddressLine(response.addressLine);
				setAverageRating(response.averageRating);
				setRestaurantLoaded(true);
			},
			() => {
				setRestaurantLoaded(false);
				setRestaurantSearchErrorMessage('Restaurant does not exist');
			}
		);
		if (showOpeningHours) {
			fetchAndShowOpeningHours();
		}
	};

	const openingHoursBtnMessage = !showOpeningHours ? 'Show opening hours' : 'Hide opening hours';

	return (
		<React.Fragment>
			<Header title="Restaurant management UI" />

			<Container className="mt-5">
				<Row>
					<Col xs={6} md={6} className="col-md-offset-3">
						<Row>
							<Form.Group>
								<Form.Control
									placeholder="Enter restaurant id"
									value={restaurantId}
									onChange={(e) => setRestaurantId(e.target.value)}
									type="text"
								/>
							</Form.Group>
						</Row>
					</Col>
					<Col xs={1}>
						<Button className="btnFormSend" onClick={() => fetchRestaurantDetails(restaurantId)}>
							Search
						</Button>
					</Col>
				</Row>
			</Container>

			{restaurantLoaded ? (
				<React.Fragment>
					<RestaurantDetails restaurantName={restaurantName} addressLine={addressLine} averageRating={averageRating} />
					<Button onClick={() => fetchAndShowOpeningHours(restaurantId)}>{openingHoursBtnMessage}</Button>
				</React.Fragment>
			) : (
				<ErrorComponent message={restaurantSearchErrorMessage} />
			)}
			{showOpeningHours ? <OpeningHoursCard openingHours={openingHours} /> : null}
		</React.Fragment>
	);
};

export default Dashboard;
