import BToast from 'react-bootstrap/Toast';
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {deleteToast} from "../../../../store/toastSlice.js";

export const Toast = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const descriptor = setTimeout(() => {
      dispatch(deleteToast(props.id));
    }, 5000);

    return () => {
      clearTimeout(descriptor);
    }
  }, []);

  return (
    <BToast className={`bg-${props.type || ''}`}>
      {props.title && <BToast.Header>
        {props.title}
      </BToast.Header>}
      <BToast.Body>{props.body}</BToast.Body>
    </BToast>
  )
}