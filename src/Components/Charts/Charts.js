import React from "react";
import "./Charts.scss";
import DeathChart from "./DeathChart";
import PieChart from "./PieChart";
import SideBarsChart from "./SideBarsChart";

const Charts = props => {
	return (
		<div className="charts">
			<div className="main-header">Charts</div>
			<DeathChart deaths={props.deaths} />
			<PieChart overview={props.overview} />
			<SideBarsChart countries={props.countries} />
		</div>
	);
};

export default Charts;
