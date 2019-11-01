import React from 'react';

const Avatar = () => {
	const list = [1,23,4,5,6,5,6,6,6]

	const array_list = list.map( (lista,i) => {
		return (<div>{list[i]}</div>)
	})

	return (
		<div>
			<h1>Demo Avatar</h1>
			<p>techyons</p>
			{array_list}
		</div>
	)
}

export default Avatar;