import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Header } from "./components/Header";
import "./styles/index.css";
import { DefaultTemplate } from "./templates/default";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Header />
		<DefaultTemplate>
			<App />
		</DefaultTemplate>
	</React.StrictMode>
);
