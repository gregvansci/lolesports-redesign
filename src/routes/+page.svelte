<script>
	
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="text-blue-gray-500 dark:text-white h-full flex flex-col justify-between pt-[60px]">
	<div class="flex flex-row m-auto h-full pt-[32px] pb-[32px]">
		<div class="bg-gray-50 dark:bg-gray-800 h-full w-[1000px] transition ease-in-out duration-300">
			<iframe
				title="Target iframe page"
				src="https://player.twitch.tv/?channel=lec&parent=streamernews.example.com&muted=true"
				height="100%"
				width="100%"
				allowfullscreen>
			</iframe>
		</div>
		<div class="bg-gray-50 dark:bg-gray-800 h-full w-[200px] transition ease-in-out duration-300">
			live games
		</div>
	</div>
	<div class="w-full h-[200px] bg-gray-50 dark:bg-gray-800 transition ease-in-out duration-300">
		followed teams
	</div>
</section>

