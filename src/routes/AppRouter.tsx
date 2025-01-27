
import { Route, Routes } from "react-router";
import Main from "../components/Screens/Main";
import SobreMi from "../components/Screens/SobreMi";
import { Navbar } from "../components/Navbar";

import Footer from "../components/Footer";

function AppRouter() {
  return (
    <>
      <Navbar />

      <div className="">
        <Routes>
          <Route element={<Main />} path="/" />
          <Route element={<SobreMi />} path="/sobre-mi" />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default AppRouter;
