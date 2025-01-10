import React, { FC } from "react";
import { Outlet } from "react-router";
import styles from "./ManageLayout.module.scss";
const ManageLayout: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p>ManageLayout</p>
        <button>创建问卷</button>
        <button>我的问卷</button>
        <button>星标问卷</button>
        <button>回收站</button>
        </div>
      <div className={styles.right}>
        <Outlet />
      </div>
      </div>
  );
};

export default ManageLayout;
