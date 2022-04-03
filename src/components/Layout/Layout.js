import React from "react";
import Auxiliary from "../../hoc/Auxilary";

const layout = (props) => (
  <Auxiliary>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>{props.children}</main>
  </Auxiliary>
);

export default layout;