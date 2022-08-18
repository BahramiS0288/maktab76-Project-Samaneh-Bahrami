import { Footer } from "./components/Footer.component";
import { Header } from "./components/Header.component";
import { Outlet } from "react-router-dom";
// style={{height :'90vh'}}
function AdminLayout() {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
}

export { AdminLayout };
