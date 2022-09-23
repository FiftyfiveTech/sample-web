import React from "react";
import { Outlet } from "react-router-dom";

//Component
import { Paper, Box, CardMedia } from "@mui/material";
import HorizontalPaddingWrapper from "../../pages/Home/HorizontalPaddingWrapper";

//Theme
import THEME_COLORS from "@theme/color";

//Utils
import stateUtils from "./utils";

//Styles
import PublicLayoutStyles from "./PublicLayoutStyles";
const { box, paper, imageStyles } = PublicLayoutStyles;

const PublicLayout = () => {
  const { image, handleMovingToDashboard } = stateUtils();
  const borderColor = THEME_COLORS.MANAGER_THEME;

  return (
    <React.Fragment>
      <HorizontalPaddingWrapper>
        <Box sx={box(image)} />
        <CardMedia
          src={""}
          component="img"
          sx={imageStyles}
          onClick={handleMovingToDashboard}
        />
        <Paper elevation={10} sx={paper(borderColor)}>
          <Outlet />
        </Paper>
      </HorizontalPaddingWrapper>
    </React.Fragment>
  );
};

export default PublicLayout;
