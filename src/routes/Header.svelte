<script>
	// get the black riot logo from the assets folder and save it as src
	import riotLogo from '$lib/images/riot-logo-black.png';
	import lolesportsLogo from '$lib/images/lolesports-logo-black.png';
	import expandArrow from '$lib/images/expand-arrow.svg';
	import lightMode from '$lib/images/light-mode.svg';
	import settings from '$lib/images/settings.svg';
	import login from '$lib/images/login.svg';
</script>

<header class="h-[60px] w-full bg-header-bg-light text-header-text-light border-b-[1px] border-header-tertiary-light shadow-sm">
	<div class="max-w-[1400px] flex flex-row justify-between h-full w-full m-auto">
		<div class="flex flex-row gap-4 h-full">
			<img src={riotLogo} alt="Riot Games" class="h-[20px] m-auto" />
			<div class="m-auto px-2 py-1 bg-header-secondary-light rounded-full flex flex-row hover:bg-header-tertiary-light cursor-pointer">
				<img src={lolesportsLogo} alt="LoL Esports" class="h-[20px] m-auto pl-2 logo-filter" />
				<img src={expandArrow} alt="Expand" class="h-[20px] m-auto" />
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
			<div class="h-[23px] m-auto border-l-[2px] border-header-tertiary-light"/>
			<div class="flex flex-row gap-4">
				<img src={lightMode} alt="Light Mode" class="h-[34px] m-auto svg-filter cursor-pointer px-2 py-[6px]" />
				<img src={settings} alt="Settings" class="h-[34px] m-auto svg-filter cursor-pointer px-2 py-[6px]" />
				<img src={login} alt="Login" class="h-[34px] m-auto svg-filter cursor-pointer px-2 py-[6px]" />
			</div>
		</div>
	</div>
</header>


<style>
	/* Add a filter to the lolesports logo */
	.logo-filter {
		filter: invert(49%) sepia(10%) saturate(960%) hue-rotate(176deg) brightness(88%) contrast(86%);
	}
	.svg-filter {
		filter: invert(49%) sepia(10%) saturate(960%) hue-rotate(176deg) brightness(88%) contrast(86%);
	}
	.svg-filter:hover {
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
