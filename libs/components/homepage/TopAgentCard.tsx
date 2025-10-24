import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const TopAgentCard = () => {
  return (
    <Stack className="top-agent-card">
      <Box className="agent-img">
        <img src="/img/profile/girl.svg" alt="Agent" />
      </Box>
      <Box className="agent-info">
        <strong className="name">Phebe Buffey</strong>
        <p className="role">Nestar Agent</p>
      </Box>
    </Stack>
  );
};

export default TopAgentCard;
