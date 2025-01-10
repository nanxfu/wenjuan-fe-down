import React, { FC } from "react";
import { Outlet } from "react-router";
import { Flex, Layout } from 'antd';
import styles from './MainLayout.module.scss'
const { Header, Footer, Content } = Layout;
const MainLayout: FC = () => {
  return (
    <>
    <Layout >
      <Header className={styles.header}>
        <div className={styles.left}>Logo</div>
        <div className={styles.right}>登陆</div>
      </Header>
      <Content className={styles.main}>
        <Outlet />
      </Content>
      <Footer className={styles.footer}>小慕问卷 &copy; 2023 Created by xiaofu</Footer>
    </Layout>
    </>
  );
};

export default MainLayout;
