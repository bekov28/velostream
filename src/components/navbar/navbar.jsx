import React from "react";
import { Box, Stack } from "@mui/material";
import logo from "../../assets/images/velo-stream.jpg";
import { colors } from "../../constants/colors";
import { Link } from "react-router-dom";
import { Searchbar } from "../";

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      p={1}
      sx={{ position: "sticky", top: 0, zIndex: 999, background: colors.primary }}
    >
      <Link to={"/"}>
        <img src={logo} alt="veloSteam-logo" height={50} />
      </Link>
      <Searchbar />
      <Box />
    </Stack>
  );
};

export default Navbar;
