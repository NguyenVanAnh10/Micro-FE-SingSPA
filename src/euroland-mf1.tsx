import React from "react";
import ReactDOMClient from "react-dom/client";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";
import store from "./store/store";

const lifecycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;

export function getShareStateMF1(permission) {
  const state = store.getState();
  // return loggedInUser.permissions.some((p) => p === permission);
  console.log("Store state from mf1", state);
}
