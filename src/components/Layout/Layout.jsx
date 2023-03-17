import { Header } from "./Header/Header";
import { UserStatus } from "./UserStatus/UserStatus";
import { Link, Outlet } from "react-router-dom";

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
