import React from "react";
import SignMessage from "./SignMessage";
import VerifyMessage from "./VerifyMessage";
import ConnectWallet from "./ConnectWallet";
import Pay from "./Pay";

export default function App() {
  return (
    <div className="flex flex-wrap">
      <div className="w-full lg:w-1/3">
        <ConnectWallet />
      </div>
      <div className="w-full lg:w-1/3">
        <SignMessage />
      </div>
      <div className="w-full lg:w-1/3">
        <VerifyMessage />
      </div>
      <div className="w-full lg:w-1/3">
        <Pay />
      </div>
    </div>
  );
}
