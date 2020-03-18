import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Overview from "./Components/Overview/Overview";
import Tables from "./Components/Tables/Tables";

import overviewData from "./Data/overview.json";
import countriesData from "./Data/countries.json";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<NavBar />
				<main>
					<Overview
						totalCases={parseInt(overviewData.total)}
						totalDeaths={parseInt(overviewData.death)}
						totalRecovered={parseInt(overviewData.recovered)}
						totalSerious={parseInt(overviewData.serious)}
					/>
					<Tables countriesData={countriesData} />
				</main>
			</div>
		);
	}
}

export default App;
