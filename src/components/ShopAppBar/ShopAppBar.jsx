import {AppBar, Container, Divider, IconButton, InputAdornment, OutlinedInput, Popover, Stack} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {Balance, ExpandMore, Favorite, GridView, Search} from "@mui/icons-material";
import style from './ShopAppBar.module.css';
import {AuthBlock} from "../AuthBlock/AuthBlock.jsx";
import {Cart} from "../Cart/Cart.jsx";
import {useState} from "react";
import {CategoryList} from "../../pages/HomePage/components/CategoryList/CategoryList.jsx";
import {useGetAllCategoriesQuery} from "../../store/query/category.js";

export const ShopAppBar = (props) => {
  const categoriesResp = useGetAllCategoriesQuery();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-categories' : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  return (
    <AppBar position="sticky" color="primary" className={style.toolbarPart}>
      <Container maxWidth="xl">
        <Grid container >
          <Grid xs={12} md={3}>
            <div className={style.categoryPart} onClick={handleClick}>
            <span className={style.categoryInner}>
              <GridView/>
              Каталог товарів
            </span>
              <ExpandMore/>
            </div>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <CategoryList items={categoriesResp.data || []} />
            </Popover>
          </Grid>
          <Grid xs={12} md={9} className={style.toolbar}>
            <form action="" className={style.form}>
              <OutlinedInput
                id="outlined-adornment-password"
                type="text"
                fullWidth
                endAdornment={
                  <InputAdornment position="end">
                    <Search/>
                  </InputAdornment>
                }
                placeholder="Пошук товарів"
              />

            </form >
            <Stack direction="row" alignItems="center" spacing={2}>
              <AuthBlock />
              <Divider orientation="vertical"/>
              <IconButton>
                <Balance/>
              </IconButton>
              <Divider orientation="vertical"/>
              <IconButton>
                <Favorite/>
              </IconButton>
              <Divider orientation="vertical"/>
              <Cart />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  )
}