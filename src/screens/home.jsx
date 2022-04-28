import React from 'react'
// import ApplicantsPhoto from '../assets/NEW.jpg'
import {FaPhoneAlt} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import Details from '../components/details'

const Home = ({data}) => {
	console.log('Home', data)
	return (
		<section
			id='introduction'
			className='py-8 px-4 bg-zinc-700 text-white sm:w-full mx-auto'
		>
			<Details
				componentStyle={
					'flex flex-col items-center sm:flex-row justify-around '
				}
			>
				<div className='sm:flex  items-center '>
					<div id='photo' className='mb-3 sm:mr-10'>
						<img
							src={data[0].photo}
							className='block mx-auto h-24 w-20 rounded-full'
							alt='photo_of_applicants'
						/>
					</div>
					<div className='sm:ml-10 mx-auto'>
						<p className='text-2xl mb-3 sm:mb-5  sm:text-3xl'>{data[0].name}</p>
						<p className='text-xl mb-3 sm:mb-5 sm:text-2xl'>
							{data[0].designation}
						</p>
					</div>
				</div>
				<div className=' sm:flex flex-col '>
					<div className='flex justify-center mb-3  '>
						<FaPhoneAlt className='mr-4 sm:mr-1' />
						<p className=' sm:text-sm'> {data[0].phone}</p>
					</div>
					<div className='flex justify-end sm:justify-center '>
						<MdEmail className=' mr-4 sm:mr-2' />
						<p className='sm:text-md'>{data[0].mail}</p>
					</div>
				</div>
			</Details>
		</section>
	)
}

export default Home
