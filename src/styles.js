import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const WrapperDiv = styled("div")({
  height: "100vh",
  width: "100vw",
  backgroundColor: "#B3ABCF",
});

const StyledHeader = styled(Typography)({
  color: "#413175",
  fontFamily: "Roboto",
});

const StyledButton = styled(Button)({
  color: "#FFFFFF",
  backgroundColor: "#413175",
  height: "60px",
  "&:hover": {
    backgroundColor: "#605292",
  },
});

export { WrapperDiv, StyledHeader, StyledButton };
