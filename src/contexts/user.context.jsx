import { createContext, useContext, useEffect, useReducer } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";
import { createAction } from "../utils/reducer/reducer.utils";

const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

const useUserContext = () => {
  return useContext(UserContext);
};

const USER_ACTION_TYPE = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPE.SET_CURRENT_USER:
      return { ...state, loading: false, currentUser: payload };
    default:
      throw new Error(`Unhandled type in ${type} in userReducer`);
  }
};

const INITIALSTATE = {
  currentUser: null,
  loading: true,
};

const UserProvider = ({ children }) => {
  const [{ currentUser, loading }, dispatch] = useReducer(
    userReducer,
    INITIALSTATE
  );

  const setCurrentUser = (user) =>
    dispatch(createAction(USER_ACTION_TYPE.SET_CURRENT_USER, user));

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value = { currentUser, setCurrentUser };
  return (
    <UserContext.Provider value={value}>
      {loading ? <div /> : children}
    </UserContext.Provider>
  );
};

export { useUserContext, UserProvider };
