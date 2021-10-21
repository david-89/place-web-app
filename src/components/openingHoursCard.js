import React from 'react';
import {Col, Row} from 'react-bootstrap';

const OpeningHoursCard = (props) => {
	const {openingHours} = props;
	return (
		<React.Fragment>
			<Col xs={6} className="col-md-offset-2 mb-3">
				<Col md={6} className="col-md-offset-5 mb-3">
					<Row md={8} className="fs-3">
						<strong>Opening hours</strong>
					</Row>
				</Col>
				<p></p>
				{Object.keys(openingHours).map(function (daySequence, daySequenceIndex) {
					return (
						<React.Fragment key={daySequence}>
							<Col key={daySequence} md={6} className="col-md-offset-6">
								<Row key={daySequenceIndex}>
									<Col key={daySequence} xs={12} md={5}>
										<Row className="fs-4" key={daySequenceIndex}>
											{daySequence}
										</Row>
									</Col>
									<Col key={daySequenceIndex} xs={12} md={5}>
										{openingHours[daySequence].map((shift, index) => {
											return (
												<Row className="fs-4" key={index}>
													{shift}
												</Row>
											);
										})}
									</Col>
									<p></p>
									<p></p>
								</Row>
							</Col>
						</React.Fragment>
					);
				})}
			</Col>
		</React.Fragment>
	);
};

export default OpeningHoursCard;
