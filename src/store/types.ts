import {
  REQUEST_CATS,
  REQUEST_CATS_SUCCESS,
  REQUEST_CATS_FAILED,
  REMOVE_CAT,
} from "./actions/types";

//  @Todo

export interface ICategory {
  id: number;
  name: string;
}
export interface ICats {
  breeds: any[];
  categories: ICategory[];
  height: number;
  id: string;
  url: string;
  width: number;
}

export interface TodoState {
  data: ICats[];
}

export interface RequestCatsSuccessPayload {
  payload: ICats[];
}

export interface RequestCatsFailurePayload {
  error: string;
}

export interface RequestCatsRequest {
  type: typeof REQUEST_CATS;
}

export type RequestCatsSuccess = {
  type: typeof REQUEST_CATS_SUCCESS;
  payload: RequestCatsSuccessPayload;
};

export type RequestCatsFailure = {
  type: typeof REQUEST_CATS_FAILED;
  payload: RequestCatsFailurePayload;
};

export type RemoveCat = {
  type: typeof REMOVE_CAT;
  id: string;
};

export type ActionsTypes =
  | RequestCatsRequest
  | RequestCatsRequest
  | RequestCatsFailure;
