import React from "react";
import "./News.scss";
import Item from "./Item.js";

class News extends React.Component {
	state = {
		news: null
	};
	componentDidMount() {
		fetch(
			"http://newsapi.org/v2/everything?q=corona&apiKey=e7793d72038d41f497c354452e3e105a"
		).then(res => {
			res.json().then(data => this.setState({ news: data }));
		});
	}

	render() {
		return (
			<div className="news">
				<div className="header">News On Corona Virus</div>
				<div className="news-items">
					{this.state.news
						? this.state.news.articles.map((article, i) => (
								<Item article={article} key={article.publishedAt + i} />
						  ))
						: null}
				</div>
			</div>
		);
	}
}

export default News;
