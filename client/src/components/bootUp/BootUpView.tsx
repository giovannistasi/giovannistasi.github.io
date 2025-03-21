import {
  TerminalProcessAnimation,
  AnimatedText,
} from "@/components/shared/TerminalProcessAnimation";
import useIsTouchDevice from "@/lib/useIsTouchDevice";

const makeText: (isTouchDevice: boolean) => Array<AnimatedText> = (
  isTouchDevice
) => {
  const lastElement: AnimatedText = isTouchDevice
    ? {
        value: "Please tap anywhere to continue...",
        status: "Ok",
      }
    : {
        value: "Please press ENTER/RETURN to continue...",
        status: "Ok",
      };

  return [
    { value: "Booting StasiOS v1.0.4...", status: "Ok" },
    { value: "Loading kernel modules", status: "Loading" },
    { value: "Mounting filesystems", status: "Loading" },
    { value: "ERROR: Missing semicolon on line 42", status: "Error" },
    { value: "Applying automatic fix", status: "Loading" },
    { value: "System recovery successful", status: "Ok" },
    { value: "Initializing network services", status: "Loading" },
    { value: "Loading desktop environment", status: "Loading" },
    { value: "Starting UI components", status: "Loading" },
    { value: "System ready - Welcome to stasi.dev", status: "Ok" },
    lastElement,
  ];
};

export function BootUpView() {
  const isTouchDevice = useIsTouchDevice();

  return <TerminalProcessAnimation text={makeText(isTouchDevice)} />;
}
