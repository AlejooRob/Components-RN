import { Theme } from "@react-navigation/native"

type ThemeAction =
    | { type: 'light_theme' }
    | { type: 'dark_theme' }


export interface ThemeState extends Theme {
    currentTheme: 'light' | 'dark',
    dividerColor: string;
}

export const lightTheme: ThemeState = {
    currentTheme: 'light',
    dark: false,
    dividerColor: 'rgba(0,0,0,0.6)',
    colors: {
        primary: '#2d6a4f',
        background: 'white',
        card: 'white',
        text: 'black',
        border: 'black',
        notification: 'teal'
    }
}
export const darkTheme: ThemeState = {
    currentTheme: 'dark',
    dark: true,
    dividerColor: 'rgba(255,255,255,0.6)',
    colors: {
        primary: '#95d5b2',
        background: 'black',
        card: 'green',
        text: 'white',
        border: 'orange',
        notification: 'teal'
    }
}


export const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
    switch (action.type) {
        case 'light_theme':
            return { ...lightTheme }
        case 'dark_theme':
            return { ...darkTheme }
            
        default:
            return state;
    }
}