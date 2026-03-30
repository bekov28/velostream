import { Paper, IconButton } from "@mui/material";
import React, { useState } from "react";
import { colors } from "../../constants/colors";
import { Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    if (value) {
      navigate(`/search/${value}`);
    }
    setValue("");
  };

  return (
    <Paper
      component={"form"}
      sx={{ border: `1px solid ${colors.secondary}`, boxShadow: "none", pl: 2, mr: 5 }}
      onSubmit={submitHandler}
    >
      <input
        type="text"
        placeholder="Search..."
        className="search-bar"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <IconButton type="submit">
        <Search />
      </IconButton>
    </Paper>
  );
};

export default Searchbar;
