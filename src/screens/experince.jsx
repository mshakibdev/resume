import React from 'react'
import {FaBuffer} from 'react-icons/fa'
import Details from '../components/details'
import Title from '../components/title'

const Experience = ({data}) => {
	return (
		<section className='px-4'>
			<div className='py-8'>
				<Title icon={<FaBuffer size={30} />} title='Work Experience' />
				<Details
					componentStyle={
						'flex flex-col text-base items-center text-left sm:flex-row  py-4'
					}
				>
					<div className='flex flex-col  items-center sm:flex-row mx-auto w-3/4 '>
						<div className='py-4 text-base sm:w-1/2 sm:text-xl '>
							<p>{data[0].work_experience[0].working_period}</p>
							<p>{data[0].work_experience[0].company_name}</p>
						</div>
						<div className='w-3/4 text-base pb-4 sm:w-1/2 sm:text-xl '>
							<div>{data[0].work_experience[0].details}</div>
						</div>
					</div>
				</Details>
			</div>
		</section>
	)
}

export default Experience
