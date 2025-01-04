import { EventModel } from "../../utils/Types";
import Modal from "../Modal/Modal";
import { useModal } from "../../hooks/useModal";
import { FC } from "react";

type Props = {
  event: EventModel;
  row: number;
};

const getIntro = (event: EventModel) => {
  const maxLength = 200;
  const idx = event.description.lastIndexOf(".", maxLength);
  return event.description.substring(0, idx + 1);
};

const AboutEvent: FC<Props> = ({ event, row }) => {
  const [onShowModal, onCloseModal, modalState] = useModal(
    event.title,
    "Event"
  );
  const listStylus = {
    gridRow: `${row}`,
  };
  const showModal =
    event.description !== undefined && event.description.length > 0;
  return (
    <>
      <div className="event-container" style={listStylus}>
        <div className="event">
          <div className="event__name m-0">{event.title}</div>
          <div className="event__date">{event.dateString}</div>
          {showModal && (
            <button
              className="event__detail btn btn-sm btn-animated"
              onClick={() => onShowModal(modalState)}
              aria-label="Více"
            >
              Více
            </button>
          )}
          <div
            className="event__description"
            dangerouslySetInnerHTML={{ __html: getIntro(event) }}
          ></div>
          {event.tags && (
            <div className="event__tags">
              {event.tags.map((tag, idx) => (
                <div key={idx} className="tag">
                  {tag}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {showModal && (
        <Modal
          model={event}
          onClose={() => onCloseModal(modalState)}
          mode={modalState}
        />
      )}
    </>
  );
};

export default AboutEvent;
