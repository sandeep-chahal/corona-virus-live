import React from "react";
import "./Maps.scss";

const GoogleMap = props => {
	return (
		<dv className="google-map" id="maps">
			<div className="header">World Map</div>
			<div className="info">
				you can zoom in and click on circle to get more info...
			</div>
			<iframe
				className="map"
				title="map"
				src="https://www.google.com/maps/d/embed?mid=1a04iBi41DznkMaQRnICO40ktROfnMfMx"
				width="640"
				height="480"
			></iframe>
		</dv>
	);
};

export default GoogleMap;
