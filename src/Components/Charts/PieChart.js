import React from "react";
import Chart from "react-apexcharts";

const PieChart = props => {
	var width = window.innerWidth;
	const {
		CoronavirusCases,
		Deaths,
		Recovered,
		serious,
		active
	} = props.overview;
	console.log();
	const state = {
		series: [
			parseInt(CoronavirusCases),
			parseInt(Recovered),
			parseInt(Deaths),
			parseInt(active),
			parseInt(serious)
		],
		options: {
			chart: {
				type: "pie"
			},
			labels: [
				"Total Cases",
				"Total Recovered",
				"Total Death",
				"Total Active",
				"Serious"
			]
		}
	};

	return (
		<div className="pie-chart">
			<Chart
				options={state.options}
				series={state.series}
				type="pie"
				width={width < 650 ? 400 : 450}
				height={width < 650 ? 600 : 450}
			/>
			<div className="header">overview</div>
		</div>
	);
};

export default PieChart;
