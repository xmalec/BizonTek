import AboutEvent from "./Event";
import { EventModels } from "../../data/EventsData";

const Timeline = () => {
	let row = 3;
	const range = (start: number, end: number) =>
		Array.from(Array(end - start + 1).keys()).map((x) => x + start);
	const events = EventModels.sort(
		(x, y) => x.date.getTime() - y.date.getTime()
	);

	const years = range(
		events[0].date.getFullYear(),
		events[events.length - 1].date.getFullYear()
	).reverse();

	return (
		<>
			{years
				.sort((n1: number, n2: number) => n2 - n1)
				.map((year, key) => {
					const yearEvents = events
						.filter((e) => e.date.getFullYear() === year)
						.reverse();
					row = row + 1;
					if (yearEvents.length > 0) {
						return (
							<>
								{yearEvents.map((e, eKey) => {
									row = row + 1;
									return (
										<>
											<AboutEvent
												event={e}
												key={`aboutEvent__${key}_${eKey}`}
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
									key={`line-point__${key}`}
								></div>
							</>
						);
					}
					return <></>;
				})}
		</>
	);
};

export default Timeline;