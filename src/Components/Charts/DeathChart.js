import React from "react";
import Chart from "react-apexcharts";

const DeathCharts = props => {
	var width = window.innerWidth;
	const state = {
		options: {
			chart: {
				id: "basic-bar",
				type: "datetime"
			},
			xaxis: {
				categories: Object.keys(props.deaths),
				type: "datetime"
			}
		},
		series: [
			{
				type: "column",
				name: "deaths",
				data: Object.values(props.deaths)
			}
		]
	};
	return (
		<div className="death-chart">
			<Chart
				options={state.options}
				series={state.series}
				type="line"
				width={width < 650 ? 350 : 450}
			/>
			<div className="header">Total Deaths</div>
		</div>
	);
};

export default DeathCharts;
