<script lang="ts">
	import { darkMode } from '../store';
	
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

	export let showGameDropdown = false;
	let darkModeValue: boolean;

	darkMode.subscribe(value => {
		darkModeValue = value;
	});

	function toggleDarkMode() {
		if (darkModeValue) {
			localStorage.theme = "light";
			document.documentElement.classList.remove("dark");
		} else {
			localStorage.theme = "dark";
			document.documentElement.classList.add("dark");
		}
		darkMode.update(n => !n);
	}

	let darkModeTooltip = false;
	let settingsTooltip = false;
	let loginTooltip = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<header class="
	h-[60px] w-full border-b-[1px] shadow-sm dark:shadow-md select-none top-0 z-30 fixed
	bg-white dark:bg-steel-900
	border-gray-200 dark:border-steel-800
	text-blue-gray-500 dark:text-blue-50
	transition ease-in-out duration-300"
>
	<div class="max-w-[1600px] flex flex-row justify-between h-full w-full m-auto px-[25px]">
		<img
			src={hamburger}
			alt="Settings"
			class="h-[40px] my-auto cursor-pointer px-2 py-[6px] flex tablet:hidden 
			{darkModeValue ? "svg-filter-dark" : "svg-filter"}"
		/>
		<div class="flex flex-row gap-4 h-full">
			<img 
				src={darkModeValue ? riotLogoDark : riotLogo} 
				alt="Riot Games" 
				class="h-[20px] desktop-lg:h-[25px] m-auto pl-2"
			/>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class="relative flex m-auto">
				<div class="
					m-auto px-2 py-1 mr-2 rounded-full flex flex-row cursor-pointer shadow-sm group
					bg-gray-50 dark:bg-steel-800
					hover:bg-gray-100 dark:hover:bg-steel-700
					transition ease-in-out duration-300"
					on:click={() => {showGameDropdown = !showGameDropdown}}
				>
					<img
						src={lolesportsLogo}
						alt="LoL Esports"
						class="h-[20px] desktop-lg:h-[25px] m-auto pl-2 {darkModeValue ? "logo-filter-dark" : "logo-filter"}"
					/>
					<div class="{darkModeValue ? "svg-filter-dark" : "svg-filter"}">
						<img src={expandArrow} alt="Expand" class="h-[20px] m-auto pointer-events-none"/>
					</div>
				</div>
				<div class="
					absolute shadow-md py-2  left-0 border-[1px] rounded-lg
					top-[32px] desktop-lg:top-[36px] w-[124px] desktop-lg:w-[144px]
					border-gray-50 dark:border-steel-800
					bg-white dark:bg-steel-900
					transition ease-in-out duration-300
					{showGameDropdown ? "flex flex-col" : "hidden"}"
				>	
					<button class="w-full hover:bg-gray-50 dark:hover:bg-steel-800">
						<img src={lolLogo} alt="LoL" class="h-[45px] desktop-lg:h-[50px] px m-auto"/>
					</button>
					<button class="w-full hover:bg-gray-50 dark:hover:bg-steel-800">
						<img src={tftLogo} alt="TFT" class="h-[45px] desktop-lg:h-[50px] m-auto 
							{darkModeValue ? "logo-filter-dark" : "logo-filter"}"
						/>
					</button>
					<button class="w-full hover:bg-gray-50 dark:hover:bg-steel-800">
						<img src={lorLogo} alt="LoR" class="h-[45px] desktop-lg:h-[50px] m-auto"/>
					</button>
					<button class="w-full hover:bg-gray-50 dark:hover:bg-steel-800">
						<img src={valLogo} alt="VAL" class="h-[45px] desktop-lg:h-[50px] m-auto"/>
					</button>
					<button class="w-full hover:bg-gray-50 dark:hover:bg-steel-800">
						<img src={wrLogo} alt="WR" class="h-[45px] desktop-lg:h-[50px] m-auto"/>
					</button>
				</div>
			</div>
		</div>
		<div class="flex flex-row h-full gap-6">
			<nav class="h-full hidden tablet:flex">
				<ul class="flex flex-row font-title font-semibold gap-8 m-auto
					text-sm laptop:text-base desktop:text-lg desktop-lg:text-xl"
				>
					<li class="group cursor-pointer">
						<a class="group-hover:text-highlight" href="/">Live</a>
					</li>
					<li class="group cursor-pointer">
						<a class="group-hover:text-highlight" href="/schedule">Schedule</a>
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
				"h-[24px] m-auto border-l-[2px] ml-2 hidden tablet:block
				border-gray-100 dark:border-steel-700
				transition ease-in-out duration-300"
			/>
			<div class="flex laptop:hidden">
				<img
					src={settings}
					alt="Settings"
					class="h-[40px] tablet:h-[30px] m-auto cursor-pointer px-2 py-[6px] 
					{darkModeValue ? "svg-filter-dark" : "svg-filter"}"
				/>
			</div>
			<div class="hidden laptop:flex">
				<div class="flex flex-row gap-3">
					<button 
						on:pointerenter={() => {darkModeTooltip = true}} 
						on:pointerleave={() => {darkModeTooltip = false}} 
						on:click={toggleDarkMode} 
						class="m-auto p-[6px] rounded-md relative inline-block
						hover:bg-gray-50 dark:hover:bg-steel-800
						{darkModeValue ? "svg-filter-dark" : "svg-filter"}"
					>
						<img
							src={darkModeValue ? lightModeIcon : darkModeIcon}
							alt="Light Mode"
							class="h-[20px] desktop:h-[24px] desktop-lg:h-[28px] m-auto cursor-pointer
							"
						/>
						<div class="absolute bg-steel-800 dark:bg-gray-50 top-[120%] shadow-md rounded-md z-50 left-[50%] -ml-[60px] py-1 m-auto w-[120px] truncate {darkModeTooltip ? "inline" : "hidden"}">
							<h2 class="w-full m-auto text-blue-50 dark:text-blue-gray-500">{darkModeValue ? "Light Mode" : "Dark Mode"}</h2>
						</div>
						<div class="absolute top-[110%] z-40 left-[50%] -ml-[6px] m-auto w-[12px] h-[12px] bg-steel-800 dark:bg-gray-50 transform rotate-45 {darkModeTooltip ? "inline" : "hidden"}"></div>

					</button>
					<button 
						on:pointerenter={() => {settingsTooltip = true}} 
						on:pointerleave={() => {settingsTooltip = false}} 
						class="m-auto p-[6px] rounded-md relative
						hover:bg-gray-50 dark:hover:bg-steel-800
						{darkModeValue ? "svg-filter-dark" : "svg-filter"}"
					>
						<img
							src={settings}
							alt="Settings"
							class="h-[20px] desktop:h-[24px] desktop-lg:h-[28px] m-auto cursor-pointer"
						/>
						<div class="absolute bg-steel-800 dark:bg-gray-50 top-[120%] shadow-md rounded-md z-50 left-[50%] -ml-[60px] py-1 m-auto w-[120px] truncate {settingsTooltip ? "inline" : "hidden"}">
							<h2 class="w-full m-auto text-blue-50 dark:text-blue-gray-500">Settings</h2>
						</div>
						<div class="absolute top-[110%] z-40 left-[50%] -ml-[6px] m-auto w-[12px] h-[12px] bg-steel-800 dark:bg-gray-50 transform rotate-45 {settingsTooltip ? "inline" : "hidden"}"></div>

					</button>
					<button 
						on:pointerenter={() => {loginTooltip = true}} 
						on:pointerleave={() => {loginTooltip = false}} 
						class="m-auto p-[6px] rounded-md relative
						hover:bg-gray-50 dark:hover:bg-steel-800
						{darkModeValue ? "svg-filter-dark" : "svg-filter"}"
					>
						<img
							src={login}
							alt="Login"
							class="h-[20px] desktop:h-[24px] desktop-lg:h-[28px] m-auto cursor-pointer"
						/>
						<div class="absolute bg-steel-800 dark:bg-gray-50 top-[120%] shadow-md rounded-md z-50 right-0 py-1 m-auto w-[190px] truncate {loginTooltip ? "inline" : "hidden"}">
							<h2 class="w-full m-auto text-blue-50 dark:text-blue-gray-500">Log In To Save Follows</h2>
						</div>
						<div class="absolute top-[110%] z-40 left-[50%] -ml-[6px] m-auto w-[12px] h-[12px] bg-steel-800 dark:bg-gray-50 transform rotate-45 {loginTooltip ? "inline" : "hidden"}"></div>
					</button>
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
	.svg-filter img {
		filter: invert(49%) sepia(10%) saturate(960%) hue-rotate(176deg) brightness(88%) contrast(86%);
	}
	.svg-filter:hover img {
		filter: invert(58%) sepia(92%) saturate(3440%) hue-rotate(145deg) brightness(106%) contrast(101%);
	}
	.svg-filter-dark img {
		filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
	}
	.svg-filter-dark:hover img {
		filter: invert(58%) sepia(92%) saturate(3440%) hue-rotate(145deg) brightness(106%) contrast(101%);
	}
	img {
		-webkit-user-drag: none;
	}

</style>