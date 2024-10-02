import Banner from 'components/Banner/Banner'
import s from './page.module.scss'
import Profile from 'components/Profile/Profile'

const Home = () => {
	return (
		<div className={s.home}>
			<main className={s.home__main}>
				<Profile />
				<Banner />
			</main>
		</div>
	)
}

export default Home
