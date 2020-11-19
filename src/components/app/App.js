import React from "react";
import { renderRoutes } from "react-router-config";

const App = ({ route }) => {
	return (
		<div>
			Hello World form App!!!
			<div>{renderRoutes(route.routes)}</div>
		</div>
	);
};

App.defaulProps = {
	route: null,
};

export default App;
