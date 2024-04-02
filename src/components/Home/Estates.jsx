import { useState } from "react";

function Estates() {
	const [isActive, setIsActive] = useState(false);

	return (
		<>
			<div className="container-fluid">
				<h1 className="text-center mt-4">
					Featured <span>Estates</span>
				</h1>
				<div className="estates row mt-4">
					<div className="default row">
						<div className="col-md-3">
							<img
								src="/public/estates/amazon.jpeg"
								alt="Amazon"
								className="img-fluid"
							/>
							<h3>Oakwood Amazone</h3>
						</div>
						<div className="col-md-3">
							<img
								src="/public/estates/maldives.jpeg"
								alt="The Maldives"
								className="img-fluid"
							/>
							<h3>The Maldives</h3>
						</div>
						<div className="col-md-3">
							<img
								src="/public/estates/pavilion.jpeg"
								alt="Pavilion Homes"
								className="img-fluid"
							/>
							<h3>Pavilion Homes</h3>
						</div>
						<div className="col-md-3">
							<img
								src="/public/estates/gardens.jpeg"
								alt="Oakwood Gardens"
								className="img-fluid"
							/>
							<h3>Oakwood Gardens</h3>
						</div>
					</div>
					<div
						className={
							isActive
								? "visible others row"
								: "hidden others row"
						}
					>
						<div className="col-md-3">
							<img
								src="/public/estates/silicon-oasis.jpeg"
								alt="Silicon Oasis"
								className="img-fluid"
							/>
							<h3>Silicon Oasis</h3>
						</div>
						<div className="col-md-3">
							<img
								src="/public/estates/green-island.jpeg"
								alt="Green Island"
								className="img-fluid"
							/>
							<h3>Green Island</h3>
						</div>
						<div className="col-md-3">
							<img
								src="/public/estates/gardens2.jpeg"
								alt="Oakwood Gardens Phase 2"
								className="img-fluid"
							/>
							<h3>Oakwood Gardens Phase 2</h3>
						</div>
						<div className="col-md-3">
							<img
								src="/public/estates/midsprings-park.jpeg"
								alt="Misprings Park"
								className="img-fluid"
							/>
							<h3>Misprings Park</h3>
						</div>
						<div className="col-md-3">
							<img
								src="/public/estates/midsprings-court.jpeg"
								alt="Misprings Court"
								className="img-fluid"
							/>
							<h3>Misprings Court</h3>
						</div>
						<div className="col-md-3">
							<img
								src="/public/estates/skyfall.jpeg"
								alt="Skyfall By Oakwood"
								className="img-fluid"
							/>
							<h3>Skyfall By Oakwood</h3>
						</div>
						<div className="col-md-3">
							<img
								src="/public/estates/umbrella.jpeg"
								alt="Umbrella City"
								className="img-fluid"
							/>
							<h3>Umbrella City</h3>
						</div>
						<div className="col-md-3">
							<img
								src="/public/estates/cascade.jpeg"
								alt="Cascade Voyage Phase 2"
								className="img-fluid"
							/>
							<h3>Cascade Voyage Phase 2</h3>
						</div>
					</div>
					<div
						className={isActive ? "toggle up mb-3" : "toggle mb-3"}
						onClick={() => setIsActive(!isActive)}
					>
						<h2>
							<span>
								<i className="fa-solid fa-angles-down"></i>
							</span>
							View all Our Estates
						</h2>
					</div>
				</div>
			</div>
			<div className="bg-dark p-4 text-white">
				<h1 className="text-center mb-4">
					Our <span>Journals</span>
				</h1>
				<div className="row container-fluid justify-content-around align-items-center">
					<img
						src="/estates/inspect.jpeg"
						alt="Book an inspection"
						className="col-md-5"
					/>
					<div className="text col-md-5 text-center">
						<h1>Why Wait? Join Us And Achieve Something Great</h1>
						<button className="btn btn-orange icon-left mt-4">
							<i className="fa-solid fa-binoculars"></i>
							Book an Inspection
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Estates;
