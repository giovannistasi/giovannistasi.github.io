import { AppResume } from "@/components/desktop/apps/AppResume";
import { AppAboutSite } from "@/components/desktop/apps/AppAboutSite";
import { AppContacts } from "@/components/desktop/apps/AppContacts";
import { AppBookReader } from "@/components/desktop/apps/AppBookReader";
import { AppProjects } from "@/components/desktop/apps/AppProjects";
import { AppTerminal } from "@/components/desktop/apps/AppTerminal";
import { AppSnakeGame } from "@/components/desktop/apps/AppSnake";


const apps = [
  "DesktopMainView",
  "AppTerminal",
  "AppResume",
  "AppAboutSite",
  "AppContacts",
  "AppProjects",
  "AppBookReader",
  "AppSnakeGame",
] as const;

export type App = (typeof apps)[number];

type DesktopIcon = {
  iconName: string;
  title: string;
  appName: App;
  component: React.ReactNode;
};

export function makeMarkdownBasedApps(): Array<DesktopIcon> {
  return [
    {
      iconName: "resume.png",
      appName: "AppResume",
      title: "Resume",
      component: <AppResume />,
    },
    {
      iconName: "info.png",
      appName: "AppAboutSite",
      title: "About Site",
      component: <AppAboutSite />,
    },
    {
      iconName: "email.png",
      appName: "AppContacts",
      title: "Contacts",
      component: <AppContacts />,
    },
    {
      iconName: "book.png",
      appName: "AppBookReader",
      title: "Book Reader",
      component: <AppBookReader />,
    },
    {
      iconName: "games.png",
      appName: "AppSnakeGame",
      title: "Snake",
      component: <AppSnakeGame />,
    },
  
  ];
}

export function makeLocalApps(): Array<DesktopIcon> {
  return [
    {
      iconName: "games.png",
      appName: "AppProjects",
      title: "Hobby Projects",
      component: <AppProjects />,
    },
    {
      iconName: "terminal.png",
      appName: "AppTerminal",
      title: "Terminal",
      component: <AppTerminal />,
    },
  ];
}
