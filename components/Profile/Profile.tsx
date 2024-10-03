'use client'
import { useEffect, useState } from 'react'
import s from './Profile.module.scss'
import MotionNumber from 'motion-number'
import ASCII from 'utils/ASCII'
import Collaborator from 'components/Collaborator/Collaborator'
import Camera from 'components/ui/icons/Camera'

const Profile = () => {
	const [minutes, setMinutes] = useState(3785)

	useEffect(() => {
		// Simulate number increment
		const interval = setInterval(() => {
			setMinutes(prev => prev + 3)
		}, 5000)

		// Display ASCII art (See the Console in Browser)!
		ASCII()
		return () => clearInterval(interval)
	}, [])

	return (
		<section className={s.profile}>
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
					<div className={s.profile__photo__camera}>
						<Camera />
					</div>
				</button>
				<p className={s.profile__name}>Paola Jara</p>
				<p className={s.profile__badge}>ARTISTA</p>
			</div>
			<div className={s.profile__summary}>
				<p className={s.profile__subtitle}>Resumen de estadísticas</p>
				<dl className={s.profile__summary__items}>
					<div className={s.profile__summary__items__item}>
						<dt className={s.profile__summary__items__item__label}>
							Minutos escuchados
						</dt>
						<dd className={s.profile__summary__items__item__value}>
							<MotionNumber value={minutes} locales="es" />
						</dd>
					</div>
					<div className={s.profile__summary__items__item}>
						<dt className={s.profile__summary__items__item__label}>
							Pistas de audio
						</dt>
						<dd className={s.profile__summary__items__item__value}>57</dd>
					</div>
					<div className={s.profile__summary__items__item}>
						<dt className={s.profile__summary__items__item__label}>
							Artistas colaboradores
						</dt>
						<dd className={s.profile__summary__items__item__value}>9</dd>
					</div>
				</dl>
			</div>
			<div className={s.profile__collaborators}>
				<p className={s.profile__subtitle}>Colaboradores</p>
				<div className={s.profile__collaborators__items}>
					<Collaborator
						name="Jessi Uribe"
						photo="/img/jessi_uribe.png"
						tracks={[
							{ title: 'La Conquista', artists: 'Jessi Uribe y Paola Jara' },
							{ title: 'Como Si Nada', artists: 'Jessi Uribe y Paola Jara' },
							{ title: 'Amor De Mi Vida', artists: 'Jessi Uribe y Paola Jara' },
						]}
					/>
					<Collaborator
						name="Pipe Bueno"
						photo="/img/pipe_bueno.png"
						tracks={[
							{
								title: 'Usted No Me Olvida',
								artists: 'Joaquin Guiller x Pipe Bueno x Paola Jara x Jhonny R',
							},
							{
								title: 'No Me Digas Que No',
								artists: 'Pipe Bueno x Luis Alfonso',
							},
							{
								title: 'Te Hubieras Ido Antes',
								artists: 'Pipe Bueno',
							},
						]}
					/>
					<Collaborator
						name="Alzate"
						photo="/img/alzate.png"
						tracks={[
							{ title: 'Amor Eterno', artists: 'Alzate x Paola Jara' },
							{ title: 'Voy a Beber', artists: 'Alzate' },
							{ title: 'Maldita Traición', artists: 'Alzate' },
						]}
					/>
				</div>
			</div>
		</section>
	)
}

export default Profile
