import React, { useState } from "react";
import "./Maps.scss";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import VirusIcon from "../../Assets/virus.png";

import data from "../../Data/marker_data.json";

export default function MArkerMap() {
	const [viewport, setViewport] = useState({
		width: 1000,
		height: 500,
		latitude: 37.7577,
		longitude: -122.4376,
		zoom: 1
	});

	const [country, setCountry] = useState("rest");

	const [showPopup, setPopup] = useState(null);
	const displayMarkers = () => {
		return Object.keys(data)
			.filter(
				loc =>
					typeof data[loc].longitude === "number" &&
					typeof data[loc].latitude === "number" &&
					(country === "china"
						? data[loc].country === "China"
						: data[loc].country !== "China")
			)
			.map((loc, i) => {
				return (
					<Marker
						key={i}
						tracksViewChanges={false}
						latitude={data[loc].latitude}
						longitude={data[loc].longitude}
					>
						<img
							onClick={() => setPopup(data[loc]) && console.log(data[loc])}
							alt="marker"
							src={VirusIcon}
							className="marker"
						/>
					</Marker>
				);
			});
	};

	const displayPopInfo = () => {
		return (
			<div>
				<div>Age: {showPopup["age"]}</div>
				<div>City: {showPopup["city"]}</div>
				<div>
					date of symptoms:{" "}
					{showPopup["date_onset_symptoms"].split(".").join("-")}
				</div>
				<div>
					date admission hospital:{" "}
					{showPopup["date_admission_hospital"].split(".").join("-")}
				</div>
				<div>
					date confirmation:{" "}
					{showPopup["date_confirmation"].split(".").join("-")}
				</div>
			</div>
		);
	};

	return (
		<div className="marker-map">
			<ReactMapGL
				style={{ width: "100vw" }}
				mapboxApiAccessToken="pk.eyJ1Ijoic2FuZGVlcC1jaGFoYWwiLCJhIjoiY2s1OWh0c245MHg4MjNmbGp0d3cyOHk0cyJ9.K-4ymJtHRb2LrDSfhjILZg"
				{...viewport}
				onViewportChange={setViewport}
			>
				{displayMarkers()}
				{showPopup ? (
					<Popup
						onClose={() => setPopup(null)}
						latitude={showPopup.latitude}
						longitude={showPopup.longitude}
					>
						{displayPopInfo()}
					</Popup>
				) : null}
			</ReactMapGL>
			<div className="map-options">
				<div className="notes">
					<div className="header">World Map</div>
					<div>
						data showed on the map is limited beacuse of performance issues!
					</div>
					<div>click on virus icon to view more info(if available)</div>
				</div>

				<select
					onChange={e => {
						if (e.target.value === "china")
							setViewport({
								...viewport,
								latitude: 38.18799899393895,
								longitude: 106.58916803114664,
								zoom: 5
							});
						setCountry(e.target.value);
					}}
				>
					<option value="res">Rest of the World</option>
					<option value="china">China</option>
				</select>
			</div>
		</div>
	);
}
