import {Button, Form as BForm} from "react-bootstrap";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {string, object} from "yup";
import {useDispatch} from "react-redux";
import {deleteAllTodos} from "../../../../store/todoSlice.js";
import style from "./TodoForm.module.css";
import {addToast} from "../../../../store/toastSlice.js";

const defaultFormState = {
  title: '',
  body: '',
}

export const TodoForm = ({saveDataHandler}) => {

  const handleSubmit = (values, formActions) => {
    saveDataHandler({...values});
    formActions.resetForm();

    dispatch(addToast({
      type: 'success',
      body: 'Todo was created'
    }))
  }

  const todoSchema = object({
    title: string().required(),
    body: string().required(),
  });

  const dispatch = useDispatch();
  const handleAllRemove = () => {
    if (confirm("Are you sure you want to remove this item?")) {
      dispatch(deleteAllTodos());

      dispatch(addToast({
        type: 'success',
        body: 'All items deleted'
      }))
    }
  }

  return (
    <Formik
      initialValues={defaultFormState}
      onSubmit={handleSubmit}
      validationSchema={todoSchema}
    >
      <Form>
        <BForm.Group className="mb-3" controlId="TodosForm.title">
          <BForm.Label>Title</BForm.Label>
          <Field
            id="title"
            name="title"
            className="form-control"
            placeholder="Todo title"
          />
          <ErrorMessage name="title" />
        </BForm.Group>

        <BForm.Group className="mb-3" controlId="TodosForm.description">
          <BForm.Label>Task body</BForm.Label>
          <Field
            as="textarea"
            rows={3}
            className="form-control"
            id="body" name="body"
            placeholder="Todo body"
          />
          <ErrorMessage name="body" />
        </BForm.Group>

        <div className={style.actions}>
          <Button type='submit' variant="primary">Save Todo</Button>
          <Button type='reset' variant="warning">Clear</Button>
          <Button type='button' variant="danger" onClick={handleAllRemove}>Delete all</Button>
        </div>
      </Form>
    </Formik>

  );
};
