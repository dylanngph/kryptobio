"use client";

import React, { useEffect } from "react";
import {
  Abstraxion,
  useAbstraxionAccount,
  useModal,
} from "@burnt-labs/abstraxion";
import { Button } from "../ui/button";

const ConnectButton = () => {
  const {
    data: { bech32Address },
    isConnected,
    isConnecting,
  } = useAbstraxionAccount();

  // General state hooks
  const [, setShow] = useModal();

  useEffect(() => {
    console.log({ isConnected, isConnecting });
  }, [isConnected, isConnecting]);

  return (
    <div>
      <Button
        className="uppercase rounded-full"
        onClick={() => {
          setShow(true);
        }}
      >
        {bech32Address ? (
          <div className="flex items-center justify-center">VIEW ACCOUNT</div>
        ) : (
          "Connect in"
        )}
      </Button>
      {bech32Address && (
        <div className="border-2 border-primary rounded-md p-4 flex flex-row gap-4">
          <div className="flex flex-row gap-6">
            <div>address</div>
            <div>{bech32Address}</div>
          </div>
        </div>
      )}
      <Abstraxion onClose={() => setShow(false)} />
    </div>
  );
};

export default ConnectButton;
