import {
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


      default:
        return state;
    }
  };