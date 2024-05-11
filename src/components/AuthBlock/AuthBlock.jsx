import {Avatar, Box, Button, Popover} from "@mui/material";
import {useState} from "react";
import {Modal} from "../Modal/Modal.jsx";
import {LoginForm} from "../LoginForm/LoginForm.jsx";
import {useDispatch, useSelector} from "react-redux";
import {isAuthenticated, setToken} from "../../store/slice/authSlice.js";
import style from "./AuthBlock.module.css";

export const AuthBlock = () => {
  const isAuth = useSelector(isAuthenticated);
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutClickHandler = () => {
    dispatch(setToken(''));
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const authBtnClickHandler = () => setAuthModalOpen(true);
  const closeModalHandler = () => setAuthModalOpen(false);

  if (!isAuth) {
    return (
      <>
        <Button variant="secondary" onClick={authBtnClickHandler}>Увійти</Button>
        <Modal
          isOpen={authModalOpen}
          closeModalHandler={closeModalHandler}
          title="Login"
        >
          <LoginForm onLogin={closeModalHandler}/>
        </Modal>
      </>
    )
  }

  return (
    <>
      <Avatar onClick={handleClick}>U</Avatar>
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
        <Box className={style.popover}>
          <Button variant="contained" color="error" type="button" onClick={logoutClickHandler}>Вийти</Button>
        </Box>
      </Popover>
    </>
  )
}