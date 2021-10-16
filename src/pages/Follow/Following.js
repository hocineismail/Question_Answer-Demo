import React from "react";
import LayoutComponent from "../../components/layout/LayoutComponent";
import UserCard from "../../components/cards/UserCard";
import { Button } from "@material-ui/core";
import SectionFollowing from "./SectionFollowing";

export default function Following() {
  return (
    <LayoutComponent header={false} sidebar={true} sidebarRight={true}>
      <SectionFollowing id={localStorage.getItem("user_id")} />
    </LayoutComponent>
  );
}
