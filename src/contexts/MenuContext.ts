import { Dispatch, SetStateAction, createContext } from "react";

export const MenuContext = createContext<{ 
    opened: boolean
    setOpened?: Dispatch<SetStateAction<boolean>>
}>({ opened: false });
