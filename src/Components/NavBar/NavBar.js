import React from "react";
import "./NavBar.scss";

const NavBar = props => {
	return (
		<nav className="nav">
			<div>
				<a href="#overview" className="nav-item">
					Overview
				</a>
				<a href="#charts" className="nav-item">
					Charts
				</a>
				<a href="#maps" className="nav-item">
					Map
				</a>
				<a href="#news" className="nav-item">
					News
				</a>
				<a href="#updates" className="nav-item">
					Updates
				</a>
				<a href="#about-corona" className="nav-item">
					About COVID-19
				</a>
				<a href="#about" className="nav-item">
					About Me
				</a>
			</div>
			<a
				rel="noopener noreferrer"
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
