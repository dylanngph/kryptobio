"use client";
import { Button } from "@/components/ui/button";
import {
  Abstraxion,
  useAbstraxionAccount,
  useModal,
} from "@burnt-labs/abstraxion";
import { useEffect } from "react";

export default function Page() {
  // Abstraxion hooks
  const {
    data: { bech32Address },
    isConnected,
    isConnecting,
  } = useAbstraxionAccount();

  // General state hooks
  const [, setShow] = useModal();

  // watch isConnected and isConnecting
  // only added for testing
  useEffect(() => {
    console.log({ isConnected, isConnecting });
  }, [isConnected, isConnecting]);

  return (
    <main className="m-auto flex min-h-screen max-w-xs flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-2xl font-bold tracking-tighter text-black dark:text-white">
        Abstraxion
      </h1>
      <Button
        className="rounded-full"
        onClick={() => {
          setShow(true);
        }}
      >
        {bech32Address ? (
          <div className="flex items-center justify-center">VIEW ACCOUNT</div>
        ) : (
          "Connect with XION"
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
    </main>
  );
}