import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class GDPRConsent extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: "false"
    };
  }

  hideGdpr = () => {
    this.setState({
      visible: "false"
    });
    cookies.set("gdprvisible", "false", { path: "/", maxAge: "7257600" });
    // maxAge: "604800" = 1 week in seconds
    // maxAge: "2419200" = 4 weeks, 7257600 = 12 weeks
  };

  componentDidMount() {
    window.addEventListener("scroll", this.hideGdpr);
    this.setState({
      visible: cookies.get("gdprvisible")
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.hideGdpr);
  }

  render() {
    return (
      <Gdpr
        visible={this.state.visible !== "false" ? "block" : "none"}
        onClick={this.hideGdpr}
        backgroundcolor={this.props.backgroundcolor}
        color={this.props.color}
      >
        {this.props.text}
        &nbsp;
        <ConsentLink to={this.props.linkto}>{this.props.linktext}</ConsentLink>.
      </Gdpr>
    );
  }
}
export default GDPRConsent;

const Gdpr = styled.div`
  display: ${props => props.visible};
  cursor: pointer;
  background-color: ${props =>
    props.backgroundcolor ? props.backgroundcolor : "#000"};
  position: block;
  width: 100%;
  float: left;
  padding: 0.5em 0.5em 0.5em 0.5em;
  text-decoration: none;
  color: ${props => (props.color ? props.color : "#fff")};
  min-height: 50px;
  text-align: center;
`;

const ConsentLink = styled(Link)`
  color: inherit;
`;
