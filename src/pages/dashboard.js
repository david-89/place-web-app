import React, {useState} from 'react';
import Header from '../components/Header';
import PlaceDetails from '../components/PlaceDetails';
import {getPlace, getOpeningHours} from '../service/placeService';
import {Button, Col, Form, Row, Container} from 'react-bootstrap';
import OpeningHoursCard from '../components/OpeningHoursCard';
import ErrorComponent from '../components/ErrorComponent';

const Dashboard = () => {
	const [placeName, setPlaceName] = useState('');
	const [addressLine, setAddressLine] = useState('');
	const [averageRating, setAverageRating] = useState('');
	const [showOpeningHours, setShowOpeningHours] = useState(false);
	const [openingHours, setOpeningHours] = useState('');
	const [placeId, setPlaceId] = useState('');
	const [searchErrorMessage, setSearchErrorMessage] = useState('');
	const [placeLoaded, setPlaceLoaded] = useState(false);

	const fetchAndShowOpeningHours = () => {
		getOpeningHours(
			placeId.replace(/\s+$/, ''),
			(response) => {
				setOpeningHours(response.openingHours);
			},
			() => {}
		);
		setShowOpeningHours(!showOpeningHours);
	};

	const fetchPlaceDetails = () => {
		getPlace(
			placeId.replace(/\s+$/, ''),
			(response) => {
				setPlaceName(response.name);
				setAddressLine(response.addressLine);
				setAverageRating(response.averageRating);
				setPlaceLoaded(true);
			},
			() => {
				setPlaceLoaded(false);
				setSearchErrorMessage('Place does not exist');
			}
		);
		if (showOpeningHours) {
			fetchAndShowOpeningHours();
		}
	};

	const openingHoursBtnMessage = !showOpeningHours ? 'Show opening hours' : 'Hide opening hours';

	return (
		<React.Fragment>
			<Header title="Place management UI" />

			<Container className="mt-5">
				<Row>
					<Col xs={6} md={6} className="col-md-offset-3">
						<Row>
							<Form.Group>
								<Form.Control placeholder="Enter place id" value={placeId} onChange={(e) => setPlaceId(e.target.value)} type="text" />
							</Form.Group>
						</Row>
					</Col>
					<Col xs={1}>
						<Button className="btnFormSend" onClick={() => fetchPlaceDetails()}>
							Search
						</Button>
					</Col>
				</Row>
			</Container>

			{placeLoaded ? (
				<React.Fragment>
					<PlaceDetails name={placeName} addressLine={addressLine} averageRating={averageRating} />
					<Button onClick={() => fetchAndShowOpeningHours(placeId)}>{openingHoursBtnMessage}</Button>
				</React.Fragment>
			) : (
				<ErrorComponent message={searchErrorMessage} />
			)}
			{showOpeningHours ? <OpeningHoursCard openingHours={openingHours} /> : null}
		</React.Fragment>
	);
};

export default Dashboard;
