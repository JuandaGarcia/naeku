import Banner from 'components/Banner/Banner'
import s from './page.module.scss'
import Profile from 'components/Profile/Profile'
import Form from 'components/Form/Form'

const Home = () => {
	return (
		<div className={s.home}>
			<main className={s.home__main}>
				<Profile />
				<div className={s.home__main__content}>
					<Banner />
					<Form />
				</div>
			</main>
		</div>
	)
}

export default Home
