import { useAccount, useBalance } from "wagmi";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

export const WalletBalance = () => {
  const { address } = useAccount();
  const { isLoading, isFetched, isError, data } = useBalance({ address });

  return (
    <Typography>
      {isLoading && <Skeleton width={200} />}
      {isFetched && (
        <>
          <strong>Balance: </strong>
          {data?.formatted} {data?.symbol}
        </>
      )}
      {isError && "Fetching balance failed!"}
    </Typography>
  );
};
