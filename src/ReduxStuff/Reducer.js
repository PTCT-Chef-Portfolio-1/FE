import {
  LOGIN_START,
  LOGIN_SUCCESS,
  GET_DATA_START,
  GET_DATA_SUCCESS,
  GET_DATA_FAIL,
  ADD_NEW_RECIPE,
  DELETE_LOGIN
  } from "./Actions";

  const userId = localStorage.getItem("userId");
  const initialState = {
    chefInfo: {
      full_name: "",
      location: "",
      phone: "",
      email: "",
      username: "",
      password: ""
    },
    recipe: [
      {
        recipe_name: "",
        prep_time: "",
        cook_time: "",
        servings: "",
        recipe_photo: "",
        ingredients: "",
        instructions: "",
        user_id: userId
      }
    ],
    allRecipes: [
    ],
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_START:
        return {
            ...state,
            loggedIn: true,
            error: ''
        };
        case LOGIN_SUCCESS:
        return {
            ...state,
            loggedIn: false,
            error: ''
        };
        case DELETE_LOGIN:
            return {
                ...state,
                loggedIn: false,
                fetchingData: false,
                error: ''
            }
        case GET_DATA_START:
        return {
            ...state,
            fetchingData: true,
            error: ''
        };
        case GET_DATA_SUCCESS:
        return {
            ...state,
            fetchingData: false,
            friends: action.payload
        };
        case GET_DATA_FAIL:
        return {
            ...state,
            fetchingData: false,
            error: action.payload
        };
        case ADD_NEW_RECIPE:
        return {
            ...state,
            recipe: [...state.recipe, action.payload]
        };
        default:
        return state;
    }
  };