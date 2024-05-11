import {useDispatch, useSelector} from "react-redux";
import {allToasts, removeToast} from "../../store/slice/toastSlice.js";
import {Snackbar} from "@mui/material";

export const ToastsList = () => {
  const items = useSelector(allToasts);
  const dispatch = useDispatch();

  return (
    <>
      {
        items.map((item, index) => (
          <Snackbar
            key={`snackbar-${item}-${index}`}
            message={item}
            open
            autoHideDuration={3000}
            onClose={() => dispatch(removeToast(item))}
          />
        ))
      }
    </>
  )
}