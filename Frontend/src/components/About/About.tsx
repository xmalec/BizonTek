import { useEffect } from "react";
import useFirestoreCollection from "../../hooks/useFirestoreCollection";
import { EventModel } from "../../utils/Types";
import AboutEvent from "./Event";
import { useEvents } from "../../hooks/useDataLoadProvider";

const About = () => {
	const events: EventModel[] = [
		{
			images: [],
			tags: ["JAVA", "SBAPR"],
			id: "1",
			title: "LabClub",
			date: "léto 2020",
			intro: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Etiam dictum tincidunt diam. Maecenas libero. Morbi leo mi, nonummy eget tristique non, rhoncus non leo.",
			description:
				"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Etiam dictum tincidunt diam. Maecenas libero. Morbi leo mi, nonummy eget tristique non, rhoncus non leo.",
		},
	];
	const storeEvents = useEvents();

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
				<div
					className="line-point appearance-bg-color-text"
					id="y-2022"
				></div>

				<AboutEvent event={events[0]} />
				<div
					className="line-point appearance-bg-color-text"
					id="y-2021"
				></div>
				<AboutEvent event={events[0]} />
			</div>
		</div>
	);
};

export default About;