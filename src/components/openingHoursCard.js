import React from 'react';
import {Col, Row, Container} from 'react-bootstrap';

const OpeningHoursCard = (props) => {
	const {openingHours} = props;
	return (
		<React.Fragment>
			<h2>Opening hours</h2>
			<Col>
				{Object.keys(openingHours).map(function (daySequence, daySequenceIndex) {
					return (
						<React.Fragment>
							<Container>
								<Row>
									<Col key={daySequence} xs={6}>
										<Row key={daySequenceIndex}>{daySequence}</Row>
									</Col>
									<Col key={daySequenceIndex} xs={6}>
										{openingHours[daySequence].map((shift, index) => {
											return <Row key={index}>{shift}</Row>;
										})}
									</Col>
									&nbsp; &nbsp; &nbsp;
								</Row>
							</Container>
						</React.Fragment>
					);
				})}
			</Col>
		</React.Fragment>
	);
};

export default OpeningHoursCard;
