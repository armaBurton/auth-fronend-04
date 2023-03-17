import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { UserProvider } from "./context/UserProvider";
import { Layout } from "./components/Layout/Layout";
import { Authenticate } from "./views/Users/Authenticate";
import "./App.css";
import { Dashboard } from "./views/Users/Dashboard";

export function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/login" element={<Authenticate />} />
      </Route>
    )
  );

  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}
