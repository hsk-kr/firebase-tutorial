import React, {
  useState,
  useCallback,
  useEffect,
  useContext,
  createContext,
} from 'react';
import { auth } from '../firebase';

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  const signIn = useCallback(async (email, password) => {
    await auth.signInWithEmailAndPassword(email, password);
  }, []);

  const signUp = useCallback(async (email, password) => {
    await auth.createUserWithEmailAndPassword(email, password);
  }, []);

  const signOut = useCallback(async () => {
    await auth.signOut();
  }, []);

  const updatePassword = useCallback(
    async (password) => {
      await currentUser.updatePassword(password);
    },
    [currentUser]
  );

  const value = {
    currentUser,
    signIn,
    signUp,
    signOut,
    updatePassword,
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={value}>
      {currentUser !== undefined && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
