import { useState, useCallback } from "react";
import { Mode } from "../components/Modal/Modal";
import GAHelper from "../utils/GAHelper";

export const useModal = (name: string, type: string) => {
  const [modalState, setModalState] = useState(Mode.HIDE);
  const onShowModal = useCallback((state: Mode) => {
    console.log("onShowModal");
    console.log(state);
    if(state === Mode.SHOW) return;
    document.getElementsByTagName("html")[0].classList.add("fixed");
    setModalState(Mode.SHOW);
    GAHelper.sendOpenModalEvent(name, type);
  }, [name, type]);
  const onCloseModal = useCallback((state: Mode) => {
    console.log("onCloseModal");
    console.log(state);
    if(state === Mode.HIDE) return;
    setModalState(Mode.HIDE);
    document.getElementsByTagName("html")[0].classList.remove("fixed");
    GAHelper.sendCloseModalEvent(name, type);
  }, [name, type]);
  return [onShowModal, onCloseModal, modalState] as const;
};
