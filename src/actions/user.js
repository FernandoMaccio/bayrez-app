export const addCurrentUser = (userInfo) => {
  return {
    type: 'ADD_CURRENT_USER',
    userInfo
  };
}
