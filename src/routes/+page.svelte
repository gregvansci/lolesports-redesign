<script>
	import Footer from "./Footer.svelte"
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="text-blue-gray-500 dark:text-white h-full flex flex-col justify-between pt-[60px]">
	<div class="flex flex-row m-auto h-full pt-[32px] pb-[32px]">
		<div class="bg-gray-50 dark:bg-gray-800 h-full w-[1000px] transition ease-in-out duration-300 relative">
			<iframe
				title="Target iframe page"
				src="https://player.twitch.tv/?channel=lec&parent=streamernews.example.com&muted=true"
				height="100%"
				width="100%"
				allowfullscreen>
			</iframe>
			<a href="/live/lec" class="absolute w-full h-full top-0 flex cursor-pointer">
				<div class="m-auto mb-8 bg-[#F00] rounded-full px-6 py-1">
					<h2 class="text-white font-semibold text-lg tracking-wide">Watch Live</h2>
				</div>
			</a>
		</div>
		<div class="h-full w-[200px]">
			live games
		</div>
	</div>
	<div class="w-full h-[200px] bg-gray-50 dark:bg-gray-800 transition ease-in-out duration-300">
		followed teams
	</div>
	<Footer/>
</section>

