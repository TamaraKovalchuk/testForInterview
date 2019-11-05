const initialState = {
  allUsers: [],
  oneUser: {},
};

export default function dataList(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_DATA_LIST_SUCCESS':
      return { 
        ...state,
        allUsers: action.payload,
      }

    case 'FETCH_USER_SUCCESS':
      return {
        ...state,
        oneUser: action.payload,
      };
      
    default:
        return state;
  }
}