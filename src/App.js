import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { UserProvider } from "./context/UserProvider";
import { Layout } from "./components/Layout/Layout";
import { Authenticate } from "./views/Users/Authenticate";
import "./App.css";
import { Dashboard } from "./views/Users/Dashboard";
import { Main } from "./views/Main/Main";
import { SignOut } from "./views/Users/SignOut";
import { SignUp } from "./views/Users/SignUp";
import { PrivateRoutes } from "./components/PrivateRoutes/PrivateRoutes";
import { Hidden } from "./views/Hidden/Hidden";

export function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      // <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/main" />} />
        <Route path="/main" element={<Main />} />
        <Route path="/signin" element={<Authenticate />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/hidden"
          element={
            <PrivateRoutes>
              <Hidden />
            </PrivateRoutes>
          }
        />
      </Route>
      // </Routes>
    )
  );

  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}
