import { FC, useCallback, useState } from "react";
import { ServiceModel } from "../../utils/Types";
import Modal, { Mode } from "../Modal/Modal";
import { useModal } from "../../hooks/useModal";

type Props = {
  model: ServiceModel;
};

const getIntro = (event: ServiceModel) => {
  const maxLength = 200;
  const idx = event.description.lastIndexOf(".", maxLength);
  return event.description.substring(0, idx + 1);
};

const ServiceBox: FC<Props> = ({ model }) => {
  const [onShowModal, onCloseModal, modalState] = useModal(
    model.title,
    "Service"
  );
  return (
    <>
      <Modal model={model} onClose={onCloseModal} mode={modalState} />
      <div
        className="services__box appearance-services-box"
        onClick={onShowModal}
      >
        <div className="services__box_img">
          <img
            src={`./img/services/${model.thumbnail}`}
            alt="Thumbnail služby"
          />
        </div>
        <div className="services__box_overlay"></div>
        <div className="services__box_glass">
          <i className="far fa-search"></i>
        </div>
        <div className="services__box_text_container">
          <div className="services__box_title">{model.title}</div>
          <div
            className="services__box_description"
            dangerouslySetInnerHTML={{ __html: getIntro(model) }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default ServiceBox;
