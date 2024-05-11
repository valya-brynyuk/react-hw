import {AppBar, Button, Chip, Container, Divider, Stack} from "@mui/material";
import {Link} from "react-router-dom";
import {Call, ExpandMore} from "@mui/icons-material";
import {routes} from "../../routes/routes.js";
import style from './MainAppBar.module.css';

export const MainAppBar = () => (
  <AppBar position="static" color="transparent">
    <Container maxWidth="xl">
      <div className={style.wrapperInner}>
        <div className={style.logoBlock}>
          <Link to={routes.home()} className={style.logoBlock}>
            <img src="/img/logo_main.svg" alt="Logo" className={style.logo}/>
          </Link>
          <Button variant="secondary" endIcon={<ExpandMore/>} className={style.link}>
            Kyiv
          </Button>
        </div>
        <Stack direction="row" spacing={2} alignItems="center">
          <a href="/" className={style.link}>
            <Chip label="Акції" color="error" className={style.link}/>
          </a>
          <a href="/" className={style.link}>Подарункові картки</a>
          <a href="/" className={style.link}>Магазини</a>
          <Divider orientation="vertical"/>
          <Button variant="secondary" endIcon={<ExpandMore/>} className={style.link}>
            Ще
          </Button>
          <Divider orientation="vertical"/>
          <Button variant="secondary" endIcon={<ExpandMore/>} startIcon={<Call/>} className={style.link}>
            Допомога
          </Button>
          <Divider orientation="vertical"/>
          <Chip label="Ukr" color="success"  className={style.link}/>
          <Button variant="link" className={style.link}>Eng</Button>
        </Stack>
      </div>
    </Container>
  </AppBar>
)