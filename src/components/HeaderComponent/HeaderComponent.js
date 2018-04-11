import React, { Component } from 'react';
import './HeaderComponent.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

  class TopHeader extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
  const style ={backgroundColor: '#555'};
  const textColor ={color: '#fff'};

    return (
      <div>
        <Navbar style={style} light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink style={textColor} href="/components/">Go to Website</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle style={textColor} nav caret>
                  New
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink style={textColor}>Create Node</NavLink>
              </NavItem>
            </Nav>

          <NavbarBrand className="ml-auto" href="/">
              <UncontrolledDropdown>
                <DropdownToggle style={textColor} nav caret>
                  My Account
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <a  /> My Account
                  </DropdownItem>
                  <DropdownItem>
                    <a  /> Sign out
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <img src='https://i.ebayimg.com/images/g/oawAAOSwi0RX0uyP/s-l300.jpg' />
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
          </NavbarBrand>

          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default TopHeader;