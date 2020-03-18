import React from "react";
import "./NavBar.scss";

const NavBar = props => {
	return (
		<nav className="nav">
			<div className="nav-item">Overview</div>
			<div className="nav-item">Charts</div>
			<div className="nav-item">Map</div>
			<div className="nav-item">News</div>
			<div className="nav-item">About COVID-19</div>
		</nav>
	);
};

export default NavBar;
