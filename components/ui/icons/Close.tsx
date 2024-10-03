import { SVGProps } from 'react'

const Close = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={15}
		height={16}
		viewBox="0 0 15 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M15.0011 1.68609L13.4897 0.175781L7.5 6.16547L1.51031 0.175781L0 1.68609L5.98969 7.67578L0 13.6655L1.51031 15.1758L7.5 9.18609L13.4897 15.1758L15 13.6655L9.01031 7.67578L15.0011 1.68609Z"
			fill="#979EA1"
		/>
	</svg>
)
export default Close
