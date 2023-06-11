"use client";

import ThemeToggle from "@/components/ThemeToggle";
import useMenuContext from "@/hooks/useMenuContext";
import {
  Avatar,
  Burger,
  Flex,
  Group,
  Header,
  Indicator,
  MediaQuery,
  ThemeIcon,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { IconCodeCircle2 } from "@tabler/icons-react";

export default function HeaderComponent() {
  const theme = useMantineTheme();
  const { opened, setOpened } = useMenuContext();

  return (
    <Header height={{ base: 50, md: 70 }}>
      <Group position="apart" p={0} my={0} mx="md" h={{ base: 50, md: 70 }}>
        <Flex>
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <Burger
              opened={opened}
              onClick={() => setOpened!((o) => !o)}
              size="lg"
              color={theme.colors.gray[6]}
              mr="md"
            />
          </MediaQuery>

          <ThemeIcon
            size="lg"
            radius="xl"
            variant="gradient"
            gradient={{ from: "teal", to: "blue", deg: 60 }}
          >
            <IconCodeCircle2 size={35} />
          </ThemeIcon>
          <Title order={2} ml="xs">
            Crud
          </Title>
        </Flex>
        <Group>
          <ThemeToggle />
          <Indicator inline size={10} offset={4} position="top-end" color="red">
            {" "}
            <Avatar variant="filled" radius="xl">
              GC
            </Avatar>
          </Indicator>
        </Group>
      </Group>
    </Header>
  );
}
