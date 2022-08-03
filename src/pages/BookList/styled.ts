import { Button } from "@mui/material";
import styledEngine from "@mui/styled-engine";

export const StyledCreateButton = styledEngine(Button)`
  &.Mui-disabled {
    color: rgba(255, 255, 255, 0.26);
    box-shadow: none;
    background-color: rgba(255, 255, 255, 0.12);
  }
`;