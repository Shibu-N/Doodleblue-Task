import React from "react";
import logo from "./logo.svg";
import { Row, Col } from "antd";
import Title from "./Components/Title";
import Sider from "./Components/Sider";
import MainContent from "./Components/MainContent";
import "./App.css";
class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Row>
          <Col span={1}>
            <Sider />
          </Col>
          <Col span={23}>
            <div>
              <Title />
            </div>
            <div>
              <MainContent />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
export default App;
