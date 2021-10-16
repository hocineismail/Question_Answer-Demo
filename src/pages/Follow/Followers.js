import React from "react";
import LayoutComponent from "../../components/layout/LayoutComponent";
import SectionFollowers from "./SectionFollowers";

export default function Followers() {
  return (
    <LayoutComponent header={false} sidebar={true} sidebarRight={true}>
      <SectionFollowers id={localStorage.getItem("user_id")} />
    </LayoutComponent>
  );
}
