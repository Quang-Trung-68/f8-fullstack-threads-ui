import { Outlet } from "react-router";
import Header from "@components/Layout/Header";

export default function AuthLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
