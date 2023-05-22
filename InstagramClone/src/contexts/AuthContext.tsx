import React, {useContext, useEffect} from 'react';
import {CognitoUser} from 'amazon-cognito-identity-js';
import {createContext, ReactNode, useState} from 'react';
import {Auth, Hub} from 'aws-amplify';

type UserType = CognitoUser | null | undefined;

type AuthContextType = {
  user: UserType;
};

export const AuthContext = createContext<AuthContextType>({
  user: undefined,
});

const AuthContextProvider = ({children}: {children: ReactNode}) => {
  const [user, setUser] = useState<UserType>(undefined);
  const checkUser = async () => {
    const authUser = await Auth.currentAuthenticatedUser({
      bypassCache: true,
    });

    console.log('auth user ', authUser);
    setUser(authUser);
  };

  useEffect(() => {
    const listner = data => {
      const {event} = data.payload;

      if (user === undefined) {
        setUser(null);
      }

      if (event === 'signOut') {
        setUser(null);
      }
      if (event === 'signIn') {
        checkUser();
      }
    };
    const hubListener = Hub.listen('auth', listner);

    return () => {
      hubListener();
    };
  }, []);

  useEffect(() => {
    try {
      checkUser();
    } catch (error) {
      setUser(null);
    }
  }, []);
  return <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);
