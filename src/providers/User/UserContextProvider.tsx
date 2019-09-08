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

const UserContextProvider = (props: any) => {
  const [data, setData] = useLocalStorage('user', {
    firstName: '',
    lastName: '',
    uid: null,
  });
  const [user, setUser] = useState(data);

  useEffect(() => {
    setData(user);
  }, [setData, user]);

  return (
    <UserContext.Provider value={{ user: user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

const UserContextConsumer = UserContext.Consumer;
export { UserContext, UserContextProvider, UserContextConsumer };
