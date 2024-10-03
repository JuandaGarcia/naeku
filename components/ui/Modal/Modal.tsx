import { PropsWithChildren, useEffect, useState } from 'react'
import s from './Modal.module.scss'
import Close from 'components/ui/icons/Close'
import { createPortal } from 'react-dom'

type Props = {
	open: boolean
	handleClose?: () => void
}
const Modal = ({ children, open, handleClose }: PropsWithChildren<Props>) => {
	const [container, setContainer] = useState<Element | null>()

	useEffect(() => {
		setContainer(document.querySelector('#modals'))
	}, [])

	return open && container
		? createPortal(
				<div className={s.modal}>
					<div className={s.modal__overlay} onClick={handleClose} />
					<div className={s.modal__content}>
						<button
							aria-label="Cerrar Modal"
							className={s.modal__content__close}
							onClick={handleClose}
						>
							<Close />
						</button>
						{children}
					</div>
				</div>,
				container
		  )
		: null
}

export default Modal
