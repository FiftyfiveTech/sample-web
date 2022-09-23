import THEME_COLORS from "@theme/color";

const loginStyle = {
  textFieldStyle: {
    width: "90%",
    padding: "10px",
    margin: "auto",
    display: "flex",
    backgroundColor: "white",
    "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
      padding: "10px",
    },
    "& .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root": {
      borderRadius: "10px",
    },
  },
  titleStyles: (color = "black") => ({
    color: color,
    textAlign: "center",
    fontWeight: 700,
    padding: "10px",
  }),
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: "10px",
  },
  forgotPasswordLinkStyle: {
    float: "right",
    textDecoration: "underline",
    color: `${THEME_COLORS.LD_THEME_VIOLET}`,
  },
  buttonStyle: {
    width: "40%",
  },
};

export default loginStyle;
