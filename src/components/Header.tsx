"use client";

import ThemeToggle from "@/components/ThemeToggle";
import useMenuContext from "@/hooks/useMenuContext";
import {
  Burger,
  Flex,
  Group,
  Header,
  MediaQuery,
  useMantineTheme,
} from "@mantine/core";
import { IconCodeCircle2 } from "@tabler/icons-react";

export default function HeaderComponent() {
  const theme = useMantineTheme();
  const { opened, setOpened } = useMenuContext();

  return (
    <Header height={{ base: 50, md: 70 }}>
      <Flex justify="flex-start" align="center" direction="row">
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={opened}
            onClick={() => setOpened!((o) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>
        <Group position="apart" bg="pink" p={0} m={0}>
          <IconCodeCircle2 size={40} color="teal" />
          <ThemeToggle />
        </Group>
      </Flex>
    </Header>
  );
}
