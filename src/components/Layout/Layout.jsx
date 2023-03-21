import { Header } from "./Header/Header";
import { UserStatus } from "./UserStatus/UserStatus";
import { Outlet } from "react-router-dom";
import "./Layout.css";

export const Layout = () => {
  return (
    <>
      <section>
        <Header>
          <UserStatus />
        </Header>
      </section>

      <section>
        <Outlet />
      </section>
    </>
  );
};
