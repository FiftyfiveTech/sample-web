const publicLayoutStyle = {
  imageStyles: {
    margin: "15px 30px",
    position: "absolute",
    cursor: "pointer",
    height: "63px",
    width: "auto",
  },
  box: (background: string) => ({
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    position: "fixed",
    backgroundPosition: "center center",
    top: 0,
    left: 0,
    minWidth: "100%",
    minHeight: "100%",
  }),
  paper: (borderColor) => ({
    boxShadow: "0px 0px 13px 13px rgb(231 230 230 / 70%)",
    margin: "auto",
    borderTop: `6px solid ${borderColor}`,
    padding: "4% 2.5%",
    top: "15%",
    borderRadius: "10px",
    width: { lg: "27%", md: "40%", sm: "50%", xs: "60%" },
    position: {
      lg: "absolute",
      md: "relative",
      sm: "relative",
      xs: "relative",
    },
    left: { lg: "36%", md: "auto", sm: "auto", xs: "auto" },
    marginTop: { lg: "0", md: "1rem", sm: "2.5rem", xs: "4rem" },
  }),
};

export default publicLayoutStyle;
