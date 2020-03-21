import React from "react";
import "./About.scss";

const About = props => {
	return (
		<div className="about">
			<div className="header">About Me</div>
			<p>My Name is Sandeep Chahal. Thanks for checking out this website.</p>
			<p>
				Follow me on Instagram:{" "}
				<a
					target="_blank"
					href="https://www.instagram.com/sandeep_chahal_573/"
					className="btn insta"
				>
					@sandeep_chahal_573
				</a>
			</p>
			<p>
				Linkedin:{" "}
				<a
					target="_blank"
					href="https://www.linkedin.com/in/sandeep-chahal-7678ab162/"
					className="btn linkedin"
				>
					sandeep chahal
				</a>
			</p>
			<a
				href="https://ko-fi.com/sandeep"
				target="_blank"
				className="ko-fi"
				style={{ background: "#e02828" }}
			>
				<img alt="ko-fi logo" src="https://ko-fi.com/img/cup-border.png" />
				<span>Support Me on Ko-fi</span>
			</a>

			<div className="source">Source's</div>
			<p className="links">
				<a target="_blank" href="https://www.worldometers.info/coronavirus/">
					worldometers
				</a>
				<a
					target="_blank"
					href="https://bnonews.com/index.php/2020/02/the-latest-coronavirus-cases/"
				>
					bnonews
				</a>
			</p>
		</div>
	);
};

export default About;
