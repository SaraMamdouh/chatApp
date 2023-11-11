import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
const { Sider } = Layout;

const items: MenuProps["items"] = [
  UserOutlined,
  UserOutlined,
  UserOutlined,
  UserOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `user ${index + 1}`,
}));

const Sidebar = () => {
  return (
    <Sider>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
      />
    </Sider>
  );
};
export default Sidebar;
