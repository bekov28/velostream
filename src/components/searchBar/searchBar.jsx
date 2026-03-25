import { Paper, IconButton } from "@mui/material";
import React from "react";
import { colors } from "../../constants/colors";
import { Search } from "@mui/icons-material";

const Searchbar = () => {
  return (
    <Paper
      component={"form"}
      sx={{ border: `1px solid ${colors.secondary}`, boxShadow: "none", pl: 2 }}
    >
      <input type="text" placeholder="Search..." className="search-bar" />
      <IconButton>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default Searchbar;
