import React from "react";

const Item = ({ article }) => {
	return (
		<a
			rel="noopener noreferrer"
			className="news-item"
			target="_blank"
			href={article.url}
		>
			<img src={article.urlToImage} alt="news" />
			<div className="about">
				<div className="title">{article.title}</div>
				<div className="desc">{article.description}</div>
			</div>
		</a>
	);
};

export default Item;
