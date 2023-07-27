import "./App.scss";
import "./styles/fontawesome/css/all.css";
import "./styles/fontawesome";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import GA4 from "./GA4";

const App = () => (
	<BrowserRouter>
		<GA4 />
		<Layout />
	</BrowserRouter>
);

export default App;
