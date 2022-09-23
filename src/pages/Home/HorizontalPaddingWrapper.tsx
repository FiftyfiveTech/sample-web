import React, { ReactNode } from "react";
import { Grid, GridProps } from "@mui/material";

const HorizontalPaddingWrapper = (props: GridProps) => {
  return (
    <Grid container sx={{ justifyContent: "center" }}>
      <Grid item xs={12} md={12} lg={11} xl={9} {...props} />
    </Grid>
  );
};

export default HorizontalPaddingWrapper;
