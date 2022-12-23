import { WagmiConfig, createClient } from "wagmi";
import { getDefaultProvider } from "ethers";

import { Home } from "./pages";
import "./styles.css";

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider()
});

export default function App() {
  return (
    <WagmiConfig client={client}>
      <Home />
    </WagmiConfig>
  );
}
