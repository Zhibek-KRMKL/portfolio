import React, { useState } from "react";
import { Button, Menu } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  UnorderedListOutlined,
  UnlockOutlined,
  NotificationOutlined,
  BgColorsOutlined,
  PhoneOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LoginOutlined,
  IdcardOutlined,
} from "@ant-design/icons";

function getItem(label, key, icon, children, type) {
  return {
    key,
    children,
    icon,
    label,
    type,
  };
}
const itemsSeven = [
  getItem(<Link to="/homePage">Home</Link>, "1", <HomeOutlined />),
  getItem(<Link to="/todoList">To Do List</Link>, "2", <UnorderedListOutlined />),
  getItem(<Link to="/listItem">LIST Item</Link>, "3", <UnlockOutlined />),
  getItem(<Link to="/password">Input Password</Link>, "4", <NotificationOutlined />),
  getItem(<Link to="/notification">Notification</Link>, "5", <BgColorsOutlined />),
  getItem(<Link to="/colorChange">Color Change</Link>, "6", <LogoutOutlined />),
  getItem(<Link to="/contactUs">Contact Us</Link>, "7", <PhoneOutlined />),
];

const itemsTwo = [
  getItem(<Link to="/registration">Registration</Link>, "8", <LoginOutlined />),
  getItem(<Link to="/login">Login</Link>, "9", <IdcardOutlined />),
];

const NavBar = () => {
  const isLoggedIn = JSON.parse(localStorage.getItem("loggedIn"));
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div
      className="navbar"
      style={{
        width: 256,
      }}
    >
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
          marginLeft: -210,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={isLoggedIn ? itemsSeven : itemsTwo}
      />
    </div>
  );
};
export default NavBar;
