import { FC, useCallback, useState } from "react";
import { ServiceModel } from "../../utils/Types";
import Modal, { Mode } from "../layout/Modal";

type Props = {
	model: ServiceModel;
};

const ServiceBox: FC<Props> = ({ model }) => {
	const [modalState, setModalState] = useState(Mode.HIDE);
	const showModal = useCallback(() => {
		document.getElementsByTagName("html")[0].classList.add("fixed");
		setModalState(Mode.SHOW);
	}, []);
	return (
		<>
			<Modal
				model={model}
				onClose={() => {
					setModalState(Mode.HIDE);
					document
						.getElementsByTagName("html")[0]
						.classList.remove("fixed");
				}}
				mode={modalState}
			/>
			<div
				className="services__box appearance-services-box"
				onClick={showModal}
			>
				<div className="services__box_img">
					<img src="./../public/img/services/web-application.png" />
				</div>
				<div className="services__box_glass">
					<i className="far fa-search"></i>
				</div>
				<span className="services__box_text">{model.title}</span>
			</div>
		</>
	);
};

export default ServiceBox;
