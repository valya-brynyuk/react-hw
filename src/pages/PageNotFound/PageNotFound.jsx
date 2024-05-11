import {MainLayout} from "../../templates/MainLayout/MainLayout.jsx";
import {Divider, Typography} from "@mui/material";

export const PageNotFound = () => {

  return (
    <MainLayout hideBreadcrumbs>
      <Typography variant="h1" component="h1">404 - Not Found</Typography>
      <Divider />
    </MainLayout>
  );
};

