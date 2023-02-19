import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from "@mui/material";
import {Link} from "react-router-dom"
export const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link to={"/"}>
          <IconButton size="large" edge="start" color="inherit" aria-level="10">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXPDyauKnIPYnIV8AD7IiNyTKn-NYTj8t1TOnSsKiBrKMxNAFgGSto3IFLMtok4DW8i9c&usqp=CAU"
              height="40px"
              length="40px"
              style={{ borderRadius: "10px" }}
              alt="logo"
            />
          </IconButton>
        </Link>

        <Typography variant="h6" component="div">
          EventApp
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
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button color="inherit">Signup</Button>
          </Link>
          <Link
            to={"/login"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button color="inherit">Login</Button>
          </Link>

          <Link
            to={"/game"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button color="inherit">Game</Button>
          </Link>

          <Link
            to={"/cart"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button color="inherit">Cart</Button>
          </Link>

          <Link
            to={"/checkout"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button color="inherit">Checkout</Button>
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
