import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../image/logo.png";
import { Avatar, Menu, Typography, Button } from "antd";
import {
  BulbOutlined,
  HomeOutlined,
  MoneyCollectOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);
  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 1000) {
      setActiveButton(true)
    } else {
      setActiveMenu(true)
      setActiveButton(false);
    }
  }, [screenSize]);

  return (
    <>
      <div className="navbar">
        <div className="navbar-header">
          <Link to="/">
            <div className="title-box">
              <div className="title-image">
                <Avatar
                  src={logo}
                  style={{ height: "3.5rem", width: "3.5rem" }}
                />
              </div>
              <div className="title-text">
                <Typography.Title style={{ color: "#1890ff" }}>
                  CryptoApp
                </Typography.Title>
              </div>
            </div>
          </Link>
          { activeButton &&
          <Button
            className="menu-control-container"
            onClick={() => setActiveMenu(!activeMenu)}
          > 
            <MenuOutlined />
          </Button> }
        </div>
        <div className="menu-container">
          {activeMenu && (
            <Menu theme="dark">
              <Menu.Item icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item icon={<MoneyCollectOutlined />}>
                <Link to="/cryptocurrencies">Cryptocurrencies</Link>
              </Menu.Item>
              <Menu.Item icon={<BulbOutlined />}>
                <Link to="/news">News</Link>
              </Menu.Item>
            </Menu>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
