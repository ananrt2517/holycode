import {
  RequestCatsFailure,
  RequestCatsFailurePayload,
  RequestCatsRequest,
  RequestCatsSuccess,
  RequestCatsSuccessPayload,
  RemoveCat,
} from "./../types";
import * as actionTypes from "./types";

export const fetchCatsRequest = (): RequestCatsRequest => ({
  type: actionTypes.REQUEST_CATS,
});

export const fetchCatsSuccess = (
  payload: RequestCatsSuccessPayload
): RequestCatsSuccess => ({
  type: actionTypes.REQUEST_CATS_SUCCESS,
  payload,
});

export const fetchCatsFailure = (
  payload: RequestCatsFailurePayload
): RequestCatsFailure => ({
  type: actionTypes.REQUEST_CATS_FAILED,
  payload,
});

export const removeCat = (id: string): RemoveCat => ({
  type: actionTypes.REMOVE_CAT,
  id,
});
