import { useState, useEffect, createContext } from 'react';
import axios, { AxiosResponse } from 'axios';

export const myContext = createContext({});

export default function Context(props: any) {
  const [userObj, setUserObj] = useState<any>();

  useEffect(() => {
    axios
      .get('http://localhost:4000/getuser', { withCredentials: true })
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
