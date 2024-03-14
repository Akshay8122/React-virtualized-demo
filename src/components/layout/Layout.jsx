import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "./Layout.module.css";

const Layout = () => {
  const navigate = useNavigate();

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h2>React Virtualized list demo</h2>
        <div className={styles.btns}>
          <button onClick={() => navigate("/simplelist")}>Simple List</button>
          <button onClick={() => navigate("/")}>React Virtualized</button>
          <button onClick={() => navigate("/autorowheight")}>Auto Row Height</button>
          <button onClick={() => navigate("/collabeslist")}>Collapsible List</button>
          <button onClick={() => navigate("/gridlist")}>Grid List</button>
        </div>
      </div>
      <Outlet />
    </main>
  );
};

export default Layout;
