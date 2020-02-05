// import { AxiosWithAuth } from '../AxiosWithAuth';
import axios from 'axios';

export const FETCH_CHEFS_START = "FETCH_CHEFS_START";
export const FETCH_CHEFS_SUCCESS = "FETCH_CHEFS_SUCCESS";
export const FETCH_CHEFS_FAIL = "FETCH_CHEFS_FAIL";

export const FETCH_ACHEF_START = "FETCH_ACHEF_START";
export const FETCH_ACHEF_SUCCESS = "FETCH_ACHEF_SUCCESS";
export const FETCH_ACHEF_FAIL = "FETCH_ACHEF_FAIL";

export const POST_NEW_CHEF_START = "POST_NEW_CHEF_START";
export const POST_NEW_CHEF_SUCCESS = "POST_NEW_CHEF_SUCCESS";
export const POST_NEW_CHEF_FAIL = "POST_NEW_CHEF_FAIL";

// export const UPDATE_CHEF_START = "UPDATE_CHEF_START";
// export const UPDATE_CHEF_SUCCESS = "UPDATE_CHEF_SUCCESS";
// export const UPDATE_CHEF_FAIL = "UPDATE_CHEF_FAIL";

// export const DELETE_CHEF_START = "DELETE_CHEF_START";
// export const DELETE_CHEF_SUCCESS = "DELETE_CHEF_SUCCESS";
// export const DELETE_CHEF_FAIL = "DELETE_CHEF_FAIL";

export const getChefs = () => dispatch => {
    dispatch({ type: FETCH_CHEFS_START });
    axios 
        .get(`https://chefs-view.herokuapp.com/users`)
        .then(res => {
            console.log(res);
            dispatch({ type: FETCH_CHEFS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: FETCH_CHEFS_FAIL, payload: err.res });
        });
};

export const getOneChef = id => dispatch => {
    dispatch({ type: FETCH_ACHEF_START });
    axios
        .get(`https://chefs-view.herokuapp.com/users/${id}`)
        .then(res => {
            console.log(res);
            dispatch({ type: FETCH_ACHEF_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: FETCH_ACHEF_FAIL, payload: err.res });
        });
};

export const PostNewChef = data => dispatch => {
    dispatch({ type: POST_NEW_CHEF_START });
    axios  
        .post(`https://chefs-view.herokuapp.com/login/register`, data)
        .then(res => {
            console.log(res);
            dispatch({ type: POST_NEW_CHEF_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: POST_NEW_CHEF_FAIL, payload: err.res });
        });
};






// export const LOGIN_START = 'LOGIN_START';
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
// export const GET_DATA_START = 'GET_DATA_START';
// export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
// export const GET_DATA_FAIL = 'GET_DATA_FAIL';
// export const ADD_NEW_RECIPE = 'ADD_NEW_RECIPE';
// export const DELETE_LOGIN = 'DELETE_LOGIN';

// export const login = credentials => dispatch => {
//     dispatch({ type: LOGIN_START });
//         return AxiosWithAuth() 
//             .post('/login', credentials)
//             .then(res => {
//                 localStorage.setItem('token', res.data.payload);
//                 dispatch({ type: LOGIN_SUCCESS })
//             })
//             .catch(err => {
//                 console.log(err);
//             });
// };

// export const getData = () => dispatch => {
//     dispatch({ type: GET_DATA_START });
//     AxiosWithAuth()
//         .get('/RegisterPage')
//         .then(response => {
//             dispatch({ type: GET_DATA_SUCCESS, payload: response.data });
//         })
//         .catch(error => {
//             dispatch({ type: GET_DATA_FAIL, payload: error.response.error});
//         });
// };

// export const addRecipe = newRecipe => {
//     return {
//         type: ADD_NEW_RECIPE,
//         payload: newRecipe
//     };
// };