import { Map } from "immutable";
import Globals from "../../utils/globals";
import setupSession from "../../utils/setupSession";

import _ from "lodash";
import { SET_AUTHENTICATED, LOGOUT } from "../constants";

setupSession();
export const initialState = Map({
    isAuthenticated: Globals.isAuthenticated || false,
    profile: Globals.currentUser || {},
    appConfig: Globals.currentUser || {},
});

const appReducer = (state = initialState, action) => {
    let nextState = state;
    const { payload } = action;
    switch (action.type) {
        case SET_AUTHENTICATED:
            nextState = nextState.set(
              "isAuthenticated",
              _.get(payload, "isAuthenticated")
            );
            nextState = nextState.set("profile", _.get(payload, "profile"));
            return nextState;
        case LOGOUT:
            Globals.clear();
            nextState = nextState.set("isAuthenticated", false);
            nextState = nextState.set("profile", {});
            return nextState;
        default:
            return state;
    }
}

export default appReducer;