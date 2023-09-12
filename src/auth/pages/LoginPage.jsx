import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";

import { checkingAuthentication, startGoogleSignIn } from "../../store/auth";
import { useForm } from "../../hooks";

import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";

import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { email, password, onInputChange, onResetForm } = useForm({
    email: "test@test.com",
    password: "123456",
  });

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(checkingAuthentication());
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <TextField
              label="Email"
              type="email"
              name="email"
              placeholder="email@gmail.com"
              fullWidth
              value={email}
              onChange={onInputChange}
            ></TextField>
          </Grid>
          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <TextField
              label="Password"
              type="password"
              name="password"
              placeholder="Password"
              fullWidth
              value={password}
              onChange={onInputChange}
            ></TextField>
          </Grid>

          <Grid container spacing={2} sx={{ marginBottom: 2, marginTop: 2 }}>
            <Grid item xs={12} sm={6}>
              <Button type="submit" variant="contained" fullWidth>
                Sign in
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth onClick={onGoogleSignIn}>
                <Google />
                <Typography sx={{ marginLeft: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Do not have an account? Sign up
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
