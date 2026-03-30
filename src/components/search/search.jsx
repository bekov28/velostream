import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "../../service/apiService";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import { colors } from "../../constants/colors";
import Videos from "../videos/videos";

const Search = () => {
  //const [videos, setVideos] = useState([]);
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["search", id],
    queryFn: () => {
      console.log("🚀 API Request Sent for:", id);
      return ApiService.fetchRequest(`search?part=snippet&q=${id}`);
    },
  });

  return (
    <Box p={2} sx={{ height: "90vh" }}>
      <Container maxWidth={"90%"}>
        <Typography variant={"h4"} mb={2}>
          Search results for <span style={{ color: colors.secondary }}>{id}</span> videos
        </Typography>
        {/* Show a spinner while fetching */}
        {isLoading && (
          <Box display="flex" justifyContent="center" p={5}>
            <CircularProgress color="secondary" />
          </Box>
        )}
        {data && <Videos videos={data.items} />}
      </Container>
    </Box>
  );
};

export default Search;
