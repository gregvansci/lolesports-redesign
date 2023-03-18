<script lang="ts">
	import { onMount } from 'svelte';
	
	import hamburger from '$lib/images/hamburger.svg';
	import riotLogo from '$lib/images/riot-logo-black.png';
	import riotLogoDark from '$lib/images/riot-logo-white.png';
	import lolesportsLogo from '$lib/images/lolesports-logo-black.png';
	import expandArrow from '$lib/images/expand-arrow.svg';
	import lightModeIcon from '$lib/images/light.svg';
	import darkModeIcon from '$lib/images/dark.svg';
	import settings from '$lib/images/settings.svg';
	import login from '$lib/images/login.svg';

	import lolLogo from '$lib/images/lol-logo.png';
	import tftLogo from '$lib/images/tft-logo.png';
	import lorLogo from '$lib/images/lor-logo.png';
	import valLogo from '$lib/images/val-logo.png';
	import wrLogo from '$lib/images/wr-logo.png';

	let darkMode: boolean;

	onMount(() => {
		if (localStorage.theme === "dark") {
			darkMode = true;
		} else {
			darkMode = false;
		}
	});

	function toggleDarkMode() {
		if (darkMode) {
			localStorage.theme = "light";
			document.documentElement.classList.remove("dark");
			darkMode = false;
		} else {
			localStorage.theme = "dark";
			document.documentElement.classList.add("dark");
			darkMode = true;
		}
	}

	export let showGameDropdown = false;

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<header class="
	h-[60px] w-full border-b-[1px] shadow-sm dark:shadow-md select-none
	border-header-tertiary-light dark:border-header-tertiary-dark
	bg-header-bg-light dark:bg-header-bg-dark
	text-header-text-light dark:text-header-text-dark
	transition ease-in-out duration-300"
>
	<div class="max-w-[1600px] flex flex-row justify-between h-full w-full m-auto px-[25px]">
		<img
			src={hamburger}
			alt="Settings"
			class="h-[40px] my-auto cursor-pointer px-2 py-[6px] flex tablet:hidden {darkMode ? "svg-filter-dark" : "svg-filter"}"
		/>
		<div class="flex flex-row gap-4 h-full">
			<img src={darkMode ? riotLogoDark : riotLogo} alt="Riot Games" class="h-[20px] desktop-lg:h-[25px] m-auto pl-2" />
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class="relative flex m-auto">
				<div class="
					m-auto px-2 py-1 mr-2 rounded-full flex flex-row cursor-pointer shadow-sm group
					bg-header-secondary-light dark:bg-header-secondary-dark
					hover:bg-header-tertiary-light dark:hover:bg-header-tertiary-dark
					transition ease-in-out duration-300"
					on:click={() => {showGameDropdown = !showGameDropdown}}
				>
					<img
						src={lolesportsLogo}
						alt="LoL Esports"
						class="h-[20px] desktop-lg:h-[25px] m-auto pl-2 {darkMode ? "logo-filter-dark" : "logo-filter"}"
					/>
					<img src={expandArrow} alt="Expand" class="h-[20px] m-auto pointer-events-none {darkMode ? "svg-filter-dark" : "svg-filter"}"/>
				</div>
				<div class="{showGameDropdown ? "flex flex-col" : "hidden"} absolute shadow-md py-2 w-[124px] top-[32px] left-0 border-[1px] border-header-secondary-light dark:border-header-secondary-dark bg-header-bg-light dark:bg-header-bg-dark rounded-lg">
					<button class="w-full hover:bg-header-secondary-light dark:hover:bg-header-secondary-dark">
						<img src={lolLogo} alt="LoL" class="h-[40px] px m-auto"/>
					</button>
					<button class="w-full hover:bg-header-secondary-light dark:hover:bg-header-secondary-dark">
						<img src={tftLogo} alt="TFT" class="h-[40px] m-auto {darkMode ? "logo-filter-dark" : "logo-filter"}"/>
					</button>
					<button class="w-full hover:bg-header-secondary-light dark:hover:bg-header-secondary-dark">
						<img src={lorLogo} alt="LoR" class="h-[40px] m-auto"/>
					</button>
					<button class="w-full hover:bg-header-secondary-light dark:hover:bg-header-secondary-dark">
						<img src={valLogo} alt="VAL" class="h-[40px] m-auto"/>
					</button>
					<button class="w-full hover:bg-header-secondary-light dark:hover:bg-header-secondary-dark">
						<img src={wrLogo} alt="WR" class="h-[40px] m-auto"/>
					</button>
				</div>
			</div>
		</div>
		<div class="flex flex-row h-full gap-6">
			<nav class="h-full hidden tablet:flex">
				<ul class="flex flex-row font-title font-semibold text-sm laptop:text-base desktop:text-lg desktop-lg:text-xl gap-8 m-auto">
					<li class="group cursor-pointer">
						<h2 class="group-hover:text-highlight">Live</h2>
					</li>
					<li class="group cursor-pointer">
						<h2 class="group-hover:text-highlight">Schedule</h2>
					</li>
					<li class="group cursor-pointer">
						<h2 class="group-hover:text-highlight">Regions</h2>
					</li>
					<li class="group cursor-pointer">
						<h2 class="group-hover:text-highlight">Following</h2>
					</li>
					<li class="group cursor-pointer">
						<h2 class="group-hover:text-highlight">International</h2>
					</li>
				</ul>
			</nav>
			<div class=
				"h-[23px] m-auto border-l-[2px] ml-2 hidden tablet:block
				border-header-tertiary-light dark:border-header-tertiary-dark
				transition ease-in-out duration-300"
			/>
			<div class="flex laptop:hidden">
				<img
					src={settings}
					alt="Settings"
					class="h-[40px] tablet:h-[30px] m-auto cursor-pointer px-2 py-[6px] {darkMode ? "svg-filter-dark" : "svg-filter"}"
				/>
			</div>
			<div class="hidden laptop:flex">
				<div class="flex flex-row gap-4">
					<button on:click={toggleDarkMode}>
						<img
							src={darkMode ? darkModeIcon : lightModeIcon}
							alt="Light Mode"
							class="h-[30px] desktop:h-[34px] desktop-lg:h-[40px] m-auto cursor-pointer px-2 py-[6px] {darkMode ? "svg-filter-dark" : "svg-filter"}"
						/>
					</button>
					<img
						src={settings}
						alt="Settings"
						class="h-[30px] desktop:h-[34px] desktop-lg:h-[40px] m-auto cursor-pointer px-2 py-[6px] {darkMode ? "svg-filter-dark" : "svg-filter"}"
					/>
					<img
						src={login}
						alt="Login"
						class="h-[30px] desktop:h-[34px] desktop-lg:h-[40px] m-auto cursor-pointer px-2 py-[6px] {darkMode ? "svg-filter-dark" : "svg-filter"}"
					/>
				</div>
			</div>
		</div>
	</div>
</header>


<style>
	.logo-filter {
		filter: invert(49%) sepia(10%) saturate(960%) hue-rotate(176deg) brightness(88%) contrast(86%);
	}
	.logo-filter-dark {
		filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
	}
	.svg-filter {
		filter: invert(49%) sepia(10%) saturate(960%) hue-rotate(176deg) brightness(88%) contrast(86%);
	}
	.svg-filter:hover {
		filter: invert(58%) sepia(92%) saturate(3440%) hue-rotate(145deg) brightness(106%) contrast(101%);
	}
	.svg-filter-dark {
		filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
	}
	.svg-filter-dark:hover {
		filter: invert(58%) sepia(92%) saturate(3440%) hue-rotate(145deg) brightness(106%) contrast(101%);
	}
	img {
		-webkit-user-drag: none;
	}

</style>

<!-- <script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
</script>

<header>
	<div class="corner">
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
				<a href="/sverdle">Sverdle</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		<a href="https://github.com/sveltejs/kit">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header> -->
