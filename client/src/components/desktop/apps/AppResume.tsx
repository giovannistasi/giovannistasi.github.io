
import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { AppLayout } from "./layout/AppLayout";
import type { App } from "@/lib/apps/apps";
import { 
  setActiveDesktopApp as setActiveDesktopAppAction,
  SetActiveDesktopAppAction
 } from "@/store/desktop";

export function AppResume() {
    const dispatch = useDispatch();
  
    const setActiveDesktopApp = useCallback<
      (args: App) => SetActiveDesktopAppAction
    >((payload) => dispatch(setActiveDesktopAppAction(payload)), [dispatch]);
  
    const onClose = () => setActiveDesktopApp("DesktopMainView");
  return <AppLayout title="Resume" onClose={onClose}>
      <embed
        src="/docs/resume.pdf"
        style={{
          width: "100%",
          height: "100%",
          border: "none"
        }}
        title="Resume"
      />
  </AppLayout>;
}
