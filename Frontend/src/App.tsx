import "./App.scss";
import "./styles/fontawesome/css/all.css";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";

const App = () => (
	<BrowserRouter>
		<Layout />
	</BrowserRouter>
);

export default App;
