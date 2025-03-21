import { useCallback } from "react";
import { useDispatch } from "react-redux";
import SnakeGame from "./games/SnakeGame";
import { AppLayout } from "./layout/AppLayout";
import type { App } from "@/lib/apps/apps";
import useIsTouchDevice from "@/lib/useIsTouchDevice";
import { 
  setActiveDesktopApp as setActiveDesktopAppAction,
  SetActiveDesktopAppAction
} from "@/store/desktop";

export function AppSnakeGame() {
  const dispatch = useDispatch();
  
  const setActiveDesktopApp = useCallback<
    (args: App) => SetActiveDesktopAppAction
  >((payload) => dispatch(setActiveDesktopAppAction(payload)), [dispatch]);
  
  const onClose = () => setActiveDesktopApp("DesktopMainView");

  const isTouchDevice = useIsTouchDevice();
  
  return (
    <AppLayout title="Snake Game" onClose={onClose}>
      {isTouchDevice ? <p>Unavailable on mobile :/</p> : <SnakeGame />}
    </AppLayout>
  );
}

