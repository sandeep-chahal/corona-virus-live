import React from "react";
import "./AboutCorona.scss";
import CoroanJpg from "../../Assets/corona2.jpg";

const AboutCorona = (props) => {
	return (
		<div className="about-corona" id="about-corona">
			<div className="what">What is Corona Virus</div>
			<div className="info">
				<div>
					Coronavirus disease (COVID-19) is an infectious disease caused by a
					new virus. The disease causes respiratory illness (like the flu) with
					symptoms such as a cough, fever, and in more severe cases, difficulty
					breathing. You can protect yourself by washing your hands frequently,
					avoiding touching your face, and avoiding close contact (1 meter or 3
					feet) with people who are unwell.
				</div>
				<div>
					<img src={CoroanJpg} alt="corona virus" />
					<a
						rel="noopener noreferrer"
						target="_blank"
						href="http://altrincham.today/2020/03/17/news/five-new-cases-coronavirus-confirmed-trafford/"
					>
						Imgage source
					</a>
				</div>
			</div>

			<div className="what">How it spreads</div>
			<div className="info">
				Coronavirus disease spreads primarily through contact with an infected
				person when they cough or sneeze. It also spreads when a person touches
				a surface or object that has the virus on it, then touches their eyes,
				nose, or mouth.
			</div>
			<div className="what">Symptoms</div>
			<div className="info">
				<div className="left">
					People may be sick with the virus for 1 to 14 days before developing
					symptoms. The most common symptoms of coronavirus disease (COVID-19)
					are fever, tiredness, and dry cough. Most people (about 80%) recover
					from the disease without needing special treatment. More rarely, the
					disease can be serious and even fatal. Older people, and people with
					other medical conditions (such as asthma, diabetes, or heart disease),
					may be more vulnerable to becoming severely ill.
				</div>
				<div className="right">
					<div style={{ marginBottom: "1rem", fontSize: "2.2rem" }}>
						People may experience:
					</div>
					<div className="item">cough</div>
					<div className="item">fever</div>
					<div className="item">tiredness</div>
					<div className="item">difficulty breathing (severe cases)</div>
				</div>
			</div>
			<div className="stop">
				<div className="right">
					<img
						alt="covid preventions"
						src="https://media.giphy.com/media/TGXdPOgaor8CSrm42F/giphy.gif"
					/>
				</div>
				<div className="left">
					<div className="header">Prevention</div>
					<div className="header-small">DO</div>
					<ul>
						<li>
							Wash your hands regularly for 20 seconds, with soap and water or
							alcohol-based hand rub
						</li>
						<li>
							Cover your nose and mouth with a disposable tissue or flexed elbow
							when you cough or sneeze
						</li>
						<li>
							Avoid close contact (1 meter or 3 feet) with people who are unwell
						</li>
						<li>
							Stay home and self-isolate from others in the household if you
							feel unwell
						</li>
					</ul>
					<div className="header-small">Dont</div>
					<ul>
						<li>Touch your eyes, nose, or mouth if your hands are not clean</li>
					</ul>
				</div>
			</div>
			<div className="src">Source: Google</div>
		</div>
	);
};

export default AboutCorona;
