import { FunctionComponent, useState } from "react";
import Header from "./Header";
import EmailForm from "./EmailForm";

const Signup: FunctionComponent = () => {
	const title = (
		<p className=' font-semibold'>
			<span className='text-purple-500 font-semibold'>Home</span>Page
		</p>
	);
	const [email, setEmail] = useState("");
	return (
		<>
			<Header title={title} />
			<EmailForm email={email} />
		</>
	);
};

export default Signup;
