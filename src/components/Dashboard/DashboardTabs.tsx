import { createStyles, Tabs, rem } from "@mantine/core";
import AboutPanel from "./About";
import GuidePanel from "./Guide";
import MainPanel from "./Main";

const useStyles = createStyles((theme) => ({
  header: {
    paddingTop: 20,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[1],
  },

  panel: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[8]
        : theme.colors.gray[0],
  },

  tabsList: {
    borderBottom: "0 !important",
  },

  tab: {
    fontWeight: 500,
    height: rem(38),
    backgroundColor: "transparent",

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[2],
    },

    "&[data-active]": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[8]
          : theme.colors.gray[0],
      borderColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[2],
    },
  },
}));

const tabs = [
  { value: "Main", panel: <MainPanel /> },
  { value: "Guide", panel: <GuidePanel /> },
  { value: "About", panel: <AboutPanel /> },
];

export default function DashboardTabs() {
  const { classes } = useStyles();

  const items = tabs.map((tab) => (
    <Tabs.Tab value={tab.value} key={tab.value}>
      {tab.value}
    </Tabs.Tab>
  ));

  const panelItems = tabs.map((tab) => (
    <Tabs.Panel value={tab.value} key={tab.value} pt="xs">
      {tab.panel}
    </Tabs.Panel>
  ));

  return (
    <div className={classes.header}>
      <Tabs
        defaultValue={tabs[0].value}
        variant="outline"
        classNames={{
          tabsList: classes.tabsList,
          tab: classes.tab,
          panel: classes.panel,
        }}
      >
        <Tabs.List position="center">{items}</Tabs.List>
        {panelItems}
      </Tabs>
    </div>
  );
}
