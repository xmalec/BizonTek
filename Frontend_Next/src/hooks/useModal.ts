import { useState, useCallback } from "react";
import { Mode } from "../components/Modal/Modal";
import GAHelper from "../utils/GAHelper";

export const useModal = (name: string, type: string) => {
  const [modalState, setModalState] = useState(Mode.HIDE);
  const onShowModal = useCallback(() => {
    document.getElementsByTagName("html")[0].classList.add("fixed");
    setModalState(Mode.SHOW);
    GAHelper.sendOpenModalEvent(name, type);
  }, [name, type]);
  const onCloseModal = useCallback(() => {
    setModalState(Mode.HIDE);
    document.getElementsByTagName("html")[0].classList.remove("fixed");
    GAHelper.sendCloseModalEvent(name, type);
  }, [name, type]);
  return [onShowModal, onCloseModal, modalState] as const;
};
