"use client";

import { getWagmiConfig } from "@/configs/web3/wagmi.config";
import React, { ReactNode, useState } from "react";
import { WagmiProvider as Provider, State } from "wagmi";

type Props = {
  children: ReactNode;
  initialState: State | undefined;
};

const WagmiProvider = ({ children, initialState }: Props) => {
  const [config] = useState(() => getWagmiConfig());

  return (
    <Provider config={config} initialState={initialState}>
      {children}
    </Provider>
  );
};

export default WagmiProvider;
