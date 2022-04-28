import React from 'react'
import {MdPersonPin} from 'react-icons/md'
import Title from '../components/title'
import Details from '../components/details'

const Profile = ({data}) => {
	return (
		<section className='py-8 px-4'>
			<Title icon={<MdPersonPin size={50} />} title='Profile' />
			<Details componentStyle={'text-left sm:text-xl py-4 mx-auto	w-3/4'}>
				{data[0].profile_details}
			</Details>
		</section>
	)
}

export default Profile
