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
					frameBorder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
				<iframe
					title="How soap kills the coronavirus"
					width="560"
					height="315"
					src="https://www.youtube-nocookie.com/embed/-LKVUarhtvE"
					frameBorder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
				<iframe
					title="What Coronavirus Symptoms Look Like, Day By Day"
					width="560"
					height="315"
					src="https://www.youtube-nocookie.com/embed/OOJqHPfG7pA"
					frameBorder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
				<iframe
					title="Coronavirus: how do I know if I'm infected and what happens next?"
					width="560"
					height="315"
					src="https://www.youtube-nocookie.com/embed/2JsWf-2nN1Y"
					frameBorder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
				<iframe
					title="Coronavirus outbreak (covid 19) explained through 3D Medical Animation"
					width="560"
					height="315"
					src="https://www.youtube-nocookie.com/embed/I-Yd-_XIWJg"
					frameBorder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
				<iframe
					title="What This Chart Actually Means for COVID-19"
					width="560"
					height="315"
					src="https://www.youtube-nocookie.com/embed/fgBla7RepXU"
					frameBorder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
				<iframe
					title="The Coronavirus Vaccine Explained | COVID-19"
					width="560"
					height="315"
					src="https://www.youtube-nocookie.com/embed/SSuxVwMkcpA"
					frameBorder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
			</div>
		</div>
	);
};

export default UsefulVideos;
