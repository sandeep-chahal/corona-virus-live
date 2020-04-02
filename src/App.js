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
import Updates from "./Components/Updates/Updates";
import About from "./Components/About/About";
import SideBar from "./Components/SideBar/SideBar";

class App extends React.Component {
	width = window.innerWidth;
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
				const indiaData = this.filter(data.india_data);
				this.setState({
					overview: data.overview,
					death_rate: data.death_rate,
					worldWide,
					usaData,
					indiaData,
					updates: data.updates,
					loading: false
				});
			});
	}
	filter = data => {
		if (!data) return [];
		data = Object.keys(data).map(key => ({ region: key, ...data[key] }));
		data.sort((a, b) => b.total_cases - a.total_cases);
		return data;
	};
	render() {
		if (this.state.loading)
			return (
				<div className="spinner-wrapper">
					<div className="spinner">
						<div className="rect1"></div>
						<div className="rect2"></div>
						<div className="rect3"></div>
						<div className="rect4"></div>
						<div className="rect5"></div>
					</div>
				</div>
			);
		return (
			<div className="App">
				{this.width < 700 ? <SideBar /> : <NavBar />}

				<main>
					<h1>Corona Virus Live Dashboard</h1>
					{!window.location.href.includes("covid-live.netlify.app") ? (
						<span
							className="warning"
							style={{
								fontSize: "1.6rem",
								textAlign: "center",
								display: "block",
								margin: `${this.width < 800 ? "0rem" : "3rem"} auto 0 auto`
							}}
						>
							pls use{" "}
							<a
								style={{ color: "var(--yellow" }}
								href="https://covid-live.netlify.app/"
							>
								covid-live.netlify.app
							</a>{" "}
							from now on.
						</span>
					) : null}
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
							usaData: this.state.usaData,
							indiaData: this.state.indiaData
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
					<Updates updates={this.state.updates} />
					<News />
					<About />
				</main>
			</div>
		);
	}
}

export default App;
