import React from "react";
import "./NavBar.scss";

const NavBar = props => {
	return (
		<nav className="nav">
			<div className="items">
				<div className="nav-item">Overview</div>
				<div className="nav-item">Charts</div>
				<div className="nav-item">Map</div>
				<div className="nav-item">News</div>
				<div className="nav-item">About COVID-19</div>
				<div class="btn-container"></div>
			</div>
			<a
				href="https://ko-fi.com/sandeep"
				target="_blank"
				className="ko-fi"
				style={{ background: "#e02828" }}
			>
				<img alt="ko-fi logo" src="https://ko-fi.com/img/cup-border.png" />
				<span>Support Me on Ko-fi</span>
			</a>
		</nav>
	);
};

export default NavBar;
