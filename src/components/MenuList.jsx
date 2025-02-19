/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Menu } from "antd";
import {
  AreaChartOutlined,
  BarsOutlined,
  FormOutlined,
  HomeOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const MenuList = ({ darkTheme }) => {
  return (
    <div>
      <Menu
        theme={darkTheme ? "dark" : "light"}
        mode="inline"
        className="menu-bar"
      >
        <Menu.Item key={"home"} icon={<HomeOutlined />}>
          <Link to={"/dashboard"}>داشبورد</Link>
        </Menu.Item>
        <Menu.SubMenu
          key={"submitforms"}
          icon={<FormOutlined />}
          title={"ثبت فرم"}
        >
          <Menu.Item key={"submitform"}>
            <Link to={"/submitform"}>فرم روزانه</Link>
          </Menu.Item>
          <Menu.Item key={"oilform"}>
            <Link to={"/submitoil"}>فرم روغن</Link>
          </Menu.Item>
          <Menu.Item key={"greaseform"}>
            <Link to={"/submitgrease"}>فرم گریس</Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key={"subtasks"} icon={<BarsOutlined />} title="فرم ها">
          <Menu.Item key={"forms"}>
            {" "}
            <Link to={"/tecopforms"}>فرم های ثبت شده</Link>
          </Menu.Item>
          <Menu.SubMenu key={"lubricantmenu"} title="روانکارها">
            <Menu.Item key={"oil"}>
              {" "}
              <Link to={"/oilform"}>روغن</Link>
            </Menu.Item>
            <Menu.Item key={"grease"}>
              {" "}
              <Link to={"/greaseform"}>گریس</Link>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu.SubMenu>
        <Menu.Item key={"settings"} icon={<SettingOutlined />}>
          {" "}
          <Link to={"/setting"}>تنظیمات</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default MenuList;
