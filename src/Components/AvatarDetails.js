import React from "react";
import { Avatar, Row, Col } from "antd";
import {
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
  HomeOutlined,
} from "@ant-design/icons";
const AvatarDetails = (props) => {
  return (
    <div>
      <div
        style={{ background: "#F9F9F9", minHeight: "35vh", fontSize: "1em",padding:"2%",marginTop: "1%" }}
      >
        <div className="row-spacing">
          <center>
          <div>
            <Avatar
              size={100}
              style={{ fontSize: "3em", background: "#80dfff" }}
            >
              {props.contactDetails.contactName.substring(
                0,
                props.contactDetails.contactName.length -
                  (props.contactDetails.contactName.length - 1)
              )}
            </Avatar>
              </div>
            <div style={{fontSize:"1.5em"}}>
                {props.contactDetails.contactName}
            </div>
          </center>
        </div>
        <Row className="row-spacing">
          <Col span={8} className="row-spacing" >
            Name :
          </Col>
          <Col span={12} className="row-spacing">
            {props.contactDetails.contactName}
          </Col><Col span={8} className="row-spacing">
            Email :
          </Col>
          <Col span={12} className="row-spacing">
            {props.contactDetails.contactEmail}
          </Col>
          <Col span={8} className="row-spacing">
            Phone :
          </Col>
          <Col span={12} className="row-spacing">
            {props.contactDetails.contactNumber}
          </Col>
          <Col span={8} className="row-spacing">
            Company :
          </Col>
          <Col span={12} className="row-spacing">
            {props.contactDetails.companyName}
          </Col>
          <Col span={8} className="row-spacing">
            Address :
          </Col>
          <Col span={12} className="row-spacing">
            {props.contactDetails.contactAddress}
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default AvatarDetails;
