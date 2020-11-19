import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

const Home = () => {
	return (
		<>
			<h2>Hello from Home</h2>
			<Link to="/about">About</Link>
		</>
	);
};

export default Home;
