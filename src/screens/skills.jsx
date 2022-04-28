import React from 'react'
import {FaBuffer} from 'react-icons/fa'
import Title from '../components/title'
import Details from '../components/details'

const Skills = ({data}) => {
	// main skill data
	const main_skills = data[0].main_skills.map((data, id) => (
		<li key={id} className='list-disc'>
			{data.skill}
		</li>
	))

	// tool data

	const tools = data[0].tools.map((data, id) => (
		<li key={id} className='list-disc'>
			{data.tool}
		</li>
	))

	return (
		<section className='flex flex-col sm:flex-row px-4'>
			<div className='py-8 sm:w-1/2 '>
				<Title icon={<FaBuffer size={30} />} title='Main Skills' />
				<Details
					componentStyle={'flex justify-center text-left sm:text-xl py-4'}
				>
					<ul>{main_skills}</ul>
				</Details>
			</div>

			<div className='py-8 sm:w-1/2'>
				<Title icon={<FaBuffer size={30} />} title='Tools & Languages' />
				<Details
					componentStyle={
						'flex justify-center text-left sm:text-xl py-4 mx-auto	'
					}
				>
					<ul>{tools}</ul>
				</Details>
			</div>
		</section>
	)
}

export default Skills
