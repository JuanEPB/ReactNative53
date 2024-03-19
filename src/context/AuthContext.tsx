import React, { createContext, useReducer, ReactNode } from "react";
import { authReducer } from "./authReducer";
import { Input } from "../hooks/useFormHookContext";

//definir la informacion del context
export interface AuthState {
  isLoggedIn: boolean;
  username?: string | undefined;
  favoriteImage?: string | undefined;
  formData: Input[];
}

export const AuthInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteImage: undefined,
  formData: [],
};

export interface AuthContextProps {
  authState: AuthState;
  singIn: () => void;
  logout: () => void;
  changeUserName: (userName: string) => void;
  changeFavImage: (sourceImage: string) => void;
  formData: (data: Input[]) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, dispatch] = useReducer(authReducer, AuthInitialState);

  const singIn = (): void => {
    dispatch({ type: "singIn" })
  };
  const logout = (): void => {
    dispatch({ type: "logout" })
  };
  const changeFavImage = (sourceImage: string): void => {
    dispatch({ type: "changeFavImage", payload: sourceImage });
  };
  const changeUserName = (username: string): void => {
    dispatch({ type: "changeUserName", payload: username });
  };
  const formData = (data:Input[]) => {
    dispatch({type: "formData", payload: data});
  }

  return(
  <AuthContext.Provider
    value={{
      authState,
      singIn,
      changeFavImage,
      changeUserName,
      logout,
      formData,
    }}
  >
    {children}
  </AuthContext.Provider>);
};
