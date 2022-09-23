/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

//Component
import { IconButton } from "@mui/material";

//Hook
import { useTidingsHook } from "sample-storybook";

//Icons
import { Close } from "@mui/icons-material";

//Styles
import { TidingsStyle } from "./Tidings.Style";

const CloseButtonForTidings = (id) => {
  //Custom hooks
  const { closeTidings } = useTidingsHook();
  return (
    <IconButton onClick={() => closeTidings(id)}>
      <Close sx={TidingsStyle.icon} />
    </IconButton>
  );
};

export default CloseButtonForTidings;
