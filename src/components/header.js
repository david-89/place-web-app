import React from 'react';

const Header = (props) => {
	return (
		<div className="mt-5">
			<h1>{props.title}</h1>
		</div>
	);
};

export default Header;
