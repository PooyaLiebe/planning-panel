/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Button, Layout, theme } from "antd";
import Logo from "./components/Logo";
import MenuList from "./components/MenuList";
import ToggleThemeButton from "./components/ToggleThemeButton";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import Dashboard from "./pages/Dashboard";
import SubmitForm from "./pages/SubmitForm";
import TecOpForms from "./pages/TecOpForms";
import GreaseForm from "./pages/GreaseForm";
import OilForm from "./pages/OilForm";
import Setting from "./pages/Setting";
import SubmitOil from "./pages/SubmitOil";
import SubmitGrease from "./pages/SubmitGrease";
import Login from "./pages/Login";

function App() {
  const { Header, Sider, Content } = Layout;
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const location = useLocation(); // Get current route
  const hideComponents = location.pathname === "/"; // Hide Sidebar & Header on "/"

  return (
    <Layout>
      {!hideComponents && (
        <Sider
          collapsed={collapsed}
          collapsible
          trigger={null}
          theme={darkTheme ? "dark" : "light"}
          className="sidebar"
        >
          <Logo />
          <MenuList darkTheme={darkTheme} />
          <ToggleThemeButton
            darkTheme={darkTheme}
            toggleTheme={() => setDarkTheme(!darkTheme)}
          />
        </Sider>
      )}
      <Layout>
        {!hideComponents && (
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
              type="text"
              className="toggle"
              onClick={() => setCollapsed(!collapsed)}
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            />
          </Header>
        )}
        <Content>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/submitoil" element={<SubmitOil />} />
            <Route path="/submitgrease" element={<SubmitGrease />} />
            <Route path="/submitform" element={<SubmitForm />} />
            <Route path="/tecopforms" element={<TecOpForms />} />
            <Route path="/greaseform" element={<GreaseForm />} />
            <Route path="/oilform" element={<OilForm />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
