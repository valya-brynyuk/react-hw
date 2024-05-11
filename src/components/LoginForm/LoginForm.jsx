import {useFormik} from "formik";
import {object, string} from "yup";
import {Button, Stack, TextField} from "@mui/material";
import {useLoginMutation} from "../../store/query/auth.js";
import {useDispatch} from "react-redux";
import {setToken} from "../../store/slice/authSlice.js";

export const LoginForm = (props) => {
  const [login, {isLoading, error}] = useLoginMutation();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    validationSchema: object({
      login: string().required(),
      password: string().required(),
    }),
    onSubmit: async (values) => {
      const resp = await login({
        login: values.login,
        password: values.password
      });

      if (resp.data?.token) {
        dispatch(setToken(resp.data?.token));
        props.onLogin?.();
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack direction="column" spacing={3}>
        <TextField
          fullWidth
          name="login"
          label="Login"
          value={formik.values.login}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.login && Boolean(formik.errors.login) || Boolean(error?.data)}
          helperText={formik.touched.login && formik.errors.login || error?.data}
        />
        <TextField
          fullWidth
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" disabled={isLoading} fullWidth type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  );
}