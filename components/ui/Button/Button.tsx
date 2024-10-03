import { ButtonHTMLAttributes } from 'react'
import s from './Button.module.scss'

type TButton = ButtonHTMLAttributes<HTMLButtonElement>
interface Props extends TButton {
	variant?: 'primary' | 'secondary'
}
const Button = ({ children, className, variant, ...props }: Props) => {
	return (
		<button
			{...props}
			className={`${s.button} ${
				variant === 'secondary' ? s.secondary : ''
			} ${className}`}
		>
			{children}
		</button>
	)
}

export default Button
