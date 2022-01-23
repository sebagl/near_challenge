import { FunctionComponent } from "react";

interface Props {
	title: string | any;
}

const Header: FunctionComponent<Props> = ({ title }) => {
	return (
		<div className='container bg-gray-100 border-y border-gray-200 flex justify-center items-center h-11'>
			<h2>{title}</h2>
		</div>
	);
};

export default Header;
