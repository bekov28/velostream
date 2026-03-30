import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "../../service/apiService";
import { Box, CircularProgress } from "@mui/material";

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

  return (
    <Box>
      {isLoading && (
        <Box display="flex" justifyContent="center" p={5}>
          <CircularProgress color="secondary" />
        </Box>
      )}
      VideoDetail: {id}
    </Box>
  );
};

export default VideoDetail;
