import React, {useState} from 'react';
import Header from '../components/header';
import RestaurantDetails from '../components/restaurantDetails';
import {getRestaurant, getOpeningHours} from '../service/restaurantService';
import {Button, Col, Form, Row, Container} from 'react-bootstrap';
import OpeningHoursCard from '../components/openingHoursCard';

const Dashboard = () => {
	const [restaurantName, setRestaurantName] = useState('');
	const [addressLine, setAddressLine] = useState('');
	const [showOpeningHours, setShowOpeningHours] = useState(false);
	const [openingHours, setOpeningHours] = useState('');
	const [restaurantId, setRestaurantId] = useState('');
	const [restaurantLoaded, setRestaurantLoaded] = useState(false);

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
					<RestaurantDetails restaurantName={restaurantName} addressLine={addressLine} />
					<Button onClick={() => fetchAndShowOpeningHours(restaurantId)}>Show opening hours</Button>
				</React.Fragment>
			) : null}
			{showOpeningHours ? <OpeningHoursCard openingHours={openingHours} /> : null}
		</React.Fragment>
	);
};

export default Dashboard;
