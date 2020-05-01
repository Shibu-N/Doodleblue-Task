import React from "react";
import { Row, Col, Button, Modal, Checkbox, Avatar, Input } from "antd";
import { DownOutlined, SearchOutlined, PlusOutlined } from "@ant-design/icons";
import { TiContacts } from "react-icons/ti";
import CreateContact from "./CreateContact";
import AvatarDetails from "./AvatarDetails";
import SendMessage from "./SendMessage";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { AddContactDetails } from "../Redux/Actions";
const contactDetailList = [
  {
    contactName: "Jane",
    contactNumber: "1231231231",
    contactEmail: "jane@asd.com",
    contactAddress: "asdsdsad asdsadsd,asdsd",
    companyName:"Estra Botieq"
  },
  {
    contactName: "Jack",
    contactNumber: "1231231231",
    contactEmail: "jack@asd.com",
    contactAddress: "asdsdsad asdsadsd,asdsd",
    companyName:"Amazonia Online"
  },
  {
    contactName: "Edward",
    contactNumber: "1231231231",
    contactEmail: "edward@asd.com",
    contactAddress: "asdsdsad asdsadsd,asdsd",
  },
  {
    contactName: "Kristen",
    contactNumber: "1231231231",
    contactEmail: "kristen@asd.com",
    contactAddress: "asdsdsad asdsadsd,asdsd",
    companyName:"Alibaba Traders"
  },
];
class MainContent extends React.Component {
  constructor() {
    super();
    this.state = {
      addUserModal: false,
      selectedUser: [],
      selectedContact: {},
    };
  }

  closeModal = () => {
    this.setState({
      addUserModal: false,
    });
  };

  getRandomBackground = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
  };

  componentDidMount() {
    this.props.AddContactDetails(contactDetailList);
  }

  viewModal=()=>{
    this.setState({
      addUserModal:true
    })
  }

  render() {
    return (
      <div
        style={{
          height: "92vh",
          width: "100%",
          padding: "2.5%",
        }}
      >
        <div>
          <Row>
            <Col span={1}>
              <TiContacts style={{ height: "60px", width: "100%" }} />
            </Col>
            <Col span={6} style={{ paddingLeft: "1vw" }}>
              <div>
                <b style={{ fontSize: "20px", color: "#000000" }}>Contact</b>
              </div>
              <div>
                <span style={{ color: "#CFCFCF" }}>
                  Welcome to FlatCRM Contact Page
                </span>
              </div>
            </Col>
            <Col span={4}>
              <span style={{ color: "#CFCFCF" }}>Sort By:</span>
              <span style={{ color: "#000000" }}>
                Date Created <DownOutlined />
              </span>
            </Col>
          </Row>
        </div>
        <div className="row-spacing">
          <Row gutter={16}>
            <Col span={1} />
            <Col span={5}>
              <Input
                style={{ borderRadius: "12px 12px 12px 12px" }}
                suffix={<SearchOutlined />}
              />
            </Col>
            <Col span={2}>
              {this.state.selectedUser.includes(true) ? (
                <Button
                  style={{
                    backgroundImage:
                      " linear-gradient(to right, #f5b041, #DF128F )",
                    color: "#ffffff",
                    borderRadius: "5px 5px 5px 5px",
                  }}
                  onClick={this.viewModal}
                >
                  Send Message
                </Button>
              ) : (
                <Button
                  onClick={this.viewModal}
                  style={{
                    backgroundImage:
                      " linear-gradient(to right, #f5b041, #DF128F )",
                    color: "#ffffff",
                    borderRadius: "5px 5px 5px 5px",
                  }}
                >
                  Add New Contact
                </Button>
              )}
            </Col>
          </Row>
        </div>
        <Row gutter={18}>
          <Col span={12}>
            <div style={{ width: "100%", marginTop: "1%" }}>
              <Row
                style={{
                  fontWeight: "bold",
                  padding: "2%",
                  background: "#F9F9F9",
                }}
              >
                <Col span={2}>
                  <PlusOutlined />
                </Col>
                <Col span={11} style={{ color: "#d9d9d9" }}>
                  Basic Info
                </Col>
                <Col span={11} style={{ color: "#d9d9d9" }}>
                  Company
                </Col>
              </Row>
              <div style={{ height: "50vh", overflow: "auto" }}>
                {this.props.contactDetails.map((details, index) => (
                  <div
                    style={{
                      padding: "2%",
                      background: "#ffffff",
                    }}
                    onClick={() => {
                      this.setState({ selectedContact: details });
                    }}
                  >
                    <Row>
                      <Col span={2}>
                        <Checkbox
                          checked={this.state.selectedUser[index]}
                          onChange={() => {
                            const state = this.state.selectedUser;
                            state[index] = !state[index];
                            this.setState({ selectedUser: state });
                          }}
                        />
                      </Col>
                      <Col span={11}>
                        <Row>
                          <Col span={6}>
                            {" "}
                            <Avatar
                              style={{
                                background: this.getRandomBackground(),
                                height: "45px",
                                width: "45px",
                                fontSize: "25px",
                                textTransform: "capitalize",
                                paddingTop: "10%",
                              }}
                            >
                              {details.contactName.substring(
                                0,
                                details.contactName.length -
                                  (details.contactName.length - 1)
                              )}
                            </Avatar>
                          </Col>
                          <Col span={18}>
                            <span
                              style={{ color: "#000000", fontSize: "1.2em" }}
                            >
                              {details.contactName}
                            </span>
                            <div style={{ color: "#d9d9d9" }}>
                              {details.contactEmail}
                            </div>
                          </Col>
                        </Row>
                      </Col>
                      <Col span={11}>
                        {details.companyName}
                      </Col>
                    </Row>
                  </div>
                ))}
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div>
              {Object.keys(this.state.selectedContact).length > 0 && (
                <AvatarDetails contactDetails={this.state.selectedContact} />
              )}
            </div>
          </Col>
        </Row>
        <div>
          <Modal
            title={
              this.state.selectedUser.includes(true)
                ? "Send Message"
                : "Contact Details"
            }
            visible={this.state.addUserModal}
            maskClosable={false}
            onCancel={() => {
              this.setState({
                addUserModal: false,
              });
            }}
            footer={null}
          >
            {this.state.addUserModal&&this.state.selectedUser.includes(true) ? (
              <SendMessage selectedContact={this.state.selectedUser} closeModal={this.closeModal} />
            ) : (
              <CreateContact closeModal={this.closeModal} />
            )}
          </Modal>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    contactDetails: state.contactDetails,
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      AddContactDetails,
    },
    dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(MainContent);
