import { FunctionComponent } from "react";
import Chevron from "../../../assests/chevron.svg";

interface Props {
	email: string;
}

const EmailForm: FunctionComponent<Props> = ({ email }) => {
	return (
		<div className='p-3 flex flex-col justify-center items-center'>
			<div className='flex justify-center'>
				<div className='px-3 m-2 h-8 leading-7 border border-gray-200 rounded-xl text-gray-900 text-sm'>
					Email
				</div>
				<div className='px-3 m-2 h-8 leading-8 text-gray-700 text-sm'>
					Phone
				</div>
			</div>
			<input
				id='name'
				type='text'
				name='email'
				data-testid='team-name'
				// onChange={(e) => handleChange(e.target.value)}
				value={email}
				className='w-80 px-3 m-3 mt-4 h-10 leading-8 focus:outline-purple-500 border border-gray-200 rounded-lg text-gray-900 text-sm'
			/>
			<button className='w-32 mt-3 flex justify-around items-center h-9 px-5 text-white transition-colors duration-150 bg-purple-500 rounded-lg focus:shadow-outline hover:bg-gray-200'>
				<p>Continue</p>
				<svg
					width='9'
					height='13'
					viewBox='0 0 9 13'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M1.27442 1.7929C0.884628 1.40312 0.886754 0.769019 1.27472 0.381054L1.36256 0.293208C1.75252 -0.0967477 2.38215 -0.0993609 2.77663 0.295118L7.86065 5.37914C8.25167 5.77015 8.25513 6.40064 7.86065 6.79512L2.77663 11.8791C2.38562 12.2702 1.75053 12.269 1.36256 11.8811L1.27472 11.7932C0.884764 11.4033 0.881415 10.7744 1.27442 10.3814L5.56864 6.08713L1.27442 1.7929Z'
						fill='white'
					/>
				</svg>
			</button>
			<p className='w-72 text-gray-500 text-xs text-center mt-5'>
				by clicking continue you must agree to near labs{" "}
				<span className='text-blue-700'>Terms & Conditions</span> and{" "}
				<a className='text-blue-700'>Privacy Policy</a>
			</p>
			<hr />
			<p>Already have NEAR account?</p>
			<button>Log in with NEAR</button>
		</div>
	);
};

export default EmailForm;
