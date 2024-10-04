'use client'
import Input from 'components/ui/Input/Input'
import s from './Form.module.scss'
import { Controller, useForm } from 'react-hook-form'
import { useMemo, useState } from 'react'
import Modal from 'components/ui/Modal/Modal'
import Button from 'components/ui/Button/Button'
import confetti from 'canvas-confetti'
import Select from 'components/ui/Select/Select'
import { countriesAndRegions } from 'utils/constants'

type Option = {
	value: string
	label: string
}

const Form = () => {
	const [openSuccessModal, setOpenSuccessModal] = useState(false)
	const {
		register,
		formState: { errors },
		handleSubmit,
		control,
		watch,
		setValue,
	} = useForm<{
		names: string
		lastNames: string
		address: string
		city: string
		postalCode: string
		phone: number
		country: keyof typeof countriesAndRegions
		region: string
		language: string
	}>({
		defaultValues: {
			country: 'Colombia',
			region: 'Cundinamarca',
			language: 'Español',
		},
	})
	const maxLength = 20
	const countries: Option[] = Object.keys(countriesAndRegions).map(country => ({
		value: country,
		label: country,
	}))
	const selectedCountry = watch('country')
	const regions = useMemo(() => {
		if (selectedCountry && selectedCountry in countriesAndRegions) {
			return countriesAndRegions[selectedCountry].map(region => ({
				value: region,
				label: region,
			}))
		}
		return []
	}, [selectedCountry])
	const languages: Option[] = [
		{ value: 'Español', label: 'Español' },
		{ value: 'Inglés', label: 'Inglés' },
		{ value: 'Portugués', label: 'Portugués' },
		{ value: 'Francés', label: 'Francés' },
	]

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
						defaultValue={'Paola'}
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
						defaultValue={'Jara'}
						{...register('lastNames', {
							required: 'Este campo es requerido',
							maxLength,
						})}
						error={errors.lastNames?.message}
					/>
					<Controller
						control={control}
						name="country"
						rules={{ required: 'Este campo es requerido' }}
						defaultValue="Colombia"
						render={({ field: { onChange, value: formValue, name, ref } }) => (
							<Select
								label="País"
								ref={ref}
								name={name}
								value={countries.find(({ value }) => value === formValue) || ''}
								defaultValue={countries.find(
									({ value }) => value === 'Colombia'
								)}
								options={countries}
								onChange={newValue => {
									const { value } = newValue as Option
									onChange(value)
									setValue('region', '')
								}}
								error={errors.country?.message}
							/>
						)}
					/>
					<Controller
						control={control}
						name="region"
						rules={{ required: 'Este campo es requerido' }}
						defaultValue="Cundinamarca"
						render={({ field: { onChange, value: formValue, name, ref } }) => (
							<Select
								ref={ref}
								name={name}
								value={regions.find(({ value }) => value === formValue) || ''}
								defaultValue={regions.find(
									({ value }) => value === 'Cundinamarca'
								)}
								options={regions}
								placeholder="Seleccione una región"
								isDisabled={!selectedCountry}
								label="Departamento / Región"
								onChange={newValue => {
									const { value } = newValue as Option
									onChange(value)
								}}
								error={errors.region?.message}
							/>
						)}
					/>

					<Input
						label="Dirección"
						placeholder="Escribe tu dirección"
						defaultValue="Cl. 185 #17-98, Edificio Victoria"
						{...register('address', {
							required: 'Este campo es requerido',
						})}
						error={errors.address?.message}
					/>
					<Input
						label="Ciudad"
						placeholder="Escribe tu ciudad"
						maxLength={maxLength}
						defaultValue={'Bogotá'}
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
						defaultValue={606}
						{...register('postalCode', {
							required: 'Este campo es requerido',
							maxLength,
						})}
						error={errors.postalCode?.message}
					/>
					<Input
						label="Teléfono"
						placeholder="Escribe tu teléfono"
						type="tel"
						defaultValue={'+57 3122 252 113'}
						{...register('phone', {
							required: 'Este campo es requerido',
						})}
						error={errors.phone?.message}
					/>
					<Controller
						control={control}
						name="language"
						rules={{ required: 'Este campo es requerido' }}
						defaultValue="Español"
						render={({ field: { onChange, value: formValue, name, ref } }) => (
							<Select
								ref={ref}
								name={name}
								label="Idioma principal"
								defaultValue={languages.find(
									({ value }) => value === 'Español'
								)}
								value={languages.find(({ value }) => value === formValue) || ''}
								options={languages}
								onChange={newValue => {
									const { value } = newValue as Option
									onChange(value)
								}}
								error={errors.language?.message}
							/>
						)}
					/>
				</div>
				<Button>Guardar cambios</Button>
			</form>
		</>
	)
}

export default Form
