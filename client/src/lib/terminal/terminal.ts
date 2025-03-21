import { NextRouter } from "next/router";
import { isMobileOnly } from "react-device-detect";
import { Terminal as Terminal_ } from "xterm";

export type TerminalCommand =
  | "help"
  | "start"
  | "reboot"
  | "shutdown"
  | "clear"
  | string;

type Config = {
  command: TerminalCommand;
  terminal: Terminal_;
  router: NextRouter;
};

export function executeCommand({ command, terminal, router }: Config) {
  const trimmedCommand = command.trim();
  const newline = terminal.write("\r\n");

  switch (trimmedCommand) {
    case "help":
      if (isMobileOnly) {
        newline;
        terminal.write("\r\nAvailable commands:");
        newline;
        terminal.write("\r\n  help\t\tshow available commands");
        terminal.write("\r\n  start\taccess GUI");
        terminal.write("\r\n  shutdown\tshut the site down");
        terminal.write("\r\n  reboot\trestart the site");
        terminal.write("\r\n  clear\t\tclear the terminal\r\n");
      } else {
        newline;
        terminal.write("\r\nAvailable commands:");
        newline;
        terminal.write("\r\n\thelp\t\tshow available commands");
        terminal.write("\r\n\tstart\t\taccess GUI");
        terminal.write("\r\n\tshutdown\tshut the site down");
        terminal.write("\r\n\treboot\t\trestart the site");
        terminal.write("\r\n\tclear\t\tclear the terminal\r\n");
      }
      break;
    case "start":
      if (router.pathname.includes("desktop")) {
        terminal.write("GUI already active");
      } else {
        router.replace("/desktop");
      }
      break;
    case "shutdown":
      newline;
      terminal.write("\rSite is shutting down...");
      router.replace("/shutdown/process");
      break;
    case "reboot":
      newline;
      terminal.write("\rSite is rebooting...");
      router.replace("/shutdown/process?reboot=true");
      break;
    case "clear":
      terminal.write("\x1bc");
      break;
    case "helo":
    case "hepl":
    case "hep":
    case "hel":
    case "helpp":
    case "gelp":
      newline;
      terminal.write("command not found: " + command);
      terminal.write("\r\ndid you mean 'help' ?\r\n");
      break;
    case "star":
    case "tart":
      newline;
      terminal.write("command not found: " + command);
      terminal.write("\r\ndid you mean 'start' ?\r\n");
      break;
    case "clea":
    case "clera":
    case "lear":
      newline;
      terminal.write("command not found: " + command);
      terminal.write("\r\ndid you mean 'clear' ?\r\n");
      break;
    default:
      if (command !== "") {
        newline;
        terminal.write("command not found: " + command);
        terminal.write("\r\nto see available commands, use 'help'\r\n");
      }
      break;
  }
}
