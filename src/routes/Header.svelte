<script lang="ts">
	import { onMount } from 'svelte';
	
	import riotLogo from '$lib/images/riot-logo-black.png';
	import riotLogoDark from '$lib/images/riot-logo-white.png';
	import lolesportsLogo from '$lib/images/lolesports-logo-black.png';
	import expandArrow from '$lib/images/expand-arrow.svg';
	import lightModeIcon from '$lib/images/light-mode.svg';
	import darkModeIcon from '$lib/images/dark-mode.svg';
	import settings from '$lib/images/settings.svg';
	import login from '$lib/images/login.svg';

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

</script>

<header class="
	h-[60px] w-full border-b-[1px] shadow-sm dark:shadow-md 
	border-header-tertiary-light dark:border-header-tertiary-dark
	bg-header-bg-light dark:bg-header-bg-dark
	text-header-text-light dark:text-header-text-dark
	transition ease-in-out duration-300"
>
	<div class="max-w-[1400px] flex flex-row justify-between h-full w-full m-auto">
		<div class="flex flex-row gap-4 h-full">
			<img src={darkMode ? riotLogoDark : riotLogo} alt="Riot Games" class="h-[20px] m-auto" />
			<div class="
				m-auto px-2 py-1 rounded-full flex flex-row cursor-pointer
				bg-header-secondary-light dark:bg-header-secondary-dark
				hover:bg-header-tertiary-light dark:hover:bg-header-tertiary-dark
				transition ease-in-out duration-300"
			>
				<img 
					src={lolesportsLogo} 
					alt="LoL Esports" 
					class="h-[20px] m-auto pl-2 {darkMode ? "logo-filter-dark" : "logo-filter"}" 
				/>
				<img src={expandArrow} alt="Expand" class="h-[20px] m-auto {darkMode ? "svg-filter-dark" : "svg-filter"}"/>
			</div>
		</div>
		<div class="flex flex-row h-full gap-8">
			<nav class="h-full flex">
				<ul class="flex flex-row font-title font-semibold text-md gap-8 m-auto">
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
						<h2 class="group-hover:text-highlight">International</h2>
					</li>
				</ul>
			</nav>
			<div class="h-[23px] m-auto border-l-[2px]
			border-header-tertiary-light dark:border-header-tertiary-dark
			transition ease-in-out duration-300"
			/>
			<div class="flex flex-row gap-4">
				<button on:click={toggleDarkMode}>
					<img 
						src={lightModeIcon} 
						alt="Light Mode" 
						class="h-[34px] m-auto cursor-pointer px-2 py-[6px] {darkMode ? "svg-filter-dark" : "svg-filter"}" 
					/>
				</button>
				<img 
					src={settings} 
					alt="Settings" 
					class="h-[34px] m-auto cursor-pointer px-2 py-[6px] {darkMode ? "svg-filter-dark" : "svg-filter"}"
				/>
				<img 
					src={login} 
					alt="Login" 
					class="h-[34px] m-auto cursor-pointer px-2 py-[6px] {darkMode ? "svg-filter-dark" : "svg-filter"}" 
				/>
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
