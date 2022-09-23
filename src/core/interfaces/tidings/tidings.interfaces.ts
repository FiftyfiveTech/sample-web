type TidingsStateType = {
  message: string;
  props: object;
  variant: "error" | "info" | "success" | "warning" | "default" | "close";
};

export { TidingsStateType };
