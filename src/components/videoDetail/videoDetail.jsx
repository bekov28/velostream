import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "../../service/apiService";
import { Box, CircularProgress } from "@mui/material";
import ReactPlayer from "react-player";

const VideoDetail = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["video", id],
    queryFn: () => {
      console.log("🚀 API Request Sent for:", id);
      return ApiService.fetchRequest(`videos?part=snippet,statistics&id=${id}`);
    },
  });

  // const {
  //   snippet: { title, channelId, channelTitle, description, tags, thumbnails },
  //   statistics: { viewCount, likeCount, commentCount },
  // } = data.items[0];

  console.log(data);

  return (
    <Box minHeight={"90vh"} mb={10}>
      <Box display={"flex"}>
        {isLoading && (
          <Box display="flex" justifyContent="center" p={5}>
            <CircularProgress color="secondary" />
          </Box>
        )}
        <Box width={"75%"}>
          <ReactPlayer oEmbedUrl={`https://www.youtube.com/watch?v=${id}`} />
        </Box>
        <Box width={"25%"}>Suggested videos</Box>
      </Box>
    </Box>
  );
};

export default VideoDetail;
