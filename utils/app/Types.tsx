
export interface ThemeType {
    theme: string;
    updateTheme: (theme: string) => void;
    systemTheme?: string;
  };

export interface UserType {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    username: string;
    email: string;
    birthdate: Date;
    picture: string;
    accessToken: string;
}

export interface StateType {
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