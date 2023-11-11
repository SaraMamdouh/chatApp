import { Layout } from "antd";
import "./Layout.css";
import Sidebar from "../Sidebar";
import Body from "../Body";
import Footer from "../Footer";
import Header from "../Header";

const AppLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout>
        <Header />
        <Body />
        <Footer />
      </Layout>
    </Layout>
  );
};

export default AppLayout;
