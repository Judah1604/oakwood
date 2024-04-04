import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/static/Footer";
import Navbar from "./components/static/Navbar";
import "./styles/base/common.css";

function App() {
	return (
		<>
			<Router>
			<Navbar />
				<Routes>
                    <Route path="/" Component={Home} />
                </Routes>
			<Footer />
			</Router>
		</>
	);
}

export default App;
