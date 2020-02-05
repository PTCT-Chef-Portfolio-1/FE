import {
  // LOGIN_START,
  // LOGIN_SUCCESS,
  // GET_DATA_START,
  // GET_DATA_SUCCESS,
  // GET_DATA_FAIL,
  // ADD_NEW_RECIPE,
  // DELETE_LOGIN
  FETCH_CHEFS_START,
  FETCH_CHEFS_SUCCESS,
  FETCH_CHEFS_FAIL,
  POST_NEW_CHEF_START,
  POST_NEW_CHEF_SUCCESS,
  POST_NEW_CHEF_FAIL,
  FETCH_ACHEF_START,
  FETCH_ACHEF_SUCCESS,
  FETCH_ACHEF_FAIL
  } from "../actions/chefActions";

  const userId = localStorage.getItem("userId");

  const initialState = {
    chefs: [],
    postingChef: false,
    updatingChef: false,
    error: ""
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CHEFS_START:
        return {
            ...state,
        };
        case FETCH_CHEFS_SUCCESS:
        return {
            ...state,
            chefs: action.payload,
            error: ''
        };
        case FETCH_CHEFS_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case FETCH_ACHEF_START:
        return {
            ...state,
        };
        case FETCH_ACHEF_SUCCESS:
        return {
            ...state,
            chefs: action.payload,
            error: ""
        };
        case FETCH_ACHEF_FAIL:
          return {
            ...state,
            error: action.payload
          }
        case POST_NEW_CHEF_START:
        return {
            ...state
        };
        case POST_NEW_CHEF_SUCCESS:
        return {
            ...state,
            chefs: action.payload,
            error: ""
        };
        case POST_NEW_CHEF_FAIL:
          return {
            ...state,
            error: action.payload
          }
        default:
        return state;
    }
  };