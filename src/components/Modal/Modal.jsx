import {Card, CardContent, CardHeader, IconButton, Typography, Modal as MaterialModal} from "@mui/material";
import {Close} from "@mui/icons-material";
import style from "./Modal.module.css";

export const Modal = (props) => {
  return (
    <MaterialModal
      open={props.isOpen}
      onClose={props.closeModalHandler}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Card className={style.wrapper}>
        <CardHeader
          action={
            <IconButton onClick={props.closeModalHandler}>
              <Close />
            </IconButton>
          }
          title={props.title}
        />
        <CardContent>
          {props.children}
        </CardContent>
      </Card>
    </MaterialModal>
  );
}