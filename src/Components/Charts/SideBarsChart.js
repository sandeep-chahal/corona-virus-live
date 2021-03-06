import React from "react";
import Chart from "react-apexcharts";

const SideBarsChart = props => {
	var width = window.innerWidth;
	const state = {
		series: [
			{
				data: props.data.map(item => item[props.type])
			}
		],
		options: {
			chart: {
				type: "bar",
				height: width < 650 ? 500 : 380
			},
			plotOptions: {
				bar: {
					barHeight: "100%",
					distributed: width < 650 ? false : true,
					horizontal: props.horizontal,
					dataLabels: {
						position: "bottom"
					}
				}
			},
			colors: [
				"#33b2df",
				"#546E7A",
				"#d4526e",
				"#13d8aa",
				"#A5978B",
				"#2b908f",
				"#f9a3a4",
				"#90ee7e",
				"#f48024",
				"#69d2e7"
			],
			dataLabels: {
				enabled: props.horizontal,
				textAnchor: "start",
				style: {
					colors: ["#fff"]
				},
				formatter: function(val, opt) {
					return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
				},
				offsetX: 0,
				dropShadow: {
					enabled: true
				}
			},
			stroke: {
				width: 1,
				colors: ["#fff"]
			},
			xaxis: {
				categories: props.data.map(item => item.region)
			},
			yaxis: {
				labels: {
					show: false
				}
			},
			title: {
				text: props.title,
				align: "center",
				floating: true
			},
			subtitle: {
				text: "Category Names as DataLabels inside bars",
				align: "center"
			},
			tooltip: {
				theme: "dark",
				x: {
					show: false
				},
				y: {
					title: {
						formatter: function() {
							return "";
						}
					}
				}
			}
		}
	};

	return (
		<div className="pie-chart">
			<Chart
				options={state.options}
				series={state.series}
				type="bar"
				width={width < 650 ? 325 : 500}
				height={width < 650 ? 450 : 350}
			/>
		</div>
	);
};

export default SideBarsChart;
