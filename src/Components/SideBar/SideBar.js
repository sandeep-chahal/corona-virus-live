import React from "react";
import "./SideBar.scss";
import { slide as Menu } from "react-burger-menu";

const SideBar = props => {
	return (
		<Menu>
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
			<a
				href="https://ko-fi.com/sandeep"
				target="_blank"
				className="ko-fi"
				style={{ background: "#e02828" }}
			>
				<img alt="ko-fi logo" src="https://ko-fi.com/img/cup-border.png" />
				<span>Support Me on Ko-fi</span>
			</a>
		</Menu>
	);
};

export default SideBar;
