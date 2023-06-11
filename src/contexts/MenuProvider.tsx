import { useState } from "react";
import { MenuContext } from "./MenuContext";

export default function MenuProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [opened, setOpened] = useState(false);
  return (
    <MenuContext.Provider value={{ opened, setOpened }}>
      {children}
    </MenuContext.Provider>
  );
}
