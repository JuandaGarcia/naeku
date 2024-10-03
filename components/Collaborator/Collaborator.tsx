import s from './Collaborator.module.scss'

type Props = {
	photo: string
	name: string
	tracks: {
		title: string
		artists: string
	}[]
}
const Collaborator = ({ photo, name, tracks }: Props) => {
	return (
		<div className={s.collaborator}>
			<div className={s.collaborator__profile}>
				<div className={s.collaborator__profile__photo}>
					<img
						src={photo}
						alt={`Foto de ${name}`}
						width={56}
						height={56}
						className={s.collaborator__profile__photo__img}
					/>
				</div>
				<span className={s.collaborator__profile__name}>{name}</span>
			</div>
			<div className={s.collaborator__info}>
				<div className={s.collaborator__info__profile}>
					<div className={s.collaborator__info__profile__photo}>
						<img
							src={photo}
							alt={`Foto de ${name}`}
							width={120}
							height={120}
							className={s.collaborator__info__profile__photo__img}
						/>
					</div>
					<span className={s.collaborator__info__profile__name}>{name}</span>
				</div>
				<div className={s.collaborator__info__tracks}>
					<span className={s.collaborator__info__tracks__title}>
						Algunas de sus pistas más notables
					</span>
					<div>
						{tracks.map(track => (
							<div
								key={track.title}
								className={s.collaborator__info__tracks__track}
							>
								<span className={s.collaborator__info__tracks__track__title}>
									{track.title}
								</span>
								<span className={s.collaborator__info__tracks__track__artists}>
									{track.artists}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Collaborator
