/* eslint-disable no-unused-vars */
import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Lubricant Name",
    dataIndex: "name",
    filters: [
      {
        text: "Agip BLASIA S 320",
        value: "Agip BLASIA S 320",
      },
    ],
    filterMode: "tree",
    filterSearch: true,
    onFilter: (value, record) => record.name.includes(value),
    width: "30%",
  },
  {
    title: "Type",
    dataIndex: "type",
    filters: [
      {
        text: "Synthetic",
        value: "Synthetic",
      },
      {
        text: "Mineral",
        value: "Mineral",
      },
    ],
    filterMode: "tree",
    filterSearch: true,
    onFilter: (value, record) => record.type.includes(value),
    width: "30%",
  },
  {
    title: "V-Inx(c)",
    dataIndex: "viscosityindex",
    sorter: (a, b) => a.viscosityindex - b.viscosityindex,
  },
  {
    title: "V-40(c)",
    dataIndex: "viscosity40",
    sorter: (a, b) => a.viscosity40 - b.viscosity40,
  },
  {
    title: "Density",
    dataIndex: "density",
    sorter: (a, b) => a.density - b.density,
  },
  {
    title: "PourPoint",
    dataIndex: "pourpoint",
    sorter: (a, b) => a.pourpoint - b.pourpoint,
  },
  {
    title: "FlashPoint",
    dataIndex: "flashpoint",
    sorter: (a, b) => a.flashpoint - b.flashpoint,
  },
  {
    title: "Thickener",
    dataIndex: "thickener",
    filters: [
      {
        text: "Lithium Complex",
        value: "Lithium Complex",
      },
      {
        text: "Poly-Urea",
        value: "Poly-Urea",
      },
      {
        text: "PTFE",
        value: "PTFE",
      },
      {
        text: "Poly-Alkylene(PAG)",
        value: "Poly-Alkylene(PAG)",
      },
    ],
    filterMode: "tree",
    filterSearch: true,
    onFilter: (value, record) => record.thickener.includes(value),
    width: "30%",
  },
  {
    title: "Color",
    dataIndex: "color",
    filters: [
      {
        text: "white",
        value: "white",
      },
      {
        text: "Blue",
        value: "Blue",
      },
      {
        text: "Red",
        value: "Red",
      },
      {
        text: "Green",
        value: "Green",
      },
    ],
    filterMode: "tree",
    filterSearch: true,
    onFilter: (value, record) => record.color.includes(value),
    width: "30%",
  },
  {
    title: "NLGI",
    dataIndex: "nlgi",
    sorter: (a, b) => a.nlgi - b.nlgi,
  },
];
const data = [
  {
    key: "1",
    name: "Agip BLASIA S 320",
    type: "Synthetic",
    viscosityindex: 205,
    viscosity40: 320,
    density: 1030,
    pourpoint: -33,
    flashpoint: 242,
    thickener: "",
    color: "",
    nlgi: "1",
  },
  {
    key: "2",
    name: "Shell Omala S2 G220",
    type: "--",
    viscosityindex: 100,
    viscosity40: 220,
    density: 899,
    pourpoint: -18,
    flashpoint: 240,
    thickener: "",
    color: "",
    nlgi: "",
  },
  {
    key: "3",
    name: "",
    type: "--",
    viscosityindex: 100,
    viscosity40: 220,
    density: 899,
    pourpoint: -18,
    flashpoint: 240,
    thickener: "",
    color: "",
    nlgi: "",
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
const OilForm = () => (
  <Table
    className="oil-form"
    columns={columns}
    dataSource={data}
    onChange={onChange}
  />
);
export default OilForm;
