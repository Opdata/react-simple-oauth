import { useState, useEffect, createContext } from 'react';
import axios, { AxiosResponse } from 'axios';

export const myContext = createContext({});

export default function Context(props: any) {
  const [userObj, setUserObj] = useState<any>();

  useEffect(() => {
    axios
      .get('https://react-simple-oauth-backend.herokuapp.com/getuser', {
        withCredentials: true,
      })
      .then((res: AxiosResponse) => {
        if (res.data) {
          setUserObj(res.data);
        }
      });
  }, []);

  return (
    <myContext.Provider value={userObj}>{props.children}</myContext.Provider>
  );
}
