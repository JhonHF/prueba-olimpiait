import React, { useState } from "react";
import { Layout } from "antd";
import { Menu } from "antd";
import { useHistory, useLocation } from "react-router";

const { Sider } = Layout;

export const SideMenu = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  const options = [
    {
      label: "🏠 Home",
      route: "/",
    },
    {
      label: "➗ Multiplos de 3",
      route: "/multiple",
    },
    {
      label: "🧾 Factura electrónica",
      route: "/electronic-invoice",
    },
  ];

  const handleOption = (route) => {
    history.push(route);
  };

  return (
    <Sider theme="light">
      <Menu defaultSelectedKeys={[pathname]} mode="inline">
        {options.map((item) => (
          <Menu.Item key={item.route} onClick={() => handleOption(item.route)}>
            {item.label}
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};
