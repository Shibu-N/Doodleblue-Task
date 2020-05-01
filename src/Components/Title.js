import React from "react";
import { Col, Row, Menu, Dropdown, Button, message,List } from "antd";
import {
  DownOutlined,
  SearchOutlined,
  MailOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { connect } from "react-redux";
import Search from "antd/lib/transfer/search";
let flag = true;
class Title extends React.Component {
  constructor() {
    super();
    this.state = {
      userList: [],
      selectedUser: null,
    };
  }
  selectUser = (data, index) => {
    this.setState({
      selectedUser: index,
    });
  };

  getUserList = () => {
    if (this.props.contactDetails.length > 1) {
      return (
        <Menu>
          {this.props.contactDetails.map((data, index) => (
            <Menu.Item
            key={index}
              style={{
                display:
                  this.props.contactDetails[this.state.selectedUser]
                    .contactName === data.contactName
                    ? "none"
                    : "",
              }}
              onClick={() => this.selectUser(data, index)}
            >
              {data.contactName}
            </Menu.Item>
          ))}
        </Menu>
      );
    } else {
      return <div></div>;
    }
  };

  componentDidUpdate(prevProps) {
    if (this.props.contactDetails !== prevProps.contactDetails) {
      const { contactDetails } = this.props;
      if (contactDetails.length > 0 && flag) {
        flag = false;
        this.setState({
          selectedUser: 0,
        });
      }
    }
  }

  getMessage = () => {
    const { messageDetails } = this.props;
    const { selectedUser } = this.state;
    console.log(messageDetails[selectedUser]);
    if (
      messageDetails[selectedUser] &&
      messageDetails[selectedUser].constructor === Array
    ) {
      return (
        <List
        size="small"
        bordered
        dataSource={messageDetails[selectedUser]}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
      );
    } else {
      return <div></div>;
    }
  };

  render() {
    return (
      <div
        style={{
          height: "8vh",
          borderBottom: "1px solid #d9d9d9",
          padding: "0.5%",
          width: "100%",
        }}
      >
        <Row>
          <Col span={2}>
            <center>
              {" "}
              <Button shape="circle" icon={<SearchOutlined />} />
            </center>
          </Col>
          <Col span={18} style={{ padding: "0.5%" }} />
          <Col span={1} style={{ padding: "0.5%" }}>
            <Dropdown overlay={this.getMessage()} trigger={["click"]}>
              <MailOutlined />
            </Dropdown>
          </Col>
          <Col span={2} style={{ padding: "0.5%" }}>
            {this.state.selectedUser !== null ? (
              <Dropdown overlay={this.getUserList()}>
                <span>
                  {
                    this.props.contactDetails[this.state.selectedUser]
                      .contactName
                  }{" "}
                  <DownOutlined />
                </span>
              </Dropdown>
            ) : (
              ""
            )}
          </Col>
          <Col span={1} style={{ padding: "0.5%" }}>
            <BellOutlined />
          </Col>
        </Row>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    contactDetails: state.contactDetails,
    messageDetails: state.messageDetails,
  };
}

export default connect(mapStateToProps, null)(Title);
