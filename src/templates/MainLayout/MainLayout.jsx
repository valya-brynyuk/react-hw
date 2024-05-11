import {ContainerLayout} from "../ContainerLayout/ContainerLayout.jsx";
import {ShopAppBar} from "../../components/ShopAppBar/ShopAppBar.jsx";
import {Breadcrumbs} from "../../components/Breadcrumbs/Breadcrumbs.jsx";

export const MainLayout = ({children, hideBreadcrumbs}) => (
  <ContainerLayout header={
    <>
      <ShopAppBar />
      {!hideBreadcrumbs && (
        <Breadcrumbs />
      )}
    </>
  }>
    {children}
  </ContainerLayout>
)