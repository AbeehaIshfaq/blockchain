import MuiCard, { CardProps } from "@mui/material/Card";

export const Card = (props: CardProps) => (
  <MuiCard sx={{ p: 3, m: 3 }} {...props} />
);
