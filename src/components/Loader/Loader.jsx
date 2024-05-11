import {CircularProgress} from "@mui/material";

export const Loader = (props) => {
  if (props.resp.isLoading) {
    return <CircularProgress />;
  }

  return props.data();
}