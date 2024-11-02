import { FC, useCallback, useState } from "react";
import { ServiceModel } from "../../utils/Types";
import Modal, { Mode } from "../Modal/Modal";
import { useModal } from "../../hooks/useModal";
import { Icons } from "../../utils/Icons";
import SvgIcon from "../Shared/SvgIcon";

type Props = {
  model: ServiceModel;
};

const getIntro = (event: ServiceModel) => {
  const maxLength = 250;
  const idx = event.description.lastIndexOf(" ", maxLength);
  if (idx < event.description.length - 1) {
    return event.description.substring(0, idx) + "...";
  }
  return event.description;
};

const ServiceBox: FC<Props> = ({ model }) => {
  const [onShowModal, onCloseModal, modalState] = useModal(
    model.title,
    "Service"
  );
  return (
    <>
      <div
        className="services__box appearance-services-box"
        onClick={() => onShowModal(modalState)}
      >
        <Modal
          model={model}
          onClose={() => onCloseModal(modalState)}
          mode={modalState}
        />
        <div className="services__box_img">
          <img
            src={`./img/services/${model.thumbnail}`}
            alt="Thumbnail služby"
            loading="lazy"
          />
        </div>
        <div className="services__box_overlay"></div>
        <div className="services__box_glass">
        <SvgIcon name={Icons.Search} />
          {/* <i className="far fa-search"></i> */}
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
