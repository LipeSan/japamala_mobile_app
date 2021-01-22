import React, { createContext, useReducer } from "react";
import { initialState, UserReducer} from '../reducers/UserReducer';

interface IContextProps {
    state: any;
    dispatch: ({type}:{type:string}) => void;
  }

export const UserContext = createContext({} as IContextProps);

export default ({children}:any) => {
    const [state, dispatch] = useReducer(UserReducer, initialState);
    return(
        <UserContext.Provider value={{state, dispatch}}>
            {children}
        </UserContext.Provider>
    )
}
