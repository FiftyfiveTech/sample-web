/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";

//Hook
import { useSelector, useDispatch } from "react-redux";
import { useTidingsHook } from "sample-storybook";

//Interface
import { StateType } from "@core/interfaces";

//Reducer
import { tidingsSlice } from "@core/reducers/tidings";

//Constants
import { TIDINGS_CONSTANT } from "@utils";

// Here the mean of tidings same as snackbar.

const Tidings = () => {
  //Custom hooks
  const {
    infoTidings,
    warningTidings,
    successTidings,
    errorTidings,
    defaultTidings,
    closeTidings,
  } = useTidingsHook();

  //Dispatcher
  const dispatch = useDispatch();

  //Selector
  const { variant, message, props } = useSelector(
    (state: StateType) => state.tidings
  );
  const customProps = {
    ...props,
  };
  useEffect(() => {
    if (variant === "") return;
    switch (variant) {
      case TIDINGS_CONSTANT.SUCCESS:
        successTidings(message, customProps);
        break;
      case TIDINGS_CONSTANT.ERROR:
        errorTidings(message, customProps);
        break;
      case TIDINGS_CONSTANT.INFO:
        infoTidings(message, customProps);
        break;
      case TIDINGS_CONSTANT.WARNING:
        warningTidings(message, customProps);
        break;
      case TIDINGS_CONSTANT.CLOSE:
        closeTidings(message);
        break;
      case TIDINGS_CONSTANT.DEFAULT:
        defaultTidings(message, customProps);
        break;
      default:
        break;
    }
    dispatch(tidingsSlice.actions.reset());
  }, [variant]);
  return (
    <React.Fragment>
      {/*
      Why we are using this empty component?
      # As we know that we can not use react hooks or custom hook of react component.
      So, this is an hack for that to using hook outside of react component.
      # We are using tidings hooks in redux. So you can see there.
    */}
    </React.Fragment>
  );
};
export default Tidings;
