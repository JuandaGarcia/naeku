import { SVGProps } from 'react'

const Menu = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={17}
		height={14}
		viewBox="0 0 17 14"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M0.5 1.81481C0.5 1.2412 1.01071 0.777771 1.64286 0.777771H15.3571C15.9893 0.777771 16.5 1.2412 16.5 1.81481C16.5 2.38842 15.9893 2.85185 15.3571 2.85185H1.64286C1.01071 2.85185 0.5 2.38842 0.5 1.81481ZM0.5 6.99999C0.5 6.42638 1.01071 5.96296 1.64286 5.96296H15.3571C15.9893 5.96296 16.5 6.42638 16.5 6.99999C16.5 7.5736 15.9893 8.03703 15.3571 8.03703H1.64286C1.01071 8.03703 0.5 7.5736 0.5 6.99999ZM16.5 12.1852C16.5 12.7588 15.9893 13.2222 15.3571 13.2222H1.64286C1.01071 13.2222 0.5 12.7588 0.5 12.1852C0.5 11.6116 1.01071 11.1481 1.64286 11.1481H15.3571C15.9893 11.1481 16.5 11.6116 16.5 12.1852Z"
			fill="#F6F9FF"
		/>
	</svg>
)

export default Menu
