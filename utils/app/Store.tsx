"use client";
import React, { createContext, useReducer } from "react";
import { ActionType, StateType, StoreType, UserType } from "./Types"

const initialState: StateType = {
    user: null,
    isMHeaderOpen: false
}

function reducer(state: StateType, action: ActionType) {
    switch(action.type) {
        case 'updateMHeader':
            state = {...state, isMHeaderOpen: action.payload}
            break;
        default:
            break;
    }
    return state
}

const Store = createContext<StoreType>({
    state: initialState,
    dispatch: () => null
});

export function StoreProvider({user, children}: {user: UserType | null, children: React.ReactNode}) {
    const [state, dispatch] = useReducer(reducer, {...initialState, user});

    return <>
        <Store.Provider value={{state, dispatch}}>
            {children}
        </Store.Provider>
    </>
}

export default Store;