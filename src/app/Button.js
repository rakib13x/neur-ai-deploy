"use client";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export const LoginButtonWallet = ({ children }) => {
	const { connected } = useWallet();
	return (
		<WalletMultiButton
			id="wallet-connect--login-button"
			style={{
				height: "36px",
				background: "white",
				color: "black",
				borderRadius: "10px",
				fontSize: "14px",
			}}
			className="bg-white inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border shadow-sm py-2 h-9 rounded-lg px-4 text-sm transition-colors hover:bg-[#171717] hover:text-[#fafafa]"
		>
			{connected ? children : children}
		</WalletMultiButton>
	);
};

export const GettingStartWallet = ({ children }) => {
	const { connected } = useWallet();
	return (
		<WalletMultiButton
			id="wallet-connect--login-button"
			style={{
				width: "170px",
				height: "45px",
				background: "white",
				color: "black",
				borderRadius: "10px",
				fontSize: "14px",
			}}
			className="bg-white inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border shadow-sm py-2 h-9 rounded-lg px-4 text-sm transition-colors hover:bg-[#171717] hover:text-[#fafafa]"
		>
			{connected ? children : children}
		</WalletMultiButton>
	);
};
