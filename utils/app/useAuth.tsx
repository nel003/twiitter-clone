"use client";
import { useContext, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import Store from "./Store";
import { UserType } from "./Types";
import Loading from "../../app/loading";

export function UserProtected({children}: { children: React.ReactNode }) {
  const { state } = useContext(Store);

    const { push } = useRouter();
    useLayoutEffect(() => {
      if (!state.user) {
        push("/");
      }
    }, [state])

    return (!state.user ? <Loading/>: <>{children}</>)
}

export function useAuth(): { user: UserType | null } {
    const { state } = useContext(Store);
    return { user: state.user }
}