import { useAccount } from "wagmi";
import Typography from "@mui/material/Typography";

export const WalletAddress = () => {
  const { address } = useAccount();
  return (
    <Typography>
      <strong>Address: </strong>
      {address}
    </Typography>
  );
};
