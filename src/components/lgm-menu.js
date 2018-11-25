import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const config = {
  breakpoint: `768px`,
  columnsize: `11em`
};

export class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false
    };
  }

  showMenu = () => {
    this.setState({
      visible: true
    });
  };

  hideMenu = () => {
    this.setState({
      visible: false
    });
  };

  toggleMenu = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  render() {
    const addOnClick = React.Children.map(this.props.children, child => {
      // console.log("X: " + child.type.displayName);
      if (child !== null) {
        return React.cloneElement(child, {
          clicked: this.hideMenu,
          backgroundcolorhover: this.props.backgroundcolorhover
        });
      }
    });
    return (
      <MenuHeader
        backgroundcolor={this.props.backgroundcolor}
        color={this.props.color}
        backgroundcolorhover={this.props.backgroundcolorhover}
        breaksize={this.props.breaksize}
      >
        <HomeLink onClick={this.hideMenu} color={this.props.homecolor} to="/">
          {this.props.hometext}
        </HomeLink>
        <label onClick={this.toggleMenu}>&#9776;</label>
        <MenuUl visible={this.state.visible}>
          <nav>{addOnClick}</nav>
        </MenuUl>
      </MenuHeader>
    );
  }
}

export const MenuItem = props => (
  <li>
    <MenuLink
      onClick={props.clicked}
      to={props.to}
      backgroundcolorhover={props.backgroundcolorhover}
    >
      {props.text}
    </MenuLink>
  </li>
);

const MenuHeader = styled.header`
  background-color: ${props =>
    props.backgroundcolor ? props.backgroundcolor : "#000"};
  color: ${props => (props.color ? props.color : "#fff")};
  margin: 0;
  padding: 0;
  width: 100%;
  z-index: 3;
  & label {
    cursor: pointer;
    display: block;
    float: right;
    padding: 0 10px;
    position: relative;
    user-select: none;
    font-size: 26px;
    color: ${props => (props.color ? props.color : "#fff")};
    line-height: 40px;
  }
  & nav li {
    margin: 0 0 0 0;
    padding: 0 0 0 0;
  }
  @media (min-width: ${props =>
      props.breakpoint ? props.breakpoint : config.breakpoint}) {
    & li {
      float: left;
    }
    & li a {
      padding: 0 20px;
    }
    & ul {
      clear: none;
      float: right;
      max-height: none;
    }
    & label {
      display: none;
    }
  }
`;

const HomeLink = styled(Link)`
  display: block;
  float: left;
  font-size: 1.5em;
  padding: 0em 0.5em 0 0.5em;
  text-decoration: none;
  color: ${props => (props.color ? props.color : "#fff")};
  line-height: 40px;
`;

const MenuLink = styled(Link)`
  display: block;
  padding: 0 20px;
  text-decoration: none;
  color: inherit;
  line-height: 40px;
  text-align: right;
  &:hover {
    background-color: ${props =>
      props.backgroundcolorhover ? props.backgroundcolorhover : "#333333"};
  }
`;

const MenuUl = styled.ul`
  clear: both;
  max-height: ${props => (props.visible ? "100%" : "0")};
  margin: 0;
  padding: 0 !important;
  list-style: none;
  overflow: hidden;
  background-color: inherit;
  z-index: 3;
`;
