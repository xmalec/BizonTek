import { FC, useCallback, useState } from "react";
import { EventModel } from "../../utils/Types";
import Modal, { Mode } from "../layout/Modal";

type Props = {
	event: EventModel;
};

const AboutEvent: FC<Props> = ({ event }) => {
	const [modalState, setModalState] = useState(Mode.HIDE);
	const showModal = useCallback(() => {
		setModalState(Mode.SHOW);
	}, []);
	const listStylus = {
		gridRow: "30",
	};
	return (
		<>
			<Modal
				model={event}
				onClose={() => setModalState(Mode.HIDE)}
				mode={modalState}
			/>
			<div className="event" style={listStylus}>
				<div className="event__name">{event.title}</div>
				<div className="event__date">{event.date}</div>
				<button
					className="event__detail btn btn-sm btn-animated"
					onClick={showModal}
				>
					Více
				</button>
				<div className="event__description">
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
					Mauris dolor felis, sagittis at, luctus sed, aliquam non,
					tellus. Phasellus enim erat, vestibulum vel, aliquam a,
					posuere eu, velit. Etiam dictum tincidunt diam. Maecenas
					libero. Morbi leo mi, nonummy eget tristique non, rhoncus
					non leo.
				</div>
				<div className="event__tags">
					<div className="tag">JAVA</div>
					<div className="tag">Bakalářská práce</div>
					<div className="tag">MySQL</div>
				</div>
			</div>
		</>
	);
};

export default AboutEvent;
