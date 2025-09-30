import { Outlet } from "react-router-dom";
import { Header, Footer } from "../index";

export const Layout = () => {
  return (
    <main className="min-h-screen flex  flex-col">
      <Header />
        <Outlet />
      <Footer />
    </main>
  );
};
