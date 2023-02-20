import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from "@mui/material";
import {Link} from "react-router-dom"
export const Navbar = () => {
  return (
    <AppBar position="static" style={{ border: "1px solid red", backgroundColor:"orangered", color:"Black" }}>
      <Toolbar>
        <Link to={"/"}>
          <IconButton size="large" edge="start" color="inherit" aria-level="10">
            <img
              src="https://t4.ftcdn.net/jpg/01/76/11/53/360_F_176115302_NQfLnF9hklFGpezLqAGDamOXGhQTsVG5.jpg"
              height="40px"
              length="40px"
              style={{ borderRadius: "10px" }}
              alt="logo"
            />
          </IconButton>
        </Link>

        <Typography variant="h6" component="div">
           MyEvent
        </Typography>
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={3}
          style={{ marginLeft: "55%" }}
        >
          <Link
            to={"/signup"}
            style={{ textDecoration: "none", color:"Black",fontWeight:"bold" }}
          >
            <Button color="inherit"><b>Signup</b></Button>
          </Link>
          <Link
            to={"/login"}
            style={{ textDecoration: "none", color:"Black",fontWeight:"bold" }}
          >
            <Button color="inherit"><b>Login</b></Button>
          </Link>

          <Link
            to={"/game"}
            style={{ textDecoration: "none", color:"Black",fontWeight:"bold" }}
          >
            <Button color="inherit"><b>Game</b></Button>
          </Link>

          <Link
            to={"/cart"}
            style={{ textDecoration: "none",color:"Black",fontWeight:"bold" }}
          >
            <Button color="inherit"><b>Cart</b></Button>
          </Link>

          <Link
            to={"/checkout"}
            style={{ textDecoration: "none", color:"Black",fontWeight:"bold" }}
          >
            <Button color="inherit"><b>Checkout</b></Button>
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
