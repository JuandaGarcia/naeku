'use client'
import Input from 'components/ui/Input/Input'
import s from './Form.module.scss'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import Modal from 'components/ui/Modal/Modal'
import Button from 'components/ui/Button/Button'
import confetti from 'canvas-confetti'

const Form = () => {
	const [openSuccessModal, setOpenSuccessModal] = useState(false)
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<{
		names: string
		lastNames: string
		address: string
		city: string
		postalCode: string
	}>()
	const maxLength = 20

	const onSubmit = handleSubmit(data => {
		setOpenSuccessModal(true)
		confetti({
			particleCount: 25,
			spread: 70,
			origin: { y: 0.6 },
			colors: ['#0646fe'],
		})
		console.table(data)
	})

	const handleClose = () => setOpenSuccessModal(false)

	return (
		<>
			<Modal open={openSuccessModal} handleClose={handleClose}>
				<div className={s.modal}>
					<h3 className={s.modal__title}>¡Felicidades, Paola!</h3>
					<img
						src="/img/modal.png"
						alt="Felicidades!"
						width={282}
						height={150}
					/>
					<p className={s.modal__text}>
						Has completado tu perfil. Ahora estás listo para explorar todo lo
						que necesitas para llevar tu música al siguiente nivel.
					</p>
					<Button variant="secondary" onClick={handleClose}>
						Aceptar
					</Button>
				</div>
			</Modal>
			<form className={s.form} onSubmit={onSubmit}>
				<div className={s.form__content}>
					<Input
						label="Nombres"
						placeholder="Escribe tus nombres"
						maxLength={maxLength}
						{...register('names', {
							required: 'Este campo es requerido',
							maxLength,
						})}
						error={errors.names?.message}
					/>
					<Input
						label="Apellidos"
						placeholder="Escribe tus apellidos"
						maxLength={maxLength}
						{...register('lastNames', {
							required: 'Este campo es requerido',
							maxLength,
						})}
						error={errors.lastNames?.message}
					/>
					<Input
						label="Dirección"
						placeholder="Escribe tu dirección"
						maxLength={maxLength}
						{...register('address', {
							required: 'Este campo es requerido',
							maxLength,
						})}
						error={errors.address?.message}
					/>
					<Input
						label="Ciudad"
						placeholder="Escribe tu ciudad"
						maxLength={maxLength}
						{...register('city', {
							required: 'Este campo es requerido',
							maxLength,
						})}
						error={errors.city?.message}
					/>
					<Input
						label="Código postal"
						placeholder="Escribe tu código postal"
						maxLength={maxLength}
						{...register('postalCode', {
							required: 'Este campo es requerido',
							maxLength,
						})}
						error={errors.postalCode?.message}
					/>
				</div>
				<Button>Guardar cambios</Button>
			</form>
		</>
	)
}

export default Form
