import React from "react";
import "./Overview.scss";
import AffectedCountry from "../Charts/AffectedCountry";

import CountUp from "react-countup";

const Overview = props => {
	return (
		<div className="overview" id="overview">
			<div className="overview-item total-cases">
				<CountUp
					className="overview-item-count"
					end={props.totalCases}
					duration={1.5}
					separator=","
				/>
				<div className="overview-item-name">Total Cases</div>
			</div>

			<div className="overview-item total-deaths">
				<CountUp
					className="overview-item-count"
					end={props.totalDeaths}
					duration={1.5}
					separator=","
				/>
				<div className="overview-item-name">Total Deaths</div>
			</div>

			<div className="overview-item total-recovered">
				<CountUp
					className="overview-item-count"
					end={props.totalRecovered}
					duration={1.5}
					separator=","
				/>
				<div className="overview-item-name">Total Recovered</div>
			</div>

			<div className="overview-item total-serious">
				<CountUp
					className="overview-item-count"
					end={props.totalSerious}
					duration={1.5}
					separator=","
				/>
				<div className="overview-item-name">Total Serious</div>
			</div>
			<div className="overview-item total-active">
				<CountUp
					className="overview-item-count"
					end={props.totalActive}
					duration={1.5}
					separator=","
				/>
				<div className="overview-item-name">Total Active</div>
			</div>
			<AffectedCountry affected={192} />
		</div>
	);
};

export default Overview;
