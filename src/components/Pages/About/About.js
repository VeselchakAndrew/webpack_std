import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { setHello } from "../../../store/action";

const About = ({ hello, setHello }) => {
	return (
		<>
			<div>Hello from About</div>
			<Link to="/">Home</Link>
			<br />
			{hello}
			<br />
			<button type="button" onClick={() => setHello("HELLO")}>
				Hello
			</button>
		</>
	);
};

const mapStateToProps = (state) => ({
	hello: state.hello,
});

const mapDispatchToProps = { setHello };

export default connect(mapStateToProps, mapDispatchToProps)(About);
