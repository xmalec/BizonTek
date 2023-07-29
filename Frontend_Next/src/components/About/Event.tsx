import { FC, useCallback, useState } from "react";
import { EventModel } from "../../utils/Types";
import Modal, { Mode } from "../Shared/Modal";

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
  const [modalState, setModalState] = useState(Mode.HIDE);
  const onShowModal = useCallback(() => {
    document.getElementsByTagName("html")[0].classList.add("fixed");
    setModalState(Mode.SHOW);
  }, []);
  const listStylus = {
    gridRow: `${row}`,
  };
  const showModal =
    event.description !== undefined && event.description.length > 0;
  return (
    <>
      <div className="event-container" style={listStylus}>
        <div className="event">
          <div className="event__name">{event.title}</div>
          <div className="event__date">{event.dateString}</div>
          {showModal && (
            <button
              className="event__detail btn btn-sm btn-animated"
              onClick={onShowModal}
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
          onClose={() => {
            setModalState(Mode.HIDE);
            document.getElementsByTagName("html")[0].classList.remove("fixed");
          }}
          mode={modalState}
        />
      )}
    </>
  );
};

export default AboutEvent;
