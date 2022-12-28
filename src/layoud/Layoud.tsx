import { Outlet } from "react-router-dom";
import MainMenu from "../componets/MainMenu";

const Layoud = () => {
  return (
    <>
      <MainMenu />
      <main style={{flex: 1, overflowY: 'scroll'}}>
        <Outlet />
      </main>
    </>
  );
};

export default Layoud;
