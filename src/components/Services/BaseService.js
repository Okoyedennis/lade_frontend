import store from "../../store";

export const authHeader = () => {
  const currentUser = store.getState().user;

  return {
    // "Content-Type": "application/json",
    Authorization:  `Bearer ${currentUser.token}`,
  };
};
