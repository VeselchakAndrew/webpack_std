import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";

import Routes from "./components/Routes/Routes";
import { store } from "./store";

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				Hello!!!
				{renderRoutes(Routes)}
			</div>
		</BrowserRouter>
	</Provider>,
	document.querySelector("#root")
);
