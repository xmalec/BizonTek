import { FC, useCallback, useState } from "react";
import { EventModel } from "../../utils/Types";
import Modal, { Mode } from "../layout/Modal";

type Props = {
	event: EventModel;
};

const AboutEvent: FC<Props> = ({ event }) => {
	const [modalState, setModalState] = useState(Mode.HIDE);
	const showModal = useCallback(() => {
		document.getElementsByTagName("html")[0].classList.add("fixed");
		setModalState(Mode.SHOW);
	}, []);
	const listStylus = {
		gridRow: "30",
	};
	return (
		<>
			<Modal
				model={event}
				onClose={() => {
					setModalState(Mode.HIDE);
					document
						.getElementsByTagName("html")[0]
						.classList.remove("fixed");
				}}
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
				<div className="event__description">{event.description}</div>
				<div className="event__tags">
					{event.tags.map((tag, idx) => (
						<div key={idx} className="tag">
							{tag}
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default AboutEvent;
