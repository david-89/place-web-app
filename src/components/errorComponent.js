import React from 'react';
import {Col} from 'react-bootstrap';

const ErrorComponent = (props) => {
	return <Col>{props.message}</Col>;
};

export default ErrorComponent;
