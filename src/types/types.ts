import { REQ_UPDATE_SUCC } from "../Redux/ActionType";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Redux/store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export interface companyListType {
  id: number;
  name: string;
  email: string;
  phone: string;
  Address: string;
  type: string;
}

export interface CompanyState {
  // Your company state shape here
  // isloading: false,
  // companylist: [],
  // companyobj: {},
  // errormessage: "",
  isloading: boolean;
  companylist: companyListType[];
  companyobj: companyListType;
  errormessage: string;
}

export interface RootStateType {
  company: CompanyState;
}

export interface StateProps {
  companystate: CompanyState;
}

export interface DispatchProps {
  loadcompany: (dispatch: any) => void;
}

export interface UpdateRequestType {
  type: typeof REQ_UPDATE_SUCC;
  payload: companyListType;
}
