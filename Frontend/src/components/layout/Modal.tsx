import { FC, useState } from "react";
import { EventModel, ModalModel } from "../../utils/Types";

type Props = {
	mode: Mode;
	onClose: () => void;
	model: ModalModel;
};

export enum Mode {
	SHOW,
	HIDE,
}

const Modal: FC<Props> = ({ mode, onClose, model }) => {
	return (
		<div
			className={`event-detail modal appearance-bg-color ${
				mode == Mode.SHOW ? "show" : ""
			}`}
		>
			<div className="modal__container">
				<button
					onClick={onClose}
					type="button"
					className="modal__close-button btn btn-sm shadow appearance-bg-color-reverse"
				>
					<i className="fas fa-times"></i>
				</button>
				<div className="modal__img">
					<img src="./../public/img/labclub2.png" />
				</div>
				<div className="modal__body section">
					<span className="h1">{model.title}</span>
					<div className="event__tags">
						{model.tags.map((tag, idx) => (
							<div key={idx} className="tag">
								{tag}
							</div>
						))}
					</div>
					<p className="text-xl">{model.description}</p>
				</div>
			</div>
		</div>
	);
};

export default Modal;
