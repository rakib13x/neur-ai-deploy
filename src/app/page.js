import { Github, FileText } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";

export default function Home() {
	return (
		<>
			<div className="absolute -z-0">
				<ParticlesBackground />
			</div>
			<div className="min-h-screen bg-white text-[#0a0a0a] z-90">
				{/* Navigation */}
				<nav className="relative w-full top-0 left-0 z-50">
					<div className="max-w-6xl mx-auto px-4 py-4">
						<div className="rounded-xl  bg-[#1e1e1e] shadow-lg backdrop-blur-md">
							<div className="flex items-center justify-between px-4 py-2">
								<a
									href="/"
									className="flex items-center scale-95 transition-opacity hover:opacity-80"
								>
									<img
										src="https://i.ibb.co.com/WGtp431/Astro-Link-19.png"
										alt="Logo"
										className="h-14 w-36"
									/>
								</a>
								<div className="flex items-center space-x-4">
									<div className="hidden md:flex md:justify-end">
										<a
											href="https://git.new/neur"
											target="_blank"
											rel="noopener noreferrer"
											className="group relative flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium text-muted_foreground transition-colors hover:text-background"
										>
											<svg
												width="15"
												height="15"
												viewBox="0 0 15 15"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
												className="h-4 w-4"
											>
												<path
													d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
													fill="currentColor"
													fillRule="evenodd"
													clipRule="evenodd"
												></path>
											</svg>
											Github
											<span className="absolute inset-x-4 -bottom-px h-px scale-x-0 bg-gradient-to-r from-[#171717]/0 via-[#171717]/70 to-[#171717]/0 transition-transform duration-300 group-hover:scale-x-100"></span>
										</a>
										<a
											href=""
											target="_blank"
											rel="noopener noreferrer"
											className="group relative flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium text-muted_foreground transition-colors hover:text-background"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="lucide lucide-book-open h-4 w-4"
											>
												<path d="M12 7v14"></path>
												<path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
											</svg>
											Docs
											<span className="absolute inset-x-4 -bottom-px h-px scale-x-0 bg-gradient-to-r from-[#171717]/0 via-[#171717]/70 to-[#171717]/0 transition-transform duration-300 group-hover:scale-x-100"></span>
										</a>

										<button className="bg-white inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border shadow-sm py-2 h-9 rounded-lg px-4 text-sm transition-colors hover:bg-[#171717] hover:text-[#fafafa]">
											Login
										</button>
									</div>
									<div className="flex md:hidden justify-end items-center">
										<button className="bg-white inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border shadow-sm py-2 h-9 rounded-lg px-4 text-sm transition-colors hover:bg-[#171717] hover:text-[#fafafa]">
											Login
										</button>
										<button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-9 w-9 md:hidden">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="h-4 w-4"
											>
												<line x1="4" x2="20" y1="12" y2="12"></line>
												<line x1="4" x2="20" y1="6" y2="6"></line>
												<line x1="4" x2="20" y1="18" y2="18"></line>
											</svg>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</nav>

				{/* Hero Section */}
				<div className="pt-20 pb-16 text-center relative z-50">
					{/* Floating badge */}

					<div className="inline-flex items-center rounded-full border border-primary/20  bg-black/20 opacity-50 px-4 py-1.5 z-50">
						<span className="text-sm text-gray-50 font-medium">
							✨ Introducing Auralex Agent
						</span>
					</div>

					{/* Main content */}
					<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-50">
						<div className="flex flex-col items-center">
							{/* Heading */}
							<h1 className="mb-6 mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
								<span className="text-white">The </span>
								{/* <span className="text-neutral-600/70">Intelligent Copilot</span> */}

								<p className="inline-block text-gray-500 bg-gradient-to-r from-transparent via-black via-50% to-transparent bg-clip-text text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl lg:leading-[80px] animate-gradient-cubic [background-size:300%_300%]">
									Intelligent Copilot
								</p>
								<span className="text-white"> for </span>
								<br className="hidden md:block" />
								<span className="text-white">Solana</span>
							</h1>

							{/* Subheading */}
							<p className="mb-8 mt-4 text-lg text-muted_foreground">
								Elevate your Solana experience with AI-powered insights and
								delegated actions
							</p>

							{/* CTA Button */}
							<button className="px-8 py-3 bg-white text-black rounded-xl text-base transition-all duration-300 hover:scale-105">
								Getting Started
							</button>
							{/* App Preview */}

							<div className="group relative overflow-hidden rounded-2xl border bg-card shadow-2xl mt-16">
								<div className="relative mx-auto w-full max-w-[1200px] will-change-transform">
									<img
										src="/product_dark.webp"
										alt="product Preview"
										className="w-full rounded-lg"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Features Section */}
				<div className="pt-10 pb-16 bg-white  border border-white z-50">
					<div className="mx-auto max-w-6xl px-4 sm:px-6 z-50">
						<div className="relative z-50 mb-12 text-center sm:mb-16">
							<h2 className="mb-3 text-2xl font-bold tracking-tight sm:mb-4 sm:text-4xl text-white">
								Tailored for Solana
							</h2>
							<p className="text-sm text-gray-500 sm:text-base">
								Seamless integration with the world's leading AI models
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
							<div className="group relative overflow-hidden rounded-2xl border p-4 shadow-lg transition-all hover:shadow-xl sm:rounded-3xl sm:p-6 col-span-3 lg:col-span-2 border-white">
								<div>
									<div className="absolute inset-0 flex items-center justify-center opacity-20">
										<div className="relative h-full w-full">
											<div className="absolute left-10 top-10 h-32 w-32 animate-blob rounded-full bg-primary/30 mix-blend-multiply blur-xl"></div>
											<div className="animation-delay-2000 absolute right-10 top-10 h-32 w-32 animate-blob rounded-full bg-secondary/30 mix-blend-multiply blur-xl"></div>
											<div className="animation-delay-4000 absolute bottom-10 left-20 h-32 w-32 animate-blob rounded-full bg-accent/30 mix-blend-multiply blur-xl"></div>
										</div>
									</div>
								</div>
								<div className="pointer-events-none flex transform-gpu flex-col gap-1 p-4 transition-all duration-300 sm:p-6 z-50">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="lucide z-50 lucide-brain-circuit h-8 w-8 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75 sm:h-12 sm:w-12"
									>
										<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
										<path d="M9 13a4.5 4.5 0 0 0 3-4"></path>
										<path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
										<path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
										<path d="M6 18a4 4 0 0 1-1.967-.516"></path>
										<path d="M12 13h4"></path>
										<path d="M12 18h6a2 2 0 0 1 2 2v1"></path>
										<path d="M12 8h8"></path>
										<path d="M16 8V5a2 2 0 0 1 2-2"></path>
										<circle cx="16" cy="13" r=".5"></circle>
										<circle cx="18" cy="3" r=".5"></circle>
										<circle cx="20" cy="21" r=".5"></circle>
										<circle cx="20" cy="8" r=".5"></circle>
									</svg>
									<h3 className="text-lg font-semibold text-white 0 sm:text-xl z-50">
										Cutting-Edge AI Intelligence
									</h3>
									<p className="max-w-lg text-sm text-gray-400 sm:text-base z-50">
										Harness Powered by state-of-the-art large language AI
										models, including Claude 3.5-Sonnet and GPT-4a, to
										intelligently analyze your Solana transactions in real-time,
										providing data-driven insights and seamless automated
										actions.
									</p>
								</div>
								<div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03]"></div>
							</div>

							<div className="group relative flex flex-col justify-between overflow-hidden z-99 rounded-2xl border p-4 shadow-lg transition-all hover:shadow-xl sm:rounded-3xl sm:p-6 border-gray-200 col-span-3 lg:col-span-1">
								<div>
									<div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row absolute inset-0 [--duration:15s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]">
										<div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused] z-50 text-white">
											<div className="mx-2 flex items-center gap-2 rounded-xl border border-primary/20 bg-muted/30 px-3 py-2">
												<div className="text-sm font-medium">
													Instant, frictionless
												</div>
											</div>
											<div className="mx-2 flex items-center gap-2 rounded-xl border border-primary/20 bg-muted/30 px-3 py-2">
												<div className="text-sm font-medium">
													Seamless transaction
												</div>
											</div>
											<div className="mx-2 flex items-center gap-2 rounded-xl border border-primary/20 bg-muted/30 px-3 py-2">
												<div className="text-sm font-medium">
													Instant, frictionless
												</div>
											</div>
											<div className="mx-2 flex items-center gap-2 rounded-xl border border-primary/20 bg-muted/30 px-3 py-2">
												<div className="text-sm font-medium">
													Seamless transaction
												</div>
											</div>
											<div className="mx-2 flex items-center gap-2 rounded-xl border border-primary/20 bg-muted/30 px-3 py-2">
												<div className="text-sm font-medium">
													Instant, frictionless
												</div>
											</div>
										</div>
										<div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused] z-50 text-white">
											<div className="mx-2 flex items-center gap-2 rounded-xl border border-primary/20 bg-muted/30 px-3 py-2">
												<div className="text-sm font-medium">
													Instant, frictionless
												</div>
											</div>
											<div className="mx-2 flex items-center gap-2 rounded-xl border border-primary/20 bg-muted/30 px-3 py-2">
												<div className="text-sm font-medium">
													Seamless transaction
												</div>
											</div>
											<div className="mx-2 flex items-center gap-2 rounded-xl border border-primary/20 bg-muted/30 px-3 py-2">
												<div className="text-sm font-medium">
													Instant, frictionless
												</div>
											</div>
											<div className="mx-2 flex items-center gap-2 rounded-xl border border-primary/20 bg-muted/30 px-3 py-2">
												<div className="text-sm font-medium">
													Seamless transaction
												</div>
											</div>
											<div className="mx-2 flex items-center gap-2 rounded-xl border border-primary/20 bg-muted/30 px-3 py-2">
												<div className="text-sm font-medium">
													Instant, frictionless
												</div>
											</div>
										</div>
										<div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused] z-50">
											<div className="mx-2 flex items-center gap-2 rounded-xl border border-primary/20 bg-muted/30 px-3 py-2">
												<div className="text-sm font-medium">
													Instant, frictionless
												</div>
											</div>
											<div className="mx-2 flex items-center gap-2 rounded-xl border border-primary/20 bg-muted/30 px-3 py-2">
												<div className="text-sm font-medium">
													Seamless transaction
												</div>
											</div>
											<div className="mx-2 flex items-center gap-2 rounded-xl border border-primary/20 bg-muted/30 px-3 py-2">
												<div className="text-sm font-medium">
													Instant, frictionless
												</div>
											</div>
											<div className="mx-2 flex items-center gap-2 rounded-xl border border-primary/20 bg-muted/30 px-3 py-2">
												<div className="text-sm font-medium">
													Seamless transaction
												</div>
											</div>
											<div className="mx-2 flex items-center gap-2 rounded-xl border border-primary/20 bg-muted/30 px-3 py-2">
												<div className="text-sm font-medium">
													Instant, frictionless
												</div>
											</div>
										</div>
										<div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
											<div className="mx-2 flex items-center gap-2 rounded-xl border border-primary/20 bg-muted/30 px-3 py-2">
												<div className="text-sm font-medium">
													Instant, frictionless
												</div>
											</div>
											<div className="mx-2 flex items-center gap-2 rounded-xl border border-primary/20 bg-muted/30 px-3 py-2">
												<div className="text-sm font-medium">
													Seamless transaction
												</div>
											</div>
											<div className="mx-2 flex items-center gap-2 rounded-xl border border-primary/20 bg-muted/30 px-3 py-2">
												<div className="text-sm font-medium">
													Instant, frictionless
												</div>
											</div>
											<div className="mx-2 flex items-center gap-2 rounded-xl border border-primary/20 bg-muted/30 px-3 py-2">
												<div className="text-sm font-medium  text-white">
													Seamless transaction
												</div>
											</div>
											<div className="mx-2 flex items-center gap-2 rounded-xl border border-primary/20 bg-muted/30 px-3 py-2">
												<div className="text-sm font-medium">
													Instant, frictionless
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="pointer-events-none mt-24 lg:mt-0 z-10 flex transform-gpu flex-col gap-1 p-4 transition-all duration-300 sm:p-6">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="lucide lucide-zap h-8 w-8 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75 sm:h-12 sm:w-12"
									>
										<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
									</svg>
									<h3 className="text-lg font-semibold text-neutral-100 sm:text-xl z-50">
										Seamless Execution
									</h3>
									<p className="max-w-lg text-sm text-neutral-400 sm:text-base z-50">
										Experience ultra-efficient, frictionless transactions
										powered by our deep Solana integration. Enjoy smooth, rapid
										execution without the need for compromise.
									</p>
								</div>
								<div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03]"></div>
							</div>
							{/* Diagram */}
							<div className="group flex relative overflow-hidden rounded-2xl border p-4 shadow-lg transition-all hover:shadow-xl sm:rounded-3xl sm:p-6 col-span-3 border-gray-200 z-50">
								<div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-4 transition-all duration-300 sm:p-6">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="lucide lucide-link h-8 w-8 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75 sm:h-12 sm:w-12"
									>
										<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
										<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
									</svg>
									<h3 className="text-lg font-semibold text-neutral-100  sm:text-xl">
										Comprehensive Ecosystem Integration
									</h3>
									<p className="max-w-lg text-sm text-neutral-400 sm:text-base">
										Effortlessly connect with the full spectrum of Solana's
										protocols and services. Our platform is designed for
										seamless AI-powered collaboration, ensuring full synergy
										with the ecosystem.
									</p>
								</div>
								{/* <div className="relative flex items-center justify-center gap-12">
               
                  <div className="flex flex-col items-center gap-8">
                    <div className="p-3 border rounded-full relative">
                      <Github />

                      <div className="absolute left-full top-1/2 mr-3 h-px w-12 bg-gray-300"></div>
                    </div>
                    <div className="p-3 border rounded-full relative">
                      <Github />

                      <div className="absolute right-full top-1/2 mr-3 h-px w-12 bg-gray-300"></div>
                    </div>
                    <div className="p-3 border rounded-full relative">
                      <Github />

                      <div className="absolute right-full top-1/2 mr-3 h-px w-12 bg-gray-300"></div>
                    </div>
                  </div>

                  <div className="p-3 border rounded-full relative z-10">
                    <Github />
                  </div>

                  <div className="flex flex-col items-center gap-8">
                    <div className="p-3 border rounded-full relative">
                      <div className="absolute left-full top-1/2 ml-3 h-px w-12 bg-gray-300"></div>
                      <Github />
                    </div>
                    <div className="p-3 border rounded-full relative">
                      <div className="absolute left-full top-1/2 ml-3 h-px w-12 bg-gray-300"></div>
                      <Github />
                    </div>
                    <div className="p-3 border rounded-full relative">
                      <div className="absolute left-full top-1/2 ml-3 h-px w-12 bg-gray-300"></div>
                      <Github />
                    </div>
                  </div>
                </div> */}

								<div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03]"></div>
							</div>

							<div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-4 shadow-lg transition-all hover:shadow-xl sm:rounded-3xl sm:p-6 border-gray-200 col-span-3 lg:col-span-1">
								<div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-4 transition-all duration-300 sm:p-6">
									<svg
										width="15"
										height="15"
										viewBox="0 0 15 15"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="h-8 w-8 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75 sm:h-12 sm:w-12"
									>
										<path
											d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
											fill="currentColor"
											fillRule="evenodd"
											clipRule="evenodd"
										></path>
									</svg>
									<h3 className="text-lg font-semibold text-neutral-100 sm:text-xl">
										Open Source & Community Driven
									</h3>
									<p className="max-w-lg text-sm text-neutral-400 sm:text-base">
										Built with transparency and collaboration in mind. Our
										full-stack application is completely open source,
										community-driven, and welcomes contributions from developers
										worldwide to shape the future of Solana AI tools.
									</p>
								</div>
								<div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03]"></div>
							</div>

							<div className="group relative overflow-hidden rounded-2xl border p-4 shadow-lg transition-all hover:shadow-xl sm:rounded-3xl sm:p-6 col-span-3 lg:col-span-2 border-gray-200">
								<div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-4 transition-all duration-300 sm:p-6">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="lucide lucide-activity h-8 w-8 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75 sm:h-12 sm:w-12"
									>
										<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
									</svg>
									<h3 className="text-lg font-semibold text-neutral-100  sm:text-xl">
										AI-Driven Automations & Agents
									</h3>
									<p className="max-w-lg text-sm text-neutral-400 sm:text-base">
										Revolutionize your workflows with powerful AI agents and
										custom automations designed to handle complex tasks. *Coming
										soon* to streamline your operations even further.
									</p>
								</div>
								<div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03]"></div>
							</div>
						</div>
					</div>
				</div>

				{/* Footer */}
				<footer className="mt-auto py-4 z-50">
					<div className="max-w-6xl mx-auto flex items-center justify-center gap-3 z-50 text-sm text-neutral-100">
						<p className="text-white z-50">
							© 2025 Auralex. All rights reserved.
						</p>
						<span className="text-white z-50">|</span>
						<a
							target="_blank"
							title="Follow us on X"
							className="transition-colors hover:scale-105 hover:text-background z-50"
							href="https://x.com/Auralex_sol"
						>
							<svg
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								fill="currentColor"
								className="remixicon h-4 w-4"
							>
								<path d="M17.6874 3.0625L12.6907 8.77425L8.37045 3.0625H2.11328L9.58961 12.8387L2.50378 20.9375H5.53795L11.0068 14.6886L15.7863 20.9375H21.8885L14.095 10.6342L20.7198 3.0625H17.6874ZM16.6232 19.1225L5.65436 4.78217H7.45745L18.3034 19.1225H16.6232Z"></path>
							</svg>
						</a>
					</div>
				</footer>
			</div>
		</>
	);
}
