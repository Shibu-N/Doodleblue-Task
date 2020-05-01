import React from "react";
import { UnorderedListOutlined, ContactsOutlined, HomeOutlined } from "@ant-design/icons";
import "../Css/Sider.css";

export default class Sider extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="siderContainer" style={{ color: "#ffffff" }}>
        <div style={{ padding: "15%", height: "10vh" }}>
          <UnorderedListOutlined style={{ fontSize: "20px", width: "100%" }} />
        </div>
        <div className="menu-list-container">
          <HomeOutlined className="menu-list" />
        </div>
        <div className="menu-list-container">
          <ContactsOutlined className="menu-list" />
        </div>
      </div>
    );
  }
}
