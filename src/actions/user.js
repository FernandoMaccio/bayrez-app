export const addCurrentUser = (name, lastName, ci) => {
  return {
    type: 'ADD_CURRENT_USER',
    name,
    lastName,
    ci
  };
}
