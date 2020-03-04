import React from 'react';
import PropTypes from 'prop-types';

const UserItem = props => {
	const { avatar_url, login, html_url } = props.user;

	return (
		<div>
			<div className='card text-center'>
				<img
					src={avatar_url}
					alt='avatar'
					className='round-img'
					style={{ width: '60px' }}
				/>
				<h3>{login}</h3>
				<a href={html_url} className='btn btn-dark btn-sm my-1'>
					more
				</a>
			</div>
		</div>
	);
};

UserItem.propTypes = {
	user: PropTypes.object.isRequired
};

export default UserItem;
