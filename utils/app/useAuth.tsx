"use client";
import { useContext, useLayoutEffect, createContext, useReducer } from "react";
import { useRouter } from "next/navigation";
import { ActionType, UserType } from "./Types";
import Loading from "../../app/loading";

const initialState = null;
export const AuthContext = createContext<{
  user: UserType | null;
  dispatch: React.Dispatch<ActionType>;
}>({
  user: initialState,
  dispatch: () => null
});

function reducer(user: UserType | null, action: ActionType) {
  switch(action.type) {
    case "UPDATE_USER": 
      user = action.payload;
      break;
    default:
      break;
  }
  return user
}

export function AuthProvider({ initialUser, children }: { initialUser: UserType | null, children: React.ReactNode }) {
  const [user, dispatch] = useReducer(reducer, initialUser);

  return  <>
    <AuthContext.Provider value={{user, dispatch}}>
      {children}
    </AuthContext.Provider>
  </>
}

export function UserProtected({children}: { children: React.ReactNode }) {
  const { user } = useContext(AuthContext);
  
  const { push } = useRouter();
  useLayoutEffect(() => {
    if (!user) {
      push("/");
    }
  }, [user])
  
  return (!user ? <Loading/>: <>{children}</>)
}
export function UserRedirect({children}: {children: React.ReactNode }) {
  const { user } = useContext(AuthContext);
  
  const { push } = useRouter();
  useLayoutEffect(() => {
    if (user) {
      push("/home");
    }
  }, [user])
  
  return (user ? <Loading/>: <>{children}</>)
}

export default function useAuth(): { user: UserType | null } {
  const { user } = useContext(AuthContext);
  return { user }
}