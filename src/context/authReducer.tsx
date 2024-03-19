import { AuthState } from "./AuthContext";
import { Input } from "../hooks/useFormHookContext";
type AuthAction =
  | { type: "singIn" }
  | { type: "logout" }
  | { type: "changeUserName", payload: string }
  | { type: "changeFavImage", payload: string }
  | { type: "formData", payload: Input[] };

export const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {
  switch (action.type) {
    case 'formData':
      return{
        ...state,
        formData: action.payload
      }

    case "singIn":
      return {
        ...state,
        isLoggedIn: true,
        username: "no_name_user_yet",
      };
    case "logout":
      return {
        ...state,
        isLoggedIn: false,
        username: undefined,
        favoriteImage: undefined,
      };
    case "changeUserName":
      return {
        ...state,
        username: action.payload,
      };
    case "changeFavImage":
      return {
        ...state,
        favoriteImage: action.payload,
      };
    default:
      return { ...state };
  }
};
