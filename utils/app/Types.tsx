
export interface ThemeType {
    theme: string;
    updateTheme: (theme: string) => void;
    systemTheme?: string;
  };

export interface UserType {
    id: string;
    name: string;
    username: string;
    email: string;
}

export interface StateType {
    user: UserType;
    isMHeaderOpen?: boolean;
}

export interface ActionType {
    type: string;
    payload: any;
}

export interface StoreType {
    state: StateType;
    dispatch: React.Dispatch<ActionType>;
}