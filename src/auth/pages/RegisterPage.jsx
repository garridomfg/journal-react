import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Alert, Button, Grid, Link, TextField } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { startCreatingUserWithEmailPassword } from "../../store/auth";

const formData = {
  displayName: "",
  email: "",
  password: "",
};

const formValidations = {
  displayName: [(value) => value.length >= 1, "The name is required."],
  email: [(value) => value.includes("@"), "There must be a valid email."],
  password: [
    (value) => value.length >= 6,
    "The password must have at least 6 characters.",
  ],
};

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector((state) => state.auth);

  const isCheckingAuthentication = useMemo(
    () => status === "checking",
    [status]
  );

  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;

    dispatch(startCreatingUserWithEmailPassword(formState));
  };

  return (
    <AuthLayout title="Register">
      <form
        className="animate__animated animate__fadeIn animate__faster"
        onSubmit={onSubmit}
      >
        <Grid container>
          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <TextField
              label="Full name"
              type="text"
              placeholder="Full name"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            ></TextField>
          </Grid>

          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@gmail.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            ></TextField>
          </Grid>

          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            ></TextField>
          </Grid>

          <Grid container spacing={2} sx={{ marginBottom: 2, marginTop: 2 }}>
            <Grid item xs={12} sx={{ display: errorMessage ? "" : "none" }}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={isCheckingAuthentication}
              >
                Sign up
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
