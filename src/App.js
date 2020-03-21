import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Overview from "./Components/Overview/Overview";
import Tables from "./Components/Tables/Tables";
import GoogleMap from "./Components/Maps/GoogleMap";
import firebase from "./firebase";
import Charts from "./Components/Charts/Charts";
import News from "./Components/News/News";
import AboutCorona from "./Components/AboutCorona/AboutCorona";
import UsefulVideos from "./Components/UsefulVideos/UsefulVideos";

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
				const worldWide = this.filter(data.all_countries);
				const usaData = this.filter(data.usa_data);
				console.clear();
				console.log(worldWide, usaData);
				this.setState({
					overview: data.overview,
					death_rate: data.death_rate,
					worldWide,
					usaData,
					loading: false
				});
			});
	}
	filter = data => {
		data = Object.keys(data).map(key => ({ region: key, ...data[key] }));
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
						totalActive={parseInt(this.state.overview.active)}
						affected={this.state.worldWide.length}
					/>
					<Tables
						data={{
							worldWide: this.state.worldWide,
							usaData: this.state.usaData
						}}
					/>
					<GoogleMap />
					<Charts
						deaths={this.state.death_rate}
						overview={this.state.overview}
						countries={this.state.worldWide}
					/>
					<AboutCorona />
					<UsefulVideos />
					<News />
				</main>
			</div>
		);
	}
}

export default App;
