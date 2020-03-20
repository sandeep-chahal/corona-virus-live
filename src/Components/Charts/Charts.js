import React from "react";
import "./Charts.scss";
import DeathChart from "./DeathChart";
import PieChart from "./PieChart";
import SideBarsChart from "./SideBarsChart";
import ColumnChart from "./ColumnChart";

const Charts = props => {
	return (
		<div className="charts">
			<div className="main-header">Charts</div>
			<DeathChart deaths={props.deaths} />
			<PieChart overview={props.overview} />
			<SideBarsChart
				horizontal
				data={props.countries.filter((_, i) => i < 11)}
				type="total_cases"
				title="Countries BY Total Cases"
			/>
			<SideBarsChart
				horizontal
				data={[...props.countries]
					.sort((a, b) => b.active_cases - a.active_cases)
					.filter((_, i) => i < 11)}
				type="active_cases"
				title="Countries BY Active Cases"
			/>
			<SideBarsChart
				horizontal={false}
				data={[...props.countries]
					.sort((a, b) => b.total_deaths - a.total_deaths)
					.filter((_, i) => i < 8)}
				type="total_deaths"
				title="Countries BY Total Deaths"
			/>
			<SideBarsChart
				horizontal={false}
				data={[...props.countries]
					.sort((a, b) => b.total_recovered - a.total_recovered)
					.filter((_, i) => i < 8)}
				type="total_recovered"
				title="Countries BY Total Recovered"
			/>
			<ColumnChart data={props.countries.filter((_, i) => i < 11)} />
		</div>
	);
};

export default Charts;
