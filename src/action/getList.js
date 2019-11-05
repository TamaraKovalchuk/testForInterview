import axios from 'axios';

export const getList =  () => dispatch => {
  axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
          const allUsers = res.data;
          dispatch({ type: 'FETCH_DATA_LIST_SUCCESS', payload: allUsers });
        })
};

export const getUserData = (userId) => dispatch => {
  axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res => {
          const user = res.data;
          dispatch({ type: 'FETCH_USER_SUCCESS', payload: user });
        })
};


