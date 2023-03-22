<script lang="ts">
	import { onMount } from 'svelte';

	import Footer from "./Footer.svelte"

	import live from "$lib/images/live.svg"
	import clock from "$lib/images/clock.svg"

	let darkMode: boolean;

	onMount(() => {
		if (localStorage.theme === "dark") {
			darkMode = true;
		} else {
			darkMode = false;
		}
	});

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="text-blue-gray-500 dark:text-white h-full w-full flex flex-col justify-between pt-[60px]">
	<div class="flex flex-row m-auto h-full">
		<div 
			class="h-full w-[1000px] ml-[5px]
			bg-gray-50 dark:bg-gray-800	
			transition ease-in-out duration-300 relative"
		>
			<iframe
				title="Target iframe page"
				src="https://player.twitch.tv/?channel=lec&parent=streamernews.example.com&muted=true"
				height="100%"
				width="100%"
				allowfullscreen>
			</iframe>
			<a href="/live/lec" class="absolute w-full h-full top-0 flex cursor-pointer">
				<div class="m-auto mb-8 bg-alert rounded-full px-6 py-1">
					<h2 class="text-white font-semibold text-lg tracking-wide">Watch Live</h2>
				</div>
			</a>
		</div>
		<div class="h-full w-[255px] grid grid-rows-5 p-6 gap-6">
			<div 
				class="h-full w-[250px] rounded-xl row-span-2 outline outline-8 cursor-pointer
				flex flex-col justify-between animate-to-left 
				outline-gray-50 dark:outline-gray-800 
				transition ease-in-out duration-300">
				<div class="flex flex-row justify-center mx-auto my-2 gap-1">
					<img src={live} alt="Live Icon" class="w-4 h-4 mt-[3px] svg-filter-red"/>
					<h2 class="m-auto text-sm">LIVE - LCK</h2>
				</div>
				<div class="flex flex-col justify-between h-full m-auto py-4">
					<div class="flex flex-row gap-4">
						<img 
							src="https://am-a.akamaihd.net/image?resize=72:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2Fliiv-sandbox-new.png" 
							alt="Logo" 
							class="w-14 h-14 rounded-full p-1 border-2 
							border-gray-50 dark:border-gray-700"
						/>
						<h2 class="m-auto">Liiv Sandbox</h2>
					</div>
					<h2 class="m-auto text-gray-300">vs</h2>
					<div class="flex flex-row gap-4">
						<img 
							src="https://am-a.akamaihd.net/image?resize=72:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2Fkt_darkbackground.png" 
							alt="Logo" 
							class="w-14 h-14 rounded-full p-1 border-2 
							border-gray-50 dark:border-gray-700"
						/>
						<h2 class="m-auto">KT Rolster</h2>
					</div>
				</div>
			</div>
			<div 
				class="flex flex-col w-[250px] rounded-xl row-span-1 outline outline-8 cursor-pointer 
				outline-gray-50 dark:outline-gray-800 
				animate-to-left animate-to-right 
				transition ease-in-out duration-300"
			>
				<div class="flex flex-row justify-center mx-auto my-2 gap-1">
					<img src={live} alt="Live Icon" class="w-4 h-4 mt-[3px] svg-filter-red"/>
					<h2 class="m-auto text-sm">LIVE - LPL</h2>
				</div>
				<div class="flex flex-row w-full justify-between px-4">
					<div class="flex flex-row w-[70px] m-auto gap-1">
						<h2 class="m-auto text-sm max-w-[50px] text-right">UP</h2>
						<img 
							src="https://am-a.akamaihd.net/image?resize=72:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2Fultraprime.png" 
							alt="Logo" 
							class="w-10 h-10 rounded-full p-1 border-2 
							border-gray-50 dark:border-gray-700"
						/>
					</div>
					<h2 class="m-auto text-gray-300">vs</h2>
					<div class="flex flex-row w-[70px] m-auto gap-1">
						<img 
							src="https://am-a.akamaihd.net/image?resize=72:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1631819402484_lng-2021-worlds.png" 
							alt="Logo" 
							class="w-10 h-10 rounded-full p-1 border-2 
							border-gray-50 dark:border-gray-700"
						/>
						<h2 class="m-auto text-sm max-w-[50px]">LNG</h2>
					</div>
				</div>
			</div>
			<div 
				class="flex flex-col w-[250px] rounded-xl row-span-1 outline outline-8 cursor-pointer 
				outline-gray-50 dark:outline-gray-800 
				animate-to-left animate-to-right 
				transition ease-in-out duration-300"
			>
				<div class="flex flex-row justify-center mx-auto my-2 gap-1">
					<img 
						src={clock} 
						alt="Live Icon" 
						class="w-4 h-4 mt-[3px] {darkMode ? "svg-filter-dark" : "svg-filter"}"
					/>
					<h2 class="m-auto text-sm">1:30:22 - LPL</h2>
				</div>
				<div class="flex flex-row w-full justify-between px-4">
					<div class="flex flex-row w-[70px] m-auto gap-1">
						<h2 class="m-auto text-sm max-w-[50px] text-right">IG</h2>
						<img 
							src="https://am-a.akamaihd.net/image?resize=72:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1634762917340_300px-Invictus_Gaming_logo.png" 
							alt="Logo" 
							class="w-10 h-10 rounded-full p-1 border-2 
							border-gray-50 dark:border-gray-700"
						/>
					</div>
					<h2 class="m-auto text-gray-300">vs</h2>
					<div class="flex flex-row w-[70px] m-auto gap-1">
						<img 
							src="https://am-a.akamaihd.net/image?resize=72:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1641200475679_Bilibili_Gaminglogo_profile.png" 
							alt="Logo" 
							class="w-10 h-10 rounded-full p-1 border-2 
							border-gray-50 dark:border-gray-700"
						/>
						<h2 class="m-auto text-sm max-w-[50px]">BLG</h2>
					</div>
				</div>
			</div>
			<div 
				class="flex flex-col w-[250px] rounded-xl row-span-1 outline outline-8 cursor-pointer 
				outline-gray-50 dark:outline-gray-800 
				animate-to-left animate-to-right 
				transition ease-in-out duration-300"
			>
				<div class="flex flex-row justify-center mx-auto my-2 gap-1">
					<img 
						src={clock} 
						alt="Live Icon" 
						class="w-4 h-4 mt-[3px] {darkMode ? "svg-filter-dark" : "svg-filter"}"
					/>
					<h2 class="m-auto text-sm">23:30:22 - LPL</h2>
				</div>
				<div class="flex flex-row w-full justify-between px-4">
					<div class="flex flex-row w-[70px] m-auto gap-1">
						<h2 class="m-auto text-sm max-w-[50px] text-right">RNG</h2>
						<img
							src="https://am-a.akamaihd.net/image?resize=72:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1631819360134_rng-2021-worlds.png" 
							alt="Logo" 
							class="w-10 h-10 rounded-full p-1 border-2 
							border-gray-50 dark:border-gray-700"
						/>
					</div>
					<h2 class="m-auto text-gray-300">vs</h2>
					<div class="flex flex-row w-[70px] m-auto gap-1">
						<img 
							src="https://am-a.akamaihd.net/image?resize=72:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2FRA-FullonDark.png" 
							alt="Logo" 
							class="w-10 h-10 rounded-full p-1 border-2 
							border-gray-50 dark:border-gray-700"
						/>
						<h2 class="m-auto text-sm max-w-[50px]">RA</h2>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="w-full h-[200px] flex bg-gray-50 dark:bg-gray-800 transition ease-in-out duration-300 font-body">
		<h2 class="m-auto font-semibold text-lg">Not following any teams.</h2>
	</div>
	<Footer/>
</section>

<style>
	/* Animate a div the right 5 pixels and then return to its original position 
	smoothly after moving the mouse away */
	.animate-to-left {
		animation: animate-to-left 0.2s ease-in-out forwards;
	}
	.animate-to-right:hover {
		animation: animate-to-right 0.2s ease-in-out forwards;
	}
	@keyframes animate-to-right {
		0% {
			transform: translateX(0px);
		}
		100% {
			transform: translateX(5px);
		}
	}
	@keyframes animate-to-left {
		0% {
			transform: translateX(5px);
		}
		100% {
			transform: translateX(0);
		}
	}
	.svg-filter {
		filter: invert(49%) sepia(10%) saturate(960%) hue-rotate(176deg) brightness(88%) contrast(86%);
	}
	.svg-filter-dark {
		filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
	}
	.svg-filter-red {
		filter: invert(8%) sepia(52%) saturate(7276%) hue-rotate(350deg) brightness(110%) contrast(108%);
	}


</style>
