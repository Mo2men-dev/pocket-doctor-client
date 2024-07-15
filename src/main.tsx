import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Conditions from "./pages/conditions/Conditions.tsx";
import Condition from "./pages/conditions/Condition.tsx";

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
