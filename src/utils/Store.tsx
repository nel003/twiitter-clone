"use client";
import React, { createContext, useReducer } from "react";
import { ActionType, StateType, StoreType } from "@/utils/Types"

const initialState: StateType = {
    user: {
        id: '',
        name: '',
        username: '',
        email: ''
    }
}

function reducer(state: StateType, action: ActionType) {
    switch(action.type) {
        case 'updateName':
            state = {...state, user: {...state.user, name: action.payload}}
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

export function StoreProvider({children}: {children: React.ReactNode}) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <>
        <Store.Provider value={{state, dispatch}}>
            {children}
        </Store.Provider>
    </>
}

export default Store;