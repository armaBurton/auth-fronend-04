import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Authenticate } from "./views/Users/Authenticate";
import "./App.css";
import { Main } from "./views/Main/Main";
import { SignUp } from "./views/Users/SignUp";
import { PrivateRoutes } from "./components/PrivateRoutes/PrivateRoutes";
import { Hidden } from "./views/Hidden/Hidden";
import { PostDetail } from "./components/Posts/PostDetail";

export function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/main" />} />
        <Route path="/main" element={<Main />} />
        <Route path="/signin" element={<Authenticate />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<PrivateRoutes />}>
          <Route element={<Hidden />} path="/hidden" />
          <Route element={<PostDetail />} path="/posts/:id" />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
