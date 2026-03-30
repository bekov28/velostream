import React from "react";
import { Box, CircularProgress, Container, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { colors } from "../../constants/colors";
import { Category, Videos } from "../";
import { ApiService } from "../../service/apiService";
import { useQuery } from "@tanstack/react-query";

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  //const [videos, setVideos] = useState([]);

  const selectedCategoryHandler = (category) => setSelectedCategory(category);

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const data = await ApiService.fetchRequest(`search?part=snippet&q=${selectedCategory}`);
  //       setVideos(data.items);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getData();
  // }, [selectedCategory]);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["videos", selectedCategory], //Key is unique for the category
    queryFn: () => {
      console.log("🚀 API Request Sent for:", selectedCategory);
      return ApiService.fetchRequest(`search?part=snippet&q=${selectedCategory}`);
    },
  });

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
          {/* Show a spinner while fetching */}
          {isLoading && (
            <Box display="flex" justifyContent="center" p={5}>
              <CircularProgress color="secondary" />
            </Box>
          )}
          {/* Show error message if API fails */}
          {isError && <Typography color="error">Error fetching videos: {error.message}</Typography>}
          {/* Only render videos if data exists */}
          {data && <Videos videos={data.items} />}
        </Container>
      </Box>
    </Stack>
  );
};

export default Main;
