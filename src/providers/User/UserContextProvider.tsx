import React, { createContext, useEffect, useState, Dispatch } from 'react';

import { useLocalStorage } from '../../hooks/useLocalStorage';

interface User {
  firstName: string;
  lastName: string;
  uid: string | null;
}

interface UserContextProps {
  user: User;
  setUser: Dispatch<any>;
}

const UserContext = createContext({} as UserContextProps);

interface UserContextProviderProps {
  children: JSX.Element;
  user?: User;
}

const UserContextProvider = ({
  children,
  user: providedUser,
}: UserContextProviderProps) => {
  const emptyUser = {
    firstName: '',
    lastName: '',
    uid: null,
  };

  // TODO : PR Opportunity : Remove this by fixing localStorage problem in tests
  // Detect if running tests
  const runningTests =
    // @ts-ignore
    typeof global.it === 'function' ? true : false;
  const defaultUser = providedUser || emptyUser;
  const [data, setData] = useLocalStorage('user', defaultUser);
  // If running tests, use defaultUser because useLocalStorage always returns an empty object while running tests
  const [user, setUser] = useState(runningTests ? defaultUser : data);

  useEffect(() => {
    setData(user);
  }, [setData, user]);

  return (
    <UserContext.Provider value={{ user: user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

const UserContextConsumer = UserContext.Consumer;
export { UserContext, UserContextProvider, UserContextConsumer };
