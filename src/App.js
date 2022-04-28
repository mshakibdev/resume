import './App.css'
import {Home, Profile, Skills, Experience, Education, Projects} from './screens'
import {applicantsData} from './store/data'

function App() {
	return (
		<div className='App  mx-auto max-w-screen-lg border-solid border-2 border-neutral-900	'>
			<Home data={applicantsData} />
			<Profile data={applicantsData} />
			<Skills data={applicantsData} />
			<Experience data={applicantsData} />
			<Education data={applicantsData} />
			<Projects data={applicantsData} />
		</div>
	)
}

export default App
