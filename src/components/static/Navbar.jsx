import "./styles/static.css";
import { useLocation } from "react-router-dom";

function Navbar() {
	const { pathname } = useLocation();

	return (
		<div className="navbar navbar-expand-lg p-3 bg-dark" id="navbar">
			<div className="container-fluid">
				<a href="/" className="navbar-brand">
					<img
						src="/public/Logo.png"
						alt="Oakwood Group"
						className="logo"
					/>
				</a>
				<div className="nav align-items-center">
					<a
						href="/"
						className={
							pathname === "/" ? "nav-link active" : "nav-link"
						}
					>
						Home
					</a>
					<a
						href="/about"
						className={
							pathname === "/about"
								? "nav-link active"
								: "nav-link"
						}
					>
						About
					</a>
					<a
						href="/services"
						className={
							pathname === "/services"
								? "nav-link active"
								: "nav-link"
						}
					>
						Our Services
					</a>
					<a
						href="/estates"
						className={
							pathname === "/estates"
								? "nav-link active"
								: "nav-link"
						}
					>
						Our Estates
					</a>
					<a
						href="/contact"
						className={
							pathname === "/contact"
								? "nav-link active"
								: "nav-link"
						}
					>
						Contact
					</a>
					<button className="btn btn-orange icon-left">
						<i className="fa-solid fa-binoculars"></i>
						Book an Inspection
					</button>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
