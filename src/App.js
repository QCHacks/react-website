import React, { Component } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavLink,
  MDBNavItem,
  MDBHamburgerToggler,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBCollapse,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

class hamburgerMenuPage extends Component {
  state = {
    collapse1: "",
  };

  toggleSingleCollapse = (collapseId) => () => {
    this.setState({
      [collapseId]: !this.state[collapseId],
    });
  };

  render() {
    const mdbcontainerDesign = {
      margin: "0px",
      padding: "0px",
      maxWidth: "100%",
    };
    const mdbnavbarDesign = {
      backgroundColor: "#ED1C24",
      marginTop: "0px",
    };
    return (
      <Router>
        <MDBContainer style={mdbcontainerDesign}>
          <MDBNavbar style={mdbnavbarDesign} dark>
            <MDBContainer style={mdbcontainerDesign}>
              <MDBNavbarBrand className="white-text">MDBNavbar</MDBNavbarBrand>
              <MDBHamburgerToggler
                onClick={this.toggleSingleCollapse("collapse2")}
                isOpen={false}
                id="hamburger2"
              />
              <MDBCollapse isOpen={this.state.collapse2} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="#!">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">Link</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">Profile</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
        </MDBContainer>
      </Router>
    );
  }
}

export default hamburgerMenuPage;
