import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Overview from "./Components/Overview/Overview";

import data from "./data.json";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<NavBar />
				<main>
					<Overview
						totalCases={parseInt(data.total)}
						totalDeaths={parseInt(data.death)}
						totalRecovered={parseInt(data.recovered)}
						totalSerious={parseInt(data.serious)}
					/>
				</main>
			</div>
		);
	}
}

export default App;
