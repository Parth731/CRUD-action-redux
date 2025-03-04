import { companyListType } from "../types/types";

export const MAKE_REQ = "MAKE_REQ";
export const REQ_GETALL_SUCC = "REQ_GETALL_SUCC";
export const REQ_GETALL_FAIL = "REQ_GETALL_FAIL";

export const OPEN_POPUP = "OPEN_POPUP";
export const REQ_ADD_SUCC = "REQ_ADD_SUCC";
export const REQ_UPDATE_SUCC = "REQ_UPDATE_SUCC";
export const REQ_DELETE_SUCC = "REQ_DELETE_SUCC";

export const REQ_GETBYCODE_SUCC = "REQ_GETBYCODE_SUCC";

const UPDATE_COMPANY = "UPDATE_COMPANY";

export interface UpdateCompanyAction {
  type: typeof UPDATE_COMPANY;
  payload: companyListType;
}
