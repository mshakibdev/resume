import React from 'react'
import Title from '../components/title'
import Details from '../components/details'
import {FaBuffer} from 'react-icons/fa'

const Education = ({data}) => {
	const eduData = data[0].education.map((data, id) => (
		<div key={id}>
			<p>{data.degree}</p>
			<p>
				{data.institute}
				<br />
				{data.session}
			</p>
		</div>
	))
	const trainingData = data[0].training.map((data, id) => (
		<div key={id}>
			<p>{data.course}</p>
			<p>
				<em>{data.institute}</em>
				<br />
				{data.session}
			</p>
		</div>
	))
	return (
		<section className='flex flex-col px-4 sm:flex-row '>
			<div className='py-8 sm:w-1/2 '>
				<Title icon={<FaBuffer size={30} />} title='Education' />
				<Details componentStyle={'text-sm sm:text-xl  py-4'}>{eduData}</Details>
			</div>
			<div className='py-8 sm:w-1/2'>
				<Title icon={<FaBuffer size={30} />} title='Training' />
				<Details componentStyle={'text-sm sm:text-xl  py-4'}>
					{trainingData}
				</Details>
			</div>
		</section>
	)
}

export default Education
