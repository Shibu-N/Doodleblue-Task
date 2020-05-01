import React from "react";
import { Row, Col, Input, Button, Tag } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { SendMessageDetails } from "../Redux/Actions/index";
class SendMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedUsers: [],
      message: "",
    };
  }

  getUserName = (data, index) => {
    const { contactDetails } = this.props;
    if (data) {
      return contactDetails[index].contactName;
    }
  };

  componentDidMount() {
    this.setState({
      selectedUsers: this.props.selectedContact,
    });
  }

  removeUser = (index) => {
    const { selectedUsers } = this.state;
    selectedUsers[index] = false;
    this.setState({
      selectedUsers,
    });
  };

  sendMessage = () => {
    const { message } = this.state;
    const { messageDetails } = this.props;
    let globalMessageData = [];
    this.state.selectedUsers.forEach((data, index) => {
      let newMessageData = [];
      newMessageData.push(message);
      if (messageDetails[index]) {
        newMessageData = newMessageData.concat(messageDetails[index]);
      }
      if (data) {
        globalMessageData[index] = newMessageData;
      }
    });
    console.log(globalMessageData);
    this.props.SendMessageDetails(globalMessageData);
    this.props.closeModal();
  };

  render() {
    const { TextArea } = Input;
    return (
      <div style={{ height: "100%", padding: "2%" }}>
        <div className="row-spacing">
          {this.state.selectedUsers.map((data, index) => {
            if (data)
              return (
                <Tag
                  style={{ marginLeft: "1%" }}
                  closable={this.state.selectedUsers.length > 1}
                  onClose={() => this.removeUser(index)}
                >
                  {this.getUserName(data, index)}
                </Tag>
              );
          })}
        </div>
        <div className="row-spacing">
          <TextArea
            value={this.state.message}
            onChange={(e) => {
              this.setState({
                message: e.target.value,
              });
            }}
          />
        </div>
        <div className="row-spacing">
          <Button
            style={{
              backgroundImage: " linear-gradient(to right, #f5b041, #DF128F )",
              color: "#ffffff",
              borderRadius: "5px 5px 5px 5px",
              float: "right",
            }}
            onClick={this.sendMessage}
          >
            Send
          </Button>
        </div>
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

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      SendMessageDetails,
    },
    dispatch
  );
}
export default connect(mapStateToProps, matchDispatchToProps)(SendMessage);
