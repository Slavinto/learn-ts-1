import React, {
    ReactNode,
    createContext,
    useContext,
    useReducer,
    useMemo,
} from "react";
import { FCWithChildren } from "../types/component.types";

type Props = { children: ReactNode | ReactNode[] };

export interface StateModifiers {
    toggleSidebar: () => void;
}

const stateModifiers = {
    toggleSidebar: () => {},
};

export interface StateValues {
    sidebarActive: boolean;
}

const initialState = {
    sidebarActive: false,
};

type Reducer = {
    (prevState: StateValues, action: Action): StateValues;
};

type Action = {
    type: string;
    payload?: StateValues;
};

const UIreducer: Reducer = (prevState, action) => {
    switch (action.type) {
        case "TOGGLE_SIDEBAR":
            return {
                ...prevState,
                sidebarActive: !prevState.sidebarActive,
            };
        default:
            return prevState;
    }
};

type UIContextType = StateValues & StateModifiers;

const UIContext = createContext<UIContextType>({
    ...initialState,
    ...stateModifiers,
});

const actionToggleSidebar = {
    type: "TOGGLE_SIDEBAR",
    // payload: { sidebarActive: !UIState.sidebarActive },
};

export const UIProvider: FCWithChildren<Props> = (props: Props) => {
    const [UIState, dispatch] = useReducer(UIreducer, initialState);

    const toggleSidebar = () => dispatch(actionToggleSidebar);

    const UIStateFull = useMemo(() => {
        return {
            ...UIState,
            toggleSidebar,
        };
    }, [UIState.sidebarActive]);

    return (
        <UIContext.Provider value={UIStateFull}>
            {props.children}
        </UIContext.Provider>
    );
};

export const useUI = () => useContext(UIContext);
