"use client";

import useMenuContext from "@/hooks/useMenuContext";
import { NavLink, Navbar, ThemeIcon } from "@mantine/core";
import { IconGauge, IconPlus, IconSearch } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

const links = [
  { icon: IconGauge, label: "Dashboard", link: "/" },
  { icon: IconSearch, label: "Search", link: "/employees/search" },
  { icon: IconPlus, label: "Register", link: "/employees/register" },
];

export default function NavBarComponent() {
  const { opened } = useMenuContext();
  const [active, setActive] = useState(0);

  const items = links.map((item, index) => (
    <NavLink
      component={Link}
      href={item.link}
      key={item.label}
      active={index === active}
      label={item.label}
      icon={
        <ThemeIcon size="md" variant="light">
          <item.icon size="1.2rem" />
        </ThemeIcon>
      }
      onClick={() => setActive(index)}
    />
  ));
  return (
    <Navbar
      p={0}
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 200, lg: 300 }}
    >
      {items}
    </Navbar>
  );
}
