import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { DataSet } from "../utils/Types";
import useFirestoreCollection from "./useFirestoreCollection";
import { ServiceModels } from "../data/ServicesData";

type DataSetState = [DataSet, Dispatch<SetStateAction<DataSet>>];
const DataContext = createContext<DataSetState>(undefined as never);

export const DataLoadProvider: FC<PropsWithChildren> = ({ children }) => {
  const [events] = useFirestoreCollection("events");
  const [services] = useFirestoreCollection("services");
  const dataSetState = useState<DataSet>({ events, services });
  useEffect(() => {
    dataSetState[1]({ events, services });
  }, [dataSetState, events, events.loading, services, services.loading]);
  return (
    <DataContext.Provider value={dataSetState}>{children}</DataContext.Provider>
  );
};

export const useEvents = (): object[] | undefined => {
  return useContext(DataContext)[0].events?.data;
};

export const useServices = (): object[] | undefined => {
  return ServiceModels;
  //return useContext(DataContext)[0].services?.data;
};

export const useGlobalLoading = (): boolean => {
  const state = useContext(DataContext)[0];
  return state.events?.loading === true || state.services?.loading === true;
};
