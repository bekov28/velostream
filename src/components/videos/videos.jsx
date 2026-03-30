import { Stack, Box } from "@mui/material";
import React from "react";
import { ChannelCard, VideoCard } from "..";

const Videos = ({ videos }) => {
  console.log(videos);
  return (
    <Stack
      width={"100%"}
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={5}
    >
      {videos.map((item) => (
        <Box key={item.id.videoId}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard video={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
