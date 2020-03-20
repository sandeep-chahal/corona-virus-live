import React from "react";
import Chart from "react-apexcharts";

const PieChart = props => {
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
			],
			responsive: [
				{
					breakpoint: 480,
					options: {
						chart: {
							width: 200
						},
						legend: {
							position: "bottom"
						}
					}
				}
			]
		}
	};

	return (
		<div className="pie-chart">
			<Chart
				options={state.options}
				series={state.series}
				type="pie"
				width="450"
			/>
			<div className="header">overview</div>
		</div>
	);
};

export default PieChart;
