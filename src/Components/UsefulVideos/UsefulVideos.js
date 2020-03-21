import React from "react";
import "./UsefulVideos.scss";

const UsefulVideos = props => {
	return (
		<div className="useful-video">
			<div className="header">Useful Videos</div>
			<div className="videos">
				<iframe
					title="The Coronavirus Explained & What You Should Do"
					width="560"
					height="315"
					src="https://www.youtube-nocookie.com/embed/BtN-goy9VOY"
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
				<iframe
					title="How soap kills the coronavirus"
					width="560"
					height="315"
					src="https://www.youtube-nocookie.com/embed/-LKVUarhtvE"
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
				<iframe
					title="What Coronavirus Symptoms Look Like, Day By Day"
					width="560"
					height="315"
					src="https://www.youtube-nocookie.com/embed/OOJqHPfG7pA"
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
				<iframe
					title="Coronavirus: how do I know if I'm infected and what happens next?"
					width="560"
					height="315"
					src="https://www.youtube-nocookie.com/embed/2JsWf-2nN1Y"
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
				<iframe
					title="Coronavirus outbreak (covid 19) explained through 3D Medical Animation"
					width="560"
					height="315"
					src="https://www.youtube-nocookie.com/embed/I-Yd-_XIWJg"
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
				<iframe
					title="What This Chart Actually Means for COVID-19"
					width="560"
					height="315"
					src="https://www.youtube-nocookie.com/embed/fgBla7RepXU"
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>
		</div>
	);
};

export default UsefulVideos;
