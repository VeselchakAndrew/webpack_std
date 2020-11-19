import Home from "../Pages/Home";
import About from "../Pages/About";
import NotFound from "../Pages/404/NotFound";
import App from "../App/App";

export default [
	{
		component: App,
		routes: [
			{
				component: Home,
				path: "/",
				exact: true,
			},
			{
				component: About,
				path: "/about",
			},
			{
				component: NotFound,
			},
		],
	},
];
