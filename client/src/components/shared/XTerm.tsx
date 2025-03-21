import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect, useRef, useCallback } from "react";
import { isAndroid } from "react-device-detect";
import { useDispatch } from "react-redux";
import { Terminal as Terminal_ } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import { type App } from "@/lib/apps/apps";
import { executeCommand } from "@/lib/terminal/terminal";
import {
  setActiveDesktopApp as setActiveDesktopAppAction,
  SetActiveDesktopAppAction,
} from "@/store/desktop";

const Container = styled(Box)`
  .xterm-viewport {
    overflow-y: auto;
  }
`;

const checkIfArrowKey = (str) => {
  const arrowKeys = ["\u001b[A", "\u001b[B", "\u001b[C", "\u001b[D"];

  return arrowKeys.includes(str);
};

type Props = {
  withHelp: boolean;
};

export default function XTerm(props: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const setActiveDesktopApp = useCallback<
    (args: App) => SetActiveDesktopAppAction
  >((payload) => dispatch(setActiveDesktopAppAction(payload)), [dispatch]);

  const shellPrompt = "\x1b[0;32mguest@stasi.dev \x1b[0;34m~\x1b[0;37m$ ";

  useEffect(() => {
    if (ref.current) {
      const terminal = new Terminal_({
        cursorBlink: true,
        lineHeight: isAndroid ? 1.4 : 1.2,
        fontFamily: "monospace",
      });
      const fitAddon = new FitAddon();

      let command = "";
      terminal.loadAddon(fitAddon);
      terminal.open(ref.current);
      fitAddon.fit();
      terminal.focus();
      if (props.withHelp) {
        terminal.write("To see available commands\r\n");
        terminal.write("type 'help' and hit ENTER or RETURN\r\n\r\n");
      }
      if (isAndroid) {
        terminal.write(shellPrompt);
        terminal.write("\x1b[?25l"); // remove cursor

        let androidCommand = "";
        let backspaceCount = 0;
        terminal.onData((data) => {
          if (encodeURIComponent(data) === "%7F") {
            // %7F is a delete character
            if (androidCommand.length > 0) {
              backspaceCount += 1;
              androidCommand = androidCommand.slice(0, -1 * backspaceCount);
              androidCommand += decodeURIComponent(" ".repeat(backspaceCount));
              terminal.write("\r" + shellPrompt);
              terminal.write(androidCommand);
            }
          } else if (encodeURIComponent(data) === "%0D") {
            // if it's carriage return, do nothing since it has been handled in onKey
          } else {
            if (backspaceCount > 0) {
              androidCommand = androidCommand.slice(0, -1 * backspaceCount);
              backspaceCount = 0;
            }

            androidCommand += data;
            terminal.write("\r" + shellPrompt);
            terminal.write(androidCommand);
          }
        });

        terminal.onKey((e) => {
          const ev = e.domEvent;

          if (ev.key === "Enter") {
            if (
              encodeURIComponent(androidCommand) === "%0D" ||
              androidCommand.trim().length === 0 // all whitespace
            ) {
              androidCommand = "";
            }

            executeCommand({ command: androidCommand, terminal, router });

            if (androidCommand === "reboot" || androidCommand === "shutdown") {
              setActiveDesktopApp("DesktopMainView");

              terminal.write("\r\n" + shellPrompt);
            } else if (androidCommand === "") {
              terminal.write("\r" + shellPrompt);
            } else {
              terminal.write("\r\n" + shellPrompt);
            }

            androidCommand = "";
          } else if (ev.key === "Backspace") {
            // do nothing just in case
            // since the backspace for android is handled in onData
          } else if (!checkIfArrowKey(e.key)) {
            androidCommand += e.key;

            terminal.write(e.key);
          }
        });
      } else {
        terminal.write("\r\n");
        terminal.write(shellPrompt);
        terminal.onKey((e) => {
          const ev = e.domEvent;

          if (ev.key === "Enter") {
            executeCommand({ command, terminal, router });
            if (command === "reboot" || command === "shutdown") {
              setActiveDesktopApp("DesktopMainView");
              terminal.write("\r\n" + shellPrompt);
            } else if (command === "") {
              terminal.write(shellPrompt);
            } else {
              terminal.write("\r\n" + shellPrompt);
            }
            command = "";
          } else if (ev.key === "Backspace") {
            if (command !== "") {
              command = command.slice(0, -1);
              terminal.write("\b \b");
            }
          } else if (!checkIfArrowKey(e.key)) {
            command += e.key;
            terminal.write(e.key);
          }
        });
      }
    }
  }, [props.withHelp, ref, router, setActiveDesktopApp]);

  return <Container ref={ref} bgColor="green" w="100%" />;
}
