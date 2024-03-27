import React from "react";

function Navbar() {
	return (
		<div className="navbar navbar-expand-lg p-4 bg-dark">
			<div className="container-fluid">
				<a href="/" className="navbar-brand">
					Oakwood Group
				</a>
				<div className="nav align-items-center">
					<a href="/about" className="nav-link text-white">
						Home
					</a>
					<a href="/about" className="nav-link text-white">
						About
					</a>
					<a href="/about" className="nav-link text-white">
						Our Services
					</a>
					<a href="/about" className="nav-link text-white">
						Our Estates
					</a>
					<a href="/contact" className="nav-link text-white">
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
