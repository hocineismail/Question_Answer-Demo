import LayoutComponent from "../../components/layout/LayoutComponent";

import SidebarRightComponent from "../../components/sidebar/SidebarRightComponent";
import QuestionsSection from "./QuestionsSection";

import Filter from "../../components/filter.js/Filter";

export default function Home() {
  return (
    <div>
      <LayoutComponent
        header={localStorage.getItem("auth-token") ? false : true}
        sidebar={true}
        sidebarRight={<SidebarRightComponent />}
      >
        <Filter />
        <QuestionsSection />
      </LayoutComponent>
    </div>
  );
}
