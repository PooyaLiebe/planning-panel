/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
  const { Header, Sider } = Layout;
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <>
      <BrowserRouter>
        <Layout>
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
              toggleTheme={toggleTheme}
            />
          </Sider>
          <Layout>
            <Header style={{ padding: 0, background: colorBgContainer }}>
              <Button
                type="text"
                className="toggle"
                onClick={() => setCollapsed(!collapsed)}
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              />
            </Header>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/submitoil" element={<SubmitOil />} />
              <Route path="/submitgrease" element={<SubmitGrease />} />
              <Route path="/submitform" element={<SubmitForm />} />
              <Route path="/tecopforms" element={<TecOpForms />} />
              <Route path="/greaseform" element={<GreaseForm />} />
              <Route path="/oilform" element={<OilForm />} />
              <Route path="/setting" element={<Setting />} />
            </Routes>
          </Layout>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
