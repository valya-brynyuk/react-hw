import {Container, Divider, Stack, Typography} from "@mui/material";
import {Call, Facebook, Instagram, Telegram, YouTube} from "@mui/icons-material";
import {MainAppBar} from "../../components/MainAppBar/MainAppBar.jsx";
import style from './ContainerLayout.module.css';
import {ToastsList} from "../../pages/ToastsList/ToastsList.jsx";

export const ContainerLayout = ({children, header}) => {
  return (
    <>
      <MainAppBar />
      {header}
      <Container maxWidth="xl">
        {children}
      </Container>
      <Divider className={style.footerDivider} />
      <footer className={style.footer}>
        <Container maxWidth="xl">
          <Stack direction="row" alignItems="center" spacing={2} justifyContent="space-between">
            <Typography className={style.copyright}>
              © Всі права захищені ТОВ «КОМФІ ТРЕЙД», 2010–2024
            </Typography>

            <Stack direction="row" spacing={2} alignItems="center">
              <a href="/">
                <Facebook/>
              </a>

              <a href="/">
                <YouTube/>
              </a>

              <a href="/">
                <Instagram/>
              </a>

              <a href="/">
                <Telegram/>
              </a>

              <a href="/">
                <Call/>
              </a>
            </Stack>
          </Stack>
        </Container>
        <ToastsList />

      </footer>
    </>
  );
};
