import React from 'react';
import PropTypes from 'prop-types';

export function BoardSpace({className, onClick, value}) {
	function handleClick() {
		if (onClick) {
			onClick();
		}
	}

	return (
		<div className={`board_space${className ? ` ${className}` : ''}`}  onClick={handleClick}>
			<span>{value}</span>
		</div>
	);
}

BoardSpace.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	value: PropTypes.string
};

BoardSpace.defaultProps = {
	value: ''
};
