import React from 'react';
import {Col, Row} from 'react-bootstrap';

const OpeningHoursCard = (props) => {
	const {openingHours} = props;
	return (
		<React.Fragment>
			<h2>Opening hours</h2>
			{Object.keys(openingHours).map(function (daySequence, daySequenceIndex) {
				return (
					<React.Fragment>
						<Col key={daySequence} xs={6}>
							<Row key={daySequenceIndex}>{daySequence}</Row>
						</Col>
						<Col key={daySequenceIndex} xs={12}>
							{openingHours[daySequence].map((shift, index) => {
								return <Row key={index}>{shift}</Row>;
							})}
						</Col>
					</React.Fragment>
				);
			})}
		</React.Fragment>
	);
};

export default OpeningHoursCard;
