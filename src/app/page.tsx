"use client";

import DashboardTabs from "@/components/Dashboard/DashboardTabs";
import { Box, Text, Title, useMantineTheme } from "@mantine/core";

export default function Home() {
  const theme = useMantineTheme();

  return (
    <>
      <Box
        mx="auto"
        p="md"
        bg={
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[1]
        }
      >
        <Title order={2}>Sistema de cadastro de funcionários</Title>
        <Text>Aqui vai um pequeno dashboard, a descriçao e/ou manual.</Text>
      </Box>
      <DashboardTabs />
    </>
  );
}
