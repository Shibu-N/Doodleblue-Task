import React from "react";
import { Row, Col, Input, Button } from "antd";
import { AddContactDetails } from "../Redux/Actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
class CreateContact extends React.Component {
  constructor() {
    super();
    this.state = {
      contactName: "",
      contactNumber: "",
      contactAddress: "",
      contactEmail: "",
      companyName: "",
    };
  }

  inputChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  getFormDetails = () => {
    const {
      contactAddress,
      contactEmail,
      contactName,
      contactNumber,
      companyName,
    } = this.state;
    if (
      contactName &&
      contactNumber &&
      contactEmail &&
      contactAddress &&
      companyName
    ) {
      console.log(this.props);
      let contactDetails = this.props.contactDetails;
      contactDetails.push(this.state);
      this.props.AddContactDetails(contactDetails);
      this.setState({
        contactName: "",
        contactAddress: "",
        contactEmail: "",
        contactNumber: "",
        companyName: "",
      });
      this.props.closeModal();
    } else {
      alert("Fill in all fields");
    }
  };

  render() {
    const { TextArea } = Input;
    return (
      <div style={{ padding: "5%" }}>
        <Row className="row-spacing">
          <Col span={9}>Contact Name </Col>
          <Col span={1}>:</Col>
          <Col span={14}>
            <Input
              id="contactName"
              value={this.state.contactName}
              onChange={this.inputChange}
            />
          </Col>
        </Row>
        <Row className="row-spacing">
          <Col span={9}>Contact Number</Col>
          <Col span={1}>:</Col>
          <Col span={14}>
            <Input
              id="contactNumber"
              value={this.state.contactNumber}
              onChange={this.inputChange}
            />
          </Col>
        </Row>
        <Row className="row-spacing">
          <Col span={9}>Company Name </Col>
          <Col span={1}>:</Col>
          <Col span={14}>
            <Input
              id="companyName"
              value={this.state.companyName}
              onChange={this.inputChange}
            />
          </Col>
        </Row>
        <Row className="row-spacing">
          <Col span={9}>Email </Col>
          <Col span={1}>:</Col>
          <Col span={14}>
            <Input
              id="contactEmail"
              value={this.state.contactEmail}
              onChange={this.inputChange}
            />
          </Col>
        </Row>
        <Row className="row-spacing">
          <Col span={9}>Address</Col>
          <Col span={1}>:</Col>
          <Col span={14}>
            <TextArea
              id="contactAddress"
              value={this.state.contactAddress}
              onChange={this.inputChange}
            />
          </Col>
        </Row>
        <div className="row-spacing">
          <Button
            onClick={this.getFormDetails}
            style={{
              backgroundImage: " linear-gradient(to right, #f5b041, #DF128F )",
              color: "#ffffff",
              borderRadius: "5px 5px 5px 5px",
              float: "right",
            }}
          >
            Save
          </Button>
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
export default connect(mapStateToProps, matchDispatchToProps)(CreateContact);
