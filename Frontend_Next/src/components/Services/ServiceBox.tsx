import { FC, useCallback, useState } from "react";
import { ServiceModel } from "../../utils/Types";
import Modal, { Mode } from "../Modal/Modal";
import { useModal } from "../../hooks/useModal";

type Props = {
  model: ServiceModel;
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
        <div className="services__box_glass">
          <i className="far fa-search"></i>
        </div>
        <span className="services__box_text">{model.title}</span>
      </div>
    </>
  );
};

export default ServiceBox;
