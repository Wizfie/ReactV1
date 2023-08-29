import React, { useEffect, useState } from "react";
import axios from "axios";

const getUser = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.post("http://localhost:8080/api/auth/login")
			.then((response) => {
				setData(response.data);
			})
			.catch((e) => {
				console.error(e);
			});
	}, []);
	return console.log(data);
};

export default getUser;
