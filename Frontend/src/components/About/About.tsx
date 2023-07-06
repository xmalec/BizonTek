import { useEffect } from "react";
import useFirestoreCollection from "../../hooks/useFirestoreCollection";
import { EventModel } from "../../utils/Types";
import AboutEvent from "./Event";
import { useEvents } from "../../hooks/useDataLoadProvider";
import { EventModels } from "../../data/EventsData";
import Timeline from "./Timeline";

const About = () => {
	return (
		<div className="about">
			<span className="link-anchor" id="section-about"></span>
			<div className="timeline-container section">
				<div className="line-container">
					<div className="top-title">Současnost</div>
					<div className="triangle-up appearance-border-text-bottom"></div>
					<div className="line appearance-border-text"></div>
					<div className="rhombus appearance-border-text"></div>
				</div>
				<Timeline />
			</div>
		</div>
	);
};

export default About;
