import {CardBanner} from "../CardBanner/CardBanner.jsx";
import {Box} from "@mui/material";

export const BannerRow = (props) => (
  <Box sx={{display: 'flex', gap: 1}} className={props.className}>
    <CardBanner href="/" title="Card Banner 1" image="/img/vite.svg" />
    <CardBanner href="/" title="Card Banner 2" image="/img/vite.svg" />
    <CardBanner href="/" title="Card Banner 3" image="/img/vite.svg" />
  </Box>
)