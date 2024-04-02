import './styles/static.css';

function Navbar() {
	return (
		<div className="navbar navbar-expand-lg p-3 bg-dark" id="navbar">
			<div className="container-fluid">
				<a href="/" className="navbar-brand">
					<img src="/public/Logo.png" alt="Oakwood Group" className="logo" />
				</a>
				<div className="nav align-items-center">
					<a href="/about" className="nav-link">
						Home
					</a>
					<a href="/about" className="nav-link">
						About
					</a>
					<a href="/about" className="nav-link">
						Our Services
					</a>
					<a href="/about" className="nav-link">
						Our Estates
					</a>
					<a href="/contact" className="nav-link">
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
