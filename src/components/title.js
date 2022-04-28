import React from 'react'
const Title = ({ title, icon}) => {
	return (
		<div className='flex flex-col justify-start items-center mx-auto  sm:flex-row'>
			{icon}
			<p className='text-xl py-4'>{title}</p>
			<div className='h-px w-3/4 sm:w-1/2  bg-black '></div>
		</div>
	)
}

export default Title
