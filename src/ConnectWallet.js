import React, { useState, useRef } from "react";
import { ethers } from "ethers";
import ErrorMessage from "./ErrorMessage";

const connect = async ({ setError }) => {
  console.log("connectWallet()...");
  try {
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts"
    });
    console.log(accounts);

    const selectedAddress = window.ethereum.selectedAddress || "";
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const balance = await provider.getBalance(selectedAddress);
    const balanceEth = ethers.utils.formatEther(balance);

    return {
      selectedAddress,
      balance: balanceEth
    };
  } catch (e) {
    const message = e.message;
    console.log(message);
    setError(message);
  }
};

export default function ConnectWallet() {
  const resultBox = useRef();
  const [error, setError] = useState();
  const [selectedAddress, setSelectedAddress] = useState();
  const [balance, setBalance] = useState();

  const handleConnect = async (e) => {
    e.preventDefault();
    setError(); // clear error display
    const connection = await connect({
      setError
    });
    setSelectedAddress(connection?.selectedAddress || "");
    setBalance(connection?.balance || 0);
  };

  return (
    <form className="m-4" onSubmit={handleConnect}>
      <div className="credit-card w-full shadow-lg mx-auto rounded-xl bg-white">
        <main className="mt-4 p-4">
          <h1 className="text-xl font-semibold text-gray-700 text-center">
            Connect Your Wallet
          </h1>
        </main>
        <footer className="p-4">
          <button
            type="submit"
            className="btn focus:ring focus:outline-none w-full"
          >
            Connect
          </button>
          <ErrorMessage message={error} />
        </footer>
        <div className="p-2">
          <div className="my-3">
            <p className="text-gray-700">Balance: {balance}</p>
            <textarea
              type="text"
              readOnly
              ref={resultBox}
              className="textarea w-full h-24 textarea-bordered focus:ring focus:outline-none"
              placeholder="Selected Address / Account Public Key"
              value={selectedAddress}
            />
          </div>
        </div>
      </div>
    </form>
  );
}
