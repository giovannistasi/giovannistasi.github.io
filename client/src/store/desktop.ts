import { createSlice } from "@reduxjs/toolkit";
import { DesktopApp } from "@/lib/desktop/desktop";

export type AppMenuState =
  | {
      isActive: false;
    }
  | {
      isActive: true;
      activeApp: DesktopApp;
    };

export type ModalState = "noModal" | "shutdownModal" | "rebootModal";

type State = {
  activeDesktopApp: DesktopApp;
  focusedDesktopApp: DesktopApp;
  appMenu: AppMenuState;
  modal: ModalState;
  isActiveAppFullScreen: boolean;
  isTimeWidgetActive: boolean;
  currentTime: string; // ISO String
};

export type SetActiveDesktopAppAction = {
  type: string;
  payload: DesktopApp;
};

export type SetFocusedDesktopAppAction = {
  type: string;
  payload: DesktopApp;
};

export type EnableAppMenuAction = {
  type: string;
  payload: DesktopApp;
};

export type SetModalAction = {
  type: string;
  payload: ModalState;
};

export type SetActiveAppFullScreen = {
  type: string;
  payload: boolean;
};

export type SetCurrentTime = {
  type: string;
  payload: string;
};

export type SetTimeWidgetActive = {
  type: string;
  payload: boolean;
};

type Action = {
  setActiveDesktopApp: (
    state: State,
    action: SetActiveDesktopAppAction
  ) => void;
  setFocusedDesktopApp: (
    state: State,
    action: SetFocusedDesktopAppAction
  ) => void;
  enableAppMenu: (state: State, action: EnableAppMenuAction) => void;
  disableAppMenu: (state: State) => void;
  setModal: (state: State, action: SetModalAction) => void;
  setActiveAppFullScreen: (
    state: State,
    action: SetActiveAppFullScreen
  ) => void;
  setCurrentTime: (state: State, action: SetCurrentTime) => void;
  setTimeWidgetActive: (state: State, action: SetTimeWidgetActive) => void;
};

const desktopSlice = createSlice<State, Action, "desktop">({
  name: "desktop",
  initialState: {
    activeDesktopApp: "DesktopMainView",
    focusedDesktopApp: "DesktopMainView",
    appMenu: {
      isActive: false,
    },
    modal: "noModal",
    isActiveAppFullScreen: false,
    currentTime: new Date().toISOString(),
    isTimeWidgetActive: false,
  },
  reducers: {
    setActiveDesktopApp: (state: State, action: SetActiveDesktopAppAction) => {
      state.activeDesktopApp = action.payload;
    },
    setFocusedDesktopApp: (
      state: State,
      action: SetFocusedDesktopAppAction
    ) => {
      state.focusedDesktopApp = action.payload;
    },
    enableAppMenu: (state: State, action: EnableAppMenuAction) => {
      state.appMenu = {
        isActive: true,
        activeApp: action.payload,
      };
    },
    disableAppMenu: (state: State) => {
      state.appMenu = {
        isActive: false,
      };
    },
    setModal: (state: State, action: SetModalAction) => {
      state.modal = action.payload;
    },
    setActiveAppFullScreen: (state: State, action: SetActiveAppFullScreen) => {
      state.isActiveAppFullScreen = action.payload;
    },
    setCurrentTime: (state: State, action: SetCurrentTime) => {
      state.currentTime = action.payload;
    },
    setTimeWidgetActive: (state: State, action: SetTimeWidgetActive) => {
      state.isTimeWidgetActive = action.payload;
    },
  },
});

export const {
  setActiveDesktopApp,
  setFocusedDesktopApp,
  enableAppMenu,
  disableAppMenu,
  setModal,
  setActiveAppFullScreen,
  setCurrentTime,
  setTimeWidgetActive,
} = desktopSlice.actions;

export default desktopSlice.reducer;
