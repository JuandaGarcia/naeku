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
import { useTheme } from 'next-themes'

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false)
	const { theme, setTheme } = useTheme()

	const toggleMenu = () => setIsOpen(!isOpen)
	const toggleTheme = () =>
		theme === 'dark' ? setTheme('light') : setTheme('dark')

	return (
		<>
			<header className={s.header}>
				<div className={s.nav__section__btn_logo}>
					<button
						className={s.nav__section__btn_logo__button}
						onClick={toggleMenu}
						aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
					>
						<Menu />
					</button>
					<Link href="/" className={s.hide}>
						<Logo />
					</Link>
				</div>
			</header>
			{isOpen && <div className={s.overlay} onClick={toggleMenu} />}
			<nav className={`${s.nav} ${isOpen && s.open}`}>
				<div className={s.nav__section}>
					<div className={s.nav__section__btn_logo}>
						<button
							className={s.nav__section__btn_logo__button}
							onClick={toggleMenu}
						>
							<Menu />
						</button>
						<Link href="/" className={s.hide} aria-label="Ir a inicio">
							<Logo />
						</Link>
					</div>
					<Link
						href="/"
						className={s.nav__section__item}
						aria-label="Ir a inicio"
					>
						<Home /> <span className={s.hide}>Home</span>
					</Link>
					<Link
						href="/#new-track"
						className={s.nav__section__item}
						aria-label="Nuevo lanzamiento"
					>
						<Add /> <span className={s.hide}>Nuevo lanzamiento</span>
					</Link>
					<Link
						href="/#wallet"
						className={s.nav__section__item}
						aria-label="Estado de cuenta"
					>
						<Wallet /> <span className={s.hide}>Estado de cuenta</span>
					</Link>
					<Link
						href="/#statistics"
						className={s.nav__section__item}
						aria-label="Ver estadísticas"
					>
						<Statistics /> <span className={s.hide}>Ver estadísticas</span>
					</Link>
				</div>
				<div className={s.nav__section}>
					<Link
						href="/#help"
						className={s.nav__section__item}
						aria-label="Centro de ayuda"
					>
						<Question /> <span className={s.hide}>Centro de ayuda</span>
					</Link>
					<button
						className={s.nav__section__item}
						onClick={toggleTheme}
						aria-label="Cambiar tema"
					>
						<Sun />{' '}
						<span className={s.hide}>
							Cambiar a modo {theme === 'dark' ? 'claro' : 'oscuro'}
						</span>
					</button>
					<button className={s.nav__section__item} aria-label="Salir">
						<Exit /> <span className={s.hide}>Salir</span>
					</button>
					<Link
						href="/#profile"
						className={`${s.nav__section__item} ${s.active}`}
						aria-label="Perfil"
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
		</>
	)
}

export default Nav
