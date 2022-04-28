import React from 'react'
import Details from '../components/details'
import Title from '../components/title'
import {FaBuffer} from 'react-icons/fa'

const Projects = ({data}) => {
	const projectList = data[0].projects.map((data, id) => (
		<li key={id} className='list-disc'>
			{data.projectName}
		</li>
	))
	return (
		<section className='py-8 px-4'>
			<div className='py-8 '>
				<Title icon={<FaBuffer size={30} />} title='Projects' />
				<Details
					componentStyle={
						'flex justify-center  text-left sm:text-xl py-4 mx-auto	max-w-xl sm:justify-start'
					}
				>
					<ul>{projectList}</ul>
				</Details>
			</div>
		</section>
	)
}

export default Projects
