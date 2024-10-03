'use client'
import Menu from 'components/ui/icons/Menu'
import s from './Nav.module.scss'
import Link from 'next/link'
import Logo from 'components/ui/icons/Logo'
import { useState } from 'react'
import Home from 'components/ui/icons/Home'
import Add from 'components/ui/icons/Add'
import Wallet from 'components/ui/icons/Wallet'
import Statistics from 'components/ui/icons/Statistics'
import Question from 'components/ui/icons/Question'
import Exit from 'components/ui/icons/Exit'
import Sun from 'components/ui/icons/Sun'

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => setIsOpen(!isOpen)

	return (
		<nav className={`${s.nav} ${isOpen && s.open}`}>
			<div className={s.nav__section}>
				<div className={s.nav__section__btn_logo}>
					<button
						className={s.nav__section__btn_logo__button}
						onClick={toggleMenu}
					>
						<Menu />
					</button>
					<Link href="/" className={s.hide}>
						<Logo />
					</Link>
				</div>
				<Link href="/" className={s.nav__section__item}>
					<Home /> <span className={s.hide}>Home</span>
				</Link>
				<Link href="/#new-track" className={s.nav__section__item}>
					<Add /> <span className={s.hide}>Nuevo lanzamiento</span>
				</Link>
				<Link href="/#wallet" className={s.nav__section__item}>
					<Wallet /> <span className={s.hide}>Estado de cuenta</span>
				</Link>
				<Link href="/#statistics" className={s.nav__section__item}>
					<Statistics /> <span className={s.hide}>Ver estadísticas</span>
				</Link>
			</div>
			<div className={s.nav__section}>
				<Link href="/#help" className={s.nav__section__item}>
					<Question /> <span className={s.hide}>Centro de ayuda</span>
				</Link>
				<button className={s.nav__section__item}>
					<Sun /> <span className={s.hide}>Cambiar a modo oscuro</span>
				</button>
				<button className={s.nav__section__item}>
					<Exit /> <span className={s.hide}>Salir</span>
				</button>
				<Link
					href="/#profile"
					className={`${s.nav__section__item} ${s.active}`}
				>
					<img
						src="/img/paola_jara.png"
						alt="Imagen de Paola Jara"
						width={25}
						height={25}
						className={s.nav__section__item__photo}
					/>
					<span className={s.hide}>Perfil</span>
				</Link>
			</div>
		</nav>
	)
}

export default Nav
