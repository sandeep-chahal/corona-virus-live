import React, { useState } from "react";
import "./Updates.scss";
import Collapsible from "react-collapsible";

const Updates = props => {
	if (!props.updates.length) return null;
	return (
		<div className="updates">
			<div className="header">Updates</div>
			<div className="items">
				{props.updates.map(item => (
					<Collapsible className="date collapse" trigger={item.date}>
						{item.logs.map(item => (
							<li className="li">
								{item.title}
								<p className="time">(at {item.time.slice(0, 5)})</p>
								<a href={item.source} target="_blank">
									(Source)
								</a>
							</li>
						))}
					</Collapsible>
				))}
			</div>
		</div>
	);
};

export default Updates;
