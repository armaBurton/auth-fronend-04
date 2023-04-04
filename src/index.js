import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { UserProvider } from "./context/UserProvider";
import { PostsProvider } from "./context/PostProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PostsProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </PostsProvider>
  </React.StrictMode>
);
