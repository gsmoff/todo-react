import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Menu from "../../components/Menu";
import CartHeader from "../../components/Cart/CartHeader";
import "../Header/Header.scss";
import logo from 'assets/logo.svg'

type Props = {
  cartData: {
    totalCount: number;
    totalPrice: number;
  };
};

const Header = ({cartData}: Props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="app-bar">
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}>
              <img src={logo}/>
            </Typography>
            <Menu />
            <CartHeader
              totalCount={cartData.totalCount}
              totalPrice={cartData.totalPrice}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
