const initialState = {
  user: {},
};

export default(state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CURRENT_USER':
      return {
        ...state,
        user: action.userInfo
      };
    default:
      return state;
  }
}
