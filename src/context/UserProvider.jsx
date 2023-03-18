import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getCurrentUser, signIn, signOut } from "../services/users";
import { renderView } from "../utils/renderView";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const login = async ({ username, password }) => {
    try {
      const user = await signIn(username, password);
      setUser(user);
    } catch (err) {
      throw err;
    }
  };

  const setUserNull = () => {
    setUser(null);
  };

  const logout = useCallback(() => {
    signOut().then(() => setUser(null));
  });

  useEffect(() => {
    getCurrentUser()
      .then(setUser)
      .finally(() => setLoading(false));
  }, []);

  const state = useMemo(
    () => ({ loading, user, setUserNull, logout, login }),
    [loading, user, setUserNull, logout, login]
  );

  return (
    <UserContext.Provider value={state}>
      {renderView({ ...state, children })}
    </UserContext.Provider>
  );
};

export const useCurrentUser = () => {
  const context = useContext(UserContext);

  if (context === undefined)
    throw new Error("useCurrentUser must be used within a UserProvider");

  return context.user;
};

export const useAuth = () => {
  const context = useContext(UserContext);

  if (context === undefined)
    throw new Error("useAuth must be used within a UserProvider");

  return { logout: context.logout, login: context.login };
};
