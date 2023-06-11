import { MenuContext } from "@/contexts/MenuContext";
import { useContext } from "react";

export default function useMenuContext() {
    const context = useContext(MenuContext)

    if(context === undefined) {
        throw new Error('Não está dentro do MenuContext')
    }

    return context
}