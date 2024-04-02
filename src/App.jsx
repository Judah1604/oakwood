import Home from "./components/Home/Home";
import Footer from "./components/static/Footer";
import Navbar from "./components/static/Navbar";
import "./styles/base/common.css";

function App() {
	return (
		<>
			<Navbar />
            <Home />
            <Footer />
		</>
	);
}

export default App;
