import { useEffect } from "react";
import useFirestoreCollection from "../../hooks/useFirestoreCollection";
import { EventModel } from "../../utils/Types";
import AboutEvent from "./Event";
import { useEvents } from "../../hooks/useDataLoadProvider";
import { EventModels } from "../../data/EventsData";

const About = () => {
	const events = EventModels;
	const maxRows = 120;
	const containerStyles = {
		gridTemplateRows: `[first-row] 50px 50px repeat(${maxRows}, auto) 50px 50px [last-row]`,
	};
	const years = [2020, 2021, 2022, 2023, 2024];
	let row = 30;
	return (
		<div className="about">
			<span className="link-anchor" id="section-about"></span>
			<div className="timeline-container section" style={containerStyles}>
				<div className="line-container">
					<div className="top-title">Současnost</div>
					<div className="triangle-up appearance-border-text-bottom"></div>
					<div className="line appearance-border-text"></div>
					<div className="rhombus appearance-border-text"></div>
				</div>
				{years
					.sort((n1: number, n2: number) => n2 - n1)
					.map((year, key) => {
						const yearEvents = events.filter(
							(e) => e.date.getFullYear() === year
						);
						row = row + 1;
						return (
							<>
								{yearEvents.map((e, eKey) => {
									row = row + 1;
									return (
										<>
											<AboutEvent
												event={e}
												key={eKey}
												row={row}
											/>
										</>
									);
								})}
								<div
									className="line-point appearance-bg-color-text"
									id="y-2022"
									data-year={year}
									style={{
										gridRow: `${row + 1}`,
									}}
									key={key}
								></div>
							</>
						);
					})}
			</div>
		</div>
	);
};

export default About;
