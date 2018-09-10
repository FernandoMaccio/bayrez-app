export default(state = {}, action) => {
  switch (action.type) {
    case 'ADD_CURRENT_USER':
      return {
        ...state,
        name: action.name,
        lastName: action.lastName,
        ci: action.ci
      };
    default:
      return state;
  }
}
