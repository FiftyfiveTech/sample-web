import React from "react";
import { Controller, useForm } from "react-hook-form";

//Component
import { Button, Grid, TextField, Typography, Box, Link } from "@mui/material";

//Utils
import { emailRegexp } from "@utils/help";
import stateUtils from "./utils";

//Theme
import THEME_COLORS, { LD_THEME_COLOR } from "@theme/color";

//Styles
import loginStyle from "./Signup.Styles";

const { buttonStyle, container, titleStyles, textFieldStyle } = loginStyle;

const SignUpForm = () => {
  const { errors, handleFormSubmit, handleSignupClick } = stateUtils();
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: "all",
    defaultValues: { firstName: "", lastName: "", email: "", password: "" },
  });
  const theme = THEME_COLORS.MANAGER_THEME;
  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit(handleFormSubmit)}
      onKeyDown={(e: React.KeyboardEvent) =>
        e.key === "Enter" && isValid && handleSubmit(handleFormSubmit)
      }
    >
      <Typography component="h1" variant="h5" sx={titleStyles()}>
        Create Your
      </Typography>

      <Typography component="h1" variant="h4" sx={titleStyles(theme)}>
        {"Admin Account"}
      </Typography>
      <Controller
        name="firstName"
        control={control}
        rules={{ required: "Required*" }}
        render={({ field, fieldState: { error, invalid } }) => (
          <TextField
            {...field}
            sx={textFieldStyle}
            margin="normal"
            fullWidth
            placeholder="First name"
            error={invalid}
            helperText={error?.message}
          />
        )}
      />
      <Controller
        name="lastName"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            sx={textFieldStyle}
            margin="normal"
            fullWidth
            placeholder="Last name"
            autoComplete="lastName"
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        rules={{
          required: "Required*",
          pattern: {
            value: emailRegexp,
            message: "Enter valid email id*",
          },
        }}
        render={({ field, fieldState: { error, invalid } }) => (
          <TextField
            {...field}
            sx={textFieldStyle}
            margin="normal"
            fullWidth
            placeholder="Email Address"
            error={invalid}
            helperText={error?.message}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={{ required: "Required*" }}
        render={({ field, fieldState: { error, invalid } }) => (
          <TextField
            {...field}
            required
            sx={textFieldStyle}
            fullWidth
            margin="normal"
            type="password"
            placeholder="Password"
            error={invalid}
            helperText={error?.message}
          />
        )}
      />
      {errors && (
        <Typography
          component="div"
          variant="caption"
          color={"error"}
          textAlign={"center"}
        >
          {errors}
        </Typography>
      )}

      <Box sx={container}>
        <Button
          type="submit"
          disabled={!isValid}
          fullWidth
          color="primary"
          variant="contained"
          sx={buttonStyle}
        >
          Sign Up
        </Button>
      </Box>

      <Grid container>
        <Grid item xs={12} textAlign={"center"}>
          <Typography variant="body2">
            {"Already have Account "}
            <Link onClick={handleSignupClick} href="#" sx={LD_THEME_COLOR}>
              Sign In
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
export default SignUpForm;
