import React from "react";
import "./Tables.scss";

import AllCountriesTable from "./AllCountriesTable";

const Tables = props => {
	return (
		<div className="tables">
			<AllCountriesTable
				header="WorldWide"
				data={props.countriesData}
			></AllCountriesTable>
		</div>
	);
};

export default Tables;
