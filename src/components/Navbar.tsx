"use client";

import useMenuContext from "@/hooks/useMenuContext";
import { NavLink, Navbar } from "@mantine/core";
import { IconGauge, IconPlus, IconSearch } from "@tabler/icons-react";
import { useState } from "react";

const data = [
  { icon: IconGauge, label: "Dashboard" },
  { icon: IconSearch, label: "Search" },
  { icon: IconPlus, label: "Add" },
];

export default function NavBarComponent() {
  const { opened } = useMenuContext();
  const [active, setActive] = useState(0);

  const items = data.map((item, index) => (
    <NavLink
      key={item.label}
      active={index === active}
      label={item.label}
      icon={<item.icon size="1rem" stroke={1.5} />}
      onClick={() => setActive(index)}
    />
  ));
  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 200, lg: 300 }}
    >
      {items}
    </Navbar>
  );
}
