import React from "react";
import Chart from "react-apexcharts";

const AffectedCountry = props => {
	const state = {
		series: [props.affected, 195 - props.affected],
		options: {
			chart: {
				type: "donut"
			},
			labels: ["Afftected", "Not Affected"],
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
				style={{ marginBottom: "-2rem" }}
				options={state.options}
				series={state.series}
				type="pie"
				width="225"
			/>
			<div
				style={{
					marginBottom: "1rem",
					fontSize: "0.8rem",
					textAlign: "right"
				}}
			>
				Affected/Not Affected Countries
			</div>
		</div>
	);
};

export default AffectedCountry;
