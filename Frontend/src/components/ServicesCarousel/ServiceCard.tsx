import { FC } from "react";
import { useModal } from "../../hooks/useModal";
import Modal from "../Modal/Modal";
import { ServiceModel } from "../../utils/Types";

type Props = {
  model: ServiceModel;
};

const getIntro = (service: ServiceModel) => {
  const maxLength = 200;
  const idx = service.description.lastIndexOf(".", maxLength);
  return service.description.substring(0, idx + 1);
};

const ServiceCard: FC<Props> = ({ model }) => {
  const [onShowModal, onCloseModal, modalState] = useModal(
    model.title,
    "Service"
  );
  return (
    <>
      <Modal model={model} onClose={onCloseModal} mode={modalState} />
      <div className="crossroad js-toggle-parent" data-breakpoint="1000px">
        <button
          type="button"
          className="more-btn js-toggle-btn u-hide@lg"
        ></button>
        <div className="crossroad__img">
          <img
            src={`./img/services/${model.thumbnail}`}
            alt="Thumbnail služby"
          />
        </div>
        <div className="crossroad__content">
          <h3 className="crossroad__title">{model.title}</h3>
          <div className="crossroad__extra-content">
            <p
              className="crossroad__text"
              dangerouslySetInnerHTML={{ __html: getIntro(model) }}
            ></p>
            <button type="button" className="btn btn-sm" onClick={onShowModal}>
              To mě zajímá
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
