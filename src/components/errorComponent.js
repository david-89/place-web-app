import React from 'react';
import {Col} from 'react-bootstrap';

const ErrorComponent = (props) => {
	return <Col className="fs-3">{props.message}</Col>;
};

export default ErrorComponent;
