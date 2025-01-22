import { Github, FileText } from "lucide-react";

export default function Home() {
	return (
		<div className="min-h-screen bg-white">
			{/* Navigation */}
			<nav className="fixed w-full top-0 bg-white/80 backdrop-blur-sm shadow-sm z-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-16">
						<div className="flex items-center">
							<span className="text-xl font-bold">N Neur</span>
						</div>
						<div className="flex items-center space-x-4">
							<a
								href="https://github.com"
								className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
							>
								<Github size={20} />
								<span>Github</span>
							</a>
							<a
								href="/docs"
								className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
							>
								<FileText size={20} />
								<span>Docs</span>
							</a>
							<button className="px-4 py-2 rounded-md bg-gray-100 text-gray-900 hover:bg-gray-200">
								Login
							</button>
						</div>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<div className="pt-32 pb-16 text-center relative">
				{/* Floating badge */}
				<div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-800 mb-8">
					<span className="text-yellow-500 mr-2">⭐</span>
					Introducing Neur Agent
				</div>

				{/* Main content */}
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col items-center">
						{/* Heading */}
						<h1 className="text-6xl font-bold mb-6">
							<span className="text-black">The </span>
							<span className="text-gray-500">Intelligent Copilot</span>
							<span className="text-black"> for</span>
							<br />
							<span className="text-black">Solana</span>
						</h1>

						{/* Subheading */}
						<p className="text-gray-600 text-xl mb-8">
							Elevate your Solana experience with AI-powered insights and
							delegated actions
						</p>

						{/* CTA Button */}
						<button className="px-8 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
							Getting Started
						</button>

						{/* App Preview */}
						<div className="mt-16 w-full max-w-3xl mx-auto">
							<div className="bg-white rounded-lg shadow-xl p-6">
								<div className="flex items-center space-x-2 mb-4">
									<div className="w-3 h-3 rounded-full bg-red-500"></div>
									<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
									<div className="w-3 h-3 rounded-full bg-green-500"></div>
								</div>
								<div className="space-y-6">
									<h2 className="text-3xl font-semibold">
										How can I assist you?
									</h2>
									<div className="bg-gray-50 rounded-lg p-4">
										Start a new conversation...
									</div>
									<div className="grid grid-cols-2 gap-4">
										<div className="bg-gray-50 rounded-lg p-4">
											<h3 className="font-medium">
												Any updates from @phantom recently?
											</h3>
											<p className="text-gray-600 text-sm">
												Summarize the latest tweets from @phantom
											</p>
										</div>
										<div className="bg-gray-50 rounded-lg p-4">
											<h3 className="font-medium">Launch a new token</h3>
											<p className="text-gray-600 text-sm">
												deploy a new token on jump.bot
											</p>
										</div>
									</div>
									<div className="grid grid-cols-2 gap-4">
										<div className="bg-gray-50 rounded-lg p-4 flex items-center space-x-3">
											<div className="w-8 h-8 bg-green-100 rounded-lg"></div>
											<div>
												<h4 className="font-medium">jump.fun</h4>
												<p className="text-gray-600 text-sm">
													Discover new tokens, launch tokens
												</p>
											</div>
										</div>
										<div className="bg-gray-50 rounded-lg p-4 flex items-center space-x-3">
											<div className="w-8 h-8 bg-blue-100 rounded-lg"></div>
											<div>
												<h4 className="font-medium">Jupiter</h4>
												<p className="text-gray-600 text-sm">
													Swap tokens & DEX limit orders
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Background pattern */}
				<div className="absolute inset-0 -z-10">
					<div
						className="absolute inset-0"
						style={{
							backgroundImage:
								"radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 0)",
							backgroundSize: "40px 40px",
						}}
					></div>
				</div>
			</div>

			{/* Features Section */}
			<div className="py-24 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-4xl font-bold text-center mb-4">
						Tailored for Solana
					</h2>
					<p className="text-gray-600 text-center mb-16">
						Seamless integration with the world's leading AI models
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="p-8 rounded-xl border border-gray-200">
							<div className="w-12 h-12 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
								🧠
							</div>
							<h3 className="text-xl font-semibold mb-2">
								Cutting-Edge AI Intelligence
							</h3>
							<p className="text-gray-600">
								Powered by state-of-the-art large language AI models, including
								Claude 3.5-Sonnet and GPT-4a, to intelligently analyze your
								Solana transactions in real-time, providing data-driven insights
								and seamless automated actions.
							</p>
						</div>

						<div className="p-8 rounded-xl border border-gray-200">
							<div className="w-12 h-12 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
								⚡
							</div>
							<h3 className="text-xl font-semibold mb-2">Seamless Execution</h3>
							<p className="text-gray-600">
								Experience an effortless integration with Solana's ecosystem.
								Enjoy smooth, rapid execution without the need for compromise.
							</p>
						</div>

						<div className="p-8 rounded-xl border border-gray-200">
							<div className="w-12 h-12 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
								🔗
							</div>
							<h3 className="text-xl font-semibold mb-2">
								Comprehensive Ecosystem Integration
							</h3>
							<p className="text-gray-600">
								Natively integrated with dozens of Solana's protocols and
								platforms, enabling seamless bot-based transactions and
								automated collaboration, ensuring full synergy with the
								ecosystem.
							</p>
						</div>

						<div className="p-8 rounded-xl border border-gray-200">
							<div className="w-12 h-12 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
								📈
							</div>
							<h3 className="text-xl font-semibold mb-2">
								AI-Driven Automations & Agents
							</h3>
							<p className="text-gray-600">
								Revolutionize your workflow with powerful AI agents and custom
								automations designed to handle complex tasks. Coming soon™ to
								streamline your operations even further.
							</p>
						</div>
					</div>

					{/* Integration Diagram */}
					<div className="mt-16 flex justify-center">
						<div className="relative w-64 h-64">
							<div className="absolute inset-0 flex items-center justify-center">
								<div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white">
									N
								</div>
							</div>
							<div className="absolute inset-0">
								{/* Add circular arrangement of integration points */}
								{[...Array(6)].map((_, i) => (
									<div
										key={i}
										className="absolute w-10 h-10 bg-gray-100 rounded-lg"
										style={{
											transform: `rotate(${i * 60}deg) translateY(-100px)`,
											transformOrigin: "center center",
										}}
									></div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Footer */}
			<footer className="py-8 border-t border-gray-200">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
					<p>© 2024 Neur. All rights reserved. | X</p>
				</div>
			</footer>
		</div>
	);
}
