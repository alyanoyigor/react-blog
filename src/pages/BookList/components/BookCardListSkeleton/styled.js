import { Skeleton } from "@mui/material";
import styledEngine from "@mui/styled-engine";

export const StyledSkeleton = styledEngine(Skeleton)`
  transform: none;
  margin: 8px;
  height: 325px;
`;