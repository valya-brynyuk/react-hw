import BToastContainer from 'react-bootstrap/ToastContainer';
import {useSelector} from "react-redux";
import {allToasts} from "../../store/toastSlice.js";
import {Toast} from "./components/Toast/Toast.jsx";
import style from './ToastContainer.module.css'

export const ToastContainer = props => {
  const toasts = useSelector(allToasts);

  if (!toasts.length) {
    return null;
  }

  return (
    <BToastContainer className={style.wrapper}>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id}
          title={toast.title}
          body={toast.body}
          type={toast.type}
        />
      ))}
    </BToastContainer>
  )
}