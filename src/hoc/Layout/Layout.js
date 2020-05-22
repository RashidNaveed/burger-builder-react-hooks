import React, { useState } from "react";
import { connect } from "react-redux";
import Aux from "../Auxiliray/Auxiliray";
import Navigation from "../../components/UI/Navigation/Navigation";
import SideDrawer from "../../components/UI/Navigation/SideDrawer/SideDrawer";

const Layout = (props) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerCloseHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  };
  return (
    <Aux>
      <Navigation
        drawerToggleClicked={sideDrawerToggleHandler}
        isAuth={props.isAuthenticated}
      />
      <SideDrawer
        open={showSideDrawer}
        closed={sideDrawerCloseHandler}
        isAuth={props.isAuthenticated}
      />
      <main
        style={{
          marginTop: 72,
        }}
      >
        {props.children}
      </main>
    </Aux>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Layout);
