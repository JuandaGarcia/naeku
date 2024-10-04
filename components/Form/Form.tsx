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
import { motion, AnimatePresence } from 'framer-motion'

type Option = {
	value: string
	label: string
}

const Form = () => {
	const [activeTab, setActiveTab] = useState(0)
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
	const {
		register: register2,
		formState: { errors: errors2 },
		handleSubmit: handleSubmit2,
	} = useForm<{
		facebook: string
		instagram: string
		youtube: string
	}>()
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
	const onSubmit2 = handleSubmit2(data => {
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
			<div className={s.tabs}>
				<button
					onClick={() => setActiveTab(0)}
					className={`${s.tabs__button} ${activeTab === 0 ? s.active : ''}`}
				>
					<span className={s.tabs__button__text}>MI PERFIL</span>
					{activeTab === 0 && (
						<motion.div className={s.tabs__button__line} layoutId="underline" />
					)}
				</button>
				<button
					onClick={() => setActiveTab(1)}
					className={`${s.tabs__button} ${activeTab === 1 ? s.active : ''}`}
				>
					<span className={s.tabs__button__text}>
						INFORMACIÓN COMPLEMENTARIA
					</span>
					{activeTab === 1 && (
						<motion.div className={s.tabs__button__line} layoutId="underline" />
					)}
				</button>
			</div>
			<AnimatePresence mode="wait">
				<motion.div
					key={activeTab}
					initial={{ y: 10, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: -10, opacity: 0 }}
					transition={{ duration: 0.2 }}
				>
					{activeTab === 0 ? (
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
									render={({
										field: { onChange, value: formValue, name, ref },
									}) => (
										<Select
											label="País"
											ref={ref}
											name={name}
											value={
												countries.find(({ value }) => value === formValue) || ''
											}
											defaultValue={countries.find(
												({ value }) => value === 'Colombia'
											)}
											options={countries}
											placeholder="Seleccione un país"
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
									render={({
										field: { onChange, value: formValue, name, ref },
									}) => (
										<Select
											ref={ref}
											name={name}
											value={
												regions.find(({ value }) => value === formValue) || ''
											}
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
									render={({
										field: { onChange, value: formValue, name, ref },
									}) => (
										<Select
											ref={ref}
											name={name}
											label="Idioma principal"
											placeholder="Seleccione un idioma"
											defaultValue={languages.find(
												({ value }) => value === 'Español'
											)}
											value={
												languages.find(({ value }) => value === formValue) || ''
											}
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
					) : (
						<form className={s.form} onSubmit={onSubmit2}>
							<div className={s.form__content}>
								<Input
									label="Facebook"
									placeholder="URL de tu perfil en Facebook"
									defaultValue={'https://www.facebook.com/Paolajaramusica'}
									{...register2('facebook', {
										required: 'Este campo es requerido',
									})}
									error={errors2.facebook?.message}
								/>
								<Input
									label="Instagram"
									placeholder="URL de tu perfil en Instagram"
									defaultValue={'https://www.instagram.com/paolajarapj/'}
									{...register2('instagram', {
										required: 'Este campo es requerido',
									})}
									error={errors2.instagram?.message}
								/>
								<Input
									label="Youtube"
									placeholder="URL de tu canal en Youtube"
									defaultValue={'https://www.youtube.com/user/PaolaJaraPJ'}
									{...register2('youtube', {
										required: 'Este campo es requerido',
									})}
									error={errors2.youtube?.message}
								/>
							</div>
							<Button>Guardar cambios</Button>
						</form>
					)}
				</motion.div>
			</AnimatePresence>
		</>
	)
}

export default Form
