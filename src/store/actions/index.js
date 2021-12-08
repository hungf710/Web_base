/*
 *
 * App actions
 *
 */
import {
  SET_AUTHENTICATED,
  LOGOUT,
} from "../constants";

const setAuthenticated = ({ isAuthenticated, profile }) => (
  {
    type: SET_AUTHENTICATED,
    payload: {
      isAuthenticated,
      profile,
    },
  }
);

const logOut = () => ({
  type: LOGOUT,
});
export {
  setAuthenticated,
  logOut,
};
