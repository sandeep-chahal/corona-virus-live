import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Overview from "./Components/Overview/Overview";
import Tables from "./Components/Tables/Tables";
import MarkerMap from "./Components/Maps/MarkerMap";
import firebase from "./firebase";

class App extends React.Component {
	state = { loading: true };
	componentDidMount() {
		firebase
			.firestore()
			.collection("cororna-virus")
			.doc("data")
			.get()
			.then(snap => {
				const data = snap.data();
				const all_countries = this.filter(snap.data().all_countries);
				this.setState({ ...data, all_countries, loading: false });
			});
	}
	filter = data => {
		data = Object.keys(data).map(key => ({ country: key, ...data[key] }));
		data.sort((a, b) => b.total_cases - a.total_cases);
		return data;
	};
	render() {
		if (this.state.loading) return <div>Loading....</div>;
		return (
			<div className="App">
				<NavBar />
				<main>
					<Overview
						totalCases={parseInt(this.state.overview.CoronavirusCases)}
						totalDeaths={parseInt(this.state.overview.Deaths)}
						totalRecovered={parseInt(this.state.overview.Recovered)}
						totalSerious={parseInt(this.state.overview.serious)}
					/>
					<Tables countriesData={this.state.all_countries} />
					<MarkerMap />
				</main>
			</div>
		);
	}
}

export default App;
