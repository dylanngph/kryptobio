import { cookieStorage, createConfig, createStorage, http } from "wagmi";
import { arbitrum, arbitrumSepolia } from "wagmi/chains";

const getWagmiConfig = () =>
  createConfig({
    chains: [arbitrumSepolia, arbitrum],
    ssr: true,
    storage: createStorage({
      storage: cookieStorage,
    }),
    transports: {
      [arbitrumSepolia.id]: http(),
      [arbitrum.id]: http(),
    },
  });

export { getWagmiConfig };
