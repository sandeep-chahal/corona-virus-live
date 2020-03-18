import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Overview from "./Components/Overview/Overview";

import overviewData from "./Data/overview.json";

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
				</main>
			</div>
		);
	}
}

export default App;
