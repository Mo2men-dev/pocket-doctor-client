import React from "react";
import ReactDOM from "react-dom/client";

import store from "./redux/store.ts";
import { Provider } from "react-redux";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Conditions from "./pages/Conditions.tsx";
import Condition from "./pages/Condition.tsx";
import App from "./App.tsx";

import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/conditions",
		element: <Conditions />,
	},
	{
		path: "/conditions/:id",
		element: <Condition />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
