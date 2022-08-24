
import { Header } from "./components/Header.component";
import { Outlet } from "react-router-dom";
// style={{height :'90vh'}}
function AdminLayout() {
  return (
    <>
      <Header />

      <Outlet />

      
    </>
  );
}

export { AdminLayout };
