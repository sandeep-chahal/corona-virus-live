import React from "react";
import "./Tables.scss";

import AllCountriesTable from "./AllCountriesTable";

const Tables = props => {
	return (
		<div className="tables">
			<AllCountriesTable
				// header="WorldWide"
				// worldWide={props.worldWide}
				// usaData={props.usaData}
				data={props.data}
			></AllCountriesTable>
		</div>
	);
};

export default Tables;
