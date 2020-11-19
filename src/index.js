import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import Routes from "./components/Routes/Routes";

ReactDOM.render(
	<BrowserRouter>
		<div>
			Hello!!!
			{renderRoutes(Routes)}
		</div>
	</BrowserRouter>,
	document.querySelector("#root")
);
