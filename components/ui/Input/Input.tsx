import { forwardRef, InputHTMLAttributes } from 'react'
import s from './Input.module.scss'

type TInput = InputHTMLAttributes<HTMLInputElement>

interface Props extends TInput {
	label?: string
	error?: string
}

const Input = forwardRef<HTMLInputElement, Props>(
	({ label, error, className, ...props }, ref) => {
		return (
			<label className={s.input}>
				{label && <span className={s.input__label}>{label}</span>}
				<input
					{...props}
					ref={ref}
					className={`${s.input__element} ${className}`}
				/>
				{error && <span className={s.input__error}>{error}</span>}
			</label>
		)
	}
)

Input.displayName = 'Input'

export default Input
