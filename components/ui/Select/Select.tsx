import React, { forwardRef } from 'react'
import SelectInput, { Props, StylesConfig } from 'react-select'
import s from './Select.module.scss'

interface SelectProps extends Props {
	label?: string
	error?: string
}

const Select = forwardRef<any, SelectProps>(
	({ label, error, ...props }, ref) => {
		return (
			<label className={s.select}>
				{label && <span className={s.select__label}>{label}</span>}
				<SelectInput
					{...props}
					ref={ref}
					styles={styles}
					classNamePrefix="react-select"
					theme={theme => ({
						...theme,
						colors: {
							...theme.colors,
							primary25: 'rgba(6, 70, 254, 0.2)',
							primary: 'var(--primary-color)',
						},
					})}
				/>
				{error && <span className={s.select__error}>{error}</span>}
			</label>
		)
	}
)

Select.displayName = 'Select'

const styles: StylesConfig = {
	control: styles => ({
		...styles,
		backgroundColor: 'transparent',
		height: '35px',
		minHeight: '35px',
		border: '1px solid #85acfd',
	}),
	option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
		...styles,
	}),
	input: styles => ({ ...styles }),
	placeholder: styles => ({ ...styles }),
	singleValue: (styles, { data }) => ({ ...styles, color: 'var(--text-9)' }),
}

export default Select
