import React from "react";
import { Table } from "antd";

export const MultipleResult = ({ list }) => {
  const columns = [
    {
      title: "Numero original",
      dataIndex: "initial",
      key: "initial",
    },
    {
      title: "Es multiplo de 3?",
      dataIndex: "isMultiple",
      key: "isMultiple",
    },
  ];

  return <Table dataSource={list} columns={columns}/>;
};
