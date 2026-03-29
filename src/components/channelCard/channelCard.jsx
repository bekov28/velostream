import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const channelCard = ({ video }) => {
  return (
    <Box sx={{ boxShadow: "none", borderRadius: "20px", display: "flex" }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <CardMedia
          image={video?.snippet?.thumbnails?.default?.url}
          alt={video?.snippet?.title}
          sx={{
            borderRadius: "50%",
            height: "180px",
            width: "180px",
            mb: 2,
            border: "1px solid #e3e3e3",
          }}
        />
        <Typography variant={"6"}>
          {video?.snippet?.title}
          <CheckCircle sx={{ fontSize: "14px", color: "gray", ml: "5px" }} />
        </Typography>
        {video?.statistics?.subscriberCounter && (
            <Typography sx={{fontSize: '15px', fontWeight: 500, color: 'gray'}}>
                {parseInt(video?.statistics?.subscriberCounter).toLocaleString('en-US')} Subscribers
            </Typography>
        )}
      </CardContent>
    </Box>
  );
};

export default channelCard;
