import { Link as RouterLink } from 'react-router-dom'
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";

export const LoginPage = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{ backgroundColor: "white", padding: 3, borderRadius: 2 }}
      >
        <Typography variant="h5" sx={{ marginBottom: 1 }}>
          Login
        </Typography>

        <form>
          <Grid container>
            <Grid item xs={12} sx={{ marginTop: 2 }}>
              <TextField
                label="Email"
                type="email"
                placeholder="email@gmail.com"
                fullWidth
              ></TextField>
            </Grid>
            <Grid item xs={12} sx={{ marginTop: 2 }}>
              <TextField
                label="Password"
                type="password"
                placeholder="Password"
                fullWidth
              ></TextField>
            </Grid>

            <Grid container spacing={2} sx={{ marginBottom: 2, marginTop: 2 }}>
              <Grid item xs={12} sm={6}>
                <Button variant="contained" fullWidth>
                  Sign in
                </Button>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Button variant="contained" fullWidth>
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
      </Grid>
    </Grid>
  );
};
