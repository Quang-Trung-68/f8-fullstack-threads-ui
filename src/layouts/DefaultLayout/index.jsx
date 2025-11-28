import { Outlet, useLocation } from "react-router";
import Header from "@components/Layout/Header";
import Navigation from "@/components/Layout/Navigation";
import CreatePostButton from "@/components/Create/CreatePostButton";

export default function DefaultLayout() {
  const location = useLocation();
  return (
    <div className="relative flex items-start justify-center md:mx-24">
      <Header />

      <div
        className={`mt-14 w-full md:rounded-3xl md:border md:border-gray-200 md:bg-gray-50 md:dark:border-gray-800 md:dark:bg-black ${
          location.pathname === "/" ? "min-w-dvw" : "md:max-w-[638px]"
        }`}
      >
        <Outlet />
      </div>

      <Navigation />
      <CreatePostButton />
    </div>
  );
}
