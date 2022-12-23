import { WalletAddress } from "./WalletAddress";
import { WalletBalance } from "./WalletBalance";

export const WalletInfo = () => {
  return (
    <div>
      <WalletAddress />
      <WalletBalance />
    </div>
  );
};
