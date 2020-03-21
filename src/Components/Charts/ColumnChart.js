import React from "react";
import Chart from "react-apexcharts";

const ColumnChart = props => {
	var width = window.innerWidth;
	const state = {
		series: [
			{
				name: "Total Cases",
				data: props.data.map(item => item.total_cases)
			},
			{
				name: "Recovered",
				data: props.data.map(item => item.total_recovered)
			},
			{
				name: "Total Deaths",
				data: props.data.map(item => item.total_deaths)
			}
		],
		options: {
			chart: {
				type: "bar",
				height: width < 650 ? 700 : 350
			},
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: "70%",
					endingShape: "rounded"
				}
			},
			dataLabels: {
				enabled: false
			},
			stroke: {
				show: true,
				width: 2,
				colors: ["transparent"]
			},
			xaxis: {
				categories: props.data.map(item => item.region)
			},
			yaxis: {
				title: {
					text: ""
				}
			},
			fill: {
				opacity: 1
			},
			tooltip: {
				y: {
					formatter: function(val) {
						return val;
					}
				}
			}
		}
	};

	return (
		<div className="column-chart">
			<Chart
				options={state.options}
				series={state.series}
				type="bar"
				width={width < 650 ? 400 : 750}
				height={width < 650 ? 550 : 350}
			/>
		</div>
	);
};

export default ColumnChart;
