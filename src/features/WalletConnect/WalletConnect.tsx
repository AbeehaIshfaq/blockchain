import { useConnect, useDisconnect, useAccount } from "wagmi";
import { InjectedConnector } from "wagmi/dist/connectors/injected";
import { Card, Button, Heading } from "../../components";
import Typography from "@mui/material/Typography";
import { WalletInfo } from "./WalletInfo";

export const WalletConnect = () => {
  const { isConnected, isConnecting } = useAccount();

  const { connect } = useConnect({
    connector: new InjectedConnector()
  });

  const { disconnect } = useDisconnect();

  return (
    <Card>
      <Heading sx={{ mb: 2 }}>
        {isConnected ? "Your connected wallet:" : "Connect your MetaMask"}
      </Heading>

      {isConnecting && <Typography>Connecting...</Typography>}

      {isConnected ? (
        <>
          <WalletInfo />
          <Button sx={{ mt: 2 }} onClick={() => disconnect()}>
            Disconnect
          </Button>
        </>
      ) : (
        <Button
          disabled={isConnecting}
          sx={{ mt: 2 }}
          onClick={() => connect()}
        >
          Connect
        </Button>
      )}
    </Card>
  );
};
