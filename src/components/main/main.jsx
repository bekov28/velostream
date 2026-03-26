import React from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { colors } from "../../constants/colors";
import Category from "../category/category";
import Videos from "../videos/videos";

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");

  const selectedCategoryHandler = (category) => setSelectedCategory(category);

  return (
    <Stack>
      <Category
        selectedCategoryHandler={selectedCategoryHandler}
        selectedCategory={selectedCategory}
      />
      <Box p={2} sx={{ height: "90vh" }}>
        <Container maxWidth={"90%"}>
          <Typography variant={"h4"} fontWeight={"bold"} mb={2}>
            {selectedCategory} <span style={{ color: colors.secondary }}>videos</span>
          </Typography>
          <Videos />
        </Container>
      </Box>
    </Stack>
  );
};

export default Main;
