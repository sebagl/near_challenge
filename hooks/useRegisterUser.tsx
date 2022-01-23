import axios from "axios";
import { useState } from "react";

interface Data {
	id: string;
	fullName: string;
	email: string;
	password: string;
}

export const useRegisterUser = (userData: Data): void => {
	const { id, fullName, email, password } = userData;
	const register = (id, name, email, password) => async (dispatch) => {
		try {
			dispatch({
				type: "USER_REGISTER_REQUEST",
			});

			const config = {
				headers: {
					"Content-type": "application/json",
				},
			};

			const { data } = await axios.post(
				"http://localhost:4000/users/",
				{ id, fullName, email, password },
				config
			);

			dispatch({
				type: "USER_REGISTER_SUCCESS",
				payload: data,
			});

			dispatch({
				type: "USER_LOGIN_SUCCESS",
				payload: data,
			});

			localStorage.setItem("userInfo", JSON.stringify(data));
		} catch (error) {
			dispatch({
				type: "USER_REGISTER_FAIL",
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
			});
		}
	};
};
