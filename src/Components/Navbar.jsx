import React from "react";
import "./Navbar.css";
import logo from "../image/logo.png";
import { Avatar, Menu, Typography } from "antd";
import {
  BulbOutlined,
  HomeOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to='/'>
        <div className="title-box">
            <div className="title-image">
              <Avatar src={logo} style={{'height': '3.5rem', 'width': '3.5rem'}} />
            </div>
            <div className="title-text">
              <Typography.Title style={{'color': '#1890ff'}}>CryptoApp</Typography.Title>
            </div>
          </div>
        </Link>
        <div className="menu-container">
          <Menu theme="dark">
            <Menu.Item icon={<HomeOutlined />}><Link to='/'>Home</Link></Menu.Item>
            <Menu.Item icon={<MoneyCollectOutlined />}><Link to='/cryptocurrencies'>Cryptocurrencies</Link></Menu.Item>
            <Menu.Item icon={<BulbOutlined />}><Link to='/news'>News</Link></Menu.Item>
          </Menu>
        </div>
      </div>
    </>
  );
};

export default Navbar;
