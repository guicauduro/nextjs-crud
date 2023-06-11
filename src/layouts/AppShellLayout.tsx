import { AppShell, Footer, useMantineTheme } from "@mantine/core";
import HeaderComponent from "@/components/Header";
import NavBarComponent from "@/components/Navbar";
import MenuProvider from "@/contexts/MenuProvider";
import useMenuContext from "@/hooks/useMenuContext";

export default function AppShellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useMantineTheme();
  const { opened } = useMenuContext();
  return (
    <MenuProvider>
      <AppShell
        styles={{
          main: {
            background:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        navbar={<NavBarComponent />}
        footer={
          <Footer height={60} p="md">
            Application footer
          </Footer>
        }
        header={<HeaderComponent />}
        padding={0}
      >
        {children}
      </AppShell>
    </MenuProvider>
  );
}
