import Arrow from 'components/icons/Arrow'
import s from './Banner.module.scss'

const Banner = () => {
	return (
		<section className={s.banner}>
			<p className={s.banner__text1}>TU RUTA MUSICAL</p>
			<p className={s.banner__text2}>
				Conviértete en un tiburón, Lleva tu música a la superficie
			</p>
			<a href="#" className={s.banner__cta}>
				<span className={s.banner__cta__content}>
					Ir a mi ruta <Arrow />
				</span>
			</a>
		</section>
	)
}

export default Banner
