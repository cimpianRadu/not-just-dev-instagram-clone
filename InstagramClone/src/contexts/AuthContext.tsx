import React, {useContext, useEffect} from 'react';
import {CognitoUser} from 'amazon-cognito-identity-js';
import {createContext, ReactNode, useState} from 'react';
import {Auth, Hub} from 'aws-amplify';

type UserType = CognitoUser | null | undefined;

type AuthContextType = {
  user: UserType;
  setUser: React.Dispatch<React.SetStateAction<UserType>>;
};

export const AuthContext = createContext<AuthContextType>({
  user: undefined,
  setUser: () => {},
});

const AuthContextProvider = ({children}: {children: ReactNode}) => {
  const [user, setUser] = useState<UserType>(undefined);

  useEffect(() => {
    const listner = data => {
      const {event} = data.payload;
      console.log('teh user ', user);
      if (user === undefined) {
        setUser(null);
      }

      if (event === 'signOut') {
        setUser(null);
      }
    };
    const hubListener = Hub.listen('auth', listner);

    return () => {
      hubListener();
    };
  }, []);

  useEffect(() => {
    try {
      const checkUser = async () => {
        const authUser = await Auth.currentAuthenticatedUser({
          bypassCache: true,
        });
        setUser(authUser);
      };
      checkUser();
    } catch (error) {
      setUser(null);
    }
  }, []);
  return (
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);
