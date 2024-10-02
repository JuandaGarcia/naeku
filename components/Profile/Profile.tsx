'use client'
import { useEffect, useState } from 'react'
import s from './Profile.module.scss'
import MotionNumber from 'motion-number'
import ASCII from 'utils/ASCII'

const Profile = () => {
	const [minutes, setMinutes] = useState(3785)

	useEffect(() => {
		// Simulate number increment
		const interval = setInterval(() => {
			setMinutes(prev => prev + 5)
		}, 5000)

		// Display ASCII art (See the Console in Browser)!
		ASCII()
		return () => clearInterval(interval)
	}, [])

	return (
		<div className={s.profile}>
			<h2 className={s.profile__title}>Tu Perfil</h2>
			<div>
				<button className={s.profile__photo}>
					<img
						src="/img/paola_jara.png"
						alt="Foto de Paola Jara"
						width={102}
						height={102}
						className={s.profile__photo__img}
					/>
				</button>
				<p className={s.profile__name}>Paola Jara</p>
				<p className={s.profile__badge}>ARTISTA</p>
			</div>
			<div className={s.profile__summary}>
				<p className={s.profile__subtitle}>Resumen de estadísticas</p>
				<div className={s.profile__summary__items}>
					<div className={s.profile__summary__items__item}>
						<p className={s.profile__summary__items__item__value}>
							<MotionNumber value={minutes} locales="es" />
						</p>
						<p className={s.profile__summary__items__item__label}>
							Minutos escuchados
						</p>
					</div>
					<div className={s.profile__summary__items__item}>
						<p className={s.profile__summary__items__item__value}>57</p>
						<p className={s.profile__summary__items__item__label}>
							Pistas de audio
						</p>
					</div>
					<div className={s.profile__summary__items__item}>
						<p className={s.profile__summary__items__item__value}>9</p>
						<p className={s.profile__summary__items__item__label}>
							Artistas colaboradores
						</p>
					</div>
				</div>
			</div>
			<p className={s.profile__subtitle}>Colaboradores</p>
			<div className={s.profile__collaborators}></div>
		</div>
	)
}

export default Profile
